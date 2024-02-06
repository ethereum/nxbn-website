// TODO: implement chakra
// import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { RootLayout } from "@/layouts"

// TODO: implement theme
// import theme from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  // TODO: implement matomo

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
