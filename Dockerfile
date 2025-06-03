# syntax=docker/dockerfile:1
# Multi-stage Dockerfile for Next.js with Payload CMS
# Requires `output: 'standalone'` in next.config.mjs

ARG NODE_VERSION=22.12.0-alpine

FROM node:${NODE_VERSION} AS base
# Install compatibility libraries for Alpine
RUN apk add --no-cache libc6-compat && \
    corepack enable
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Dependencies stage - optimized for caching
FROM base AS deps
# Copy package management files for better layer caching
COPY package.json pnpm-lock.yaml* ./
# Use cache mount for faster dependency installation
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    --mount=type=cache,target=/root/.npm \
    if [ -f pnpm-lock.yaml ]; then \
      pnpm install --frozen-lockfile --prefer-offline; \
    else \
      echo "pnpm-lock.yaml not found" && exit 1; \
    fi


# Build stage - compile the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# Copy source files (excluding files in .dockerignore)
COPY . .

# Generate Payload types and build the application
RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm generate:types && \
    pnpm build

# Production runtime stage
FROM base AS runner

# Create system group and user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs --ingroup nodejs

# Set production environment
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Copy public assets (if they exist)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Create and set permissions for Next.js cache directory
RUN mkdir .next && chown nextjs:nodejs .next

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose application port
EXPOSE 3000

# Health check for container monitoring
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the application
CMD ["node", "server.js"]
