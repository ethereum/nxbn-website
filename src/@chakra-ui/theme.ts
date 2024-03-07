import { extendBaseTheme } from '@chakra-ui/react';
import type { ThemeConfig } from "@chakra-ui/react"

import { Heading } from '@/@chakra-ui/components'
import { colors, fonts, textStyles } from "@/@chakra-ui/foundations"

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
  components: {
    Heading
  },
  config,
  fonts,
  styles: {
    global: () => ({
      body: {
        background: 'background',
        transition: 'all 200ms linear !important'
      }
    })
  },
  textStyles,
}

export default extendBaseTheme(theme)