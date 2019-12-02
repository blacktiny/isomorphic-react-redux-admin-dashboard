import styled from 'styled-components';
import { palette } from 'styled-theme';

const ListCardWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: ${palette('color', 1)};
`;

export const ImageWrapper = styled.div`
  width: 360px;
  position: relative;
  > img {
    max-width: 100%;
    border-radius: 4px;
  }

  .glide--slider {
    .glide__track {
      .glide__slides {
        .glide__slide {
          img {
            border-radius: 4px;
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
          fill: ${palette('color', 1)};
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
        background-color: ${palette('color', 3)};
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        &.glide__bullet--active {
          width: 8px;
          height: 8px;
          background-color: ${palette('color', 1)};
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
`;

export const FavoriteIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 14px;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 360px);
  padding: 29px 30px 30px;
`;

export const TitleArea = styled.div`
  color: ${palette('text', 0)};
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 2px;
`;

export const PriceArea = styled.div`
  color: ${palette('text', 0)};
  font-size: 13px;
  font-weight: 400;
`;

export const RatingArea = styled.div`
  display: flex;
  align-items: center;
  color: ${palette('text', 0)};
  font-size: 13px;
  margin-top: 2px;
  i {
    color: ${palette('primary', 0)};
  }
  svg {
    fill: ${palette('primary', 0)};
  }
  strong {
    font-weight: 700;
    margin-left: 8px;
  }
`;

export const FeatureList = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .icon_card {
    padding: 0;
    margin: 10px 30px 0 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    &:last-of-type {
      margin-right: 0;
    }
    > div {
      display: flex;
      align-items: center;
      font-size: 13px;
      &:last-child {
        margin-top: 0;
      }
      svg {
        width: auto;
        height: 20px;
        margin-right: 11px;
      }
    }
  }
`;

export const ActionArea = styled.div`
  margin-top: 25px;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 115px;
    min-height: 37px;
    line-height: 37px;
    border-radius: 3px;
    font-size: 15px;
    font-weight: 700;
    color: ${palette('color', 1)};
    background-color: ${palette('primary', 0)};
    transition: opacity 0.3s ease;
    &:hover {
      text-decoration: none;
      opacity: 0.9;
    }
  }
`;

export default ListCardWrapper;
