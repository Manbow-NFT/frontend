import { Header, Container, Group, Flex, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';
import {
  useAddress,
  useChainId,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
} from '@thirdweb-dev/react';
import Link from 'next/link';
import { useMemo } from 'react';
import { CHAIN_ID } from '../constants/constants';

const HEADER_HEIGHT = 60;

export default function NavBar() {
  const links = [
    {
      link: 'https://opensea.io/collection/fishtanknft',
      label: 'OpenSea',
    },
    {
      link: 'https://etherscan.io/address/0x2d0da0ff93b0ba6055a03aa03dfbbd9d1c3b88d4',
      label: 'Etherscan',
    },
  ];

  const items = links.map((link) => (
    <Button
      key={link.label}
      component="a"
      target="_blank"
      variant="subtle"
      href={link.link}
    >
      {link.label}
    </Button>
  ));

  // const [connecting, setConnecting] = useState(false);
  const address = useAddress();

  const connectWithMetamask = useMetamask();
  const walletChainId = useChainId();
  const [, switchNetwork] = useNetwork();
  const hasMismatch = useNetworkMismatch();

  const switchToChainId = useMemo(() => {
    if (walletChainId && CHAIN_ID !== walletChainId) {
      return CHAIN_ID;
    }
    return null;
  }, [walletChainId]);

  const mutation = useMutation(
    async () => {
      if (switchToChainId) {
        if (switchNetwork) {
          await switchNetwork(switchToChainId);
          return '__NETWORK_SWITCHED__';
        } else {
          throw new Error(
            'need to switch chain but connected wallet does not support switching'
          );
        }
      }
      if (!address) {
        await connectWithMetamask();
      }
    },
    {
      onError: (err) => {
        console.log(err);
        showNotification({
          title: 'Failed to connect wallet',
          message: 'you failed to connect wallet. Something went wrong.',
          color: 'red',
          autoClose: 9000,
        });
      },
    }
  );

  const willSwitchNetwork = hasMismatch && !!switchNetwork;

  const buttonText = (() => {
    if (willSwitchNetwork) {
      return 'Switch Network';
    }
    if (!address) {
      return 'Connect Wallet';
    } else {
      return 'My Manbow';
    }
  })();

  return (
    <Header height={HEADER_HEIGHT} mb={20} pt={5} className="z-10">
      <Container>
        <Flex
          justify="space-between"
          align="center"
          direction="row"
          wrap="nowrap"
        >
          <Link href="/">
            <img
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              height={28}
            />
          </Link>
          <Group spacing={20}>{items}</Group>
          {!address ? (
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              onClick={() => mutation.mutate()}
              loading={mutation.isLoading}
            >
              {buttonText}
            </Button>
          ) : (
            <Link href="/personal">
              <Button
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan' }}
                loading={mutation.isLoading}
              >
                My Manbow
              </Button>
            </Link>
          )}
        </Flex>
      </Container>
    </Header>
  );
}
