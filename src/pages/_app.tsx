import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CHAIN_ID } from '../constants/network';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        // fontFamily: 'Inter',
        colorScheme: 'light',
      }}
    >
      <NotificationsProvider position="bottom-center">
        <QueryClientProvider client={queryClient}>
          <ThirdwebProvider desiredChainId={CHAIN_ID}>
            <Component {...pageProps} />
          </ThirdwebProvider>
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
