import React, { useMemo, useState } from 'react';
import { Button, Text, Flex, Loader, NumberInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  useContract,
  useAddress,
  useNetwork,
  useNetworkMismatch,
  useChainId,
  ChainId,
} from '@thirdweb-dev/react';
import { useMutation } from '@tanstack/react-query';

const claimButton = () => {
  const chainId = ChainId.Goerli;
  const address = useAddress();
  const walletChainId = useChainId();
  const tokenId = 0;
  const [quantity, setQuantity] = useState(1);
  const [, switchNetwork] = useNetwork();
  const hasMismatch = useNetworkMismatch();
  const contractAddress = '0xE4B86B6f3eb2E660b0799c04Ce300419Fa859036';
  const { contract } = useContract(contractAddress, 'edition-drop');

  const switchToChainId = useMemo(() => {
    if (walletChainId && chainId !== walletChainId) {
      return chainId;
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
      await contract?.claim(tokenId, quantity);
    },
    {
      onSuccess: (res) => {
        if (res == '__NETWORK_SWITCHED__') {
          return;
        }
        showNotification({
          title: 'Successfully bought!',
          message: 'You successfully bought the NFT.',
          color: 'blue',
          autoClose: 5000,
        });
      },
      onError: (err) => {
        console.log(err);
        showNotification({
          title: 'Failed to buy',
          message: 'you failed to buy. Something went wrong.',
          color: 'red',
          autoClose: 9000,
        });
      },
    }
  );

  if (!address) {
    return <Text>"Connect Wallet"</Text>;
  }

  const willSwitchNetwork = hasMismatch && !!switchNetwork;

  const buttonText = (() => {
    if (willSwitchNetwork) {
      return 'Switch Network';
      // } else if (!contract || mutation.isLoading) {
      //   return <Loader scale="sm" />;
    } else {
      return 'Buy';
    }
  })();

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      wrap="nowrap"
      gap="md"
    >
      <NumberInput
        value={quantity}
        onChange={(value) => (value ? setQuantity(value) : setQuantity(1))}
        defaultValue={1}
        min={1}
        max={100}
      />
      <Button
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={() => mutation.mutate()}
        loading={mutation.isLoading || !contract}
      >
        {buttonText}
      </Button>
    </Flex>
  );
};

export default claimButton;
