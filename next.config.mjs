/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    // swcMinify: true,
    productionBrowserSourceMaps: false,
    compress: true,
    experimental: {
        optimizePackageImports: ["@radix-ui"],
    },
}
export default nextConfig