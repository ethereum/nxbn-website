import Head from "next/head"

import {
  OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  clampDescription,
  toIsoDate,
} from "@/utils/seo"

interface SeoProps {
  /** Page title, without the site name — that gets appended. */
  title: string
  description: string
  /** Path of the current page, e.g. "/fellowship". */
  path: string
  image?: string
  /** "website" for landing pages, "article" for fellow stories. */
  type?: "website" | "article"
  publishedTime?: string
  authorName?: string
  /** JSON-LD to embed for search and answer engines. */
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
}

const Seo = ({
  title,
  description,
  path,
  image = OG_IMAGE,
  type = "website",
  publishedTime,
  authorName,
  structuredData,
}: SeoProps) => {
  const fullTitle = title.includes("Next Billion")
    ? title
    : `${title} | Next Billion`
  const url = absoluteUrl(path)
  const desc = clampDescription(description)
  const imageUrl = absoluteUrl(image)
  // Only the bundled OG image is known to be 1200x630; don't assert dimensions
  // for anything a caller passes in.
  const isDefaultImage = image === OG_IMAGE
  const publishedIso = toIsoDate(publishedTime)

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* The programs are over, but the record of them should stay findable. */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      {isDefaultImage && <meta property="og:image:width" content="1200" />}
      {isDefaultImage && <meta property="og:image:height" content="630" />}
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_US" />
      {publishedIso && (
        <meta property="article:published_time" content={publishedIso} />
      )}
      {authorName && <meta property="article:author" content={authorName} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ethereum" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

export default Seo
