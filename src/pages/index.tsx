import React from 'react';
import Head from 'next/head';

import NavBar from '../components/nav-bar';
import Footer from '../components/footer';

const Top = (props: any) => {
  return (
    <>
      <div className="top-container">
        <Head>
          <title>manbow-frontend-teleporthq</title>
          <meta property="og:title" content="manbow-frontend-teleporthq" />
        </Head>
        <NavBar rootClassName="nav-bar-root-class-name1"></NavBar>
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
