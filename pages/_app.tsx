import { store } from '@src/store';
import ApplicationContextProvider from '@src/store/ApplicationContext';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'styles/index.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    // @ts-ignore
    <ApplicationContextProvider>
      {/* @ts-ignore */}
      <Provider store={store}>
        {/* @ts-ignore */}
        <ThemeProvider theme={theme}>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </ApplicationContextProvider>
  );
}

export default MyApp;
