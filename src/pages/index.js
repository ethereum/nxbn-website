import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import {
  PageBody,
  Section,
  ButtonLink,
  H2,
} from "../components/SharedStyledComponents"
import horzLogo from "../images/fellowship-program-logo.svg"
import vertLogo from "../images/fellowship-program-logo-vertical.svg"
import { screenSizeM, screenSizeS, colorGrayLight } from "../utils/styles"

const Hero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -100px;
`

const Copy = styled.div`
  margin-bottom: 56px;
`

const ButtonContainer = styled.div`
  margin: 60px 0;
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

const H1 = styled.h1`
  padding-top: 110px;
  font-weight: bold;
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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showHeroLink: true,
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset <= 100 && !this.state.showHeroLink) {
      this.setState({ showHeroLink: true })
    }
    if (window.pageYOffset > 100 && this.state.showHeroLink) {
      this.setState({ showHeroLink: false })
    }
  }

  render() {
    return (
      <>
        <PageMetadata title="TODO" />
        <div>
          <Hero>
            <HorizontalLogo
              src={horzLogo}
              alt="Ecosystem Support Program Horizontal Logo"
            />
            <VerticalLogo
              src={vertLogo}
              alt="Ecosystem Support Program Vertical Logo"
            />
            <Header>An Ethereum Foundation Initiative</Header>
            <Link
              to="#welcome"
              className={
                "hero-link " + (this.state.showHeroLink ? "show" : "hide")
              }
            >
              <FontAwesomeIcon className="hero-icon" icon={faChevronDown} />
            </Link>
          </Hero>
          <PageBody>
            <Copy id="welcome">
              <Section>
                <H1>Welcome!</H1>
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
              <H2 id="contact">We want to hear from you!</H2>
              <p>
                Whether you are interested in applying for the Fellowship,
                recommending a candidate, or would like to be involved, simply
                fill out this form.
              </p>
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
