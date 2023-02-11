import React from 'react';
import Head from 'next/head';

import { NavBar } from '../components/nav-bar';
import Footer from '../components/footer';

const Top = (props: any) => {
  return (
    <>
      <div className="top-container">
        <Head>
          <title>manbow-frontend-teleporthq</title>
          <meta property="og:title" content="manbow-frontend-teleporthq" />
        </Head>
        <NavBar
          links={[
            {
              link: 'https://en.wikipedia.org/wiki/Ocean_sunfish',
              label: 'Wikipedia',
            },
          ]}
        />
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </>
  );
};

export default Top;
