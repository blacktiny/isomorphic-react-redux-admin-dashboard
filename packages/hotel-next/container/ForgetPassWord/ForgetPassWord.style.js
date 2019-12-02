import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ForgetPassWordWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ForgetPassWordFormWrapper = styled.div`
  width: 43%;
  padding: 81px;

  @media only screen and (min-width: 1441px) {
    padding: 130px;
  }

  @media only screen and (max-width: 1200px) {
    width: 50%;
  }

  @media only screen and (max-width: 991px) {
    padding: 56px;
    width: 80%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px;
  }

  .field-container {
    .ant-form-item {
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          .ant-form-item-children {
            input {
              border-radius: 3px;
              border: 1px solid ${themeGet('border.3', '#E6E6E6')};
              height: 57px;
              padding: 6px 20px;
              color: ${themeGet('text.0', '#2C2C2C')};
              font-size: 15px;

              &::placeholder {
                color: ${themeGet('text.2', '#777777')};
              }
            }
          }
        }
      }
    }
  }

  .signin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 57px;
    font-size: 17px;
    font-weight: 700;
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};

    &:hover,
    &:focus {
      border-color: #008489d1;
      background-color: #008489d1;
    }

    svg {
      width: 18px;
      height: 18px;
      margin-right: 2px;
    }

    &::after {
      content: none;
    }
  }
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 45px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 58px;
  @media only screen and (max-width: 1600px) {
    font-size: 38px;
    line-height: 48px;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const TitleInfo = styled.p`
  color: ${themeGet('text.2', '#777777')};
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 45px;
  margin-top: 10px;
  @media only screen and (max-width: 1600px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 18px;
  }

  a {
    &:hover {
      color: #008489d1;
    }
  }
`;

export const ForgetPassWordBannerWrapper = styled.div`
  width: 57%;

  @media only screen and (max-width: 1200px) {
    width: 50%;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }

  > div {
    position: fixed;
    width: 57%;
    top: 0;
    right: 0;
    @media only screen and (max-width: 1200px) {
      width: 50%;
    }
  }
`;

export default ForgetPassWordWrapper;
