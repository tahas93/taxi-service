import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'styles/index.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
