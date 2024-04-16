import { Box, Image } from "@chakra-ui/react"

const ImageHero = ({
  children,
  heroImage,
}: {
  children: any
  heroImage: string
}) => {
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
