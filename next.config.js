/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["cdn.fs.brandfolder.com"],
    },
}

module.exports = nextConfig
