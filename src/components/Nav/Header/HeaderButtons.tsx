import { useRouter } from "next/router"
import { Center, Flex } from "@chakra-ui/react"

import Link from "@/components/Link"

import {
  ABOUT_PAGE,
  BLOG_PAGE,
  FELLOWSHIP_PAGE,
  INTERNSHIPS_PAGE,
  SCHOLARS_PAGE,
} from "@/utils/constants"

const HeaderButtons = ({ onClose }) => {
  const router = useRouter()
  const path = router.asPath

  return (
    <Center
      as={Flex}
      direction={{ base: "column", md: "row" }}
      gap={{ base: 8, md: 4 }}
      mt={{ base: 40, md: 0 }}
    >
      <Link
        href={"/"}
        textStyle={{
          base: path === `/` ? "drawer-link-active" : "drawer-link",
          md: path === `/` ? "header-link-active" : "header-link",
        }}
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        href={FELLOWSHIP_PAGE}
        textStyle={{
          base: path === FELLOWSHIP_PAGE ? "drawer-link-active" : "drawer-link",
          md: path === FELLOWSHIP_PAGE ? "header-link-active" : "header-link",
        }}
        onClick={onClose}
      >
        Fellowship
      </Link>
      <Link
        href={SCHOLARS_PAGE}
        textStyle={{
          base: path === SCHOLARS_PAGE ? "drawer-link-active" : "drawer-link",
          md: path === SCHOLARS_PAGE ? "header-link-active" : "header-link",
        }}
        onClick={onClose}
      >
        Scholars
      </Link>
      <Link
        href={INTERNSHIPS_PAGE}
        textStyle={{
          base: path === INTERNSHIPS_PAGE ? "drawer-link-active" : "drawer-link",
          md: path === INTERNSHIPS_PAGE ? "header-link-active" : "header-link",
        }}
        onClick={onClose}
      >
        Internships
      </Link>
      <Link
        href={ABOUT_PAGE}
        textStyle={{
          base: path === ABOUT_PAGE ? "drawer-link-active" : "drawer-link",
          md: path === ABOUT_PAGE ? "header-link-active" : "header-link",
        }}
        onClick={onClose}
      >
        About
      </Link>
      <Link
        href={BLOG_PAGE}
        textStyle={{
          base: path === BLOG_PAGE ? "drawer-link-active" : "drawer-link",
          md: path === BLOG_PAGE ? "header-link-active" : "header-link",
        }}
        onClick={onClose}
      >
        Blog
      </Link>
    </Center>
  )
}

export default HeaderButtons
