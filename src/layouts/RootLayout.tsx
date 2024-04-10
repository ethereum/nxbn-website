import { Container } from "@chakra-ui/react"

import ContentContainer from "@/components/ContentContainer"
import Header from "@/components/Nav/Header/Header"
import Footer from "@/components/Nav/Footer/Footer"

export const RootLayout = ({ children }: any) => {
  return (
    <Container>
      <ContentContainer position="sticky" top={4}>
        <Header />
      </ContentContainer>
      {children}
      <ContentContainer>
        <Footer />
      </ContentContainer>
    </Container>
  )
}
