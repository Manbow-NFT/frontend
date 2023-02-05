import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import GalleryCard from '../components/gallery-card'
import Footer from '../components/footer'

const Personal = (props: any) => {
  return (
    <>
      <div className="personal-container">
        <Head>
          <title>Personal - Acrobatic Only Gerbil</title>
          <meta
            property="og:title"
            content="Personal - Acrobatic Only Gerbil"
          />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="personal-body">
          <div className="personal-container1">
            <h1 className="personal-text">banri.eth &apos;s Sunfish</h1>
            <div className="personal-container2">
              <button className="personal-button button">Merge</button>
            </div>
            <div className="personal-container3">
              <button className="personal-button1 button">
                <span>
                  <span className="personal-text02">All</span>
                  <span> 32</span>
                </span>
              </button>
              <button className="personal-button2 button">
                <span className="personal-text04">
                  <span className="personal-text05">Alive</span>
                  <span> 30</span>
                  <br></br>
                </span>
              </button>
              <button className="personal-button3 button">
                <span className="personal-text08">
                  <span className="personal-text09">Die</span>
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
      <style jsx>
        {`
          .personal-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .personal-body {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .personal-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: flex-start;
          }
          .personal-text {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .personal-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .personal-button {
            color: var(--dl-color-gray-white);
            font-size: 16px;
            align-self: flex-end;
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            padding-left: 1.5rem;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 1.5rem;
            background-color: var(--dl-color-primary-300);
          }
          .personal-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .personal-button1 {
            font-weight: 400;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: 0px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2.5px;
          }
          .personal-text02 {
            font-style: normal;
            font-weight: 600;
          }
          .personal-button2 {
            font-weight: 400;
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            border-radius: 0px;
          }
          .personal-text04 {
            color: var(--dl-color-gray-500);
          }
          .personal-text05 {
            font-style: normal;
            font-weight: 600;
          }
          .personal-button3 {
            font-weight: 400;
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            border-radius: 0px;
          }
          .personal-text08 {
            color: var(--dl-color-gray-500);
          }
          .personal-text09 {
            font-style: normal;
            font-weight: 600;
          }
          .personal-gallery {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-unit);
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .personal-gallery {
              grid-template-columns: 1fr 1fr 1fr 1fr;
            }
          }
          @media (max-width: 479px) {
            .personal-body {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .personal-gallery {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Personal
