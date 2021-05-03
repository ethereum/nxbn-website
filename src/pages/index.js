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
import fellowsMap from "../images/fellows-map.png"
import fellowBenson from "../images/fellow-benson-njugana.png"
import fellowChuy from "../images/fellow-chuy-cepeda.png"
import fellowKuldeep from "../images/fellow-kuldeep-bandhu-aryal.png"
import fellowNaroa from "../images/fellow-naroa-zurutuza.png"
import vertLogo from "../images/fellowship-program-logo-vertical.svg"
import { screenSizeM, screenSizeS, colorGrayLight } from "../utils/styles"

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 84px;
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

export const Section = styled.div`
  margin-bottom: 84px;
`

export const BigSection = styled.div`
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

  > img {
    width: 50%;

    @media (max-width: ${styles.screenSizeM}) {
      min-width: 65%;
    }

    @media (max-width: ${styles.screenSizeS}) {
      min-width: 100%;
    }
  }

  > p {
    margin-left: 32px;
    flex-basis: 50%;
    flex-shrink: 1;

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
                  to experiment with using Ethereum to help solve pressing
                  social, economic, and environmental challenges in developing
                  countries.
                </p>
                <p>
                  Changemakers will carry out their independent projects over 9
                  months while working alongside like-minded Fellows. The
                  Ethereum Foundation will provide an unique experience as well
                  as access to the community, mentorship & expertise.
                </p>
                <p>
                  We believe that{" "}
                  <Link to="https://ethereum.org/">Ethereum’s</Link> capability
                  to build trust, transparency, and efficiency has the potential
                  to help solve some of the challenges that exist in developing
                  countries and emerging markets. These challenges include the
                  lack of formal identification, lack of access to banking
                  services, and lack of internet connectivity. This overlap
                  between Ethereum’s opportunities and potential led us to
                  recognize the need for the Ethereum Foundation Fellowship
                  Program.
                </p>
              </Section>

              <BigSection>
                <Center>
                  <H2>Ethereum Foundation Fellowship Cohort 2021</H2>
                </Center>

                <img src={fellowsMap} alt="Fellows map" />

                <p>
                  During the course of 9 months starting in April 2021, Fellows
                  will drive forward their own projects, each addressing a
                  social, economic, or environmental challenge that exists in
                  their communities reflecting the developing world at large.
                </p>
              </BigSection>

              <Section>
                <Profile>
                  <img src={fellowBenson} alt="Fellow: Benson Njuguna" />
                  <p>
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
                  <img src={fellowChuy} alt="Fellow: Chuy Cepada" />
                  <p>
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
                  <img src={fellowKuldeep} alt="Fellow: Kuldeep Bandhu Aryal" />
                  <p>
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
                  <img src={fellowNaroa} alt="Fellow: Naroa Zurutuza" />
                  <p>
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
