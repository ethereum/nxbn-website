import { Container } from "@chakra-ui/react"

import Header from "@/components/Nav/Header"
import Footer from "@/components/Footer"

export const RootLayout = ({
  children
}: any) => {

  // TODO: implement RootLayout
  return (
    <Container mx="auto" maxW="1536px">
      <Header />
      {children}
      <Footer />
    </Container>
  )
}