"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleCarousel = exports.pictures = void 0;
const pictures = exports.pictures = ["https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"];
const styleCarousel = exports.styleCarousel = {
  parentContainer: {
    width: '25rem'
  },
  container: {
    position: 'relative',
    height: '15rem'
  },
  position: {
    position: 'absolute'
  },
  show: {
    display: 'block'
  },
  hidden: {
    display: 'none'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '.625rem'
  },
  navigation: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    width: '99%',
    margin: '0 auto',
    top: '1rem'
  },
  navIcon: {
    position: 'relative',
    top: '6rem',
    fontSize: '2rem',
    zIndex: '5',
    color: '#000',
    padding: '0.4rem'
  },
  number: {
    position: 'relative',
    textAlign: 'center',
    color: '#000',
    top: '-1.5rem'
  }
};