import { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i');

  * {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ::selection {
    background: ${themeGet('primary.0', '#008489')};
    color: ${themeGet('color.1', '#ffffff')};
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root,
  #__next {
    > .ant-layout {
      min-height: 100vh;
      overflow: hidden;
      background-color: ${themeGet('color.1', '#ffffff')};

      /* hotel submission style  */ 
      .hotel-submission-form {
        .ant-progress-outer {
          position: fixed;
          z-index: 9;
          left: 0;
          top: auto;
        }
        .gm-style {
          > input[type="text"] {
            left: 9px !important;
            top: 46px !important;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .hotel-form-location {
          .ant-card-head-title {
            font-size: 15px;
            line-height: 18px;
            font-weight: 700;
            color: ${themeGet('text.0', '#2C2C2C')};
          }
          .ant-card-body p {
            display: flex;
            color: ${themeGet('text.2', '#777777')};
            justify-content: flex-start;
            strong {
              color: ${themeGet('text.0', '#2C2C2C')};
              width: 30%;
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for transparent sticky header
  /*------------------------------------------*/
  .isHeaderSticky {
    .sticky-inner-wrapper {
      .navbar {
        &.is_transparent {
          background-color: ${themeGet('color.1', '#ffffff')};
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          .ant-menu {
            li {
              a {
                color: ${themeGet('text.0', '#2C2C2C')};
                &.active {
                  border-bottom: 3px solid ${themeGet('primary.0', '#008489')};
                }
              }
            }
          }
          .auth_menu {
            .ant-menu {
              li {
                &:last-child {
                  a {
                    color: ${themeGet('color.1', '#ffffff')};
                  }
                }
              }
            }
          }
        }
      }
      nav.transparent {
        background-color: ${themeGet('color.1', '#ffffff')};
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

        .hamburg-btn {
          > span {
            background-color: ${themeGet('text.0', '#2C2C2C')};
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for navbar profile / account menu
  /*------------------------------------------*/
  .ant-popover {
    &.profile_menu {
      z-index: 9999;
    }
    .ant-popover-content {
      .ant-popover-inner {
        .ant-popover-inner-content {
          ul.ant-menu  {
            border: 0;
            &.account_menu {
              li {
                color: ${themeGet('text.0', '#2C2C2C')};
                font-size: 15px;
                line-height: 18px;
                font-weight: 400;
                height: auto;
                transition: color 0.2s ease-in-out;
                &.ant-menu-item-selected,
                &.ant-menu-item-active {
                  background-color: transparent;
                }
                a {
                  padding: 8px 0;
                  color: ${themeGet('text.0', '#2C2C2C')};
                  transition: color 0.2s ease-in-out;
                  &:hover {
                    color: ${themeGet('primary.0', '#008489')};
                  }
                  &.active {
                    font-weight: 700;
                    color: ${themeGet('primary.0', '#008489')};
                  }
                }
                button {
                  padding: 0;
                  border: 0;
                  cursor: pointer;
                  padding: 8px 0;
                  background-color: transparent;
                  transition: color 0.2s ease-in-out;
                  &:hover {
                    color: ${themeGet('primary.0', '#008489')};
                  }
                  &:focus {
                    outline: none;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for date range picker
  /*------------------------------------------*/
  .DateRangePicker {
    .DateRangePickerInput {
      .DateRangePicker_picker {
        .DayPicker_weekHeader {
          .DayPicker_weekHeader_ul {
            .DayPicker_weekHeader_li {
              color: ${themeGet('text.0', '#2C2C2C')};
              small {
                font-size: 13px;
              }
            }
          }
        }
        .DayPicker_focusRegion {
          .CalendarMonthGrid {
            .CalendarMonth {
              .CalendarMonth_caption {
                font-size: 16px;
                color: ${themeGet('text.0', '#2C2C2C')};
              }
            }
          }
        }
        .DayPickerNavigation {
          .DayPickerNavigation_button {
            &:focus {
              outline: none;
            }
          }
        }
        .DayPickerKeyboardShortcuts_buttonReset {
          &:focus {
            outline: none;
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // style for ant tooltip
  /*------------------------------------------*/
  .ant-tooltip {
    font-size: 13px;
    font-weight: 700;
    &.ant-tooltip-placement-top .ant-tooltip-arrow {
      border-top-color: ${themeGet('primary.0', '#008489')};
    }
    .ant-tooltip-inner {
      box-shadow: none;
      text-align: center;
      border-radius: 3px;
      min-height: 26px;
      padding: 4px 10px;
      background-color: ${themeGet('primary.0', '#008489')};
    }
  }

  /*------------------------------------------*/ 
  // style for dropdown
  /*------------------------------------------*/
  .ant-select-dropdown {
    .ant-select-dropdown-menu {
      .ant-select-dropdown-menu-item {
        padding: 12px 12px;
        line-height: 1;
        &.ant-select-dropdown-menu-item-active {
          background-color: rgba(0, 132, 137, 0.1);
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // here fix height issue for RoomGuest 
  /*------------------------------------------*/
  .view_with__popup {
    &.room_guest__component {
      &.active {
        min-height: 54px;
      }
      &.alt {
        .popup_container {
          #popup {
            > div {
              > div {
                padding: 0;
              }
            }
          }
        }
        &.active {
          min-height: inherit;
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // ant dropdown and social share menu style 
  /*------------------------------------------*/
  .ant-dropdown {
    &.social_share_menu {
      z-index: 9999 !important;
      
      .ant-menu {
        padding: 7px 0;
        min-width: 150px;
        border: 0;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    
        .ant-menu-item {
          margin: 0;
          padding: 0;
          height: inherit;
          line-height: inherit;
          > div {
            padding: 15px 20px;
            color: ${themeGet('text.0', '#2C2C2C')};
            svg {
              margin-right: 8px;
            }
          }

          &:hover {
            background-color: ${themeGet('color.2', '#F7F7F7')};
          }
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // ant modal and drawer style 
  /*------------------------------------------*/
  .ant-drawer,
  .ant-modal-mask,
  .ant-modal-wrap  {
    z-index: 99999 !important;
  }
  .ant-drawer {
    &.filter_drawer {
      pointer-events: none;
      .ant-drawer-mask {
        display: none;
      }
      &.ant-drawer-bottom {
        &.ant-drawer-open {
          .ant-drawer-content-wrapper {
            box-shadow: none;
          }
        }
      }
      .ant-drawer-content-wrapper {
        height: calc(100vh - 152px) !important;
        pointer-events: all;
        .ant-drawer-wrapper-body {
          height: 100%;
          .ant-drawer-body {
            height: 100%;
            padding-top: 0;
            overflow: hidden;
          }
        }
      }
    }
  }

  .ant-modal-wrap {
    .ant-modal-content {
      box-shadow: 0 1px 10px rgba(0,0,0,0.16);
    }
    &.review_modal {
      .ant-modal {
        max-width: 1170px;
        box-sizing: border-box;
        @media only screen and (max-width: 1260px) {
          padding-left: 30px;
          padding-right: 30px;
        }
        @media only screen and (max-width: 767px) {
          top: 0;
          padding: 0;
          margin-top: 0;
          margin-bottom: 0;
        }
        .ant-modal-body {
          padding-left: 60px;
          padding-right: 60px;
          padding-bottom: 60px;
          padding-top: 30px;
          @media only screen and (max-width: 1260px) {
            padding: 40px 30px;
          }
        }
      }
      .image_uploader{
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        @media only screen and (max-width: 667px) {
          flex-wrap: wrap;
        }
        .ant-upload{
          @media only screen and (max-width: 667px) {
            margin-bottom: 10px;
          }
          &.ant-upload-drag{
            border: 0;
            border-radius: 0;
            background: transparent;
            .ant-upload{
              padding: 0;
              display: block;
              width: auto;
              height:auto;
            }
          }
          &.ant-upload-drag-hover{
            .image-drag-area{
              border-color: #48bdc1;
            }
          }
        }
        .ant-upload-list{
          float: none;
          display: flex;
          .ant-upload-list-item{
            width: 125px;
            height: 125px;
            border-radius: 3px;
          }
        }
        .ant-upload-drag-container{
          display: block;
        }
      }
    }
  }

  /*------------------------------------------*/ 
  // map info window style 
  /*------------------------------------------*/
  .gm-style-iw-c {
    box-shadow: none !important;
  }
  .gm-style-iw {
    padding: 0 !important;
    border-radius: 3px !important;
    width: 270px !important;
    z-index: 1;
    .gm-style-iw-d {
      overflow-y: auto !important;
      overflow-x: hidden !important;
      max-width: 100% !important;
    }
    .info_window_card {
      width: 270px;
      margin-bottom: 0;
      > div {
        > img {
          width: 100%;
          height: 190px;
          object-fit: cover;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      .content_wrapper {
        padding: 10px 15px 20px;
      }
    }
    button[title="Close"].gm-ui-hover-effect {
      width: 26px !important;
      height: 26px !important;
      padding: 6px !important;
      border-radius: 50%;
      margin: 0 !important;
      top: 14px !important;
      right: 11px !important;
      opacity: 1;
      align-items: center;
      display: inline-flex !important;
      background-color: ${themeGet('color.1', '#ffffff')} !important;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16);
      > img {
        margin: 0 !important;
      }
    }
  }

/*------------------------------------------*/
// Image Gallery Modal style
/*------------------------------------------*/
.ant-modal-wrap {
  &.image_gallery_modal {
    .ant-modal {
      top: 50px;
      .ant-modal-content{
        box-shadow: none;
        padding: 0 30px;
        background: transparent;
        @media only screen and (max-width: 480px) {
          padding: 0 20px;
        }
        .ant-modal-body {
          max-width: 1170px;
          padding: 0;
          margin: 0 auto; 
          @media only screen and (max-width: 1440px) {
            position: relative;
          }
        }
      }
      .image_gallery_close {
        background: transparent;
        border: 0;
        width: 60px;
        height: 60px;
        position: absolute;
        top: -20px;
        right: 40px;
        &:focus,
        &:hover {
          outline: none;
        }
        @media only screen and (max-width: 1440px) {
          top: 0;
          right: 0;
          svg {
            path {
              opacity: 0.8;
              fill: ${themeGet('color.1', '#ffffff')};
              transition: all 0.3s ease;
            }
          }
          &:hover {
            svg {
              path {
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}

/*------------------------------------------*/ 
// style for Increment Decrement Component
/*------------------------------------------*/
.quantity {
  button.btn {
    svg {
      fill: ${themeGet('primary.0', '#008489')};
    }
  }
  input[type="number"],
  input[type="number"].qnt-input {
    color: ${themeGet('text.0', '#2C2C2C')};
  }
}

/*------------------------------------------*/ 
// style for mobile Header Component
/*------------------------------------------*/
.mobile-header {
  &.ant-drawer {
    z-index: 10000;
  }
  .ant-drawer-body {
    padding: 0;
    .auth-menu {
      border: 0;
      display: flex;
      margin: 0 0 30px;
      padding: 25px 20px;
      align-items: center;
      background-color: ${themeGet('color.2', '#F7F7F7')};
      li {
        height: auto;
        line-height: 1;
        padding: 0;
        margin: 0;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 15px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 700;
          color: ${themeGet('text.0', '#2C2C2C')};
        }
        &:last-child {
          a {
            color: ${themeGet('color.1', '#ffffff')};
            background-color: ${themeGet('primary.0', '#008489')};
            transition: opacity 0.2s ease;
            &:hover {
              opacity: 0.9;
            }
          }
        }
      }
    }
    .main-menu {
      border: 0;
      padding-top: 30px;
      li {
        padding: 0;
        &.ant-menu-item-selected,
        &.ant-menu-item-active {
          background-color: transparent;
        }
        a {
          font-size: 15px;
          padding: 0 31px;
          border-left: 4px solid transparent;
          color: ${themeGet('text.0', '#2C2C2C')};
          &.active {
            font-weight: 700;
            border-color: ${themeGet('primary.0', '#008489')};
            color: ${themeGet('primary.0', '#008489')};
          }
        }
        button {
          display: block;
          text-align: left;
          width: 100%;
          border: 0;
          padding: 0 32px;
          cursor: pointer;
          background-color: transparent;
          color: ${themeGet('text.0', '#2C2C2C')};
          transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
          &:hover {
            color: ${themeGet('primary.0', '#008489')};
          }
          &focus {
            outline: 0;
          }
        }
        &:hover {
          a {
            color: ${themeGet('primary.0', '#008489')};
          }
        }
      }
    }
  }
}

/*------------------------------------------*/ 
// style for google map dropdown
/*------------------------------------------*/
.pac-container {
  border: 0;
  z-index: 99999;
  padding: 5px 0;
  margin-top: 0;
  border-radius: 3px;
  box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
  @media only screen and (max-width: 991px) {
    margin-top: 0;
  }
  &::after {
    display: none;
  }
  .pac-item {
    border-top: 0;
    line-height: 30px;
    padding: 10px 14px;
    cursor: pointer;
    font-size: 13px;
    color: ${themeGet('text.1', '#909090')};
    .pac-icon {
      margin-top: 6px;
    }
    .pac-item-query {
      font-size: 15px;
      font-weight: 600;
      color: ${themeGet('text.0', '#2C2C2C')};  
      .pac-matched {
        font-weight: 700;
        color: ${themeGet('color.0', '#000000')};
      }
    } 
    &:hover {
      background-color: ${themeGet('color.2', '#F7F7F7')};
    }
  }
}

/*------------------------------------------*/ 
// style for reservation form
/*------------------------------------------*/
.reservation_modal {
  .ant-modal {
    width: 100% !important;
    max-width: 450px;
    padding: 0 15px;
  }
  .ant-modal-content {
    box-shadow: none;
    .ant-modal-body {
      padding: 0;
      position: relative;
      .reservation_sidebar {
        box-shadow: 0 1px 10px rgba(0,0,0,0.16);
        header {
          padding-top: 50px;
          padding-bottom: 20px;
          border-color: ${themeGet('border.0', '#EBEBEB')};
          @media only screen and (max-width: 375px) {
            padding-top: 30px;
          }
        }
        .DateInput__small {
          width: 112px;
        }
        input,
        .DateRangePickerInput {
          padding: 0 9px;
        }
        footer {
          border-color: ${themeGet('border.0', '#EBEBEB')};
        }
      }
      > button.close {
        border: 0;
        padding: 0;
        top: 15px;
        right: 15px;
        height: auto;
        line-height: 1;
        position: absolute;
        font-size: 32px;
        background-color: transparent;
        color: ${themeGet('text.1', '#909090')};
        transition: all 0.3s ease;
        @media only screen and (max-width: 375px) {
          top: 10px;
          right: 10px;
          font-size: 25px;
        }
        &:hover,
        &:focus {
          outline: none;
          color: ${themeGet('text.0', '#2C2C2C')};
        }
        &::after {
          display: none;
        }
      }
    }
  }
}

.reservation_sidebar {
  padding: 0 !important;
  background-color: ${themeGet('color.1', '#ffffff')};
  header {
    padding-bottom: 27px;
    margin-bottom: 29px;
    padding: 25px 30px 26px 30px;
    border-bottom: 1px solid ${themeGet('border.0', '#EBEBEB')};
    @media only screen and (max-width: 375px) {
      padding: 25px 15px 26px 15px;
    }
    a {
      &:hover {
        color: #31b8bd;
      }
    }
  }

  p {
    color: ${themeGet('text.0', '#2C2C2C')};
    font-size: 15px;
    font-weight: 400;
    a {
      color: ${themeGet('primary.0', '#008489')};
      font-weight: 700;
      &:hover,
      &:focus {
        outline: 0;
        color: #008489d1;
        text-decoration: underline;
      }
    }
  }

  footer {
    padding: 25px 30px 28px 30px;
    margin-top: 29px;
    border-top: 1px solid ${themeGet('border.0', '#EBEBEB')};
    @media only screen and (max-width: 375px) {
      padding: 20px 15px 25px 15px;
    }

    p {
      margin-bottom: 0;
    }
  }
}
`;

export default GlobalStyle;
