import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const LocationWrapper = styled.div`
  padding: 52px 0;
  @media only screen and (max-width: 480px) {
    padding: 70px 0 15px;
  }
`;

export const CarouselSection = styled.div`
  #explore_carousel {
    .glide__track {
      overflow: inherit;
      position: relative;

      &::before,
      &::after {
        display: none;
        content: '';
        position: absolute;
        top: 30px;
        width: 100%;
        height: calc(100% - 60px);
        border-radius: 3px;
        background-color: #f9f8f7;
        opacity: 0.95;
        z-index: 1;

        @media only screen and (min-width: 1441px) {
          display: block;
        }
      }

      &::before {
        left: auto;
        right: calc(100% + 30px);

        @media only screen and (max-width: 1440px) {
          right: calc(100% + 20px);
        }
      }

      &::after {
        right: auto;
        left: calc(100% + 30px);

        @media only screen and (max-width: 1440px) {
          left: calc(100% + 20px);
        }
      }
    }

    .glide__slides {
      padding: 30px 0;
      @media only screen and (max-width: 480px) {
        padding: 0 0 10px;
      }
      .glide__slide {
        transition: transform 0.3s ease;
        .image_card {
          > a {
            @media only screen and (max-width: 1600px) {
              height: 310px;
            }
            @media only screen and (max-width: 1360px) {
              height: 280px;
            }
            @media only screen and (max-width: 1200px) {
              height: 240px;
            }
            @media only screen and (max-width: 991px) {
              height: 270px;
            }
            @media only screen and (max-width: 767px) {
              height: 230px;
            }
            @media only screen and (max-width: 667px) {
              height: 320px;
            }
            @media only screen and (max-width: 480px) {
              height: 250px;
            }
            @media only screen and (max-width: 375px) {
              height: 200px;
            }
          }
        }

        &:hover {
          transform: scale(1.1);
          @media only screen and (max-width: 480px) {
            transform: scale(1.05);
          }
        }
      }
    }

    .glide__controls {
      margin: 0;
      padding: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      .glide__prev--area,
      .glide__next--area {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${themeGet('color.1', '#ffffff')};
        box-shadow: 0 3px 6px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};
        transition: background-color 0.2s ease;
        position: absolute;
        top: calc(50% - 36px / 2);

        svg {
          height: 16px;
          fill: ${themeGet('primary.0', '#008489')};
        }

        &:hover {
          background-color: ${themeGet('primary.0', '#008489')};
          svg {
            fill: ${themeGet('color.1', '#ffffff')};
          }
        }
      }

      .glide__prev--area {
        left: -18px;
      }

      .glide__next--area {
        right: -18px;
      }
    }

    &:hover {
      .glide__controls {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export default LocationWrapper;
