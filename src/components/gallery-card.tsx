import React from 'react'

import PropTypes from 'prop-types'

const GalleryCard = (props: any) => {
  return (
    <>
      <div className={`gallery-card-gallery-card ${props: any.rootClassName} `}>
        <img
          alt={props: any.image_alt}
          src={props: any.image_src}
          className="gallery-card-image"
        />
      </div>
      <style jsx>
        {`
          .gallery-card-gallery-card {
            width: 100%;
            display: flex;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .gallery-card-image {
            width: 100%;
            height: 100%;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .gallery-card-root-class-name {
            height: auto;
          }
          .gallery-card-root-class-name1 {
            height: auto;
          }
          .gallery-card-root-class-name2 {
            height: auto;
          }
          .gallery-card-root-class-name3 {
            height: auto;
          }
          .gallery-card-root-class-name4 {
            height: auto;
          }
          .gallery-card-root-class-name5 {
            height: auto;
          }
          .gallery-card-root-class-name6 {
            height: auto;
          }
          .gallery-card-root-class-name7 {
            height: auto;
          }
          .gallery-card-root-class-name8 {
            height: auto;
          }
          .gallery-card-root-class-name9 {
            height: auto;
          }
          .gallery-card-root-class-name10 {
            height: auto;
          }
          .gallery-card-root-class-name11 {
            height: auto;
          }
          .gallery-card-root-class-name12 {
            height: auto;
          }
          .gallery-card-root-class-name13 {
            height: auto;
          }
          .gallery-card-root-class-name14 {
            height: auto;
          }
          .gallery-card-root-class-name15 {
            height: auto;
          }
          .gallery-card-root-class-name16 {
            height: auto;
          }
          .gallery-card-root-class-name17 {
            height: auto;
          }
          .gallery-card-root-class-name18 {
            height: auto;
          }
          .gallery-card-root-class-name19 {
            height: auto;
          }
          .gallery-card-root-class-name20 {
            height: auto;
          }
          .gallery-card-root-class-name21 {
            height: auto;
          }
          .gallery-card-root-class-name22 {
            height: auto;
          }
          @media (max-width: 479px) {
            .gallery-card-image {
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

GalleryCard.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: '/playground_assets/sunfish-1500w.jpg',
}

GalleryCard.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard
