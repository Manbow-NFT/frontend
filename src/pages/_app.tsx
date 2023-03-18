import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CHAIN_ID } from '../constants/constants';
import '../styles/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 576,
                sm: 768,
                md: 992,
                lg: 1200,
                xl: 1600, // default is 1400
              },
            },
          },
        },
      }}
    >
      <NotificationsProvider position="bottom-center">
        <QueryClientProvider client={queryClient}>
          <ThirdwebProvider activeChain={CHAIN_ID}>
            <Component {...pageProps} />
          </ThirdwebProvider>
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
