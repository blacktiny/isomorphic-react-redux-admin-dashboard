import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const RoomGuestWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  @media only screen and (max-width: 480px) {
    max-width: 300px;
  }

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

export const FilterArea = styled.div`
  overflow: hidden;

  button,
  button.ant-btn {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
    height: 38px;
    border-radius: 3px;
    border: 1px solid ${themeGet('border.3', '#E6E6E6')};
    &::after {
      content: none;
    }
    &:hover {
      background-color: ${themeGet('border.3', '#E6E6E6')};
    }
    &.active {
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#008489')};
      background-color: ${themeGet('primary.0', '#008489')};
    }
  }
`;

export const FilterElementsWrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;

  .accordion {
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 35px;
    margin-right: -35px;
    height: calc(100% - 68px);

    /* accordion item style */
    .accordion__item {
      border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
      &:last-child {
        border-bottom: 0;
      }

      /* accordion heading style */
      .accordion__heading {
        .accordion__button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 29px 0;
          &:hover,
          &:focus {
            outline: 0;
          }
          h4 {
            font-size: 15px;
            color: ${themeGet('text.0', '#2c2c2c')};
            text-transform: capitalize;
          }
        }
      }

      /* accordion panel style */
      .accordion__panel {
        padding-bottom: 29px;
        animation: 0.25s ${fadeIn} ease;
        &[hidden] {
          animation: 0.25s ${fadeIn} ease;
        }

        /* date picker style */
        .date_picker {
          margin-bottom: 0;
          .DateRangePicker {
            .DateRangePickerInput {
              width: 100%;
              max-width: 320px;
              border-color: ${themeGet('border.3', '#E6E6E6')};
              @media only screen and (max-width: 480px) {
                max-width: 300px;
              }
              .DateInput__small {
                width: calc(50% - 6px);
                .DateInput_input__small {
                  padding: 12px 10px 10px;
                  font-weight: 400;
                  color: ${themeGet('text.0', '#2C2C2C')};
                }
                &:last-child {
                  .DateInput_input__small {
                    text-align: right;
                  }
                }
              }
            }
            .DateRangePicker_picker {
              left: 1px !important;
            }
          }
        }

        /* checkbox group style */
        .ant-checkbox-group {
          display: flex;
          flex-direction: column;
          .ant-checkbox-group-item {
            margin-bottom: 15px;
            .ant-checkbox {
              .ant-checkbox-inner {
                border-color: ${themeGet('text.1', '#909090')};
              }
              &.ant-checkbox-checked {
                .ant-checkbox-inner {
                  border-color: ${themeGet('primary.0', '#008489')};
                  background-color: ${themeGet('primary.0', '#008489')};
                }
                &::after {
                  display: none;
                }
              }
            }
            span {
              color: ${themeGet('text.0', '#2C2C2C')};
              font-size: 15px;
            }
            &:hover {
              .ant-checkbox {
                .ant-checkbox-inner {
                  border-color: ${themeGet('primary.0', '#008489')};
                }
              }
            }
          }
        }

        /* price range component style */
        .ant-slider {
          margin-left: 7px;
          max-width: 320px;
          @media only screen and (max-width: 480px) {
            max-width: 300px;
          }
          @media only screen and (max-width: 320px) {
            max-width: 240px;
          }
          .ant-slider-rail {
            height: 5px;
            border-radius: 3px;
            background-color: ${themeGet('color.13', '#E2E2E2')};
          }
          .ant-slider-track {
            background-color: ${themeGet('primary.0', '#008489')};
          }
          .ant-slider-step {
            .ant-slider-dot {
              background-color: ${themeGet('color.13', '#E2E2E2')};
            }
          }
          &:hover {
            .ant-slider-track {
              background-color: ${themeGet('primary.0', '#008489')};
            }
          }
          .ant-slider-handle {
            margin-top: -8px;
            width: 20px;
            height: 20px;
            border: 6px solid ${themeGet('primary.0', '#008489')};
            box-shadow: 0 2px 2px ${themeGet('color.5', 'rgba(0, 0, 0, 0.25)')};
            &:focus {
              box-shadow: none;
            }
          }
          .ant-slider-mark {
            margin-top: 10px;
            .ant-slider-mark-text {
              font-size: 15px;
              color: ${themeGet('text.1', '#909090')};
            }
          }
        }
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button.ant-btn {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
    height: 38px;
    border-radius: 3px;
    border: 0;
    &.ant-btn-primary {
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#008489')};
      background-color: ${themeGet('primary.0', '#008489')};
      margin-left: 10px;
    }
    &::after {
      display: none;
    }
  }
`;
