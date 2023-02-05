import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';

const Top = (props: any) => {
  return (
    <>
      <div className="top-container">
        <Head>
          <title>Acrobatic Only Gerbil</title>
          <meta property="og:title" content="Acrobatic Only Gerbil" />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .top-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  );
};

export default Top;
