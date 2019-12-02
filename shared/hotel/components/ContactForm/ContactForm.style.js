import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FormWrapper = styled.div`
  .field-container {
    .ant-form-item {
      .ant-form-item-label {
        label {
          font-size: 15px;
          font-weight: 700;
          color: ${themeGet('text.0', '#2C2C2C')};
          line-height: 1;
        }
      }

      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          .ant-input {
            border-radius: 3px;
            border-color: ${themeGet('border.3', '#e6e6e6')};
            height: 47px;

            &:focus {
              box-shadow: none;
            }
          }

          textarea.ant-input {
            height: auto;
            min-height: 115px;
          }

          .ant-form-explain {
            margin: 5px 0 10px;
          }

          &.has-success {
            .ant-form-item-children-icon {
              color: ${themeGet('primary.0', '#008489')};
            }
          }
        }
      }
    }
  }

  button[type='submit'] {
    border-radius: 3px;
    height: 47px;
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};
    font-size: 15px;
    font-weight: 700;
    text-transform: capitalize;
    padding-left: 28px;
    padding-right: 28px;
    line-height: 1;

    &::after {
      content: none;
    }
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 41px;

  .field-container {
    .ant-form-item {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }

  .ant-checkbox-wrapper {
    .ant-checkbox {
      .ant-checkbox-inner {
        border-radius: 0;
        border-color: ${themeGet('text.1', '#909090')};
      }

      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          border-color: ${themeGet('primary.0', '#008489')};
          background-color: ${themeGet('primary.0', '#008489')};
        }
      }
    }
  }
`;

export default FormWrapper;
