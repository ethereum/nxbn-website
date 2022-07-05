import React from "react"
import * as styles from "../utils/styles"
import styled from "styled-components"
import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import {
  PageBody,
  ButtonLink,
  Center,
  Left,
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
          title="Ethereum Foundation Fellowship Program -- Applications Open!"
          useTitleTemplate={false}
          description="Ethereum Foundation’s impact initiative for changemakers. Make Ethereum a public good for the next Billion."
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
                  The Ethereum Foundation Fellowship Program is a small forum
                  for leaders who, during the course of 6 months, drive their
                  own projects that use Ethereum as a public good destined to
                  help billions of people coordinate and thrive.
                </p>
                <p>
                  Ethereum has already reached <dfn>millions</dfn> of people,
                  but to reach the next <dfn>billion</dfn>, Ethereum must
                  overcome many gaps in representation across cultures,
                  nationalities, and economic classes.
                </p>
                <p>
                  The Fellowship Program is about bridging these gaps by
                  identifying and supporting unique and talented individuals
                  helping to enable Ethereum’s relevance and breaking down
                  barriers to entry for those underrepresented people and
                  communities who will become the future of web3.
                </p>
              </Section>
              <Link to="/apply/">
                <Box>
                  <p className="title">
                    Now accepting applications to the 2022 Fellowship Program
                  </p>
                  <p className="teaser">
                    If you are working on a project that can help Ethereum reach
                    the next billion users,{" "}
                    <span to="https://blog.ethereum.org/2021/05/07/ethereum-for-the-next-billion/">
                      apply to become a fellow before July 17th 2022!
                    </span>
                  </p>
                </Box>
              </Link>

              <BigSection>
                <Left>
                  <H2>Eligibility of Projects and Candidates</H2>
                </Left>

                <p>
                  A Fellow is a leader committed to their own project that helps
                  Ethereum become a tool of and for the next billion. Their
                  project could be a decentralized app, a piece of research, a
                  community building initiative, or something else entirely.
                  Some projects might be part of a lifelong quest of the Fellow;
                  others could be a brand new idea that is just getting started.
                </p>
                <p>
                  Whatever the project, whomever the Fellow, the Fellowship
                  Program is focused on public goods that enable the flourishing
                  of populations, communities, or individuals under-represented
                  in the Ethereum ecosystem today.
                </p>
                <p>
                  Got additional questions not answered in{" "}
                  <Link to="/faq/">the FAQs</Link>? 
	    		Join our Office Hours session on July 13th at 15:00 CEST! Office Hours are a chance to connect 
	    		directly with Team Next Billion and clarify any questions you may have about the Fellowship Program
	    		or any doubts you have in filling out the application form. Anyone considering applying for 
	    		The fellowship program is welcome to join. You can {" "}
	    		<Link to="https://fp-officehours.paperform.co/">sign up here.</Link>
	    	</p>
              </BigSection>

              <Section>
                <Left>
                  <H2>Fellowship Program Alumni</H2>
                </Left>
                <FellowsMap>
                  <StaticImage
                    src="../images/EF-FP-world-map.jpg"
                    alt="Fellows World Map"
                    placeholder="blurred"
                    layout="constrained"
                  />
                </FellowsMap>
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
                    <Link to="https://acreafrica.com/">(Acre Africa)</Link>
                    worked to implement blockchain solutions to a microinsurance
                    product that protects thousands of small-scale farmers in
                    Kenya from extreme weather events. His project tested and
                    showcased Ethereum’s potential in enabling the viability and
                    sustainability of products and services that target the
                    bottom of the wealth pyramid.{" "}
                    <Link to="https://blog.ethereum.org/2021/12/07/fellows-spotlight-on-kenya/">
                      {" "}
                      Read more about Benson's work here.
                    </Link>
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
                    <Link to="https://os.city/">(OS.City)</Link> worked with
                    municipal and national governments to create an Ethereum
                    wallet app in Spanish for citizens, with a vision to one-day
                    hold government-issued documents (like permits and IDs).
                    During the Fellowship Program, he and his team worked with
                    the government of Argentina and created strategies to
                    advance the meaningful adoption of blockchain in the public
                    sector in Latin America.{" "}
                    <Link to="https://blog.ethereum.org/2022/06/07/spotlight-on-latam-identity/">
                      {" "}
                      Read more about Chuy's work here.
                    </Link>
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
                    <Link to="http://www.brac.net/">(BRAC)</Link> sought to
                    build a blockchain and crypto strategy for BRAC - the
                    world’s largest NGO based in Bangladesh that annually serves
                    over 100 million people. His project - which also involves
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
                    <Link to="https://gigaconnect.org/">(Giga)</Link> explored
                    Ethereum-based solutions as part of Giga's effort to connect
                    every school to the internet. By helping to provide today’s
                    most important public good to billions of currently
                    unconnected people, Naroa envisioned many roles that
                    blockchain can play, from increasing accountability of
                    service providers and financing connectivity infrastructures
                    to an access point to the global economy and marketplaces.
                  </p>
                </Profile>
              </Section>

              <Center>
                <H2 id="contact">We want to hear from you!</H2>
                <p>
                  If you would like to become an EF fellow in the 2022 cohort,{" "}
                  <Link to="/apply/"> Apply Now!</Link>{" "}
                </p>
                <p>For all other inquires, click below to contact us</p>
              </Center>

              <ButtonContainer>
                <ButtonLink to="https://effellowship.paperform.co/">
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
