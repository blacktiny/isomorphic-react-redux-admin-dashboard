import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const StepperWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin-top: -3px;

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  /* steper progress bar style */
  .ant-progress {
    &.ant-progress-line {
      line-height: 1;
    }
    .ant-progress-outer {
      .ant-progress-inner {
        border-radius: 0;
        background-color: ${themeGet('border.3', '#E6E6E6')};

        .ant-progress-bg {
          height: 10px !important;
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
          background-color: ${themeGet('primary.0', '#008489')};
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        }
      }
    }
  }

  /* steper content area style */
  .steps-content {
    flex: 1;
    max-width: 1050px;
    width: 100%;
    margin: 71px auto 104px;
    @media only screen and (max-width: 1050px) {
      padding: 0 30px;
    }
    @media only screen and (max-width: 480px) {
      margin-top: 50px;
    }
    .ant-row {
      margin-bottom: 0;
    }
    .quantity {
      margin-left: -4px;
    }
    .field-container {
      margin-bottom: 22px;
      @media only screen and (max-width: 480px) {
        margin-top: 30px;
        margin-bottom: 0;
      }
      .ant-form-item-label {
        margin-bottom: 9px;
        label {
          font-size: 15px;
          line-height: 18px;
          font-weight: 700;
          color: ${themeGet('text.0', '#2C2C2C')};
        }
      }
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          .ant-form-item-children {
            input {
              height: 47px;
              font-size: 15px;
              border-radius: 3px;
              border-color: ${themeGet('border.3', '#E6E6E6')};
              transition: all 0.3s ease;
              &:focus {
                box-shadow: none;
                border-color: ${themeGet('primary.0', '#008489')};
              }
              &::placeholder {
                color: ${themeGet('text.1', '#909090')};
              }
            }
            textarea {
              font-size: 15px;
              border-radius: 3px;
              border-color: ${themeGet('border.3', '#E6E6E6')};
              transition: all 0.3s ease;
              padding-top: 9px;
              &:focus {
                box-shadow: none;
                border-color: ${themeGet('primary.0', '#008489')};
              }
              &::placeholder {
                color: ${themeGet('text.1', '#909090')};
              }
            }
          }
        }
      }
    }
  }

  /* steper action area style */
  .steps-action {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9;
    background-color: ${themeGet('color.1', '#ffffff')};
    .inner-wrapper {
      padding: 30px 0;
      margin: 0 auto;
      max-width: 1050px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid ${themeGet('border.3', '#E6E6E6')};
      @media only screen and (max-width: 1050px) {
        margin-left: 30px;
        width: calc(100% - 60px);
      }
    }
    button {
      font-size: 15px;
      font-weight: 700;
      height: 47px;
      border-radius: 3px;
      min-width: 93px;
      font-family: 'Lato', sans-serif;
      color: ${themeGet('primary.0', '#008489')};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover,
      &:focus {
        outline: 0;
        box-shadow: none;
        opacity: 0.9;
      }
      &.back-step-btn {
        border: 0;
        background-color: transparent;
        min-width: auto;
        width: auto;
        padding: 0;
        svg {
          margin-right: 4px;
          width: 18px;
          height: 18px;
        }
      }
      &.next-step-btn,
      &.submit-btn {
        color: ${themeGet('color.1', '#ffffff')};
        border-color: ${themeGet('primary.0', '#008489')};
        background-color: ${themeGet('primary.0', '#008489')};
      }
    }
  }
`;

export const UploaderWrapper = styled.div`
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
  }

  /* uploader style */
  .drag_and_drop_uploader {
    .ant-upload {
      min-height: 197px;
      &.ant-upload-drag {
        border-color: ${themeGet('border.3', '#E6E6E6')};
        background-color: ${themeGet('color.1', '#ffffff')};
        &:hover {
          border-color: ${themeGet('primary.0', '#008489')};
        }
        .ant-upload-drag-icon {
          font-size: 48px;
          line-height: 1;
          margin-bottom: 0;
          color: ${themeGet('border.3', '#E6E6E6')};
        }
        .ant-upload-text {
          margin-bottom: 0;
          font-size: 17px;
          color: ${themeGet('text.1', '#909090')};
          font-weight: 700;
          line-height: 34px;
          span {
            text-decoration: underline;
          }
        }
      }
    }

    /* uploaded image style */
    .ant-upload-list {
      padding-top: 15px;
      .ant-upload-list-item {
        height: 40px;
        margin-top: 0;
        line-height: 40px;
        &.ant-upload-list-item-done {
          .ant-upload-list-item-info {
            a {
              color: ${themeGet('primary.0', '#008489')};
            }
          }
        }
        .ant-upload-list-item-info {
          font-size: 15px;
          font-weight: 600;
          border-radius: 3px;
          .anticon-paper-clip {
            font-size: 15px;
            top: 12px;
          }
        }
        &:hover {
          .ant-upload-list-item-info {
            background-color: ${themeGet('color.2', '#F7F7F7')};
          }
        }
        .anticon-close {
          font-size: 15px;
          top: 12px;
        }
      }
    }
  }
`;

export const LocationWrapper = styled.div`
  > .field-container {
    margin-bottom: 45px;

    + div[style] {
      @media only screen and (max-width: 480px) {
        margin-top: 30px;
      }
    }
  }
  .hotel-form-location {
    margin-top: 45px;
  }
`;

export const AmenitiesWrapper = styled.div`
  .ant-radio-group {
    .ant-radio-wrapper {
      margin-right: 49px;
      span {
        color: ${themeGet('text.0', '#2C2C2C')};
        font-size: 13px;
        line-height: 16px;
      }
      .ant-radio {
        .ant-radio-input:focus + .ant-radio-inner {
          box-shadow: none;
        }
        .ant-radio-inner {
          border-color: ${themeGet('text.1', '#909090')};
          &:focus {
            outline: none;
          }
          &::after {
            width: 12px;
            height: 12px;
            left: 1px;
            top: 1px;
            border-radius: 30px;
          }
        }
        &.ant-radio-checked {
          &::after {
            display: none;
          }
          .ant-radio-inner {
            border-color: ${themeGet('primary.0', '#008489')};
            &::after {
              background-color: ${themeGet('primary.0', '#008489')};
            }
          }
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const HeaderSection = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  line-height: 30px;
  font-weight: 700;
  color: ${themeGet('text.0', '#2C2C2C')};
  margin-bottom: 9px;
  @media only screen and (max-width: 991px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
  span {
    font-weight: 400;
    color: ${themeGet('text.1', '#909090')};
  }
`;

export const Description = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
`;

export default StepperWrapper;
