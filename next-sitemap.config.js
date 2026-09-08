/** @type {import('next-sitemap').IConfig} */

// The site is served from nxbn.ethereum.foundation. The previous value
// (fellowship.ethereum.org) no longer resolves, which meant robots.txt and
// every sitemap entry pointed at a dead host.
const siteUrl = "https://nxbn.ethereum.foundation"

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
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
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
}
