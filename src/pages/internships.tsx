import InternshipsOpen from "@/layouts/InternshipsOpen"
import InternshipsClosed from "@/layouts/InternshipsClosed"

import { INTERNSHIPS_PROGRAM_OPEN } from "@/utils/constants"

const InternshipsPage = () => {
  return INTERNSHIPS_PROGRAM_OPEN ? <InternshipsOpen /> : <InternshipsClosed />
}

export default InternshipsPage
