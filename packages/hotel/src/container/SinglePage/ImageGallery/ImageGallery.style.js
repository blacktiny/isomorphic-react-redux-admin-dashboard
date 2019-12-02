import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const ImageGalleryWrapper = styled.div`
  .image-gallery-slides {
    border-radius: 3px;
    box-shadow: 0 2px 25px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};
  }

  .image-gallery-left-nav,
  .image-gallery-right-nav {
    width: 61px;
    height: 61px;
    padding: 0;
    display: flex;
    font-size: 42px;
    overflow: hidden;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    transition: 0.15s ease;
    top: calc(50% - 61px / 2);
    background-color: ${themeGet('color.1', '#ffffff')};
    box-shadow: 0 3px 16px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};

    @media only screen and (max-width: 1440px) {
      opacity: 0;
      width: 45px;
      height: 45px;
      font-size: 28px;
      visibility: hidden;
      top: calc(50% - 45px / 2);
    }

    @media only screen and (max-width: 480px) {
      width: 40px;
      height: 40px;
      font-size: 24px;
      top: calc(50% - 40px / 2);
    }

    @media only screen and (max-width: 767px) {
      opacity: 1;
      visibility: visible;
    }

    &:before {
      text-shadow: none;
      color: ${themeGet('text.1', '#909090')};
    }

    &:hover {
      background-color: ${themeGet('color.2', '#F7F7F7')};
      &:before {
        color: ${themeGet('text.1', '#909090')};
      }
    }
  }

  .image-gallery-left-nav {
    left: -120px;

    @media only screen and (max-width: 1440px) {
      left: 30px;
    }

    @media only screen and (max-width: 480px) {
      left: 25px;
    }
  }

  .image-gallery-right-nav {
    right: -120px;

    @media only screen and (max-width: 1440px) {
      right: 30px;
    }

    @media only screen and (max-width: 480px) {
      right: 25px;
    }
  }

  @media only screen and (max-width: 1440px) {
    &:hover {
      .image-gallery-left-nav,
      .image-gallery-right-nav {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .image-gallery-index {
    padding: 0;
    font-size: 15px;
    font-weight: 700;
    position: static;
    margin: 30px 0 16px 0;
    background-color: transparent;
    color: ${themeGet('text.0', '#2C2C2C')};

    &:after {
      content: 'photos';
      display: inline-block;
      margin-left: 0.25em;
    }
  }

  .image-gallery-thumbnails-wrapper {
    .image-gallery-thumbnails {
      padding: 0;

      .image-gallery-thumbnail {
        width: 150px;
        padding: 0;
        margin: 0 20px 0 0;
        border: 0;
        border-radius: 3px;
        overflow: hidden;
        position: relative;

        &.active {
          border: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: ${themeGet('color.1', '#ffffff')};
          opacity: 0.7;
          z-index: 1;
          transform: scaleX(1);
          transform-origin: left center 0px;
          transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68) 0s;
        }

        &:hover,
        &.active {
          &:before {
            transform: scaleX(0);
            transform-origin: right center 0px;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
      }
    }
  }
`;

export default ImageGalleryWrapper;
