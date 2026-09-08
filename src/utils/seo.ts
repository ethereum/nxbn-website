export const SITE_URL = "https://nxbn.ethereum.foundation"

export const SITE_NAME = "Next Billion — Ethereum Foundation"

export const OG_IMAGE = "/images/og-next-billion.jpg"

/** The years the Next Billion initiative ran, used in copy and structured data. */
export const PROGRAM_START_YEAR = "2021"
export const PROGRAM_END_YEAR = "2025"
export const PROGRAM_YEARS = `${PROGRAM_START_YEAR}–${PROGRAM_END_YEAR}`

/** Prose form, for sentences like "ran from 2021 to 2025". */
export const PROGRAM_YEARS_PROSE = `${PROGRAM_START_YEAR} to ${PROGRAM_END_YEAR}`

/**
 * schema.org `temporalCoverage` wants an ISO 8601 interval, which is what lets
 * a search or answer engine state the programs' date range rather than guess
 * whether they are still running.
 */
export const TEMPORAL_COVERAGE = `${PROGRAM_START_YEAR}/${PROGRAM_END_YEAR}`

export const absoluteUrl = (path: string) => {
  if (!path) return SITE_URL
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

/** Trim a description to a length search engines will actually display. */
export const clampDescription = (text: string, max = 155) => {
  const clean = String(text ?? "")
    .replace(/\s+/g, " ")
    .trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max)
  const lastSpace = cut.lastIndexOf(" ")
  return `${(lastSpace > 60 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, "")}…`
}

/**
 * Frontmatter carries human dates ("September 7, 2026"), but Open Graph and
 * schema.org both want ISO 8601. Returns undefined rather than an invalid date.
 */
export const toIsoDate = (value?: string) => {
  if (!value) return undefined
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return undefined
  // Read the local date parts rather than going through toISOString(): a
  // date-only string parses as local midnight, so a UTC conversion moves it to
  // the previous day anywhere east of Greenwich.
  const year = parsed.getFullYear()
  const month = String(parsed.getMonth() + 1).padStart(2, "0")
  const day = String(parsed.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}
