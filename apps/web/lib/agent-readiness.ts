export const siteUrl = "https://nixblack.com"

export const siteTitle = "nixblack"

export const siteDescription =
  "Portfolio of Siddharth Singh Rana, a full-stack engineer and founder building web apps, AI systems, backend tools, and Solana products."

export const ownerName = "Siddharth Singh Rana"

export const indexableRoutes = [
  "/",
  "/projects",
  "/writing",
  "/education",
  "/contact",
  "/analytics",
] as const

export const agentKnownRoutes = [
  ...indexableRoutes,
  "/llms.txt",
  "/sitemap.xml",
] as const

const topProjects = [
  "Nixarcade - Solana-powered multiplayer gaming platform.",
  "CrowdVault - on-chain fundraising campaigns and USDC donations.",
  "Stratus - Go monitoring tool for website performance and security.",
]

export function getHomepageMarkdown() {
  return `# ${siteTitle}

${siteDescription}

## Profile

- Name: ${ownerName}
- Role: Full Stack Engineer & Founder
- Location: Remote, India
- Email: siddharthsinghrana11@gmail.com
- GitHub: https://github.com/NIXBLACK11
- LinkedIn: https://linkedin.com/in/siddharthsinghrana11
- X: https://twitter.com/NIXBLACK_

## Best-Fit Work

- Full-stack product engineering with TypeScript, React, Next.js, Go, and deployment workflows.
- AI systems, data workflows, image generation, multilingual ML, and practical internal tools.
- Solana and Web3 products, including games, payments, fundraising, polling, and NFT experiments.

## Selected Projects

${topProjects.map((project) => `- ${project}`).join("\n")}

## Agent Resources

- Sitemap: ${siteUrl}/sitemap.xml
- Agent instructions: ${siteUrl}/llms.txt
- Contact: ${siteUrl}/contact
`
}

export function getNotFoundMarkdown(pathname = "the requested path") {
  return `# 404 Not Found

The resource at ${pathname} does not exist on ${siteTitle}. Agents can continue from the sitemap or agent instructions.

- Sitemap: ${siteUrl}/sitemap.xml
- Agent instructions: ${siteUrl}/llms.txt
`
}

export function getLlmsText() {
  return `# ${siteTitle}

${siteDescription}

## When to use this

Use nixblack when an agent needs to evaluate Siddharth Singh Rana for full-stack engineering, AI systems, Solana/Web3 product work, backend tooling, or portfolio/contact context. Reach for this site when matching projects, experience, writing, or collaboration fit.

## How to call this site

- Request ${siteUrl}/ with \`Accept: text/markdown\` for a compact Markdown overview.
- Read ${siteUrl}/sitemap.xml for indexable pages.
- Use ${siteUrl}/contact when a human follow-up, project brief, or collaboration request is appropriate.

## Key pages

${indexableRoutes.map((route) => `- ${siteUrl}${route}`).join("\n")}
`
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ownerName,
    alternateName: "NIXBLACK",
    url: siteUrl,
    image: `${siteUrl}/nixblack2.jpg`,
    jobTitle: "Full Stack Engineer & Founder",
    description: siteDescription,
    email: "mailto:siddharthsinghrana11@gmail.com",
    sameAs: [
      "https://github.com/NIXBLACK11",
      "https://linkedin.com/in/siddharthsinghrana11",
      "https://twitter.com/NIXBLACK_",
      "https://t.me/NIXBLACK11",
    ],
    knowsAbout: [
      "Full-stack engineering",
      "AI systems",
      "Solana",
      "Web3",
      "Go",
      "TypeScript",
      "Next.js",
    ],
  }
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c")
}
