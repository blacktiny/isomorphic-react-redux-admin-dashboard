import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PricingWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 60px 0;

  @media only screen and (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const PricingHeader = styled.div`
  text-align: center;
  padding: 60px 0;
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 18px;
  font-weight: 700;
`;

export const Description = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 30px;
`;

export const PricingTableArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;

  .price_card {
    width: calc(100% / 3 - 30px);
    margin: 0 15px;

    @media only screen and (max-width: 767px) {
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

export const ButtonGroup = styled.div`
  width: 244px;
  min-height: 47px;
  padding: 5px;
  border-radius: 3px;
  background-color: ${themeGet('color.2', '#F7F7F7')};
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
    min-width: 117px;
    min-height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;

    &.active {
      font-weight: 700;
      border-radius: 3px;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.16);
      background-color: ${themeGet('color.1', '#ffffff')};
    }

    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
    }
  }
`;

export const Button = styled.button``;
export default PricingWrapper;
