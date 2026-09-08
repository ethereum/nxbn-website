import React from "react"
import { Container } from "@chakra-ui/react"

// `margin="0 auto"` must come BEFORE the spread. Chakra emits style props in
// prop order, so putting the `margin` shorthand last made its declaration win
// over any `mb`/`mt` a caller passed, silently discarding them.
const ContentContainer = (props) => {
  return <Container maxW="1536px" margin="0 auto" {...props} />
}

export default ContentContainer
