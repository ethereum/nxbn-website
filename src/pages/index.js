import React from "react"
import styled from "styled-components"
import PageMetadata from "../components/PageMetadata"
import {
  PageBody,
  ButtonLink,
  Center,
  H2,
} from "../components/SharedStyledComponents"
// import { StaticImage } from "gatsby-plugin-image"
import horzLogo from "../images/fellowship-program-logo.svg"
import vertLogo from "../images/fellowship-program-logo-vertical.svg"
import BlogPosts from "../components/BlogPosts"
import { screenSizeS, colorGrayLight } from "../utils/styles"
import { graphql } from "gatsby"

const Header = styled.h3`
  text-align: center;
  margin-top: 8px;
  color: ${colorGrayLight};
  @media (max-width: 340px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const HorizontalLogo = styled.img`
  width: 80%;
  max-width: 450px;
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

const HeroIllustration = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #F9FFFC 0%, #DEF9FF 100%);
  border-radius: 30px;
  height: min(65vh, 600px);
  margin: 0px 15px;
  overflow: hidden;
`;

const Copy = styled.div`
  margin-bottom: 56px;
`

const Apply = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #F5FFFA 0%, #DEF9FF 100%);
  border-radius: 15px;
  padding: 32px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const Section = styled.div`
  margin-bottom: 24px;
`

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <PageMetadata
          title="Ethereum Next Billion Fellowship Program"
          useTitleTemplate={false}
          description="Make Ethereum a public good for the next Billion."
        />
        <div>
          <HeroIllustration>
            <HorizontalLogo
              src={horzLogo}
              alt="Ethereum Foundation Fellowship Program Horizontal Logo"
            />
            <VerticalLogo
              src={vertLogo}
              alt="Ethereum Foundation Fellowship Program Vertical Logo"
            />

            {/* 
              TODO: Add illustration when ready
              <StaticImage
              src="../images/fellowship_schoolyard.png"
              alt="Fellows World Map"
              placeholder="blurred"
              layout="constrained"
            /> */}
          </HeroIllustration>

          <PageBody>
            <Copy id="welcome">
              <Section>
                <p>
                  We believe that it's possible to use Ethereum to improve
                  the lives of billions of people. But we need more than just
                  technology -- we need new ways of thinking about how humans
                  interact with each other and with their environment.
                  We need new stories to tell, new visions for a better future,
                  and new ways of expressing our values in code.
                </p>
                <p>
                  The Next Billion Fellowship at the Ethereum Foundation is
                  a search for stories. Stories that inspire us to focus on
                  the important things, to find balance and fairness in the
                  way we go about solving our problems, to push deeper into
                  the mysteries of human cooperation.
                </p>
                <p>
                  During the course of 6 months, Fellows receive support to
                  drive their own projects, and tell their own stories of
                  Ethereum-enabled public goods destined to help billions
                  coordinate and thrive.
                </p>

              </Section>

              <Section>
                <Center>
                  <H2>Eligibility of Projects and Candidates</H2>
                </Center>

                <p>
                  A Fellow is a leader committed to their own project that helps
                  Ethereum become a tool of and for the next billion. Their
                  project could be a decentralized app, a piece of research, an
                  organizational initiative, or something else entirely.
                  There are no strict requirements for Next Billion Fellowship
                  projects, save one: earnesty.
                </p>
                <p>
                  Whatever the project, whomever the Fellow, the program seeks to
                  enable the flourishing of populations, communities, or
                  individuals under-represented in the Ethereum ecosystem today.
                  The Fellowship is neither the beginning nor the end of
                  a Fellow's journey, but it may provide the support needed to
                  encourage more ambitious, long-term goals and mindset.
                </p>
              </Section>
            </Copy>

            <Apply>
              <p>
                We are looking for changemakers, visionaries, pragmatists, and creatives working on ambitious projects.
              </p>
              <p>
                Next Billion Fellows should be on a personal quest, and should be able to represent their project's context in public.
              </p>
              <p>
                Applications will be considered until the deadline of April 28, 2023.
              </p>
              <ButtonLink to="https://nextbillionfellowship.paperform.co/">
                Apply
              </ButtonLink>
            </Apply>
          </PageBody>

          <BlogPosts
            posts={this.props.data.allBlogPost.nodes}
          />

          <PageBody>
            <Section>
              <Center>
                <H2 id="contact">We want to hear from you!</H2>
                <p style={{ textAlign: 'center' }}>For all other inquires, click below to contact us</p>


                <ButtonLink to="https://effellowship.paperform.co/">
                  Contact Us
                </ButtonLink>
              </Center>
            </Section>
          </PageBody>
        </div>
      </>
    )
  }
}

export default IndexPage

export const query = graphql`
  query BlogPostQuery {
    allBlogPost {
      nodes {
        body
        date
        description
        imageUrl
        id
        permaLink
        title
      }
    }
  }
`;
