# Payload CMS + Next.js Architecture Portfolio

A modern full-stack web application built with Payload CMS and Next.js 15.

## ✨ Features

### Frontend
- **Next.js 15** with App Router and React 19
- **Tailwind CSS v4** for styling with shadcn/ui components
- **Responsive Design** optimized for all devices
- **Type-Safe** with TypeScript throughout

### Backend & CMS
- **Payload CMS** - Modern headless CMS
- **PostgreSQL** database with Vercel Postgres adapter
- **Vercel Blob Storage** for media uploads
- **GraphQL & REST APIs** auto-generated
- **Admin Panel** at `/admin` for content management
- **Database Migrations** with automatic schema management

### Developer Experience
- **Biome.js** for linting and formatting
- **TypeScript** with strict configuration
- **Docker** support for containerized development and deployment
- **pnpm** for efficient package management

## 🔄 Differences from Payload CMS Template

This project was built using the official Payload CMS Next.js template as a reference but includes a multitude of enhancements and modifications:

### Enhanced Developer Experience and Error Fixing
- **Biome.js Integration**: Replaced ESLint/Prettier with Biome for faster linting and formatting
- **Advanced Scripts**: Added comprehensive pnpm scripts for code quality (`check`, `check:fix`, `format:check`)
- **Advanced Git Hooks**: Uses Husky hooks with commit and pushes conventions programmed in Bash
- **Type Safety**: Very strict TypeScript configuration with enhanced type checking
- **Errors from the original are fixed**: Circa of 30 lint errors were fixed, including a bug with Cloudflare sockets preventing deployment
- **Turbopack**: Enabled stable Turbopack for faster builds

### Database & Storage Improvements
- **Vercel Postgres**: Integrated with Vercel's managed PostgreSQL service
- **Vercel Blob Storage**: Configured for scalable media uploads
- **Database Migrations**: Enhanced migration workflow with additional scripts

### Docker Development Environment
- **Multi-stage Docker Setup**: Separate development and production configurations
- **Docker Compose Profiles**: Organized services with development and production profiles
- **Optimized PostgreSQL**: Custom PostgreSQL configuration for performance

### Frontend Enhancements
- **Tailwind CSS v4**: Latest version with modern configuration
- **shadcn/ui Components**: Pre-configured component library integration
- **Theme Provider**: Custom theme management system
- **Responsive Design**: Enhanced mobile-first approach

### Project Structure Modifications
- **Organized Collections**: Structured collections directory with Users and Media
- **Shared Components**: Dedicated shared UI components directory
- **Frontend/Payload Separation**: Clear separation between public site and admin interface

## 🚀 Quick Start

### Prerequisites
- Node.js LTS
- pnpm
- PostgreSQL database

### Development Setup

1. **Clone and setup environment**
   ```fish
   git clone <your-repo-url>
   cd payload-nextjs
   cp .env.example .env
   ```

2. **Configure environment variables**
   Edit `.env` with your database and storage credentials:
   ```env
   POSTGRES_URL=postgresql://user:password@localhost:5432/payload_db
   PAYLOAD_SECRET=your-secret-key-here
   BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
   ```

3. **Install dependencies and start development**
   ```fish
   pnpm install
   pnpm dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin
   - GraphQL Playground: http://localhost:3000/api/graphql-playground

## 🐳 Docker Development

For a consistent development environment across teams:

### Development with Docker
```fish
# Start development environment
docker compose --profile dev up

# Or start in background
docker compose --profile dev up -d

# View logs
docker compose logs -f app-dev
```

### Production with Docker
```fish
# Build and start production environment
docker compose up --build

# Or start in background
docker compose up -d
```

### Docker Services
- **app**: Production Next.js application
- **app-dev**: Development environment with hot reload
- **postgres**: PostgreSQL 16 with optimized configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Public website pages
│   │   ├── components/      # React components
│   │   ├── layout.tsx       # Frontend layout
│   │   └── page.tsx         # Homepage
│   ├── (payload)/          # CMS admin interface
│   │   └── admin/          # Auto-generated admin pages
│   └── shared/             # Shared components and utilities
│       └── components/ui/  # shadcn/ui components
├── collections/            # Payload CMS collections
│   ├── Users.ts           # User authentication
│   └── Media.ts           # File uploads
├── migrations/            # Database migrations
└── payload.config.ts      # Payload CMS configuration
```

## 🗄️ Database Management

### Migrations
This project uses PostgreSQL with automatic migrations:

```fish
# Create a new migration
pnpm payload migrate:create

# Run pending migrations
pnpm payload migrate

# Reset database (development only)
pnpm payload migrate:reset
```

### Database Schema
- **users**: Authentication and user management
- **media**: File uploads with metadata
- **payload_***: CMS system tables

## 🎨 Customization

### Frontend Styling
- Modify `tailwind.config.js` for design tokens
- Edit components in `src/app/(frontend)/components/`
- Customize themes in `src/app/shared/components/theme-provider.tsx`

### CMS Configuration
- Add collections in `src/collections/`
- Configure fields and relationships in collection files
- Customize admin UI in `src/payload.config.ts`

### Content Management
1. Create your first admin user at `/admin`
2. Upload media files through the admin panel
3. Manage content via the CMS interface
4. Content is automatically available via API endpoints

## 🔧 Available Scripts

### Development
```fish
pnpm dev          # Start development server
pnpm devsafe      # Clean start (removes .next)
```

### Building & Production
```fish
pnpm build        # Build for production
pnpm start        # Start production server
pnpm ci           # Build with migrations
```

### Code Quality
```fish
pnpm lint          # Lint code with Biome
pnpm lint:fix      # Fix linting issues
pnpm format        # Format code
pnpm format:check  # Check formatting
pnpm check         # Run all checks
pnpm check:fix     # Fix all issues
pnpm typecheck     # TypeScript checking
```

### Payload CMS
```fish
pnpm payload migrate:create      # Create migration
pnpm payload migrate             # Run migrations
pnpm payload generate:types      # Generate TypeScript types
pnpm payload generate:importmap  # Generate import map
```

## 📝 API Documentation

### REST API
- **Collections**: `/api/<collection-name>`
- **Authentication**: `/api/users/login`, `/api/users/logout`
- **Media**: `/api/media`

### GraphQL
- **Endpoint**: `/api/graphql`
- **Playground**: `/api/graphql-playground`

All APIs are automatically generated by Payload CMS based on your collections.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in the Vercel dashboard
3. Deploy automatically on push to main branch

### Self-Hosted with Docker
```fish
# Build production image
docker build -t payload-nextjs .

# Run with environment variables
docker run -p 3000:3000 --env-file .env payload-nextjs
```

### Environment Variables for Production
```env
NODE_ENV=production
POSTGRES_URL=your-production-db-url
PAYLOAD_SECRET=your-production-secret
BLOB_READ_WRITE_TOKEN=your-blob-token
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and ensure code quality:
   ```fish
   pnpm check:fix
   pnpm typecheck
   ```
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request
