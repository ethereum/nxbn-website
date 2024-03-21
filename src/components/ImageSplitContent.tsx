import { Center, Flex } from '@chakra-ui/react'
import { StaticImageData } from 'next/image'

import { Image } from '@/components/Image'


type ImageSplitContentProps = {
  image: StaticImageData,
  imageBorder: 'round' | 'left' | 'right' | 'none',
  imageSide: 'left' | 'right',
  children: React.ReactNode
}

const ImageSplitContent = ({
  image,
  imageBorder,
  imageSide,
  children
}: ImageSplitContentProps) => {
  const imageBorderRadiusOptions = {
    round: 180,
    left: 'xl',
    right: 'xl',
    none: 'none'
  }

  return (
    <Flex
      gap={16}
      py={8}
      px={{ base: 8, md: 16 }}
      flexDir={{
        base: 'column',
        md: imageSide === 'left' ? 'row' : 'row-reverse'
      }}
    >
      <Center w='380px' margin='auto'>
        <Image
          src={image}
          alt=""
          borderRadius={imageBorderRadiusOptions[imageBorder]}
        />
      </Center>
      <Center w="auto" flex={1}>
        {children}
      </Center>
    </Flex>
  )
}

export default ImageSplitContent