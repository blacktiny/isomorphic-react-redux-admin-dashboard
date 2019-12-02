import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 890px;
  padding: 0 25px;
  margin: 60px auto;

  img {
    max-width: 560px;
    @media only screen and (min-width: 1901px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 667px) {
      max-width: 100%;
    }
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 18px;
    font-weight: 700px;
    margin: 56px auto 30px;
    color: ${themeGet('primary.0', '#008489')};
  }

  a {
    height: 37px;
    padding: 0 14px;
    font-size: 15px;
    box-shadow: none;
    font-weight: 700;
    text-shadow: none;
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    color: ${themeGet('color.1', '#ffffff')};
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};
    &:focus,
    &:hover {
      outline: 0;
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.1', '#399C9F')};
      background-color: ${themeGet('primary.1', '#399C9F')};
    }
  }
`;

export default NotFoundWrapper;
