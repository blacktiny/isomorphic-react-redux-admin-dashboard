import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StickyBookingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 9999;
  padding: 15px 30px;
  background-color: ${themeGet('color.1', '#ffffff')};
  box-shadow: 0 1px 4px 1px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16')};
`;

export const HotelInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoArea = styled.div`
  padding-left: 27px;

  @media only screen and (max-width: 767px) {
    padding-left: 0;
  }
`;

export const Logo = styled.img`
  height: 28px;
  width: auto;
  position: relative;
  top: 1px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.083em;
  text-transform: uppercase;
  color: ${themeGet('text.0', '#2C2C2C')};
`;

export const HotelRating = styled.div`
  display: flex;
  align-items: center;
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 12px;
  margin-top: 1px;

  i {
    color: ${themeGet('primary.0', '#008489')};
  }

  svg {
    fill: ${themeGet('primary.0', '#008489')};
  }

  strong {
    font-weight: 700;
    margin-left: 7px;
  }

  .ant-rate {
    margin-top: -2px;
    .ant-rate-star {
      margin-right: 4px;
      font-size: 15px;
    }
  }
`;

export const HotelAction = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Price = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33em;
  text-transform: uppercase;
  padding: 10px 32px;
  border-left: 1px solid ${themeGet('border.3', '#E6E6E6')};

  span {
    font-size: 16px;
    line-height: 1.37em;
    color: ${themeGet('text.0', '#2C2C2C')};
  }

  @media only screen and (max-width: 767px) {
    padding: 0;
    border-left: 0;
  }
`;

export const ActionBtn = styled.div`
  > button,
  > button.ant-btn {
    min-width: 156px;
    height: 44px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    border: 0;
    font-size: 12px;
    box-shadow: none;
    font-weight: 700;
    text-shadow: none;
    text-transform: uppercase;
    color: ${themeGet('color.1', '#ffffff')};
    background-color: ${themeGet('primary.0', '#008489')};
    transition: all 0.3s ease;

    @media only screen and (max-width: 375px) {
      min-width: 120px;
    }

    @media only screen and (max-width: 320px) {
      min-width: 90px;
    }

    &::after {
      display: none;
    }

    &:hover {
      outline: none;
      background-color: ${themeGet('primary.1', '#399C9F')};
    }

    &:focus {
      outline: none;
    }
  }
`;

export default StickyBookingWrapper;
