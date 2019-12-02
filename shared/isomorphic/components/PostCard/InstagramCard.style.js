import styled from 'styled-components';

const CardWrapper = styled.figure`
  max-width: 370px;
  width: 100%;
  position: relative;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  img + svg {
    position: absolute;
    top: 15px;
    right: 15px;
    width: auto;
    height: 18px;
    fill: #ffffff;
    z-index: 2;
  }
  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all 0.1s ease;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      li {
        display: inline-flex;
        align-items: center;
        margin: 0 20px;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
        svg {
          width: auto;
          height: 18px;
          margin-left: 10px;
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  &:hover {
    figcaption {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default CardWrapper;
