import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import bannerBg from '@hotel/assets/images/banner-bg.jpg';

const BannerWrapper = styled.div`
  width: 100%;
  background-color: ${themeGet('color.1', '#ffffff')};
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  height: 600px;
  position: relative;
  @media only screen and (max-width: 991px) {
    margin-bottom: 20px;
    > div {
      max-width: 100%;
    }
  }
  @media only screen and (max-width: 480px) {
    height: 360px;
    min-height: auto;
    margin-bottom: 40px;
  }
  > div {
    position: relative;
    height: 100%;
  }
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0, 132, 137, 0.45), transparent);
    z-index: 0;
  }
`;

export const BannerContent = styled.h2`
  color: ${themeGet('color.1', '#ffffff')};
  font-size: 48px;
  line-height: 60px;
  font-weight: 700;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 1;
  padding-top: 139px;
  @media only screen and (max-width: 1200px) {
    font-size: 37px;
    line-height: 50px;
  }
  @media only screen and (max-width: 991px) {
    text-align: left;
    font-size: 30px;
    line-height: 40px;
    max-width: 380px;
    padding-top: 120px;
  }
  @media only screen and (max-width: 480px) {
    text-align: left;
    font-size: 20px;
    line-height: 30px;
    max-width: 270px;
    padding-top: 100px;
  }
`;

export const SearchArea = styled.div`
  border-radius: 3px;
  background-color: ${themeGet('color.1', '#ffffff')};
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);
  position: absolute;
  z-index: 1;
  width: calc(100% - 60px);
  bottom: -51px;
  padding: 28px 30px 30px;
  @media only screen and (min-width: 569px) and (max-width: 991px) {
    width: 414px;
    left: 30px;
  }
  @media only screen and (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 15px;
    bottom: -81px;
    left: 15px;
    > p {
      display: none;
    }
  }

  h2 {
    margin-bottom: 10px;
    @media only screen and (max-width: 480px) {
      margin-bottom: 0;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${themeGet('color.2', '#F7F7F7')};
  border-radius: 3px 0 0 3px;
  min-height: 60px;
  margin-top: 30px;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }

  /* submit button style */
  button[type='submit'].ant-btn {
    min-width: 157px;
    height: 60px;
    color: ${themeGet('color.1', '#ffffff')};
    background-color: ${themeGet('primary.0', '#008489')};
    border-radius: 0 3px 3px 0;
    border: 0;
    box-shadow: none;
    font-size: 15px;
    font-weight: 700;
    text-shadow: none;
    @media only screen and (max-width: 991px) {
      min-width: 100%;
      border-radius: 0 0 3px 3px;
    }
    @media only screen and (max-width: 480px) {
      height: 47px;
    }
    &::after {
      display: none;
    }
  }
`;

