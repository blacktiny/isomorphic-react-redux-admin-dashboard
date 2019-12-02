import styled from 'styled-components';

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  background: ${props => (props.bg ? props.bg : '#fff')};
`;
export const LeftSide = styled.div``;
export const RightSide = styled.div``;
