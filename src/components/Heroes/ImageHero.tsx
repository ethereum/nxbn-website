import { Box } from '@chakra-ui/react'

import { Image } from '@/components/Image'

const ImageHero = ({children, heroImage}) => {
  return (
    <>
     <Box mt={-16}>
        <Image src={heroImage} alt="" w='100%' minH="415px" maxH="730px" objectFit='cover' />
      </Box>
      {children}
    </>
  )
}

export default ImageHero