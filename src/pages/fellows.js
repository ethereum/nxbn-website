import React from "react";
import * as styles from "../utils/styles"
import styled from "styled-components"
import Link from "../components/Link"
import {
  PageBody,
  PageHeader,
  Center,
  H1,
  H2,
} from "../components/SharedStyledComponents"
import { StaticImage } from "gatsby-plugin-image"

const ModifiedH2 = styled(H2)`
  margin-bottom: 40px;
  padding-top: 0px;
  font-size: 20px;
`;

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
    <>
      <PageHeader>
        <H1>
          Fellows
        </H1>
      </PageHeader>

      <PageBody>
        <Section>
          <Center>
            <ModifiedH2>Fellowship Program cohort 3 Alumni</ModifiedH2>
          </Center>
            <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Brian.jpeg"
                  alt="Fellow: Brian Limiardi"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                Brian Limiardi builds for financial inclusion in Indonesia as co-founder of Copra. 
                While access to personal loans is available through banks, there are many contexts 
                in which the only way to get a loan for business is through informal lenders (read: loan sharks). 
                For folks that choose to work and invoice in cryptocurrency, access to even simple 
                legacy financial tools like personal or small business loans can be an obstacle. For his Fellowship, 
                Brian will focus on researching the needs and realities of the growing demographic 
                of workers and small businesses who use crypto as a primary means 
                of invoicing and bookkeeping.
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Devansh.jpeg"
                  alt="Fellow: Devansh Mehta"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                  Devansh Mehta, co-founder of <Link to="https://voicedeck.org/">VoiceDeck</Link>, is interested in mapping out public good impact space. 
                  Impact methodologies and markets for environmental use cases are well-documented mechanisms, 
                  but sometimes ‘impact’ wanders into more subjective territory: 
                  Investigative journalism, for example, is undoubtedly a public good. 
                  How can the real work of journalists be documented and valued in a way that fits into the right funding mechanism? 
                  Devansh will work with citizen journalism newsrooms to explore methodologies of impact documentation using the 
                  {" "}
                  <Link to="https://hypercerts.org/">hypercerts standard, </Link>
                  with an aim to find a good mechanism of retroactive funding for positive social outcomes. 
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Masa.jpeg"
                  alt="Fellow: Masa Fukuhara"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                  Masahiro (Masa) Fukuhara wants to spread the spirit of ONGAESHI, (恩返し, "To return a favor") 
                  in the world of education.
                  {" "}
                  <Link to="https://www.lp.ongaeshi-pj.jp/en">ONGAESHI DAO</Link> is exploring mechanisms of retroactive solidarity payments 
                  in education and employment. For his Fellowship, Masa and other ONGAESHI DAO team members will 
                  learn from pilot programs in which contributors to the public good of education like 
                  funders and teachers are rewarded when businesses hire their students.  
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Mulenga.jpeg"
                  alt="Fellow: Mulenga Kapwepwe"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                  Mulenga Kapwepwe is co-founder of the Women’s History Museum of Zambia. 
                  There are many African artifacts in museums around the world, but rarely do those items 
                  have a tangible connection to the people and communities who created them. 
                  For her Fellowship, Mulenga is working with the Zambian web3 community to 
                  create a tokenized artifact registry, experimenting with museum revenue sharing for 
                  community documentation of art, customs, and crafting methodologies still practiced 
                  by the descendants of those items on display in museums around the world. 
                  Even if the items won’t return to their places of origin in the near future, 
                  it’s a small step toward bridging a gap of ownership that spans centuries.
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/valeriia.jpeg"
                  alt="Fellow: Valeriia Panina"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                Valeriia is a user experience specialist and an advisor to the 
                Ukraine's Ministry of Digital Transformation. 
                The war in Ukraine has shown that ingenuity and tenacity in human coordination is essential. 
                When understanding the potential of protocols like Ethereum to be useful in such a time, 
                pragmatism is wise. During her Fellowship, Ria will research the 
                real drivers and blockers of adoption of cryptocurrencies and other decentralized applications for 
                ordinary users to map emergent use cases and behaviors in Ukraine.
                </p>
              </Profile>
          <Center>
            <ModifiedH2>Fellowship Program cohort 2 Alumni</ModifiedH2>
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
              Brú Finance is a new platform that aims to provide harvest-time loans 
              for farmers in India. For his Fellowship project,
              Abhishek learned from the launch of Brú's platform to
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
              During her Fellowship, Gabriela conducted pilots in Mexico and Venezuela
              and used the research to help improve Bloinx for larger scales.
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
              Karam conducted research that increases practical and culturally-sensitive understandings of
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
              With a focus in Guatemala, Marcus
              explored the real-world barriers to physical asset financing for DeFi,
              and compiled his finding into 
              the {" "} <Link to="https://marcus.mirror.xyz/nFmYxl7DkZF655eCFz7Z4QlrOZ5ycg7Ny5gDcMpQ-tQ"> "Last Mile DeFi Report"</Link>.
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
              Mary’s fellowship explored what new cryptographic mechanisms
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
              and how the scouts might employ novel coordination mechanisms for grassroots organization. You can read more about 
              Mihajlo's work 
              {" "}
              <Link to="https://blog.ethereum.org/2023/05/01/scouting-future-movement"> in this blogpost.</Link>
            </p>
          </Profile>
          <Center>
            <ModifiedH2>Fellowship Program cohort 1 Alumni</ModifiedH2>
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
    </>
  )
}

export default Fellows;