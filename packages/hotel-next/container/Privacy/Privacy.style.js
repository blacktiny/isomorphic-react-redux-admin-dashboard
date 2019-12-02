import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PageWrapper = styled.div`
  > div {
    margin-top: 60px;
    margin-bottom: 30px;
    border-radius: 3px;
    padding: 58px 60px;
    color: ${themeGet('text.0', '#2C2C2C')};
    background-color: ${themeGet('color.2', '#F7F7F7')};
    @media only screen and (max-width: 991px) {
      margin-top: 45px;
      margin-bottom: 15px;
      padding: 45px 50px;
    }
    @media only screen and (max-width: 767px) {
      padding: 0 30px;
      background-color: transparent;
    }
    @media only screen and (max-width: 480px) {
      padding: 0 25px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 30px;
      margin-bottom: 29px;
    }

    h1,
    h2 {
      font-size: 25px;
      font-weight: 700;
      padding-top: 10px;
      &:first-child {
        padding-top: 0;
      }
    }

    h4,
    h5,
    h6 {
      font-size: 15px;
      padding-top: 20px;
    }

    p {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 27px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      padding: 0;
      margin-bottom: 27px;
      li {
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
`;

export default PageWrapper;
