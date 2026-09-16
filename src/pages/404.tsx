import { Box, Text } from "@chakra-ui/react"

import ButtonLink from "@/components/Buttons/ButtonLink"
import ContentContainer from "@/components/ContentContainer"
import { H1 } from "@/components/Headings"
import Seo from "@/components/Seo"

import {
  ABOUT_PAGE,
  FELLOWSHIP_PAGE,
  INTERNSHIPS_PAGE,
  SCHOLARS_PAGE,
} from "@/utils/constants"
import { PROGRAM_YEARS } from "@/utils/seo"

const NOT_FOUND_DESCRIPTION =
  "This page isn't part of the Next Billion archive. The fellowship, scholars and internship " +
  "programs ran until 2025 and their record is still here."

/**
 * Next generates a bare default error page when a project has no `404.tsx`,
 * with no title, description or canonical. Since `public/_redirects` points
 * every unknown URL here, it's worth being a real page: it keeps the header,
 * footer and archive notice, and sends people to the sections that do exist.
 */
const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page not found"
        description={NOT_FOUND_DESCRIPTION}
        path="/404"
        // The only page here that shouldn't be indexed. Served with a 404
        // status, so this is belt-and-braces rather than the primary signal.
        noindex
      />
      <ContentContainer>
        <Box px={{ base: 8, md: 16 }} py={{ base: 16, md: 24 }} maxW="815px">
          <H1 variant="action">Page not found</H1>
          <Text fontSize={18}>
            This page isn&apos;t part of the archive — it may have moved, or the
            link may be wrong.
          </Text>
          <Text fontSize={18}>
            The Next Billion programs ran from {PROGRAM_YEARS} and have
            concluded, but everything they produced is still here:
          </Text>
          <Box mt={8}>
            <ButtonLink href={FELLOWSHIP_PAGE}>Fellowship</ButtonLink>
            <ButtonLink href={SCHOLARS_PAGE} isSecondary>
              Scholars
            </ButtonLink>
            <ButtonLink href={INTERNSHIPS_PAGE} isSecondary>
              Internships
            </ButtonLink>
            <ButtonLink href={ABOUT_PAGE} isSecondary>
              About
            </ButtonLink>
          </Box>
        </Box>
      </ContentContainer>
    </>
  )
}

export default NotFoundPage
