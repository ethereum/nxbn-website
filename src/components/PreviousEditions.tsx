import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react'
import ContentContainer from '@/components/ContentContainer'
import { H2, H3, H4 } from '@/components/Headings'
import { Image } from '@/components/Image'

import Devconnect2023 from '@/public/images/devconnect_2023.png'
import Devcon2022 from '@/public/images/devcon_2022.png'
import Devconnect2022 from '@/public/images/devconnect_2022.png'

const previousEditions = [
  {
    name: 'Devconnect 2023',
    location: 'Istanbul, Turkey',
    description: 'Devconnect is a week-long gathering of independent Ethereum events to learn, share, and make progress together.',
    image: Devconnect2023,
    stats: [
      { label: 'scholar', value: 0 },
      { label: 'kpi indication', value: 0 },
      { label: 'kpi2 indication', value: 0 },
    ],
  },
  {
    name: 'Devcon 2022',
    location: 'Bogotá, Colombia',
    description: 'Devconnect is a week-long gathering of independent Ethereum events to learn, share, and make progress together.',
    image: Devcon2022,
    stats: [
      { label: 'scholar', value: 0 },
      { label: 'kpi indication', value: 0 },
      { label: 'kpi2 indication', value: 0 },
    ],
  },
  {
    name: 'Devconnect 2022',
    location: 'Amsterdam, Netherlands',
    description: 'Devconnect is a week-long gathering of independent Ethereum events to learn, share, and make progress together.',
    image: Devconnect2022,
    stats: [
      { label: 'scholar', value: 0 },
      { label: 'kpi indication', value: 0 },
      { label: 'kpi2 indication', value: 0 },
    ],
  },
]

const cityFontStyle = {
  fontFamily: 'body',
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 300,
  lineHeight: "150%",
}

const PreviousEditions = () => {
  return (
    <>
      <ContentContainer>
        <Box px={{base: 6 , md: 16}}>
          <H2 variant="action" mb={16}>Previous Editions</H2>
          <Box>
            {previousEditions.map((edition, index) => (
              <>
                <Flex key={index} gap={8} flexDir={{ base: 'column', lg: 'row' }}>
                  <Center flex={1}>
                    <Image src={edition.image} alt={edition.name} borderRadius='16px' w='100%'/>
                  </Center>

                  <Center flexDir="column" alignItems='normal' flex={1}>
                    <H4 variant='action' mb={1}>{edition.name}</H4>
                    <Text {...cityFontStyle} mb={3.5}>{edition.location}</Text>
                    <Text mb={8}>{edition.description}</Text>
                    <Flex gap={16} margin={{ base: "auto", lg: '0' }}>
                      {edition.stats.map((stat, index) => (
                        <Box key={index} flexDirection='column'>
                          <H3 mb={0} textAlign='center'>{stat.value}</H3>
                          <Text {...cityFontStyle} mb={0}>{stat.label}</Text>
                        </Box>
                      ))}
                    </Flex>
                  </Center>
                </Flex>
                { 
                  index < previousEditions.length - 1 && (<Divider my={12} color="#035A7A" borderTop="1px solid" />)
                }
              </>
              
            ))}
          </Box>
        </Box>
      </ContentContainer>
    </>
  )
}

export default PreviousEditions