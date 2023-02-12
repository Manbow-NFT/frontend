import React, { useState } from 'react';
import Head from 'next/head';

import { showNotification } from '@mantine/notifications';
import { useContract, useAddress } from '@thirdweb-dev/react';
import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { Button, Container, Flex, Loader, NumberInput } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';

const Top: React.FC = () => {
  const address = useAddress();
  const tokenId = 0;
  const [quantity, setQuantity] = useState(1);
  const contractAddress = '0xE4B86B6f3eb2E660b0799c04Ce300419Fa859036';
  const { contract, isLoading } = useContract(contractAddress, 'edition-drop');
  const mutation = useMutation(
    async () => {
      await contract?.claim(tokenId, quantity);
    },
    {
      onSuccess: () => {
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
      onSettled: () => {},
    }
  );
  const buttonText = (() => {
    if (address == null) {
      return 'you should connect';
    } else if (isLoading || mutation.isLoading) {
      return <Loader scale="sm" />;
    } else {
      return 'claim button';
    }
  })();

  return (
    <>
      <div className="top-container">
        <Head>
          <title>manbow-frontend</title>
          <meta property="og:title" content="manbow-frontend" />
        </Head>
        <NavBar />
        <Container>
          <Flex>
            <NumberInput
              value={quantity}
              onChange={(value) =>
                value ? setQuantity(value) : setQuantity(1)
              }
              defaultValue={1}
              min={1}
              max={100}
            />
            <Button
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              disabled={address == null || isLoading || mutation.isLoading}
              onClick={() => mutation.mutate()}
            >
              {buttonText}
            </Button>
          </Flex>
        </Container>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </>
  );
};

export default Top;
