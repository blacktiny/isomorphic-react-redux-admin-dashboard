import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ImageCardWrapper = styled.div`
  > a {
    display: block;
    height: 370px;
    position: relative;
    border-radius: 3px;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export const Title = styled.h4`
  color: ${themeGet('color.1', '#ffffff')};
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const Meta = styled.div`
  color: ${themeGet('color.1', '#ffffff')};
  font-size: 17px;
  line-height: 21px;
  font-weight: 400;
  text-transform: capitalize;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export default ImageCardWrapper;
