import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LocationWrapper = styled.div`
  width: 100%;
  padding: 52px 0;

  @media only screen and (max-width: 480px) {
    padding-bottom: 15px;
  }
`;

export const CarouselSection = styled.div`
  width: calc(100% + 60px);
  margin-left: -30px;

  .react-multi-carousel-list {
    overflow: unset;

    /* .react-multi-carousel-track {
      width: 100%;
    } */

    .react-multi-carousel-item {
      padding: 0 10px;
      transition: transform 0.3s ease;

      .image_card {
        > a {
          @media only screen and (max-width: 1600px) {
            height: 350px;
          }
          @media only screen and (max-width: 1440px) {
            height: 320px;
          }
          @media only screen and (max-width: 1200px) {
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

    .react-multiple-carousel__arrow,
    .react-multiple-carousel__arrow {
      opacity: 0;
      visibility: hidden;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${themeGet('color.1', '#ffffff')};
      box-shadow: 0 3px 6px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};
      transition: background-color 0.2s ease;

      &::before {
        color: ${themeGet('primary.0', '#008489')};
      }

      &:hover {
        background-color: ${themeGet('primary.0', '#008489')};
        &::before {
          color: ${themeGet('color.1', '#ffffff')};
        }
      }
    }

    &:hover {
      .react-multiple-carousel__arrow,
      .react-multiple-carousel__arrow {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export default LocationWrapper;
