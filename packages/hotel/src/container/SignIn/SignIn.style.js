import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const SignInWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SignInFormWrapper = styled.div`
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

    svg {
      width: 18px;
      height: 18px;
      margin-right: 2px;
    }

    &::after {
      content: none;
    }

    &:hover,
    &:focus {
      border-color: #008489d1;
      background-color: #008489d1;
    }
  }

  .ant-divider {
    margin: 41px 0 !important;
    .ant-divider-inner-text {
      font-size: 15px;
      font-weight: 700;
      color: ${themeGet('text.2', '#777777')};
    }
  }

  .ant-btn {
    &.facebook-btn,
    &.github-btn,
    &.firebase-btn,
    &.google-btn {
      height: 57px;
      border-radius: 3px;
      font-size: 15px;
      font-weight: 700;
      &::after {
        content: none;
      }
    }

    &.facebook-btn {
      border-color: ${themeGet('color.7', '#3b5998')};
      background-color: ${themeGet('color.7', '#3b5998')};
    }

    &.github-btn {
      border-color: ${themeGet('color.14', '#00ACEE')};
      background-color: ${themeGet('color.14', '#00ACEE')};
    }

    &.firebase-btn {
      border-color: ${themeGet('color', '#FFCB2B')};
      background-color: ${themeGet('color', '#FFCB2B')};
    }

    &.google-btn {
      border-color: ${themeGet('color.10', '#dd4b39')};
      background-color: ${themeGet('color.10', '#dd4b39')};
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
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const SignInBannerWrapper = styled.div`
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

export const Text = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: ${themeGet('text.2', '#777777')};
  line-height: 1;
  a {
    color: ${themeGet('primary.0', '#008489')};
    &:hover,
    &:focus {
      outline: none;
      color: #008489d1;
      text-decoration: none;
    }
  }
`;

export default SignInWrapper;
