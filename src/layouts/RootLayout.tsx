import { Container } from "@chakra-ui/react"

import Header from "@/components/Nav/Header"

export const RootLayout = ({
  children
}: any) => {

  // TODO: implement RootLayout
  return (
    <Container mx="auto" w="full">
      <Header />
      {children}
    </Container>
  )
}