import styled, { css, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const addAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.34) rotateY(90deg);
  }
`;

const removeAnimation = keyframes`
  0% {
    transform: scale(1.34) rotateY(90deg);
  }
  50% {
    transform: scale(1) rotateY(0);
  }
`;

const AddAnimation = css`
  animation: ${addAnimation} 0.4s cubic-bezier(0.38, 0.7, 0.6, 0.29);
`;

const RemoveAnimation = css`
  animation: ${removeAnimation} 0.55s cubic-bezier(0.38, 0.7, 0.6, 0.29);
`;

const FavoriteWrapper = styled.button`
  display: inline-block;
  cursor: pointer;
  border: 0;
  padding: 10px;
  background-color: transparent;
  &:hover,
  &:focus {
    border: 0;
    box-shadow: none;
    outline: none;
  }

  svg {
    width: 22px;
    height: 20px;
    ${RemoveAnimation}
    path {
      fill: ${themeGet('color.5', 'rgba(0, 0, 0, 0.25)')};
      stroke: ${themeGet('color.1', '#ffffff')};
      stroke-width: 2px;
      transition: fill 1s ease;
    }
  }

  &.active {
    svg {
      ${AddAnimation};
      path {
        fill: ${themeGet('color.4', '#FC5C63')};
      }
    }
  }
`;

export default FavoriteWrapper;
