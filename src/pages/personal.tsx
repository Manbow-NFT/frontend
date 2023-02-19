import React from 'react';
import Head from 'next/head';

import NavBar from '../components/navBar';
import Gallery from '../components/gallery';
import Footer from '../components/footer';

const Personal = () => {
  return (
    <div className="personal-container">
      <Head>
        <title>Personal - manbow-frontend</title>
        <meta property="og:title" content="Personal - manbow-frontend" />
      </Head>
      <NavBar />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Personal;
