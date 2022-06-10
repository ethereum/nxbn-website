import React from "react"

import PageMetadata from "../components/PageMetadata"
import { PageBodyNoBanner } from "../components/SharedStyledComponents"

const ThankYouPage = () => {
  return (
    <>
      <PageMetadata title="Thank you" />
      <PageBodyNoBanner>
        <h1>Thank you!</h1>
        <p>for applying to the Fellowship Program!</p>
        <p>
          You should receive a confirmation email from us soon. If you have any
          questions in the meantime, you can reach us at fellowship@ethereum.org
        </p>
      </PageBodyNoBanner>
    </>
  )
}

export default ThankYouPage
