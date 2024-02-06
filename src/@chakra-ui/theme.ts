// TODO: SETUP CHAKRA CONFIG
import { extendBaseTheme } from '@chakra-ui/react';
import type { ThemeConfig } from "@chakra-ui/react"

// import components from "./components"
// import foundations from "./foundations"
// import semanticTokens from "./semanticTokens"
// import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
}

/**
 * Override default styles with our custom theme.
 *
 * The complete list of default Chakra styles can be found here:
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src
 */
const theme = {
  config,
  styles: {
    global: () => ({
      body: {
        bg: 'bg',
        transition: 'all 200ms linear !important'
      }
    })
  },
//   ...foundations,
  semanticTokens: {
    colors: {
      body: { _light: '#1451A9', _dark: '#1451A9' },
      bg: { _light: '#1451A9', _dark: '#1451A9' }
    }
  },
//   components,
}

export default extendBaseTheme(theme)