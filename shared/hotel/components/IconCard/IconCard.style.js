import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const IconCardWrapper = styled.div`
  border-radius: 4px;
  padding: 38px 36px 30px;
  background-color: ${themeGet('color.2', '#F7F7F7')};
  margin-bottom: 20px;
  text-align: ${props => (props.align ? props.align : 'center')};

  @media only screen and (max-width: 480px) {
    padding: 28px 20px 25px;
  }
`;

export const IconWrapper = styled.div`
  svg {
    width: 80px;
    height: auto;
    fill: ${themeGet('primary.0', '#008489')};

    @media only screen and (max-width: 767px) {
      width: 50px;
    }
  }
`;

export const TitleArea = styled.div`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
`;

export default IconCardWrapper;
