import React from "react"
import styled from "styled-components"
import PageMetadata from "../components/PageMetadata"
import {
  PageBody,
  ButtonLink,
  Center,
  H2,
} from "../components/SharedStyledComponents"
import { StaticImage } from "gatsby-plugin-image"
import BlogPosts from "../components/BlogPosts"
import { graphql } from "gatsby"

const HeroIllustration = styled.div`
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #F9FFFC 0%, #DEF9FF 100%);
  border-radius: 30px;
  height: 600px;
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
          title="Ethereum Foundation Fellowship Program"
          useTitleTemplate={false}
          description="Ethereum Foundation’s impact initiative for changemakers. Make Ethereum a public good for the next Billion."
        />
        <div>
          <HeroIllustration>
            <StaticImage
              src="../images/fellowship_schoolyard.png"
              alt="Fellows World Map"
              placeholder="blurred"
              layout="constrained"
            />
          </HeroIllustration>

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

              <Section>
                <Center>
                  <H2>Eligibility of Projects and Candidates</H2>
                </Center>

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
              </Section>
            </Copy>

            <Apply>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ButtonLink to="https://effellowship.paperform.co/">
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
