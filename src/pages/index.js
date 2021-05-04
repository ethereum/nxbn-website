import React from "react"
import * as styles from "../utils/styles"
import styled from "styled-components"
import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import {
  PageBody,
  ButtonLink,
  Center,
  H2,
} from "../components/SharedStyledComponents"
import horzLogo from "../images/fellowship-program-logo.svg"
import vertLogo from "../images/fellowship-program-logo-vertical.svg"
import { screenSizeM, screenSizeS, colorGrayLight } from "../utils/styles"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;
`

const Copy = styled.div`
  margin-bottom: 56px;
`

const ButtonContainer = styled.div`
  margin: 0px 0;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${screenSizeM}) {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & > * {
      margin-top: 30px;
    }
  }
`

const HorizontalLogo = styled.img`
  width: 450px;
  margin-left: auto;
  margin-right: auto;
  display: block;

  @media (max-width: ${screenSizeS}) {
    display: none;
  }
`

const FellowsMap = styled.div`
  width: 130%;
  margin-left: -15%;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: ${styles.screenSizeL}) {
    width: 100%;
    margin-left: 0px;
  }
`

const Section = styled.div`
  margin-bottom: 84px;
`

const BigSection = styled.div`
  margin-bottom: 126px;
`

const VerticalLogo = styled.img`
  display: none;

  @media (max-width: ${screenSizeS}) {
    /* width: 200px; */
    display: block;
    margin: 2rem auto;
  }
  @media (max-width: 340px) {
    width: 140px;
    display: block;
    margin: 2rem auto;
  }
