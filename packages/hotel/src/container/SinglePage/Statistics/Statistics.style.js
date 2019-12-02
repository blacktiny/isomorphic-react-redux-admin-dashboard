import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const StatWrapper = styled.div`
  padding: 29px 0;
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 71px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 300px;

  @media only screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media only screen and (max-width: 767px) {
    min-height: auto;
  }
`;

export const ContentWrapper = styled.div`
  h3 {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-weight: 600;
    margin-bottom: 3px;
  }
  p {
    font-size: 15px;
    line-height: 20px;
    color: ${themeGet('text.0', '#2C2C2C')};
    margin-bottom: 0;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
`;

export const ChartWrapper = styled.div`
  border-radius: 3px;
  padding-top: 30px;
  padding-right: 30px;
  padding-left: 10px;
  border: 1px solid ${themeGet('border.1', '#E6E6E6')};

  .radio_group {
    display: inline-flex;
    align-items: center;
    padding: 5px;
    margin-left: 19px;
    border-radius: 3px;
    margin-bottom: 30px;
    background-color: ${themeGet('color.2', '#F7F7F7')};

    label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 24px;
      font-size: 15px;
      line-height: 18px;
      color: ${themeGet('text.0', '#2C2C2C')};
      border-radius: 3px;
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease;

      input {
        position: absolute;
        visibility: hidden;
        opacity: 0;
      }

      &.active {
        color: ${themeGet('color.0', '#000000')};
        background-color: ${themeGet('color.1', '#ffffff')};
      }
    }
  }

  > div {
    svg {
      width: 100% !important;
      g {
        rect.bar {
          fill: ${themeGet('primary.1', '#399C9F')};
        }
      }
    }
  }
`;

export default StatWrapper;
