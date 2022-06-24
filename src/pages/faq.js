import React from "react"

import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import { useState } from "react"
import AccordionSection from "../components/Accordion"
import {
  PageBody,
  PageHeader,
  H1,
  H2,
  HR,
  FakeLink,
  TextHiddenMobile,
} from "../components/SharedStyledComponents"

const FAQPage = () => {
  // TODO simplify w/ Array... couldn't get it working
  const [expanded, setExpanded] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
  })

  let areAnyOpen = false

  Object.keys(expanded).forEach(i => {
    if (expanded[i]) {
      areAnyOpen = true
    }
  })

  const toggleAll = () => {
    const newState = {}
    const newStateItem = areAnyOpen ? false : true
    Object.keys(expanded).forEach(i => {
      newState[i] = newStateItem
    })
    setExpanded(newState)
  }

  const toggleAllText = areAnyOpen ? "Collapse all" : "Expand all"

  return (
    <>
      <PageMetadata title="FAQ" />
      <div>
        <PageHeader>
          <H1>
            <TextHiddenMobile>Fellowship</TextHiddenMobile> Program FAQ
          </H1>
        </PageHeader>
        <PageBody>
          <FakeLink onClick={toggleAll}>{toggleAllText}</FakeLink>
          <H2>About the Program</H2>
          <HR />

          <AccordionSection
            key={10}
            i={10}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the Ethereum Foundation Fellowship Program?"
          >
            <p>
              The Ethereum Foundation Fellowship Program is focused on
              identifying and supporting unique and talented individuals helping
              to enable Ethereum's relevance and breaking down barriers to entry
              for people and communities not currently part of the Ethereum
              ecosystem.
            </p>
            <p>
              Fellows will be part of a small forum for leaders who, during the
              course of six months, drive their own projects that address a
              particular enabler or blocker for Ethereum becoming a public good
              that acts as a foundational layer for other public goods.
            </p>
            <p>
              While there are some cohort-wide activities, it is a
              self-directed, self-driven program. Depending on the needs of each
              Fellow and their project, different support is provided, including
              financial support, PR opportunities, mentorship, technical advice,
              and access to the Ethereum Foundation network. Fellows’ work will
              be highlighted to showcase the impact and value of Ethereum and
              its community.
            </p>
          </AccordionSection>

          <HR />
          <AccordionSection
            key={18}
            i={18}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What kinds of projects qualify?"
          >
            <p>
              A Fellow candidate must have a project that is mutually
              cooperative with the Ethereum ecosystem. It doesn't have to
              directly integrate with Ethereum to qualify, but needs to be
              on-balance 'good' for the ecosystem and future Ethereum community.
            </p>
            <p>
              The project can be just an idea, in early stages, or already
              ongoing. It can be building an application, research, community
              building, or organizational program/initiative. Whatever it is,
              the project must enable the flourishing of regions, populations,
              or communities that are underrepresented in the existing Ethereum
              ecosystem.
            </p>
          </AccordionSection>

          <HR />
          <AccordionSection
            key={8}
            i={8}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are the key dates of the program?"
          >
            <p>Program Duration: September 2022 to March 2023</p>

            <p>
              Fellows will also be invited to travel to{" "}
              <Link to="https://devcon.org/">
                {" "}
                Devcon6 on October 11-14 in Bogotá, Colombia
              </Link>{" "}
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={9}
            i={9}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the duration of the Fellowship program?"
          >
            <p>
              The Fellowship Program is 6 months. However Fellows are expected
              to contribute to the Ethereum community as alumni of the program
              beyond the official program dates.
            </p>
          </AccordionSection>
          <HR />

          <AccordionSection
            key={12}
            i={12}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the time commitment?"
          >
            <p>
              Fellows are not required to work on their project full-time, but
              Fellows commit to:
            </p>
            <ul>
              <li>
                Defining goals for their project and driving it forward in a
                measurable way during the 6 month program period.
              </li>
              <li>
                Documenting their journey, and writing a reflective blogpost
                after the fellowship is complete
              </li>
              <li>
                Participating in cohort-wide activities on a monthly basis
              </li>
              <li>
                Showcase their projects/research in relevant local, regional, or
                global conferences
              </li>
            </ul>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={14}
            i={14}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are some examples of Fellowship projects?"
          >
            <p>
              This list of examples is by no means comprehensive and the
              possibilities are boundless. The projects included in the pilot
              program include:
            </p>
            <ul>
              <li>
                Implementing blockchain in{" "}
                <Link to="https://acreafrica.com/">
                  agricultural microinsurance
                </Link>{" "}
                in Kenya
              </li>
              <li>
                Accelerating the{" "}
                <Link to="https://os.city/">
                  meaningful adoption of blockchain in governments
                </Link>{" "}
                with a focus on the Latin America region
              </li>
              <li>
                Tackling{" "}
                <Link to="https://www.brac.net/">blockchain strategy</Link>{" "}
                within the world’s largest development agency
              </li>
              <li>
                <Link to="https://gigaconnect.org/">
                  Decentralizing the internet connectivity ecosystem
                </Link>
                , creating stronger infrastructures, and delivering better
                services to communities.
              </li>
            </ul>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={15}
            i={15}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is included in the Fellowship?"
          >
            <ul>
              <li>Networking and community-building</li>
              <li>Guidance</li>
              <li>Mentorship</li>
              <li>Potential funding</li>
              <li>Exposure</li>
            </ul>
          </AccordionSection>
          <HR />

          <AccordionSection
            key={13}
            i={13}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What makes a good Fellow? Do I need to be a developer? Do I need to have an organization?"
          >
            <p>
              There is no formal criteria for becoming a Fellow. All applicants
              will be reviewed based on the content of the materials submitted.
              Final candidates will be asked for a short follow-up interview
              following selection.
            </p>
            <p>
              Applications from all technical and non-technical backgrounds are
              encouraged. Some familiarity with web3/Ethereum concepts is
              expected, but not required.
            </p>
            <p>
              Fellows need not be affiliated with any organization or team.
              Independent individuals are welcome to apply.
            </p>
          </AccordionSection>
          <HR />

          <H2>About Ethereum</H2>
          <HR />
          <AccordionSection
            key={0}
            i={0}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is Ethereum?"
          >
            <p>
              Ethereum is a general-purpose blockchain that has become a global,
              open-source platform for decentralized applications. On Ethereum,
              you can write code that controls digital value, runs exactly as
              programmed, and is accessible anywhere in the world.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={1}
            i={1}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Where can I learn more about Ethereum?"
          >
            <p>
              If you wish to find out more about Ethereum, please visit{" "}
              <Link to="https://ethereum.org">Ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={2}
            i={2}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the Ethereum Foundation?"
          >
            <p>
              The Ethereum Foundation (EF) is a non-profit organization
              dedicated to supporting Ethereum and related technologies. As part
              of a large community of organizations, individuals, and companies
              that support the network, our mission is to do what only we can to
              help ensure success for Ethereum in the long-term. The
              Foundation's role is to allocate resources to critical projects,
              to be a valued voice within the Ethereum ecosystem, and to
              advocate for Ethereum to the outside world.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={3}
            i={3}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="How is Ethereum currently being used?"
          >
            <p>
              Ethereum is used for impactful cases such as identity solutions,
              international record-keeping & decentralized finance, as well as
              more entertaining cases such as collectibles and games. If you are
              interested in learning more, please visit{" "}
              <Link to="https://ethereum.org">Ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />

          <H2>Media</H2>

          <HR />
          <AccordionSection
            key={26}
            i={26}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="I am a journalist looking to interview someone in the Ethereum Foundation's leadership."
          >
            <p>
              For interview requests, please fill out{" "}
              <Link to="https://effellowship.paperform.co/">this form</Link>.
            </p>
          </AccordionSection>
          <HR />
        </PageBody>
      </div>
    </>
  )
}

export default FAQPage
