/** @type {import('next-sitemap').IConfig} */

// The site is served from nxbn.ethereum.foundation. The previous value
// (fellowship.ethereum.org) no longer resolves, which meant robots.txt and
// every sitemap entry pointed at a dead host.
const siteUrl = "https://nxbn.ethereum.foundation"

module.exports = {
  siteUrl,
  // `postbuild` runs after the static export, so writing to the default
  // `public/` would never reach `out/`. Emit straight into the export.
  outDir: "out",
  generateRobotsTxt: true,
  // The programs are over and these pages don't change. Leaving next-sitemap's
  // defaults told crawlers every URL changes daily and was modified at build
  // time, refreshed on each deploy — the opposite of what the rest of this
  // site's metadata says.
  autoLastmod: false,
  changefreq: "yearly",
  // The programs have concluded, but the archive should stay discoverable —
  // both to search engines and to the answer engines people now ask about
  // Ethereum's fellowship and scholars programs.
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },
}
