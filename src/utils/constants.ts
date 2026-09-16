// Header links
export const FELLOWSHIP_PAGE = "/fellowship"
export const SCHOLARS_PAGE = "/scholars"
export const INTERNSHIPS_PAGE = "/internships"
export const ABOUT_PAGE = "/about"
export const BLOG_PAGE = "https://blog.ethereum.org/category/next-billion"

// Footer links
export const ETHEREUM_DOT_ORG_LINK = "https://ethereum.org/"
export const ETHEREUM_FOUNDATION_LINK = "https://ethereum.foundation/"
export const PRIVACY_POLICY_LINK = "https://ethereum.org/en/privacy-policy/"
export const TERMS_OF_USE_LINK = "https://ethereum.org/en/terms-of-use/"
export const COOKIE_POLICY_PAGE = "/cookie-policy"
export const CONTENT_DIR = "public/content"

export const MARKDOWN_CONTENT_MAX_WIDTH = 800

export const FELLOW_LIST_PAGINATION_LIMIT = 8

export const IMAGE_ZOOM_TRANSITION_STYLE_CONSTANT = {
  transition: "transform 0.3s ease-in-out",
}

export const IMAGE_ZOOM_HOVER_STYLE_CONSTANT = {
  transform: "scale(1.02)",
}

/**
 * Breathing room below the sticky header, added in db167f1.
 *
 * `ImageHero` pulls the hero up to sit under the header, so its offset has to
 * cancel this margin as well or an empty band appears above the hero art.
 * Both read this value so they cannot drift apart.
 */
export const HEADER_BOTTOM_MARGIN = "2rem"
