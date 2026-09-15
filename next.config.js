const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")
const withMDX = require("@next/mdx")()

const LIMIT_CPUS = Number(process.env.LIMIT_CPUS ?? 2)

const experimental = LIMIT_CPUS
  ? {
      // This option could be enabled in the future when flagged as stable, to speed up builds
      // (see https://nextjs.org/docs/pages/building-your-application/configuring/mdx#using-the-rust-based-mdx-compiler-experimental)
      // mdxRs: true,

      // Reduce the number of cpus and disable parallel threads in prod envs to consume less memory
      workerThreads: false,
      cpus: LIMIT_CPUS,
    }
  : {}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
}

// `withMDX` takes a config OBJECT, not a function. Passing it a function
// silently dropped every setting below (spreading a function yields no own
// enumerable properties), so the config resolved to `{ webpack }` alone.
// Build the object first, then wrap it.
module.exports = (phase) => {
  if (phase !== PHASE_DEVELOPMENT_SERVER) {
    return withMDX({
      ...nextConfig,
      experimental,
      // Pin the trace root to this repo. Without it Next infers the root from
      // the nearest lockfile and can wander outside the project.
      outputFileTracingRoot: __dirname,
      outputFileTracingExcludes: {
        "*": [
          /**
           * `[...slug]` reads content directories at build time with paths the
           * tracer can't resolve statically, so it conservatively pulls in the
           * whole repo root — including `.git`, which is ~110MB of packfiles
           * and pushed the Netlify function past its upload limit.
           */
          ".git/**",
          /**
           * Exclude these paths from the trace output to avoid bloating the
           * Netlify functions bundle.
           *
           * @see https://github.com/orgs/vercel/discussions/103#discussioncomment-5427097
           * @see https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files
           */
          "node_modules/@swc/core-linux-x64-gnu",
          "node_modules/@swc/core-linux-x64-musl",
          "node_modules/@esbuild/linux-x64",
          "public/**/*.png",
          "public/**/*.jpg",
          "public/**/*.gif",
        ],
      },
    })
  }

  return withMDX(nextConfig)
}
