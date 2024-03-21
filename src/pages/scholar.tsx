import { Box, Text } from '@chakra-ui/react'

import ButtonLink from '@/components/Buttons/ButtonLink'
import {
  H1,
  H2,
} from "@/components/Headings"
import ContentContainer from '@/components/ContentContainer'
import ImageSplitContent from '@/components/ImageSplitContent'

import TempImage from '@/public/images/temp.png'

const ScholarPage = () => {
  return (
    <>
      <Box>
        <H1>ScholarPage</H1>
      </Box>
      <ContentContainer>
        <ImageSplitContent
          image={TempImage}
          imageBorder='round'
          imageSide='right'
        >
          <Box gap={8}>
            <H2>Title</H2>
            <Text>
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac suscipit leo. Carpe diem vulputate est nec commodo rutrum. Pellentesque mattis convallis nisi eu and I ain’t stoppin until the swear jar’s full. Ut rhoncus velit at mauris interdum, fringilla dictum neque rutrum. Curabitur mattis odio at erat viverra lobortis. Poppin’ bottles on the ice, tristique suscipit mauris elementum tempus. Quisque ut felis vitae elit tempor interdum viverra a est. Drop it like it’s hot, at pretium quam. In nec scelerisque purus. Nam dignissim lacus ipsum, a ullamcorper nulla pretium non. Aliquam sed enim faucibus, pulvinar felis at, vulputate augue.
            </Text>
            <ButtonLink href='/'>Text</ButtonLink>
          </Box>
        </ImageSplitContent>
        <ImageSplitContent
          image={TempImage}
          imageBorder='round'
          imageSide='left'
        >
          <Box gap={8}>
            <H2>Title</H2>
            <Text>
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac suscipit leo. Carpe diem vulputate est nec commodo rutrum. Pellentesque mattis convallis nisi eu and I ain’t stoppin until the swear jar’s full. Ut rhoncus velit at mauris interdum, fringilla dictum neque rutrum. Curabitur mattis odio at erat viverra lobortis. Poppin’ bottles on the ice, tristique suscipit mauris elementum tempus. Quisque ut felis vitae elit tempor interdum viverra a est. Drop it like it’s hot, at pretium quam. In nec scelerisque purus. Nam dignissim lacus ipsum, a ullamcorper nulla pretium non. Aliquam sed enim faucibus, pulvinar felis at, vulputate augue.
            </Text>
            <ButtonLink href='/'>Text</ButtonLink>
          </Box>
        </ImageSplitContent>
      </ContentContainer>
    </>
  )
}

export default ScholarPage