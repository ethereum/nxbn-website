import {
  OG_IMAGE,
  PROGRAM_END_YEAR,
  PROGRAM_START_YEAR,
  SITE_NAME,
  SITE_URL,
  TEMPORAL_COVERAGE,
  absoluteUrl,
  clampDescription,
  toIsoDate,
} from "@/utils/seo"

/**
 * The Next Billion initiative itself.
 *
 * `foundingDate` / `dissolutionDate` are the machine-readable statement that
 * the programs ran and then completed, so an answer engine can say "ran
 * 2021–2025" instead of implying applications are still open.
 */
export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Next Billion",
  alternateName: "Next Billion initiative at the Ethereum Foundation",
  url: SITE_URL,
  logo: absoluteUrl(OG_IMAGE),
  foundingDate: PROGRAM_START_YEAR,
  dissolutionDate: PROGRAM_END_YEAR,
  description:
    `The Next Billion initiative at the Ethereum Foundation ran from ${PROGRAM_START_YEAR} to ${PROGRAM_END_YEAR}, ` +
    "supporting 25 fellows across five cohorts, the Devcon(nect) Scholars program, and the Ethereum Season of Internships. " +
    "The programs completed as planned and this site preserves their work.",
  parentOrganization: {
    "@type": "Organization",
    name: "Ethereum Foundation",
    url: "https://ethereum.foundation",
  },
  knowsAbout: [
    "Ethereum",
    "financial inclusion",
    "public goods funding",
    "digital identity",
    "quadratic funding",
    "impact certificates",
  ],
})

export const webSiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
})

/**
 * An archive page. `temporalCoverage` tells a crawler which period the content
 * describes, which is the difference between being read as a live program and
 * being read as a completed one.
 */
export const collectionPageLd = ({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description: clampDescription(description, 300),
  url: absoluteUrl(path),
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  temporalCoverage: TEMPORAL_COVERAGE,
})

/** A fellow's story, as an authored article. */
export const articleLd = ({
  headline,
  description,
  path,
  authorName,
  datePublished,
  image,
}: {
  headline: string
  description: string
  path: string
  authorName?: string
  datePublished?: string
  image?: string
}) => {
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description: clampDescription(description, 300),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: absoluteUrl(image || OG_IMAGE),
  }
  if (authorName) {
    ld.author = { "@type": "Person", name: authorName }
  }
  const iso = toIsoDate(datePublished)
  if (iso) {
    ld.datePublished = iso
  }
  return ld
}

/** FAQ blocks are one of the few schema types answer engines quote directly. */
export const faqLd = (
  questions: { question: string; answer: string[] }[]
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer.join(" "),
    },
  })),
})

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
})
