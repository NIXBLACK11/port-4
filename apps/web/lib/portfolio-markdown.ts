import { fullPortfolioUrl, siteUrl } from "./agent-readiness"
import {
  education,
  experiences,
  links,
  principles,
  profile,
  projects,
  recommendations,
  writing,
} from "./portfolio-data"

function absoluteUrl(href: string) {
  return new URL(href, siteUrl).href
}

function bullets(items: string[]) {
  return items.map((item) => `- ${item}`).join("\n")
}

export function getFullPortfolioMarkdown() {
  return `# ${profile.name} (${profile.brand})

Source: ${fullPortfolioUrl}
Website: ${siteUrl}

This document is generated from the same portfolio data used by the website. It includes all listed experience, projects, writing summaries, education, recommendations, and public contact links. Dates and roles reflect the portfolio's own records; details not listed here should not be inferred.

## Profile

- Name: ${profile.name}
- Role: ${profile.role}
- Location: ${profile.location}

${profile.intro}

## Contact

${bullets(links.map((link) => `${link.label}: ${link.href}`))}
- Contact page: ${siteUrl}/contact

## Areas of work

${principles.map((item) => `### ${item.title}\n\n${item.text}`).join("\n\n")}

## Experience

${experiences
  .map(
    (item) => `### ${item.role} at ${item.company}

- Period: ${item.period}
- Location: ${item.location}
- Technologies: ${item.stack.join(", ")}
${item.externalHref ? `- Link: ${absoluteUrl(item.externalHref)}\n` : ""}
${bullets(item.details)}`
  )
  .join("\n\n")}

## Projects

${projects
  .map(
    (item) => `### ${item.title}

${bullets(item.details)}

- Technologies: ${item.stack.join(", ")}
- Portfolio: ${absoluteUrl(item.href)}${item.externalHref ? `\n- Project link: ${absoluteUrl(item.externalHref)}` : ""}`
  )
  .join("\n\n")}

## Writing

These are the writing summaries listed in the portfolio, rather than the full article text.

${writing
  .map(
    (item) => `### ${item.title}

${bullets(item.details)}

- Portfolio: ${absoluteUrl(item.href)}${item.externalHref ? `\n- Article link: ${absoluteUrl(item.externalHref)}` : ""}`
  )
  .join("\n\n")}

## Education

${education
  .map(
    (item) => `### ${item.institution}

- Degree: ${item.degree}
- Period: ${item.period}
- Location: ${item.location}`
  )
  .join("\n\n")}

## Recommendations

${recommendations.map((item) => `### ${item.name}\n\n${item.title}\n\n${item.text}`).join("\n\n")}
`
}
