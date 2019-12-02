import styled from 'styled-components';
import { palette } from 'styled-theme';

const LoaderComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10000000000;
  top: 0;
  right: 0;

  @media only screen and (min-width: 768px) and (max-width: 1220px) {
    width: calc(100% - 80px);
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  .isoContentLoader {
    width: 50px;
    height: 50px;
    animation: svgSpinner 1.4s linear infinite;
  }

  .isoContentLoaderCircle {
    animation: svgSpinnerCircle 1.4s ease-in-out infinite;
    stroke-dasharray: 80px, 200px;
    stroke-dashoffset: 0px;
    stroke: ${palette('primary', 0)};
    stroke-linecap: round;
  }

  @keyframes svgSpinner {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes svgSpinnerCircle {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -120px;
    }
  }
`;

export default LoaderComponent;
