import ScholarsClosed from "@/layouts/ScholarsClosed"
import ScholarsOpen from "@/layouts/ScholarsOpen"

import { SCHOLARS_PROGRAM_OPEN } from "@/utils/constants"

const ScholarsPage = () => {
  return SCHOLARS_PROGRAM_OPEN ? <ScholarsOpen /> : <ScholarsClosed />
}

export default ScholarsPage
