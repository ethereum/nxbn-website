const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")
const withMDX = require("@next/mdx")()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["md", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

module.exports = withMDX((phase) => {
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    nextConfig = {
      ...nextConfig,
      experimental: {
        ...experimental,
        outputFileTracingExcludes: {
          "*": [
            /**
             * Exclude these paths from the trace output to avoid bloating the
             * Netlify functions bundle.
             *
             * @see https://github.com/orgs/vercel/discussions/103#discussioncomment-5427097
             * @see https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files
             */
            ".git/**",
            "node_modules/@swc/core-linux-x64-gnu",
            "node_modules/@swc/core-linux-x64-musl",
            "node_modules/@esbuild/linux-x64",
            "public/**/*.png",
            "public/**/*.jpg",
            "public/**/*.gif",
          ],
        },
      },
    }
  }

  return nextConfig
})