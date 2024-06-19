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
                In Internet lore, 'the next billion' is often told as a grand
                narrative about shifting perspectives and challenged
                assumptions. As a meme, it lets us question the form and
                function of technologies that reach the scale of “world-wide”
                use.
              </Text>
              <Text fontSize={18}>
                Web3 does not yet have a first billion users, but shifting
                perspectives and challenging assumptions is an evergreen
                endeavor. There are about eight billion human people at the
                moment, and Ethereum is supposed to treat every-one fairly, to
                the extent that it’s possible to treat people fairly when
                capabilities and needs are so different in this world.
              </Text>
              <Text fontSize={18}>
                Someone of 'the next billion' lives in a world filled with
                games, too often played for life-and-death outcomes. It's a
                messy, complicated place some think might need saving. But
                within any world, with the right tools at hand, people will
                solve their own problems; they will create their own
                opportunities; they will imagine their own future.
              </Text>
              <Text fontSize={18}>
                The future is a frontier. To learn what (and who) comes next, we
                need only to look at the maps, listen to the stories, and
                inspect the artifacts made by people who problem-solve, who
                build, who imagine — not to save a world, but to build new (and
                improved) ones.
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
