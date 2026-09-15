import { Box } from "@chakra-ui/react"

import Image, { StaticImageData } from "next/image"

/**
 * How far to pull the hero up so it starts flush under the sticky header,
 * which then floats over it.
 *
 * This was `-64px`, which was correct until the site-wide ArchiveNotice was
 * added above the header: the notice blocks the margin collapsing the original
 * value relied on, exposing a further 32px and leaving an empty band above the
 * hero art (on mobile too).
 *
 * The notice's own height is deliberately NOT part of this — it shifts the
 * notice's bottom edge and the hero's flow position by the same amount, so it
 * cancels out. Calibrated against production, where the hero sits flush at the
 * top of the viewport.
 */
const HERO_PULL = "-96px"

const ImageHero = ({
  children,
  heroImage,
}: {
  children: any
  heroImage: StaticImageData
}) => {
  return (
    <>
      <Box mt={HERO_PULL}>
        <Box
          height={{ base: "500px", md: "600px", lg: "700px", xl: "900px" }}
          backgroundImage={`url(${heroImage.src})`}
          backgroundSize="cover"
          backgroundPosition="center bottom"
        ></Box>
      </Box>
      {children}
    </>
  )
}

export default ImageHero
