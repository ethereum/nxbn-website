import { Container } from "@chakra-ui/react"

import ContentContainer from "@/components/ContentContainer"
import Header from "@/components/Nav/Header/Header"
import Footer from "@/components/Nav/Footer/Footer"

export const RootLayout = ({
  children
}: any) => {

  // TODO: implement RootLayout
  return (
    <Container>
      <ContentContainer>
        <Header />
      </ContentContainer>
      {children}
      <ContentContainer>
        <Footer />
      </ContentContainer>
    </Container>
  )
}