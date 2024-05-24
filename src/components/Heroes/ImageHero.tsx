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
        <Box 
          height={{ base: "500px", md: "600px", lg: "700px", xl: "900px"}}
          backgroundImage={`url(${heroImage.src})`}
          backgroundSize="cover"
          backgroundPosition="center bottom"
          >
        
        </Box>
      </Box>
      {children}
    </>
  )
}

export default ImageHero
