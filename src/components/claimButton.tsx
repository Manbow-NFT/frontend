import React, { useMemo, useState } from 'react';
import { Button, Text, Flex, NumberInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import {
  useContract,
  useAddress,
  useNetwork,
  useNetworkMismatch,
  useChainId,
} from '@thirdweb-dev/react';
import { useMutation } from '@tanstack/react-query';
import { CHAIN_ID, CONTRACT_ADDRESS } from '../constants/constants';

const ClaimButton = () => {
  const { contract } = useContract(CONTRACT_ADDRESS, 'edition-drop');
  const address = useAddress();
  const walletChainId = useChainId();
  const tokenId = 0;
  const [quantity, setQuantity] = useState(1);
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
      await contract?.claim(tokenId, quantity);
    },
    {
      onSuccess: (res) => {
        if (res == '__NETWORK_SWITCHED__') {
          return;
        }
        showNotification({
          title: 'Successfully bought!',
          message: 'You successfully bought the Manbow NFT.',
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

export default ClaimButton;
