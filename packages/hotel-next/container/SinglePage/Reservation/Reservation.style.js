import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ReservationFormWrapper = styled.form`
  padding: 0 30px;
  @media only screen and (max-width: 375px) {
    padding: 0 15px;
  }
`;

export const FieldWrapper = styled.div`
  margin-bottom: 30px;
  @media only screen and (max-width: 375px) {
    margin-bottom: 25px;
  }

  label {
    font-size: 15px;
    color: ${themeGet('text.0', '#2C2C2C')};
    text-transform: capitalize;
    margin-bottom: 7px;
    display: block;
  }

  /* date picker component style */
  .date_picker {
    margin-bottom: 0;
    > label {
      margin-bottom: 0;
      width: 100%;
    }
    .DateRangePicker {
      width: 100%;
      input,
      .DateRangePickerInput {
        border: 0;
        width: 100%;
        height: 54px;
        display: flex;
        padding: 0 15px;
        font-size: 15px;
        font-weight: 400;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        color: ${themeGet('text.0', '#2C2C2C')};
        background-color: ${themeGet('color.2', '#F7F7F7')};
        &::placeholder {
          font-size: 15px;
          color: ${themeGet('text.0', '#2C2C2C')};
        }
        .DateInput {
          width: auto;
          .DateInput_fang {
            top: 46px !important;
          }
        }
        .DateRangePickerInput_arrow {
          & + .DateInput {
            input {
              text-align: right;
            }
          }
        }
      }
      .DateRangePicker_picker {
        top: 56px !important;
        .DayPicker {
          width: 316px !important;
          .DayPicker_focusRegion {
            .DayPicker_transitionContainer {
              width: 316px !important;
              .CalendarMonth_caption {
                font-size: 16px;
                color: ${themeGet('text.0', '#2C2C2C')};
              }
            }
          }
        }
      }
    }
  }

  /* Room guest component style */
  .view_with__popup {
    .popup_handler {
      button,
      button.ant-btn {
        border: 0;
        width: 100%;
        display: flex;
        padding: 0 25px;
        font-size: 15px;
        font-weight: 400;
        min-height: 54px;
        border-radius: 3px;
        align-items: center;
        justify-content: space-between;
        color: ${themeGet('text.0', '#2C2C2C')};
        background-color: ${themeGet('color.2', '#F7F7F7')};
        &::after {
          display: none;
        }
      }
    }
    &.active {
      .popup_container {
        max-width: 316px;
        padding: 25px 22px;
        position: absolute;
        left: 0;
        top: 56px;
        z-index: 2;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
        &::before {
          content: '';
          width: 14px;
          height: 14px;
          top: -8px;
          left: 36px;
          position: absolute;
          border-radius: 2px;
          transform: rotate(45deg);
          background-color: ${themeGet('color.1', '#ffffff')};
          border-top: 1px solid ${themeGet('border.3', '#E6E6E6')};
          border-left: 1px solid ${themeGet('border.3', '#E6E6E6')};
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
  &:last-child {
    margin-bottom: 10px;
  }

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

export const FormActionArea = styled.div`
  button.ant-btn-primary {
    width: 100%;
    height: 47px;
    color: ${themeGet('color.1', '#ffffff')};
    font-size: 15px;
    font-weight: 700;
    border-color: ${themeGet('primary.0', '#008489')};
    background-color: ${themeGet('primary.0', '#008489')};
    transition: all 0.2s ease;
    &:hover,
    &:focus {
      outline: none;
      opacity: 0.93;
    }
  }
`;

export default ReservationFormWrapper;
