import React from 'react';
import Head from 'next/head';

import NavBar from '../components/navBar';
import Gallery from '../components/gallery';
import Footer from '../components/footer';
import { Container } from '@mantine/core';

const Personal = (props: any) => {
  return (
    <div className="personal-container">
      <Head>
        <title>Personal - manbow-frontend</title>
        <meta property="og:title" content="Personal - manbow-frontend" />
      </Head>
      <Container>
        <NavBar />
        <Gallery />
        <Footer />
      </Container>
    </div>
  );
};

export default Personal;
