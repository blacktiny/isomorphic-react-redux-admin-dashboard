import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const LogoArea = styled.div`
  h3 {
    color: ${themeGet('primary.0', '#008489')};
    text-transform: capitalize;
    font-size: 22px;
    font-weight: 700;
  }
`;

export default LogoArea;
