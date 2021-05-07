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

const Box = styled.div`
  border: 1px solid #cccccc;
  padding: 30px 50px;
  margin-top: 110px;
  margin-bottom: 68px;

  &:hover {
    background: #f9fdfe;
  }

  @media (max-width: ${styles.screenSizeM}) {
    padding: 20px 30px;
    margin-top: 70px;
    margin-bottom: 60px;
  }

  * {
    &:not(a) {
      font-weight: normal;
      color: black;
    }
  }

  .subtitle {
    font-weight: 500;
    color: ${styles.colorBlueLight};
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .title {
    font-family: Work Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    margin-bottom: 0px;
  }

  .author {
    font-family: Work Sans;
    font-size: 14px;
    color: rgba(153, 153, 153, 1);
    margin-bottom: 28px;
  }

  .teaser {
    font-family: Work Sans;
    font-size: 14px;
    margin-bottom: 0px;

    > span {
      font-weight: 500;
      color: ${styles.colorBlueLight};
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
                    <Link to="https://acreafrica.com/">(Acre Africa)</Link> is
                    working to implement blockchain solutions to a
                    microinsurance product that protects thousands of
                    small-scale farmers in Kenya from extreme weather events.
                    His project will test and showcase Ethereum’s potential in
                    enabling the viability and sustainability of products and
                    services that target the bottom of the pyramid.
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
                    <Link to="https://os.city/en/">(OS.City)</Link> provides
                    municipal and national governments a platform to easily
                    issue blockchain-based documents to its citizens, with a
                    vision that one day our Ethereum wallets would hold every
                    government-issued document like permits and IDs. During the
                    Fellowship Program, he and his team will work with the
                    Presidency of Argentina and strategize for the meaningful
                    adoption of blockchain in the public sector in Latin
                    America.
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
                    <Link to="http://www.brac.net/">(BRAC)</Link> will develop a
                    blockchain and crypto strategy for BRAC - the world’s
                    largest NGO based in Bangladesh that annually serves over
                    100 million people. His project - which also involves
                    multiple experiments using blockchain - could serve as a
                    model for other social enterprises and the development
                    sector at large.
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
                    <Link to="https://gigaconnect.org/">(Giga)</Link> is
                    exploring the power of blockchain in Giga’s effort to
                    connect every school to the internet. In providing today’s
                    most important public good to billions of currently
                    unconnected people, she is envisioning many roles that
                    blockchain can play, from increasing accountability of
                    service providers and financing connectivity infrastructures
                    to an access point to the global economy and marketplaces.
                  </p>
                </Profile>
              </Section>

              <Link to="https://blog.ethereum.org/2021/05/07/ethereum-for-the-next-billion/">
                <Box>
                  <p className="subtitle">Our Blog</p>
                  <p className="title">
                    Ethereum for the Next Billion: Announcing the EF Fellowship
                    Program
                  </p>
                  <p className="author">
                    Posted by Aya Miyaguchi on May 7, 2021
                  </p>
                  <p className="teaser">
                    The progress being made in the the Ethereum ecosystem lately
                    is really inspiring. Whether you're excited by the adoption
                    of proof of stake (and a faster, more secure, greener
                    Ethereum)...{" "}
                    <span to="https://blog.ethereum.org/2021/05/07/ethereum-for-the-next-billion/">
                      Read more
                    </span>
                  </p>
                </Box>
              </Link>

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
