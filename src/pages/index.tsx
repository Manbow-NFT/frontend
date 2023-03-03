import React from 'react';
import Head from 'next/head';

import NavBar from '../components/NavBar';
import { Container } from '@mantine/core';
import ClaimButton from '../components/ClaimButton';

const Top: React.FC = () => {
  return (
    <div className="top-container">
      <Head>
        <title>Manbow NFT</title>
        <meta property="description" content="Manbow is an NFT that ..." />
        <meta property="og:title" content="Manbow NFT" />
        <meta property="og:site_name" content="Manbow NFT" />
        <meta property="og:description" content="Manbow is an NFT that ..." />
        <meta property="og:type" content="website" />
      </Head>
      <NavBar />
      <Container size="md" px={10}>
        <ClaimButton />
      </Container>
    </div>
  );
};

export default Top;
