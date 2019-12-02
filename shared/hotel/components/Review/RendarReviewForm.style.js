import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ReviewFormWrapper = styled.div`
  .field-container {
    margin-bottom: 58px;
    @media only screen and (max-width: 1200px) {
      margin-bottom: 50px;
    }
    @media only screen and (max-width: 991px) {
      margin-bottom: 30px;
    }

    &:first-child {
      .ant-row {
        &.ant-form-item {
          margin-bottom: 0;
          .ant-col {
            &.ant-form-item-control-wrapper {
              margin-bottom: -20px;
            }
          }
        }
      }
    }

    .ant-form-item {
      @media only screen and (max-width: 991px) {
        margin-bottom: 10px;
      }
      @media only screen and (max-width: 767px) {
        margin-bottom: 0;
      }

      .ant-form-item-label {
        line-height: 1;
        margin-bottom: 20px;
        @media only screen and (max-width: 767px) {
          margin-bottom: 10px;
        }

        label {
          color: ${themeGet('text.0', '#2C2C2C')};
          font-size: 15px;
          line-height: 18px;
          font-weight: 700;
          @media only screen and (max-width: 480px) {
            font-size: 14px;
          }
        }
      }
    }

    .ant-input {
      border-color: ${themeGet('border.3', '#E6E6E6')};
      border-radius: 3px;
      padding: 10px 15px;
      font-size: 15px;
      font-weight: 400;
      color: ${themeGet('text.0', '#2C2C2C')};
      @media only screen and (max-width: 480px) {
        font-size: 14px;
      }

      &::placeholder {
        font-size: 15px;
        font-weight: 400;
        color: ${themeGet('text.1', '#909090')};
        @media only screen and (max-width: 480px) {
          font-size: 14px;
        }
      }

      &:focus {
        box-shadow: none;
        border-color: ${themeGet('primary.0', '#008489')};
      }
    }

    input {
      &.ant-input {
        height: 47px;
      }
    }
  }

  .overall_rating_stars {
    .ant-rate-star {
      margin-right: 2px;
      @media only screen and (max-wdith: 1200px) {
        margin-right: 1px;
        font-size: 28px;
      }
      @media only screen and (max-width: 991px) {
        margin-right: 1px;
        font-size: 24px;
      }
    }

    &.overall_rating_stars1 {
      @media only screen and (max-width: 767px) {
        margin-top: -10px;
      }
    }
  }

  .ant-radio-group {
    margin-bottom: -15px;

    .ant-radio-button-wrapper {
      border: 0;
      border-radius: 3px;
      background-color: ${themeGet('color.2', '#F7F7F7')};
      margin-right: 15px;
      margin-bottom: 15px;
      font-size: 15px;
      font-weight: 400;
      color: ${themeGet('text.0', '#2C2C2C')};
      outline: 0;
      height: 37px;
      line-height: 37px;
      transition: 0.2s ease-in-out;
      @media only screen and (max-width: 480px) {
        font-size: 14px;
      }

      &:not(:first-child) {
        &:before {
          display: none;
        }
      }

      &:first-child,
      &:last-child {
        border: 0;
        border-radius: 3px;
      }

      &:not(.ant-radio-button-wrapper-checked) {
        &:hover {
          color: ${themeGet('text.0', '#2C2C2C')};
          box-shadow: 0 3px 6px ${themeGet('border.1', 'rgba(0, 0, 0, 0.16)')};
        }
      }

      &.ant-radio-button-wrapper-checked,
      .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        background-color: ${themeGet('primary.0', '#008489')};
        color: ${themeGet('color.1', '#ffffff')};
        box-shadow: none;

        &:active {
          background-color: ${themeGet('primary.0', '#008489')};
          color: ${themeGet('color.1', '#ffffff')};
        }
      }
    }
  }

  .ant-checkbox-wrapper {
    display: flex;
    align-items: baseline;
    font-size: 15px;
    color: ${themeGet('text.1', '#909090')};
    line-height: 1.6;
    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }

    .ant-checkbox {
      top: 3px;
      margin-right: 8px;
      .ant-checkbox-inner {
        border-color: ${themeGet('text.1', '#909090')};
      }
      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          background-color: ${themeGet('primary.0', '#008489')};
          border-color: ${themeGet('primary.0', '#008489')};
        }
        &:after {
          display: none;
        }
      }
    }
  }

  .submit-container {
    margin-top: 60px;
    @media only screen and (max-width: 991px) {
      margin-top: 50px;
    }

    button {
      font-size: 15px;
      font-weight: 700;
      color: ${themeGet('text.0', '#2C2C2C')};
      background-color: ${themeGet('color.1', '#ffffff')};
      border-radius: 3px;
      padding: 8px 15px;
      height: auto;
      border: 0;
      margin-right: 15px;
      @media only screen and (max-width: 480px) {
        font-size: 14px;
      }

      &.fill_button {
        background-color: ${themeGet('primary.0', '#008489')};
        color: ${themeGet('color.1', '#ffffff')};
      }

      &:after {
        display: none;
      }
    }
  }

  .ant-row-flex {
    .field-container {
      @media only screen and (max-width: 1200px) {
        margin-bottom: 30px;
        .ant-form-item-label {
          margin-bottom: 10px;
        }
        .overall_rating_stars {
          font-size: 24px !important;
        }
      }
      @media only screen and (max-width: 767px) {
        margin-bottom: 10px;
        .ant-form-item-label {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

export const Label = styled.h3`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const GroupTitle = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 1.2;
  font-weight: 700;
  margin-bottom: 10px;
  @media only screen and (max-width: 1260px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }

  span {
    color: ${themeGet('text.1', '#909090')};
    font-weight: 400;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 60px;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
`;

export const Description = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 18px;
  font-weight: 400;
  @media only screen and (max-width: 767px) {
    line-height: 24px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TripType = styled.div`
  margin-bottom: 58px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

export const RadioGroup = styled.div`
  margin-bottom: 60px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  }

  .ant-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media only screen and (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
    }

    h3 {
      margin-bottom: 0;
      @media only screen and (max-width: 991px) {
        margin-bottom: 20px;
      }
    }

    .ant-radio-button-wrapper {
      min-width: 90px;
      text-align: center;
    }
  }
`;

export const UploadPhoto = styled.div`
  margin-bottom: 55px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 50px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 40px;
  }

  .drag_and_drop_uploader {
    /* uploader style */
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

export default ReviewFormWrapper;
