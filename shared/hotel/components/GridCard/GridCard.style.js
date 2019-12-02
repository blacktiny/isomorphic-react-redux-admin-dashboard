import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GridCardWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }

  &.has_btn {
    .button_group {
      position: absolute;
      top: 5px;
      padding-top: 3px;
    }
  }

  &:hover {
    &.has_btn {
      .meta_wrapper {
        .price,
        .rating {
          opacity: 0;
          visibility: hidden;
        }
      }
      .button_group {
        top: 0;
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  > img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .glide--slider {
    min-height: 120px;
    overflow: hidden;

    @media only screen and (max-width: 375px) {
      min-height: auto;
    }

    .glide__track {
      .glide__slides {
        .glide__slide {
          height: 170px;
          background-color: ${themeGet('color.3', '#E9E8E8')};
          img {
            border-radius: 4px;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .glide__controls {
      .glide__prev--area,
      .glide__next--area {
        position: absolute;
        top: 0;
        width: 22%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;

        svg {
          width: 28px;
          height: auto;
          fill: ${themeGet('color.1', '#ffffff')};
        }
      }

      .glide__prev--area {
        left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }

      .glide__next--area {
        right: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }

    .glide__bullets {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .glide__bullet {
        width: 6px;
        height: 6px;
        background-color: ${themeGet('color.3', '#E9E8E8')};
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        &.glide__bullet--active {
          width: 8px;
          height: 8px;
          background-color: ${themeGet('color.1', '#ffffff')};
        }
      }
    }

    &:hover {
      .glide__controls {
        .glide__prev--area,
        .glide__next--area {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  .react-multi-carousel-list {
    min-height: 150px;
    border-radius: 4px;
    background-color: #e9e8ec;

    .react-multi-carousel-track {
      .react-multi-carousel-item {
        height: 170px;
        @media only screen and (max-width: 375px) {
          height: 152px;
        }
      }
    }

    .react-multiple-carousel__arrow {
      top: 0;
      width: 22%;
      height: 100%;
      border-radius: 0;
      padding: 0;
      opacity: 0;
      visibility: hidden;
      z-index: 1;

      &::before {
        font-weight: 700;
      }

      &.react-multiple-carousel__arrow--left {
        left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background: linear-gradient(
          to left,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }

      &.react-multiple-carousel__arrow--right {
        right: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background: linear-gradient(
          to right,
          transparent 0%,
          rgba(0, 0, 0, 0.25) 100%
        );
      }
    }

    &:hover {
      .react-multiple-carousel__arrow {
        opacity: 1;
        visibility: visible;
      }
    }

    .react-multi-carousel-dot-list {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-bottom: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      .react-multi-carousel-dot {
        align-items: center;

        button {
          width: 6px;
          height: 6px;
          border: 0;
          background-color: ${themeGet('color.3', '#E9E8E8')};
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        &.react-multi-carousel-dot--active {
          button {
            width: 8px;
            height: 8px;
            background-color: ${themeGet('color.1', '#ffffff')};
          }
        }
      }
    }
  }
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 8px;
  z-index: 9;
`;

export const ContentWrapper = styled.div`
  margin-top: 7px;
`;

export const LocationArea = styled.div`
  color: ${themeGet('text.1', '#909090')};
  font-size: 13px;
  font-weight: 400;
`;

export const TitleArea = styled.div`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 2px;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
    margin: 4px 0 5px;
  }

  a {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 2px;

    &:hover {
      color: ${themeGet('primary.0', '#008489')};
    }

    @media only screen and (max-width: 480px) {
      font-size: 15px;
      margin: 4px 0 5px;
    }
  }
`;

export const PriceArea = styled.div`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 13px;
  font-weight: 400;
  margin-top: 1px;
`;

export const RatingArea = styled.div`
  display: flex;
  align-items: center;
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 13px;
  margin-top: 2px;

  i {
    color: ${themeGet('primary.0', '#008489')};
  }

  svg {
    fill: ${themeGet('primary.0', '#008489')};
  }

  strong {
    font-weight: 700;
    margin-left: 8px;
  }

  .ant-rate {
    margin-top: -2px;
    .ant-rate-star {
      margin-right: 4px;
      font-size: 15px;
    }
  }
`;

export const MetaWrapper = styled.div`
  position: relative;
  transition: all 0.3s ease-out;
`;

export const ButtonGroup = styled.div`
  opacity: 0;
  visibility: hidden;
  padding-top: 7px;
  transition: all 0.3s ease;

  > a {
    min-width: 115px;
    height: 37px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    font-size: 15px;
    font-weight: 700;
    color: ${themeGet('color.1', '#ffffff')};
    border-radius: 3px;
    background-color: ${themeGet('primary.0', '#008489')};
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      opacity: 0.87;
      color: ${themeGet('color.1', '#ffffff')};
    }
  }
`;

export default GridCardWrapper;