`

const Header = styled.h3`
  text-align: center;
  margin-top: 8px;
  color: ${colorGrayLight};

  @media (max-width: 340px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  line-height: 1.6em;
  margin-bottom: 60px;

  > .img {
    width: 50%;

    @media (max-width: ${styles.screenSizeM}) {
      min-width: 65%;
      margin-bottom: 16px;
    }

    @media (max-width: ${styles.screenSizeS}) {
      min-width: 100%;
    }
  }

  > .description {
    margin-left: 32px;
    flex-basis: 50%;
    flex-shrink: 1;
    margin: 0px;
    margin-left: 32px;

    @media (max-width: ${styles.screenSizeM}) {
      margin-left: 0px;
    }
  }

  @media (max-width: ${styles.screenSizeM}) {
    flex-direction: column;
  }

  > * {
    @media (max-width: ${styles.screenSizeM}) {
      width: 100%;
    }
  }
`

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <PageMetadata
          title="Ethereum Foundation Fellowship Program"
          useTitleTemplate={false}
          description="Ethereum Foundation’s impact initiative for changemakers. Solve social, economic & environmental challenges in developing countries and emerging markets."
        />
        <div>
          <Hero>
            <HorizontalLogo
              src={horzLogo}
              alt="Ethereum Foundation Fellowship Program Horizontal Logo"
            />
            <VerticalLogo
              src={vertLogo}
              alt="Ethereum Foundation Fellowship Program Vertical Logo"
            />
            <Header>An Ethereum Foundation Initiative</Header>
          </Hero>
          <PageBody>
            <Copy id="welcome">
              <Section>
                <p>
                  The Ethereum Foundation Fellowship Program is an opportunity
                  for changemakers to use Ethereum to help solve challenges in
                  developing countries.
                </p>
                <p>
                  Changemakers drive their independent projects while working
                  alongside like-minded Fellows. The Ethereum Foundation
                  provides a unique experience as well as access to mentorship
                  and technical support.
                </p>
                <p>
                  We believe that{" "}
                  <Link to="https://ethereum.org/">Ethereum’s</Link> capability
                  to build trust, transparency, and efficiency has the potential
                  to help solve some of the challenges that exist in developing
                  countries, and are faced by billions of people. These
                  challenges include the lack of formal identification, lack of
                  access to banking and financial services, and lack of internet
                  connectivity. It is in this context - an overlap between
                  opportunities, impact, and potential for Ethereum - that the
                  Ethereum Foundation’s Fellowship Program was created.
                </p>
              </Section>

              <BigSection>
                <Center>
                  <H2>Ethereum Foundation Fellowship Cohort 2021</H2>
                </Center>

                <FellowsMap>
                  <StaticImage
                    src="../images/EF-FP-world-map.jpg"
                    alt="Fellows World Map"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </FellowsMap>

                <p>
                  From April through December 2021, this pilot cohort of Fellows
                  will drive forward their projects, each addressing a social,
                  economic, or environmental challenge that exists in their
                  communities, reflecting the developing world at large. They
                  will provide insights from their experiences, as each explores
                  the capabilities of blockchain technology for development. We
                  look forward to learning from the Fellows as they further
                  enrich the global Ethereum community.
                </p>
              </BigSection>

              <Section>
                <Profile>
                  <StaticImage
                    className="img"
                    src="../images/EF-FP-headshots-Benson.jpg"
                    alt="Fellow: Benson Njuguna"
                    placeholder="blurred"
                    objectFit="contain"
                    layout="fixed"
                    width="350"
                  />
                  <p className="description">
                    <b>Benson Njuguna</b>{" "}
                    <Link to="https://acreafrica.com/">(Acre Africa)</Link> aims
                    to support financially and digitally excluded populations,
                    to achieve reliable digital and financial inclusion, for a
                    positive social change. Benson is implementing and
                    experimenting with blockchain in the context of agricultural
                    microinsurance in Kenya; the short-term impact of this
                    project will serve thousands of small-scale farmers.
                  </p>
                </Profile>
                <Profile>
                  <StaticImage
                    className="img"
                    src="../images/EF-FP-headshots-Chuy.jpg"
                    alt="Fellow: Chuy Cepada"
                    placeholder="blurred"
                    objectFit="contain"
                    layout="fixed"
                    width="350"
                  />
                  <p className="description">
                    <b>Chuy Cepeda</b>{" "}
                    <Link to="https://os.city/en/">(OS.City)</Link> cares about
                    the future of cities and governance models. He’s fully
                    committed to growing OS City, a company he co-founded, to
                    make cities more sustainable and governments more
                    trustworthy. Chuy is driven to accelerate the meaningful
                    adoption of blockchain in governments with a focus on the
                    Latin America region.
                  </p>
                </Profile>
                <Profile>
                  <StaticImage
                    className="img"
                    src="../images/EF-FP-headshots-Kuldeep.jpg"
                    alt="Fellow: Kuldeep Bandhu Aryal"
                    placeholder="blurred"
                    objectFit="contain"
                    layout="fixed"
                    width="350"
                  />
                  <p className="description">
                    <b>Kuldeep Bandhu Aryal</b>{" "}
                    <Link to="http://www.brac.net/">(BRAC)</Link> developed his
                    passion for social innovation during the humanitarian
                    response and reconstruction efforts post-2015 earthquake in
                    Nepal. Focusing on engineering, technology, and design, he
                    aims to bridge traditionally isolated sectors through
                    cross-cutting innovation projects. Kuldeep is tackling
                    blockchain strategy within the world’s largest development
                    agency, BRAC.
                  </p>
                </Profile>
                <Profile>
                  <StaticImage
                    className="img"
                    src="../images/EF-FP-headshots-Naroa.jpg"
                    alt="Fellow: Naroa Zurutuza"
                    placeholder="blurred"
                    objectFit="contain"
                    layout="fixed"
                    width="350"
                  />
                  <p className="description">
                    <b>Naroa Zurutuza</b>{" "}
                    <Link to="https://gigaconnect.org/">(UNICEF - Giga)</Link>{" "}
                    sees information as a source of empowerment and driver of
                    change and is a strong supporter of knowledge being openly
                    accessible to everyone. She aims to further experiment with
                    blockchain technologies and explore the role that they can
                    play in decentralizing the internet connectivity ecosystem,
                    creating stronger infrastructures, and delivering better
                    services to communities.
                  </p>
                </Profile>
              </Section>

              <Center>
                <H2 id="contact">We want to hear from you!</H2>
                <p>
                  Be involved with the Fellowship Program by simply filling out
                  this form.
                </p>
              </Center>
              <ButtonContainer>
                <ButtonLink to="https://forms.gle/iKYQA1LNEBoc59Wh7">
                  Contact Us
                </ButtonLink>
              </ButtonContainer>
            </Copy>
          </PageBody>
        </div>
      </>
    )
  }
}

export default IndexPage
