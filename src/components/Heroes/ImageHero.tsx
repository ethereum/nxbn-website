import { Box } from "@chakra-ui/react"

import Image, { StaticImageData } from 'next/image'

const ImageHero = ({
  children,
  heroImage,
}: {
  children: any
  heroImage: StaticImageData
}) => {
  return (
    <>
      <Box mt={-16}>
        <Image
          src={heroImage}
          alt=""
          placeholder="blur"
          objectPosition="bottom"
          style={{ width: "100%", height: "515px", maxHeight: "1000px", objectFit: "cover" }}
        />
      </Box>
      {children}
    </>
  )
}

export default ImageHero
