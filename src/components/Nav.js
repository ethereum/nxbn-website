import React from "react"
import { useRef } from "react"
import { motion, useCycle, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import MobileNavMenu from "./MobileNavMenu"
import MobileNavLinks from "./MobileNavLinks"
import Link from "./Link"
import * as styles from "../utils/styles"

const StyledNav = styled(motion.nav)`
  position: fixed;
  z-index: 100;
  background: #ffffff;
  width: 100%;
  padding: 15px 50px 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavLinkMain = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
  margin-right: 20px;
  padding: 0 0 10px 0;
`

const NavLinks = styled.div`
  /* Hide & display MenuToggle */
  @media (max-width: ${styles.screenSizeL}) {
    display: none;
  }
`

const NavLink = styled(Link)`
  color: black;
  font-size: 18px;
  margin-right: 20px;
  padding: 0 0 10px 0;
  display: inline-block;
  position: relative;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${styles.colorOrange};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`

const NavLogoText = styled.div`
  margin: 0;
  margin-left: 5px;
  @media (max-width: ${styles.screenSizeL}) {
    display: flex;
    flex-direction: column;
  }
`

// Mobile
const backgroundVariants = {
  open: {
    clipPath: `circle(1400px at 200px 0px)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(24px at 200px -10px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
}

const MobileNavBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${styles.colorGrayLightest};
`

const navItems = [
  { to: "/", text: "Home" },
  { to: "/faq/", text: "FAQ" },
]

const Nav = ({ hasShadow }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "favicons/114.png" }) {
        childImageSharp {
          fixed(width: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null) // TODO is this needed?

  return (
    <StyledNav
      className={hasShadow ? "nav-shadow" : ""}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <div>
        <NavLinkMain to="/">
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Ethereum Foundation Fellowship Program Logo"
          />
          <NavLogoText>Fellowship Program</NavLogoText>
        </NavLinkMain>
      </div>
      {/* Desktop */}
      <NavLinks>
        {navItems.map((item, idx) => {
          return (
            <NavLink to={item.to} key={idx}>
              {item.text}
            </NavLink>
          )
        })}
      </NavLinks>
      {/* Mobile */}
      <MobileNavBackground variants={backgroundVariants} />
      <AnimatePresence>
        {isOpen && (
          <MobileNavLinks
            navItems={navItems}
            key="navigation"
            toggle={() => toggleOpen()}
          />
        )}
      </AnimatePresence>
      <MobileNavMenu toggle={() => toggleOpen()} />
    </StyledNav>
  )
}

export default Nav
