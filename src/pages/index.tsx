import React from 'react';
import Head from 'next/head';

import NavBar from '../components/nav-bar';
import Footer from '../components/footer';
import { Container } from '@mantine/core';
import ClaimButton from '../components/claimButton';

const Top: React.FC = () => {
  return (
    <>
      <div className="top-container">
        <Head>
          <title>manbow-frontend</title>
          <meta property="og:title" content="manbow-frontend" />
        </Head>
        <NavBar />
        <Container>
          <ClaimButton />
        </Container>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </>
  );
};

export default Top;
