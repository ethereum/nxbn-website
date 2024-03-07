import { Box } from '@chakra-ui/react'

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "@/components/Headings"

// TODO: REMOVE THIS PAGE BEFORE LAUNCH
const DesignPage = () => {
  return (
    <Box>
      <H1>H1 normal</H1>
      <H1 variant="action">H1 action</H1>
      <H2>H2 Normal</H2>
      <H2 variant="action">H2 action</H2>
      <H3>H3 Normal</H3>
      <H3 variant="action">H3 action</H3>
      <H4>H4 Normal</H4>
      <H4 variant="action">H4 action</H4>
      <H5>H5 Normal</H5>
      <H5 variant="action">H5 action</H5>
      <H6>H6 Normal</H6>
      <H6 variant="action">H6 action</H6>
    </Box>
  )
}

export default DesignPage