import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { H2 } from "@/components/Headings"
import ButtonLink from "@/components/Buttons/ButtonLink";

const WhoAreNextBillion = () => {
  return (
    <Box gap={8}>
      <H2 variant='action'>Who Are The Next Billion?</H2>
      <Box>
        <Text>
          The next billion users are already here, on this planet, today. Ethereum’s narrative of success is woven from the threaded stories of their lives.  
        </Text>
        <Text>
        They are not a market to be tapped, a mind-share to be influenced, or innocents to be saved. They will have to solve the unsolved problems we leave for them, and protect themselves against the dangers we did not predict.
        </Text>
        <Text>
        A better future lies ahead, but to get there we need more than just technology -- we need new ways of thinking about how humans interact with each other and with their environment. We need new stories to tell, new visions of the future, and new ways of expressing our values in code.
        </Text>
      </Box>
      <Center flexDir={{ base: "column", md: "row" }} gap={4} justifyContent="left"
          alignItems={{ base: "left", md: "center" }}>
        <ButtonLink href="/about">Next Billion</ButtonLink>
        <ButtonLink href="https://ethereum.foundation">Ethereum Foundation</ButtonLink>
      </Center>
    </Box>
  );
}

export default WhoAreNextBillion