import styled from 'styled-components';
import { base } from '../../Base';

const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 30px 0;

  @media only screen and (max-width: 480px) {
    margin: 15px 0 20px;
  }

  ${base}
`;

export const TitleWrapper = styled.div``;

export const LinkWrapper = styled.div``;

export default SectionTitleWrapper;
