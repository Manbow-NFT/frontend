import React from 'react';
import Head from 'next/head';

import NavBar from '../components/nav-bar';
import GalleryCard from '../components/gallery-card';
import Footer from '../components/footer';

const Personal = (props: any) => {
  return (
    <>
      <div className="personal-container">
        <Head>
          <title>Personal - manbow-frontend-teleporthq</title>
          <meta
            property="og:title"
            content="Personal - manbow-frontend-teleporthq"
          />
        </Head>
        <NavBar />
        <div className="personal-body">
          <div className="personal-container1">
            <h2 className="personal-text Heading">banri.eth &apos;s Sunfish</h2>
            <div className="personal-container2">
              <button className="personal-merge-button button">
                <span className="personal-text01 Content">Merge</span>
              </button>
            </div>
            <div className="personal-container3">
              <button className="personal-button button">
                <span className="Content">
                  <span className="personal-text03">All</span>
                  <span> 32</span>
                </span>
              </button>
              <button className="personal-button1 button">
                <span className="personal-text05 Content">
                  <span className="personal-text06">Alive</span>
                  <span> 30</span>
                  <br></br>
                </span>
              </button>
              <button className="personal-button2 button">
                <span className="personal-text09 Content">
                  <span className="personal-text10">Die</span>
                  <span> 2</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="personal-gallery">
            <GalleryCard rootClassName="rootClassName"></GalleryCard>
            <GalleryCard rootClassName="rootClassName9"></GalleryCard>
            <GalleryCard rootClassName="rootClassName8"></GalleryCard>
            <GalleryCard rootClassName="rootClassName7"></GalleryCard>
            <GalleryCard rootClassName="rootClassName6"></GalleryCard>
            <GalleryCard rootClassName="rootClassName5"></GalleryCard>
            <GalleryCard rootClassName="rootClassName4"></GalleryCard>
            <GalleryCard rootClassName="rootClassName3"></GalleryCard>
            <GalleryCard rootClassName="rootClassName2"></GalleryCard>
            <GalleryCard rootClassName="rootClassName1"></GalleryCard>
            <GalleryCard rootClassName="rootClassName22"></GalleryCard>
            <GalleryCard rootClassName="rootClassName21"></GalleryCard>
            <GalleryCard rootClassName="rootClassName20"></GalleryCard>
            <GalleryCard rootClassName="rootClassName19"></GalleryCard>
            <GalleryCard rootClassName="rootClassName18"></GalleryCard>
            <GalleryCard rootClassName="rootClassName17"></GalleryCard>
            <GalleryCard rootClassName="rootClassName16"></GalleryCard>
            <GalleryCard rootClassName="rootClassName15"></GalleryCard>
            <GalleryCard rootClassName="rootClassName14"></GalleryCard>
            <GalleryCard rootClassName="rootClassName13"></GalleryCard>
            <GalleryCard rootClassName="rootClassName12"></GalleryCard>
            <GalleryCard rootClassName="rootClassName11"></GalleryCard>
            <GalleryCard rootClassName="rootClassName10"></GalleryCard>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </>
  );
};

export default Personal;
