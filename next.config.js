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
      // The archive is fully static: no API routes, no getServerSideProps, no
      // ISR, no middleware. Exporting means Netlify serves plain files and no
      // server-handler function is produced at all.
      output: "export",
      // Image optimisation needs a server; without one, serve the originals.
      images: { unoptimized: true },
      // Not about file tracing any more — a static export produces no server
      // function to trace. This repo carries both pnpm-lock.yaml and a stale
      // yarn.lock, so without an explicit root Next infers one from the
      // nearest lockfile (a stray package-lock.json in $HOME, locally) and
      // warns on every build and lint.
      outputFileTracingRoot: __dirname,
      experimental,
    })
  }

  return withMDX(nextConfig)
}
