import styled from 'styled-components';
import { grid } from '@iso/assets/styles/constants';

export const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? '#e6eaf8' : 'inherit'};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: 0 20px 20px;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
`;

export const DropZone = styled.div`
  /* stop the list collapsing when empty */
  min-height: 350px;
  /*
    not relying on the items for a margin-bottom
    as it will collapse when the list is empty
  */
  margin-bottom: ${grid}px;
`;

export const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 180px);
`;
