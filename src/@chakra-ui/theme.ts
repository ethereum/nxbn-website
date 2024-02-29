// TODO: SETUP CHAKRA CONFIG
import { extendBaseTheme } from '@chakra-ui/react';
import type { ThemeConfig } from "@chakra-ui/react"

// import components from "./components"
import { colors, fonts, textStyles } from "@/@chakra-ui/foundations"
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
  colors,
  config,
  fonts,
  semanticTokens: {
    colors: {
      body: { _light: 'background', _dark: 'background' },
      bg: { _light: 'background', _dark: 'background' }
    }
  },
  styles: {
    global: () => ({
      body: {
        bg: 'bg',
        transition: 'all 200ms linear !important'
      }
    })
  },
  textStyles,
}

export default extendBaseTheme(theme)