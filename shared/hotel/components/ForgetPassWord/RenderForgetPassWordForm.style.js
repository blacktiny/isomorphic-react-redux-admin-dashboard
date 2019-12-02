import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FormWrapper = styled.div`
  .field-container {
    .ant-form-item {
      .ant-form-item-control-wrapper {
        .ant-form-item-control {
          input {
            &:focus {
              box-shadow: none;
            }
          }
          .ant-form-explain {
            margin: 5px 0 10px;
          }
        }
      }
    }
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 41px;
  margin-bottom: 41px;

  > a {
    color: ${themeGet('primary.0', '#008489')};
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  .ant-switch {
    min-width: 36px;
    height: 21px;
    margin-right: 10px;
    &.ant-switch-checked {
      background-color: ${themeGet('primary.0', '#008489')};
    }
    &::after {
      width: 17px;
      height: 17px;
    }
    &:focus {
      box-shadow: none;
    }
    .ant-click-animating-node {
      display: none;
    }
  }
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
  color: ${themeGet('text.0', '#2C2C2C')};
`;

export default FormWrapper;
