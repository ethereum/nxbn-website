import React from "react";
import * as styles from "../utils/styles"
import styled from "styled-components"
import Link from "../components/Link"
import {
  PageBody,
  Center,
  H2,
} from "../components/SharedStyledComponents"
import { StaticImage } from "gatsby-plugin-image"

const Section = styled.div`
  margin-bottom: 84px;
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

const Fellows = () => {
  return (
    <PageBody>
      <Section>
        <FellowsMap>
          <StaticImage
            src="../images/fellowship_schoolyard.png"
            alt="Fellows World Map"
            placeholder="blurred"
            layout="constrained"
          />
        </FellowsMap>
        <Center>
          <H2>Fellowship Program 2022</H2>
        </Center>
        <Profile>

          <StaticImage
            className="img"
            src="../images/headshots/abhishek.png"
            alt="Fellow: Abhishek Bhattacharya"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width="300"
          />
          <p className="description">
            <b>Abhishek Bhattacharya </b>is a co-founder at
            {" "}<Link to="https://bru.finance/">Brú Finance</Link>{" "}.
            Brú Finance works with a partner organization called Whrrl,
            which provides harvest-time loans to 18,000+ farmers across India.
            Whrrl uses a permissioned private blockchain, but for his Fellowship project,
            Abhishek will be overseeing and learning from the launch of a new system to
            a public chain that utilizes decentralized liquidity for the farmers,
            and exploring what this system could look like at a global scale.
          </p>
        </Profile>
        <Profile>
          <StaticImage
            className="img"
            src="../images/headshots/gabriella.png"
            alt="Fellow: Gabriela Guerra"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width="300"
          />
          <p className="description">
            <b>Gabriela Guerra </b>
            founded
            {" "}
            <Link to="https://bloinx.io/">Bloinx</Link>, a startup that implements blockchain-based tandas
            (also known as cundinas, susu, hui, arisan, quiniela, stokvel, and others around the world) – informal savings circles.
            Gabriela is convinced that blockchain can have real benefit
            for the unbanked population of the world, and that savings circles are one good starting mechanism.
            During her Fellowship, Gabriela will conduct pilots in Mexico and Venezuela
            and use the research to help improve Bloinx for larger scales.
          </p>
        </Profile>
        <Profile>
          <StaticImage
            className="img"
            src="../images/headshots/karam.png"
            alt="Fellow: Karam Alhamad"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width="300"
          />
          <p className="description">
            <b>Karam Alhamad </b>
            is an entrepreneur, fintech visionary, international development professional, and human rights policy advocate. Karam founded
            {" "}
            <Link to="https://zefi.com/en">ZeFi, </Link>
            an educational platform and community focused on fostering blockchain education
            and research custom-fit for the Syrian context. For the Fellowship,
            Karam will conduct research that increases practical and culturally-sensitive understandings of
            how blockchains can solve problems in conflict settings.
          </p>
        </Profile>
        <Profile>
          <StaticImage
            className="img"
            src="../images/headshots/marcus.png"
            alt="Fellow: Marcus Alburez Myers"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width="300"
          />
          <p className="description">
            <b>Marcus Alburez Myers </b>
            is  a Guatemalan entrepreneur working to address today's pressing challenges.
            He is currently a Founder-in-Residence at Europe's leading accelerator, Entrepreneur First,
            where he is drawing on the power of web3 to empower marginalized communities.
            Through his work with
            {" "}
            <Link to="https://www.laminapop.com/">Lamina POP, </Link>
            a low-cost housing design project in Guatemala, Marcus will be
            exploring the real-world barriers to physical asset financing for DeFi,
            and will apply his findings to develop a possible solution for housing finance.
          </p>
        </Profile>
        <Profile>
          <StaticImage
            className="img"
            src="../images/headshots/mary.png"
            alt="Fellow: Mary Davies"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width="300"
          />
          <p className="description">
            <b>Mary Davies </b>
            is a legal researcher and technologist based in the Cayman Islands. Mary has been exploring a pressing question:
            If life-extension technology doesn’t pan out over the next few decades, what happens to your crypto when you die?
            Currently there is no trustless or decentralized solution to this question, and this presents a problem.
            Mary’s fellowship will explore what new cryptographic mechanisms
            might enable us to trustlessly transfer assets after death, in a way that is legally compliant.
          </p>
        </Profile>
        <Profile>
          <StaticImage
            className="img"
            src="../images/headshots/mihajlo.png"
            alt="Fellow: Mihajlo Atanackovic"
            placeholder="blurred"
            objectFit="contain"
            layout="fixed"
            width="300"
          />
          <p className="description">
            <b>Mihajlo Atanackovic </b>
            is leading the digital transformation journey of one of the world's biggest non-formal educational youth movements - the
            {" "}
            <Link to="https://www.scout.org/">World Organization of the Scout Movement </Link>
            with 57+ million members from around the globe. To get the Scout Movement ready for web3, he is embarking on an ambitious project involving
            digitalising badges, exploring DAOs for different levels of the Movement,
            and how the scouts might employ novel coordination mechanisms for grassroots organization.
          </p>
        </Profile>
        <Center>
          <H2>Fellowship Program Alumni</H2>
        </Center>
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
            <Link to="https://acreafrica.com/">(Acre Africa)</Link>{" "}
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
    </PageBody>
  )
}

export default Fellows;