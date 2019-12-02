import styled from 'styled-components';
import { grid, colors, borderRadius } from '@iso/assets/styles/constants';

export const Container = styled.div`
  box-sizing: border-box;
  margin: ${grid}px;
  display: flex;
  flex-direction: column;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  .ant-form {
    margin-top: 14px;
  }
  .ant-form-item {
    margin-bottom: 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: ${borderRadius}px;
  border-top-right-radius: ${borderRadius}px;
  background-color: ${({ isDragging }) =>
    isDragging ? colors.blue.lighter : colors.grey.dark};
  margin-top: 16px;
  margin-bottom: 16px;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: ${colors.blue.lighter};
  }
`;
