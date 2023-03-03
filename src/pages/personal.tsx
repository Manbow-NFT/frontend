import React from 'react';
import Head from 'next/head';

import NavBar from '../components/NavBar';
import Gallery from '../components/Gallery';

const Personal = () => {
  return (
    <div className="personal-container">
      <Head>
        <title>Personal - manbow-frontend</title>
        <meta property="og:title" content="Personal - manbow-frontend" />
      </Head>
      <NavBar />
      <Gallery />
    </div>
  );
};

export default Personal;
