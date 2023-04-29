import React from 'react';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/globals';
import theme from '@/styles/theme';

const poppins = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className={poppins.className}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
