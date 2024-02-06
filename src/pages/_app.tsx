import { AppProps } from 'next/app'

import { RootLayout } from "@/layouts"
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/@chakra-ui/theme'

export default function App({ Component, pageProps }: AppProps) {
  // TODO: implement matomo

  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  )
}
