import { Box } from "@chakra-ui/react"

import { Image } from "@/components/Image"

const ImageHero = ({ children, heroImage }) => {
  return (
    <>
      <Box mt={-16}>
        <Image
          src={heroImage}
          alt=""
          w="100%"
          minH="515px"
          maxH="1000px"
          objectFit="cover"
          objectPosition="bottom"
        />
      </Box>
      {children}
    </>
  )
}

export default ImageHero