export const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  .target {
    right: 10px;
    left: auto;

    @media only screen and (max-width: 480px) {
      right: 25px;
    }
  }

  /* map auto complete style */
  .map_autocomplete {
    width: 100%;
    position: relative;
    &::after {
      content: '';
      width: 1px;
      height: 20px;
      display: inline-block;
      position: absolute;
      top: calc(50% - 10px);
      right: auto;
      left: auto;
      background-color: ${themeGet('border.3', '#E6E6E6')};
    }
    @media only screen and (max-width: 991px) {
      &::after {
        top: auto;
        bottom: 0;
        height: 1px;
        width: calc(100% - 40px);
        left: 20px;
      }
    }
    @media only screen and (max-width: 480px) {
      &::after {
        width: calc(100% - 30px);
        left: 15px;
      }
    }
    input {
      border: 0;
      font-size: 15px;
      font-weight: 400;
      border-radius: 0;
      height: 60px;
      padding: 0 30px 0 40px;
      background: transparent;
      color: ${themeGet('text.0', '#2C2C2C')};
      @media only screen and (max-width: 480px) {
        height: 47px;
        padding: 0 30px 0 36px;
      }
      &:hover,
      &:focus {
        outline: none;
        box-shadow: none;
      }
      &::placeholder {
        color: ${themeGet('text.0', '#2C2C2C')};
      }
    }
  }

  /* date picker style */
  .date_picker {
    min-width: calc(250px - 14px);
    width: calc(100% - 14px);
    margin: 0 0 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 991px) {
      justify-content: flex-start;
      height: 60px;
    }
    @media only screen and (max-width: 480px) {
      height: 47px;
    }
    .DayPicker__withBorder {
      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
    }
    .DateRangePicker {
      display: block;
      width: 100%;
      .DateRangePickerInput {
        border: 0;
        padding-right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        .DateRangePickerInput_clearDates,
        .DateRangePickerInput_clearDates {
          &.DateRangePickerInput_clearDates__small {
            display: none;
          }
        }
        .DateInput {
          width: 100%;
          padding: 0 15px 0 30px;
          background: transparent;
          @media only screen and (min-width: 569px) and (max-width: 991px) {
            padding: 0 25px 0 30px;
          }
          @media only screen and (max-width: 568px) {
            padding: 0 15px 0 25px;
          }
          .DateInput_fang {
            display: none;
          }
          .DateInput_input {
            padding: 0;
            font-weight: 400;
            color: ${themeGet('text.0', '#2C2C2C')};
            background: transparent;
            &.DateInput_input__focused {
              border-color: transparent;
            }
            &::placeholder {
              color: ${themeGet('text.0', '#2C2C2C')};
            }
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
        margin-top: -12px;
        z-index: 2;
        @media only screen and (max-width: 991px) {
          top: 47px !important;
        }
        @media only screen and (max-width: 320px) {
          left: -29px !important;

          .DayPicker,
          .DayPicker > div > div,
          .DayPicker > div > div .DayPicker_transitionContainer {
            width: 294px !important;
          }

          .DayPicker {
            .DayPicker_weekHeader {
              padding: 0 !important;
            }
            .CalendarMonth {
              padding: 0 !important;
            }
          }
        }
      }
    }
  }

  /* view with popup component style */
  .view_with__popup {
    max-width: 100%;
    position: relative;

    &::before {
      content: '';
      width: 1px;
      height: 20px;
      display: inline-block;
      position: absolute;
      top: calc(50% - 10px);
      right: auto;
      left: 0;
      z-index: 1;
      background-color: ${themeGet('border.3', '#E6E6E6')};
      @media only screen and (max-width: 991px) {
        top: 0;
        bottom: auto;
        height: 1px;
        width: calc(100% - 40px);
        left: 20px;
      }
      @media only screen and (max-width: 480px) {
        width: calc(100% - 30px);
        left: 15px;
      }
    }

    /* popu handler style */
    .popup_handler {
      width: calc(100% - 14px);
      margin-left: 14px;

      button.ant-btn {
        min-width: auto;
        width: 100%;
        height: 60px;
        border: 0;
        padding: 0 30px;
        border-radius: 0;
        box-shadow: none;
        font-weight: 400;
        font-size: 15px;
        color: ${themeGet('text.0', '#2C2C2C')};
        background-color: ${themeGet('color.2', '#F7F7F7')};
        @media only screen and (max-width: 991px) {
          text-align: left;
          padding: 0 25px 0 30px;
        }
        @media only screen and (max-width: 480px) {
          height: 47px;
          padding: 0 20px 0 25px;
        }
        &::after {
          display: none;
        }
      }
    }

    &.room_guest {
      .popup_handler {
        button.ant-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }

    &.active {
      .popup_container {
        margin-top: 0;
        padding: 22px;
        box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
        @media only screen and (max-width: 991px) {
          margin-top: 0;
        }
        @media only screen and (max-width: 480px) {
          min-width: auto;
        }
      }
    }
  }

  /* icon style */
  > svg {
    position: absolute;
    z-index: 1;
    top: auto;
    &.map-marker,
    &.calendar,
    &.user-friends {
      left: 15px;
      right: auto;
      fill: ${themeGet('primary.0', '#008489')};
    }
    &.calendar {
      @media only screen and (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }
    &.user-friends {
      width: 17px;
      height: 17px;
      @media only screen and (max-width: 480px) {
        width: 16px;
        height: 16px;
      }
    }
    &.caret-down {
      right: 12px;
      left: auto;
      fill: ${themeGet('text.1', '#909090')};
      @media only screen and (max-width: 991px) {
        right: 20px;
      }
      @media only screen and (max-width: 991px) {
        right: 15px;
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
    margin-bottom: 5px;
  }

  .quantity {
    height: 22px;
    input {
      font-size: 15px;
    }
    button.btn svg {
      width: 22px;
      height: 22px;
      @media only screen and (max-width: 480px) {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export default BannerWrapper;
