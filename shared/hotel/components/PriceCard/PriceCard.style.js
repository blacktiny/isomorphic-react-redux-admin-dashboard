import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PriceCardWrapper = styled.div`
  border-radius: 3px;
  position: relative;
  border: 1px solid ${themeGet('border.3', '#E6E6E6')};
  transition: box-shadow 0.3s ease;

  &:hover {
    border-color: 0;
    box-shadow: 0 0 30px ${themeGet('boxShadow.1', 'rgba(0, 0, 0, 0.16)')};

    button {
      color: ${themeGet('color.1', '#ffffff')};
      background-color: ${themeGet('primary.0', '#008489')};
    }
  }
`;

export const PricingHeader = styled.div`
  padding: 27px 29px;
  background-color: ${themeGet('color.2', '#F7F7F7')};
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 18px;
  font-weight: 700;
`;

export const Price = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 0;
`;

export const PricingList = styled.ul`
  margin: 0;
  padding: 29px 30px 30px;
  margin-bottom: 97px;

  li {
    margin-bottom: 14px;
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 13px;
    line-height: 18px;
    > span {
      margin-left: 15px;
    }
    .anticon-check-circle {
      color: ${themeGet('primary.0', '#008489')};
    }
    .anticon-close-circle {
      color: ${themeGet('color.4', '#FC5C63')};
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PriceAction = styled.div`
  padding: 30px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  background-color: ${themeGet('color.1', '#ffffff')};
`;

export const Button = styled.button`
  cursor: pointer;
  min-width: 104px;
  min-height: 37px;
  border: 0;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  border-radius: 3px;
  color: ${themeGet('text.0', '#2C2C2C')};
  background-color: ${themeGet('color.2', '#F7F7F7')};
  transition: background-color 0.25s ease;
`;

export default PriceCardWrapper;
