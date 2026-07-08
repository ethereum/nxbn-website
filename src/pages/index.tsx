import Head from "next/head"
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react"

import ContentContainer from "@/components/ContentContainer"
import { H1 } from "@/components/Headings"
import Link from "@/components/Link"

const ArchivePage = () => {
  return (
    <>
      <Head>
        <title>Next Billion — Program Archive</title>
        <meta
          name="description"
          content="The Next Billion team's programs at the Ethereum Foundation have concluded. Applications for all programs are closed."
        />
      </Head>
      <ContentContainer>
        <Box
          as="main"
          maxW="800px"
          mx="auto"
          px={{ base: 6, md: 8 }}
          py={{ base: 16, md: 24 }}
        >
          <H1 mb={8}>The Next Billion team&apos;s programs have concluded</H1>

          <Text textStyle="base-text" fontSize={18} mb={6}>
            From 2022–2025, the Next Billion initiative at the Ethereum
            Foundation ran the Next Billion Fellowship, the Devcon(nect)
            Scholars program, and the Ethereum Season of Internships —
            supporting builders, researchers, and organizers working to make
            Ethereum more accessible to underrepresented communities around the
            world.
          </Text>

          <Text textStyle="base-text" fontSize={18} mb={6}>
            This site is no longer maintained and applications for all programs
            are closed. The team&apos;s work continues to live on in a few
            places:
          </Text>

          <UnorderedList
            spacing={5}
            mb={6}
            fontSize={18}
            sx={{ textStyle: "base-text" }}
          >
            <ListItem>
              <Box as="strong" fontWeight={600} color="body">
                Fellow stories
              </Box>{" "}
              — read the essays and project writeups from five cohorts of
              fellows on the{" "}
              <Link href="https://blog.ethereum.org/category/next-billion">
                Ethereum Foundation blog
              </Link>
              .
            </ListItem>
            <ListItem>
              <Box as="strong" fontWeight={600} color="body">
                Devcon(nect) Scholars
              </Box>{" "}
              — the scholars program supported travel and access for
              underrepresented builders to attend Devcon and Devconnect. Future
              scholarship opportunities, if any, will be announced through{" "}
              <Link href="https://devcon.org">Devcon.org</Link> and the{" "}
              <Link href="https://blog.ethereum.org">
                Ethereum Foundation blog
              </Link>
              .
            </ListItem>
            <ListItem>
              <Box as="strong" fontWeight={600} color="body">
                Season of Internships
              </Box>{" "}
              — if this program continues under new ownership, updates will be
              posted on the{" "}
              <Link href="https://blog.ethereum.org">
                Ethereum Foundation blog
              </Link>{" "}
              and ethereum.org&apos;s{" "}
              <Link href="https://ethereum.org/community/">community hub</Link>.
            </ListItem>
          </UnorderedList>

          <Text textStyle="base-text" fontSize={18}>
            Questions? Visit the{" "}
            <Link href="https://ethereum.foundation">Ethereum Foundation</Link>.
          </Text>
        </Box>
      </ContentContainer>
    </>
  )
}

export default ArchivePage
