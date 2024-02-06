// TODO: setup chakra
// import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

// TODO: add theme file and setup theme
// import theme from '../theme';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* TODO: add favicon  */}
        {/* TODO: add manifest */}
      </Head>

      <body>
        {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}