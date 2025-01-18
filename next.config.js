/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true
  },
  transpilePackages: ['next'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    }
    return config
  },
  sassOptions: {
    includePaths: ['./node_modules']
  }
}

module.exports = nextConfig
