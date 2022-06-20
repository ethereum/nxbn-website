import React from "react"

import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import { PageBodyNoBanner } from "../components/SharedStyledComponents"
import { FELLOWSHIP_EMAIL } from "../constants"

const ThankYouPage = () => {
  return (
    <>
      <PageMetadata title="Thank you" />
      <PageBodyNoBanner>
        <h1>Thank you!</h1>
        <p>for applying to the Fellowship Program!</p>
        <p>
          You should receive a confirmation email from us soon. If you have any
          questions in the meantime, you can reach us at{" "}
          <Link href={`mailto:${FELLOWSHIP_EMAIL}`}>{FELLOWSHIP_EMAIL}</Link>
        </p>
      </PageBodyNoBanner>
    </>
  )
}

export default ThankYouPage
