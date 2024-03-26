import { AppProps } from 'next/app'

import { RootLayout } from "@/layouts/RootLayout"
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/@chakra-ui/theme'

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        {getLayout(<Component {...pageProps} />)}
      </RootLayout>
    </ChakraProvider>
  )
}
