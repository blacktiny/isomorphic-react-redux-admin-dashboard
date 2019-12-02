import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionTitleWrapper = styled.div`
  h2,
  a {
    margin: 0;
  }

  h2 {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 25px;
    line-height: 30px;
    font-weight: 700;

    @media only screen and (max-width: 480px) {
      font-size: 17px;
      line-height: 21px;
    }
  }

  a {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 17px;
    line-height: 21px;
    font-weight: 400;

    @media only screen and (max-width: 480px) {
      font-size: 15px;
      line-height: 20px;
    }

    &:hover {
      color: ${themeGet('primary.0', '#008489')};
    }
  }
`;

export default SectionTitleWrapper;
