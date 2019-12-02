import styled, { css } from 'styled-components';

const ContainerWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: none !important;
    `};
  ${props =>
    (props.noGutter &&
      css`
        padding-left: 0;
        padding-right: 0;
      `) ||
    css`
      padding-left: 30px;
      padding-right: 30px;

      @media only screen and (max-width: 480px) {
        padding-left: 25px;
        padding-right: 25px;
      }
    `};

  ${props =>
    props.fluid &&
    css`
      width: 100% !important;
      max-width: 100% !important;
      @media only screen and (min-width: 1441px) {
        padding-left: 75px;
        padding-right: 75px;
      }
    `}
  @media (min-width: 768px) {
    max-width: 750px;
    width: 100%;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    width: 100%;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
    width: 100%;
  }
`;

export default ContainerWrapper;
