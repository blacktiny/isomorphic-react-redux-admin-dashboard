import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const GridWrapper = styled.div`
  width: 100%;
`;

export const LoadMoreWrapper = styled.div`
  text-align: center;

  button,
  .ant-btn,
  .ant-btn-primary {
    min-width: 115px;
    height: 37px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    font-size: 15px;
    font-weight: 700;
    color: ${themeGet('color.1', '#ffffff')};
    border-radius: 3px;
    border: 0;
    box-shadow: none;
    background-color: ${themeGet('primary.0', '#008489')};
    transition: all 0.3s ease;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      box-shadow: none;
      background-color: ${themeGet('primary.0', '#008489')};
      opacity: 0.88;
    }
  }
`;

export default GridWrapper;
