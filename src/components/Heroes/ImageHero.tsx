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
      <Box mt={-16} minHeight={"450px"}>
        <Image
          src={heroImage}
          alt=""
          placeholder="blur"
          objectPosition="bottom"
          width={"100%"} 
          height={"515px"} 
          maxHeight={"700px"} 
          objectFit="cover"
          minHeight={"515px"}
        />
      </Box>
      {children}
    </>
  )
}

export default ImageHero
