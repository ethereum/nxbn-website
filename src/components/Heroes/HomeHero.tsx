// pages/index.js or another component file
import dynamic from "next/dynamic"
import { useState } from "react"
import { useRouter } from "next/router"

import { Box, Center, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react"

import { ArrowIcon } from "@/components/icons"
import { H4 } from "@/components/Headings"

import {
  IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT,
  IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
} from "@/utils/constants"

import { H1 } from "@/components/Headings"
import ContentContainer from "../ContentContainer"

const HomeHero = ({ allFellowsFrontmatter }) => {
  const router = useRouter()
  const [activeFellowIndex, setActiveFellowIndex] = useState(0)
  const value = useBreakpointValue({ base: 300, md: 380 })
  console.log(value)

  const GlobeComponentWithNoSSR = dynamic(
    () => import("../../components/Map/Globe"),
    {
      ssr: false, // This line is key to making sure the import is client-side only
      loading: () => <Box flex="1" w={value} h={value} />,
    }
  )

  return (
    <ContentContainer>
      <Flex
        px={{ base: 8, md: 16 }}
        pb={8}
        pt={{ base: 32, md: 32, lg: 32, xl: 100 }}
        gap={{ base: 0, md: 2, lg: 6, xl: 16 }}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Center flex={1}>
          <Heading
            as={H1}
            fontSize={{ base: 38, sm: 50, md: 60, lg: 64, xl: 80 }}
            fontWeight={400}
            lineHeight={{ base: "1.1", md: "1.5", lg: "1.2" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            Ethereum’s
            <Box
              as="span"
              display={{ base: "block", md: "inline", lg: "block" }}
              color="action"
              px={{ base: "4", lg: "0" }}
              fontWeight={800}
            >
              next billion
            </Box>
            are here, now
          </Heading>
        </Center>
        <Center flex={1} flexDir="column">
          <Center>
          <GlobeComponentWithNoSSR activeFellow={allFellowsFrontmatter[activeFellowIndex]} size={value} />
          </Center>
          <Center>
            <Divider
              borderLeft="2px solid"
              borderColor="#9DCE64"
              m="auto"
              mt="-150px"
              height="245px"
            />
          </Center>
          <Center gap={2}>
            <ArrowIcon
              w="40px"
              height="40px"
              transform="rotate(180deg)"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                setActiveFellowIndex(
                  (activeFellowIndex - 1 + allFellowsFrontmatter.length) %
                    allFellowsFrontmatter.length
                )
              }}
            />
            <Flex
              flex={1}
              flexDir={{
                base: "column",
                sm: "row",
                md: "row",
                lg: "column",
                xl: "row",
              }}
              w={{
                base: "100%",
                sm: "400px",
                md: "500px",
                lg: "330px",
                xl: "500px",
              }}
              bg="#00000050"
              borderRadius="30px"
              minH="156px"
              p="16px"
              gap={3.5}
              overflow="hidden"
              alignItems="center"
              cursor="pointer"
              sx={{
                transition: "background-color 0.3s",
              }}
              _hover={{
                bg: "#00000040",
                img: {
                  ...IMAGE_ZOOM_HOVER_STYLE_CONSTANT,
                },
              }}
              onClick={() =>
                router.push(
                  `/fellowship/${allFellowsFrontmatter[activeFellowIndex].slug}`
                )
              }
            >
              <Flex>
                <Box
                  w="124px"
                  h="124px"
                  borderRadius="10000px"
                  border="2px solid #6F9D39"
                  overflow="hidden"
                >
                  <Image
                    src={allFellowsFrontmatter[activeFellowIndex].image}
                    objectFit={"cover"}
                    alt=""
                    {...IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT}
                  />
                </Box>
              </Flex>
              <Center
                flexDir="column"
                justifyContent="left"
                alignItems="left"
                gap={2.5}
              >
                <Text
                  m={0}
                  textStyle="footer-text"
                  textAlign={{
                    base: "center",
                    sm: "left",
                    md: "left",
                    lg: "center",
                    xl: "left",
                  }}
                  color="bodyHover"
                >{`Fellowship Cohort ${allFellowsFrontmatter[activeFellowIndex].cohort}`}</Text>
                <Box
                  textAlign={{
                    base: "center",
                    sm: "left",
                    md: "left",
                    lg: "center",
                    xl: "left",
                  }}
                >
                  <H4
                    m={0}
                    textAlign={{
                      base: "center",
                      sm: "left",
                      md: "left",
                      lg: "center",
                      xl: "left",
                    }}
                  >
                    {allFellowsFrontmatter[activeFellowIndex].fellowName}
                  </H4>
                  <Text m={0} textStyle="footer-text">
                    {allFellowsFrontmatter[activeFellowIndex].country}
                  </Text>
                </Box>
                <Flex flexWrap="wrap">
                  {allFellowsFrontmatter[activeFellowIndex].tags.map(
                    (tag, index) => {
                      return (
                        <Text
                          key={index}
                          textStyle="tag"
                          textTransform="lowercase"
                          color="action"
                          bg="#00000020"
                          fontFamily="heading"
                          fontSize={14}
                          letterSpacing={0.7}
                          mb="0.75rem"
                          px={4}
                          py={0.5}
                          mx={1}
                          border="1px solid"
                          borderRadius="4000px"
                        >
                          {tag}
                        </Text>
                      )
                    }
                  )}
                </Flex>
              </Center>
            </Flex>
            <ArrowIcon
              w="40px"
              height="40px"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                setActiveFellowIndex(
                  (activeFellowIndex + 1 + allFellowsFrontmatter.length) %
                    allFellowsFrontmatter.length
                )
              }}
            />
          </Center>
        </Center>
      </Flex>
    </ContentContainer>
  )
}

export default HomeHero
