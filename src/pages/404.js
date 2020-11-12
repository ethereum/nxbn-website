import React from "react"

import PageMetadata from "../components/PageMetadata"
import { PageBodyNoBanner } from "../components/SharedStyledComponents"

const NotFoundPage = () => {
  return (
    <>
      <PageMetadata title="Page not found" />
      <PageBodyNoBanner>
        <h1>Page not found</h1>
        <p>You just hit a route that doesn't exist... the sadness.</p>
      </PageBodyNoBanner>
    </>
  )
}

export default NotFoundPage
