import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { webpack }) => {
    // Handle Cloudflare sockets issue, see: https://github.com/vercel/next.js/discussions/50177
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      }),
    )

    return config
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
