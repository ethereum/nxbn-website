import ScholarClosed from "@/layouts/ScholarClosed"
import ScholarOpen from "@/layouts/ScholarOpen"

import { SCHOLAR_PROGRAM_OPEN } from "@/utils/constants"

const ScholarPage = () => {
  return <>{SCHOLAR_PROGRAM_OPEN ? <ScholarOpen /> : <ScholarClosed />}</>
}

export default ScholarPage
