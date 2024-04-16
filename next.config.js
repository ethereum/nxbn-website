const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["md", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig)
