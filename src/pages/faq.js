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
              Ethereum is a global, open-source platform for decentralized
              applications. On Ethereum, you can write code that controls
              digital value, runs exactly as programmed, and is accessible
              anywhere in the world.
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
              <Link to="https://ethereum.org">Ethereum.org</Link>
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
              <Link to="https://ethereum.org">ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={4}
            i={4}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Why would someone use Ethereum?"
          >
            <p>
              Ethereum is a decentralized system, which means it is not
              controlled by any single governing entity. Ethereum opens the door
              to a global financial system where an Internet connection is all
              you need to access applications, products and services that
              operate in a trustless manner. Anyone can interact with the
              Ethereum network and participate in this digital economy, without
              the need for third parties and without the risk of censorship.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={5}
            i={5}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is Ethereum not able to solve?"
          >
            <p>
              While Ethereum can reindustrialize everything from voting to
              supply-chain tracing, not all applications will be compatible with
              a decentralized approach, and that’s okay.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={6}
            i={6}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="How is Ethereum different from Bitcoin?"
          >
            <p>
              Bitcoin is a blockchain technology that serves strictly as a
              currency. Ethereum is also a blockchain technology, but its code
              allows it to serve as an open-source platform and operating
              system, on top of which other applications can be built. These
              decentralized applications built on Ethereum have been coined
              "dApps".
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={7}
            i={7}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Where can I learn more about Ethereum?"
          >
            <p>
              If you wish to read more about Ethereum, please visit{" "}
              <Link to="https://ethereum.org/">ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />
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
              The Ethereum Foundation Fellowship Program is a fellowship wherein
              the Ethereum Foundation provides changemakers around the world
              with the expertise, resources, and support necessary to
              incorporate Ethereum into their development work in developing
              countries.
            </p>
          </AccordionSection>

          <HR />
          <AccordionSection
            key={18}
            i={18}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Who is a Fellow?"
          >
            <p>
              Our selection of Fellows is not based not on blockchain or
              Ethereum knowledge, but on the individual’s impact, leadership and
              entrepreneurship abilities. Fellows must commit to the formal
              program duration of 9 months.
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
            <p>Selection & Announcement: March 2, 2021</p>
            <p>Program Duration: April 12, 2021 - December 31, 2021</p>
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
              The Fellowship Program is 9 months, however Fellows are expected
              to contribute to the Ethereum community and as alumni of the
              program beyond the official program dates.
            </p>
          </AccordionSection>
          <HR />

          <AccordionSection
            key={11}
            i={11}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What kinds of challenges should I expect throughout this Fellowship?"
          >
            <p>
              Throughout the Fellowship, you will be challenged to learn & grow
              with the help of our Mentors. We understand that there will be an
              initial learning curve, and we’re here to help you in every step
              of the journey.
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
              The Fellowship is not a full-time commitment, but active and
              engaged participation is key to creating a meaningful Fellowship
              experience. Fellows commit to:
            </p>
            <ul>
              <li>Spend at least 10 hours per week on their project</li>
              <li>Document their journey (including monthly reports)</li>
              <li>Participate in cohort-wide activities on a monthly basis</li>
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
              This short list of examples is by no means comprehensive and the
              possibilities are boundless. The projects included in the pilot
              program include:
            </p>
            <ul>
              <li>{`Implementing blockchain in agricultural microinsurance in Kenya <https://acreafrica.com/>;`}</li>
              <li>{`Accelerating the meaningful adoption of blockchain in governments with a focus on the Latin America region <https://os.city/en/>;`}</li>
              <li>{`Tackling blockchain strategy within the world’s largest development agency <http://www.brac.net/>;`}</li>
              <li>{`Decentralizing the internet connectivity ecosystem, creating stronger infrastructures, and delivering better services to communities <https://gigaconnect.org/>.`}</li>
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
            key={17}
            i={17}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is a changemaker?"
          >
            <p>
              A changemaker is someone (or a group of people) who has already
              created impact in their region, or someone who has a project that
              works to solve social, economic and environmental challenges with
              Ethereum.
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
              <Link to="https://bit.ly/3nt9Sm1">this form</Link>.
            </p>
          </AccordionSection>
          <HR />
        </PageBody>
      </div>
    </>
  )
}

export default FAQPage
