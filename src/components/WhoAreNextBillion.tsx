import { Box, Center, Image, Text } from "@chakra-ui/react"
import { H2 } from "@/components/Headings"
import ButtonLink from "@/components/Buttons/ButtonLink"
import ContentContainer from "./ContentContainer"
import { useEffect, useState, useRef } from "react"

const WhoAreNextBillion = () => {
  const [offsetY, setOffsetY] = useState(0)
  const refContainer = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (refContainer.current) {
      const { top, height } = refContainer.current.getBoundingClientRect()
      if (top <= window.innerHeight && top + height >= 0) {
        setOffsetY(window.scrollY - top)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxFactor = 0.05
  const computedOffset = Math.min(offsetY * parallaxFactor - 110, 1.45)

  return (
    <Box gap={8} ref={refContainer}>
      <Box position="relative" height="800px" width="100%" zIndex={-1}>
        <Image
          position="absolute"
          top="0"
          src={"/images/homepage/background.jpg"}
          objectFit="cover"
          h="100%"
          w="100%"
          alt=""
          zIndex={1}
        />
        <Image
          position="absolute"
          top={`${-computedOffset}px`}
          src={"/images/homepage/middleground.png"}
          objectFit="cover"
          objectPosition="bottom"
          h="100%"
          w="100%"
          alt=""
          zIndex={2}
        />
        <Image
          position="absolute"
          top="0"
          src={"/images/homepage/foreground.png"}
          objectFit="contain"
          objectPosition="bottom"
          h="100%"
          w="100%"
          alt=""
          zIndex={3}
        />
      </Box>
      <Box bg="linear-gradient(180deg, #020202 25%, #022B35 100%)" pb={"100px"}>
        <ContentContainer>
          <Box gap={8} px={{ base: 8, md: 16 }} position="relative">
            <H2 variant="action">Who Are The Next Billion?</H2>
            <Box maxW={900}>
              <Text fontSize={18}>
                The next billion users are already here, on this planet, today.
              </Text>
              <Text fontSize={18}>
                They are not a market to be tapped, a demographic to be
                influenced, nor are they innocents to be saved. They are just
                folks, navigating the finite and infinite games of everyday
                life. The narrative of 'the next billion' is a grand tale about
                humanity's embrace of a protocol built for global coordination,
                but it must be told through the authentic stories of individual
                humans. Stories of real people, in context, solving their own
                problems, creating their own opportunities.
              </Text>
              <Text fontSize={18}>
                A better future lies ahead, but to get there we need more than
                just technology -- we need new ways of thinking about how humans
                interact with each other and with their environment. We need new
                stories to tell, new visions of the future, and new ways of
                expressing our values in code.
              </Text>
              <Text>
                To coordinate is protocol. To cooperate is human. Ethereum is
                both.
              </Text>
            </Box>
            <Center
              flexDir={{ base: "column", md: "row" }}
              gap={4}
              justifyContent="left"
              alignItems={{ base: "left", md: "center" }}
            >
              <ButtonLink href="/about" alignSelf="center">
                Next Billion
              </ButtonLink>
              <ButtonLink
                href="https://ethereum.foundation"
                isSecondary
                alignSelf="center"
                variant="secondary"
              >
                Ethereum Foundation
              </ButtonLink>
            </Center>
          </Box>
        </ContentContainer>
      </Box>
    </Box>
  )
}

export default WhoAreNextBillion
