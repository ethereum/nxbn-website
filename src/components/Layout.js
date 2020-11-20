import React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { ToastProvider } from "react-toast-notifications"

import Footer from "./Footer"
import Nav from "./Nav"
import "./layout.css"
import * as styles from "../utils/styles"

const duration = 0.5

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Border = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;

  background: #d7e7b9; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #d7e7b9 0%,
    #95c7ed 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #d7e7b9 0%,
    #95c7ed 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #d7e7b9 0%,
    #95c7ed 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d7e7b9', endColorstr='#95c7ed',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`

// Need an additional border w/ higher z-index
const BorderTop = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 15px;

  background: #d7e7b9; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #d7e7b9 0%,
    #b4d1da 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #d7e7b9 0%,
    #b4d1da 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #d7e7b9 0%,
    #b4d1da 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d7e7b9', endColorstr='#95c7ed',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`

const ContentContainer = styled.div`
  position: absolute;
  width: calc(100% - 30px); /* account for Border */
  margin: 15px;
  box-sizing: border-box;
  background: ${styles.colorWhite};
  z-index: 1;
`

const Main = styled(motion.main)`
  padding-top: 75px;
  /* lines (25px * 2) + footer (87.5px) = 137.6px */
  min-height: calc(100vh - 137.5px);
  @media (max-width: ${styles.screenSizeS}) {
    /* lines (18px * 2) + footer (53px) = 89px */
    min-height: calc(100vh - 89px);
  }
`

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasNavShadow: false,
    }
  }

  // TODO all this `hasNavShadow` logic should be in <Nav />
  // I couldn't figure out how to make <Nav /> a class component
  // & still use staticQuery for the image loading
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll)

    // add smooth scroll behavior for anchor links
    // https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.pageYOffset <= 20 && this.state.hasNavShadow) {
      this.setState({ hasNavShadow: false })
    }
    if (window.pageYOffset > 20 && !this.state.hasNavShadow) {
      this.setState({ hasNavShadow: true })
    }
  }

  render() {
    return (
      <ToastProvider>
        <Border />
        <BorderTop />
        <Nav hasShadow={this.state.hasNavShadow} />
        <ContentContainer>
          <AnimatePresence>
            <Main
              variants={variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {this.props.children}
            </Main>
          </AnimatePresence>
          <Footer />
        </ContentContainer>
      </ToastProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
