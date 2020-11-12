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
    27: false,
    28: false,
    29: false,
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
          <H1>Fellowship Program FAQ</H1>
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
            headerText="How is Ethereum different from Bitcoin?"
          >
            <p>
              Bitcoin is a blockchain technology that serves strictly as a
              currency. Ethereum is also a blockchain technology, but its code
              allows it to serve as an open-source platform and operating
              system, on top of which other applications can be built. These
              decentralized applications built on Ethereum have been coined
              “dApps.”
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
            headerText="How is Ethereum currently being used?"
          >
            <p>
              Ethereum is being used for impactful cases such as identity
              solutions, international record-keeping & decentralized finance,
              as well as more entertaining cases such as collectibles and games.
              If you are interested in learning more, please visit the “More
              Resources” section at the bottom of this FAQ.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={6}
            i={6}
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
            key={7}
            i={7}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are some examples of Blockchain in social impact? "
          >
            <p>
              <Link to="https://docs.google.com/spreadsheets/d/1UrSTrj0onwFFbq_orMeJyMaI12R42hY1rhfINJcN2bI/edit#gid=0">
                Here
              </Link>{" "}
              we’ve compiled some examples of existing projects using blockchain
              to transform communities around the world.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={8}
            i={8}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Where can I learn more about Ethereum?"
          >
            <p>
              If you wish to read more about Ethereum, please visit{" "}
              <Link to="https://ethereum.org/">Ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />
          <H2>About the Program</H2>
          <HR />
          <AccordionSection
            key={9}
            i={9}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the EF Fellowship Program?"
          >
            <p>
              The EF Fellowship Program (EFFP) is a fellowship wherein the EF
              will provide changemakers around the world with the expertise,
              resources, and support necessary to incorporate Ethereum into
              industrializing nations.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={10}
            i={10}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are the key dates of the program?"
          >
            <p>Application close: February 7, 2021 at 23:59 (PST)</p>
            <p>Selection & Announcement: March 2, 2021</p>
            <p>Program Duration: April 12, 2021 - December 2021</p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={11}
            i={11}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is included in the Fellowship?"
          >
            <ul>
              <li>Networking & Community-building</li>
              <li>Guidance</li>
              <li>Mentorship</li>
              <li>Exposure</li>
            </ul>
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
              <li>
                Participate in cohort-wide activities on a monthly/bi-monthly
                basis
              </li>
              <li>
                Submit monthly progress reports + how stipend is being spent
              </li>
            </ul>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={13}
            i={13}
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
          <AccordionSection
            key={14}
            i={14}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Who is a Fellow?"
          >
            <p>
              Our selection of Fellows will be based not on blockchain or
              Ethereum knowledge, but on the candidate’s impact, leadership and
              entrepreneurship abilities. Fellows must commit to the formal
              program duration of 9 months. In other words, the ideal candidate
              can be a full stack engineer, a manager in an organization or a
              company, an entrepreneur, a designer, a researcher, or a teacher.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={15}
            i={15}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="How long does the Fellowship last?"
          >
            <p>
              The Fellowship is 9 months, depending on what stage a Fellows’
              project is in. Projects will be examined on a case-by-case basis.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={16}
            i={16}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Will Fellows be paid a stipend?"
          >
            <p>
              We will consider the best means of funding for Fellows’ projects -
              this includes the potential for a stipend. The exact amount in
              each stipend will depend on a variety of factors including length
              of Fellowship, where the Fellow is located, and will vary from
              Fellow to Fellow.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={17}
            i={17}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="When does the application open?"
          >
            <p>
              Applications are currently open for early submissions!{" "}
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf8wOmOfBkmyhlCyfVI3zmBvrDaCD3vB_s60JXGW73AlPK6dA/viewform">
                Apply here
              </Link>
              . Applications close on February 7, 2021 at 23:59 (PST).
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={18}
            i={18}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the selection process?"
          >
            <p>
              Fill out the application form and include a referral. Once your
              application is received, you’ll be requested to submit a short
              video submission (maximum 3 minutes). The organisers will carry
              out the necessary due diligence and contact you for any required
              additional information. Successful and unsuccessful applicants
              will be contacted and announced before March 2, 2021.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={19}
            i={19}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Do Fellows need to travel for their project?"
          >
            <p>
              While travel will not be necessary for Fellows as they work on
              their project, Fellows are invited to come to the EF’s annual
              Devcon conference. For information on this year’s Devcon, please
              visit <Link to="https://devcon.org">Devcon.org</Link>
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={20}
            i={20}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are some examples of successful Fellowship projects?"
          >
            <p>
              Fellows’ projects may be diverse, ranging from applications (e.g.,
              Ethereum-based ID solutions for refugees) and research (e.g.,
              usage and challenges of Ethereum in Sub-Saharan Africa), to
              organizational (e.g., establishing a “blockchain working group”
              within an organisation), and beyond.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={21}
            i={21}
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
          <H2>About You</H2>
          <HR />
          <AccordionSection
            key={22}
            i={22}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are the eligibility criteria for being a Fellow?"
          >
            <p>
              Due to staff limitations, this pilot program <i>cannot</i> choose
              someone who:
            </p>
            <ul>
              <li>Is under 18 years old</li>
              <li>Does not communicate in English</li>
            </ul>
            <p>
              The Ethereum Foundation is seeking to expand the reach and
              accessibility of the program for the future cohorts.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={23}
            i={23}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What kind of educational background & skills are required?"
          >
            <p>
              We will not require formal education or specific skills. Our
              emphasis is on the candidate's impact, leadership and
              entrepreneurship abilities.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={24}
            i={24}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Do I need to submit letters of recommendation?"
          >
            <p>
              In our pilot year, candidates must be recommended to the program
              in order to be considered for a Fellowship.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={25}
            i={25}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Where do I need to live to apply?"
          >
            <p>
              While we’re focusing on individuals living and working in
              developing countries, emerging and frontier markets, we’re looking
              for a diverse group of Fellows from all over the world.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={26}
            i={26}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="How can I recommend a Fellow?"
          >
            <p>
              If you are interested in recommending a Fellow, please fill out{" "}
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf8wOmOfBkmyhlCyfVI3zmBvrDaCD3vB_s60JXGW73AlPK6dA/viewform">
                this form
              </Link>{" "}
              to the best of your ability, and schedule a call with us{" "}
              <Link to="https://calendly.com/effp">here</Link>.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={27}
            i={27}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What stage does my project need to be in?"
          >
            <p>
              At this time, we are looking for projects in their early-middle
              stages. We encourage you to keep building on these ideas and apply
              at a later date.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={28}
            i={28}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What if my project changes during the Fellowship?"
          >
            <p>
              The organisers will work with you to develop or join another
              project.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={29}
            i={29}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="I am a journalist looking to interview someone in EF’s leadership; how can I get in touch with someone?"
          >
            <p>
              For interview requests, please fill out{" "}
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf8wOmOfBkmyhlCyfVI3zmBvrDaCD3vB_s60JXGW73AlPK6dA/viewform">
                this form
              </Link>
              .
            </p>
          </AccordionSection>
          <HR />
        </PageBody>
      </div>
    </>
  )
}

export default FAQPage
