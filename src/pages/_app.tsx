import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

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
          <ThirdwebProvider desiredChainId={activeChainId}>
            <Component {...pageProps} />
          </ThirdwebProvider>
        </QueryClientProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
