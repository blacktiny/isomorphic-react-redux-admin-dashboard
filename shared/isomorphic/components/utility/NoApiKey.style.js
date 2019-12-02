import styled from 'styled-components';
import { palette } from 'styled-theme';

const HelperText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: auto;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: ${palette('text', 2)};
    margin: 0;
  }
`;

export default HelperText;
