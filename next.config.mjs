/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'md'],
};

export default nextConfig;
