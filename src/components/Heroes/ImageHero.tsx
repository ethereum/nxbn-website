import { Box } from "@chakra-ui/react"

import Image, { StaticImageData } from "next/image"

import { HEADER_BOTTOM_MARGIN } from "@/utils/constants"

/** The header's own height, which the hero has always had to clear. */
const HEADER_HEIGHT = "4rem"

/**
 * How far to pull the hero up so it starts flush under the sticky header,
 * which then floats over it.
 *
 * This has to cancel both the header's height and the margin below it. It was
 * just `-4rem`, which broke when db167f1 added `HEADER_BOTTOM_MARGIN` — the
 * hero then sat 32px too low, leaving an empty band above the hero art
 * (on mobile as well).
 *
 * Deriving it from the shared constant means changing that margin can't
 * reintroduce the band. Note the ArchiveNotice's height is NOT part of this:
 * it shifts the notice's bottom edge and the hero's flow position by the same
 * amount, so it cancels out — which is why one value is correct at every
 * width even though the notice is 35–40px tall depending on breakpoint.
 */
const HERO_PULL = `calc(-${HEADER_HEIGHT} - ${HEADER_BOTTOM_MARGIN})`

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
