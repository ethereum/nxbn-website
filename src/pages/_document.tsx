import { ColorModeScript } from "@chakra-ui/react"
import { Html, Head, Main, NextScript } from "next/document"

import theme from "@/@chakra-ui/theme"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#056589" />
        {/* Per-page titles, descriptions, canonicals, Open Graph and JSON-LD
            all come from <Seo> (src/components/Seo.tsx). */}
      </Head>

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
