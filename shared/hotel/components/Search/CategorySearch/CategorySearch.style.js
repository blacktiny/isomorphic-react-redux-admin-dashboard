import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CategroySearchWrapper = styled.div`
  display: flex;
  align-items: center;

  .view_with__popup {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }

    .popup_handler {
      button,
      button.ant-btn {
        height: 38px;
        font-size: 15px;
        border-radius: 3px;
        color: ${themeGet('text.0', '#2C2C2C')};
        border: 1px solid ${themeGet('border.3', '#E6E6E6')};
        &:hover {
          background-color: ${themeGet('border.3', '#E6E6E6')};
        }
        &::after {
          content: none;
        }
      }
    }

    &.active {
      .popup_handler {
        button,
        button.ant-btn {
          color: ${themeGet('color.1', '#ffffff')};
          border-color: ${themeGet('primary.0', '#008489')};
          background-color: ${themeGet('primary.0', '#008489')};
        }

        & + .popup_container {
          margin-top: 15px;
          border: 1px solid ${themeGet('border.3', '#E6E6E6')};
        }
      }

      &::after {
        content: '';
        display: block;
        position: fixed;
        left: 0;
        top: 70px;
        background-color: rgba(255, 255, 255, 0.9);
        width: 100%;
        min-height: 100vh;
        pointer-events: none;
      }
    }

    &.activated {
      .popup_handler {
        button,
        button.ant-btn {
          color: ${themeGet('color.1', '#ffffff')};
          border-color: ${themeGet('primary.0', '#008489')};
          background-color: ${themeGet('primary.0', '#008489')};
        }
      }
    }

    .popup_container {
      #popup {
        > div {
          > button,
          > .ant-btn {
            color: ${themeGet('text.0', '#2C2C2C')};
            font-size: 15px;
            height: 38px;
            border-radius: 3px;
            border: 1px solid ${themeGet('border.3', '#E6E6E6')};
            &::after {
              content: none;
            }
            &:hover {
              color: ${themeGet('primary.0', '#008489')};
              border-color: ${themeGet('primary.0', '#008489')};
            }
          }
        }
      }
    }
  }

  .date_picker {
    .DateRangePicker {
      display: block;
      width: 100%;
      .DateRangePickerInput {
        width: 100%;
        border-color: ${themeGet('border.3', '#E6E6E6')};
        .DateInput__small {
          width: 102px;
          .DateInput_input__small {
            padding: 12px 10px 10px;
            font-weight: 400;
            color: ${themeGet('text.0', '#2C2C2C')};
          }
        }
      }
    }
  }
`;

export const RoomGuestWrapper = styled.div`
  width: 100%;

  strong {
    font-size: 15px;
    font-weight: 400;
    color: ${themeGet('text.0', '#2C2C2C')};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .quantity {
    height: 22px;
    input {
      font-size: 15px;
    }
    button.btn svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ActionWrapper = styled.div`
  overflow: hidden;
  margin-top: 27px;

  .ant-btn {
    border: 0;
    padding: 0;
    height: auto;
    box-shadow: none;
    font-weight: 600;
    border-radius: 0;
    text-shadow: none;
    color: ${themeGet('text.2', '#777777')};
    border-bottom: 1px solid transparent;
    &:hover {
      color: ${themeGet('text.1', '#909090')};
      border-bottom-color: ${themeGet('text.1', '#909090')};
    }
    &:focus {
      outline: none;
    }

    &.ant-btn-primary {
      float: right;
      border-color: transparent;
      background-color: transparent;
      color: ${themeGet('primary.0', '#008489')};
      &:hover {
        color: ${themeGet('primary.1', '#399C9F')};
        border-bottom-color: ${themeGet('primary.1', '#399C9F')};
      }
    }
    &::after {
      display: none;
    }
    &:not([disabled]):hover {
      text-decoration: underline;
    }
  }
`;

export default CategroySearchWrapper;
