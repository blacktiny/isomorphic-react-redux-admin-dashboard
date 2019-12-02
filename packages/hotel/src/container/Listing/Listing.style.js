import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ListingWrapper = styled.div`
  position: relative;

  /* checkbox group component style */
  .ant-checkbox-group {
    .ant-checkbox-group-item {
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

  /* date picker component style */
  .DateRangePicker {
    .DateRangePickerInput {
      .DateInput {
        .DateInput_input {
          &.DateInput_input__focused {
            border-bottom: 0;
          }
        }
        .DateInput_fang {
          top: 40px !important;
        }
      }
    }
  }

  /* price range component style */
  .ant-slider {
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
        width: 5px;
        height: 5px;
        top: 0;
        border-color: ${themeGet('color.13', '#E2E2E2')};
        background-color: ${themeGet('color.13', '#E2E2E2')};
        &:first-child {
          margin-left: -1px;
        }
        &.ant-slider-dot-active {
          border-color: ${themeGet('primary.0', '#008489')};
        }
      }
    }
    &:hover {
      .ant-slider-track {
        background-color: ${themeGet('primary.0', '#008489')};
      }
      .ant-slider-handle:not(.ant-tooltip-open) {
        border-color: ${themeGet('primary.0', '#008489')};
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
        color: ${themeGet('text.0', '#2C2C2C')};
      }
    }
  }

  /* toolbar area style */
  .toolbar {
    padding-left: 30px;
    padding-right: 30px;
    border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
    @media only screen and (min-width: 1441px) {
      min-height: 78px;
    }
  }

  /* load more wrapper style */
  .loadmore_wrapper {
    margin-top: 30px;
    > button {
      border: 0;
      min-width: 115px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      font-size: 15px;
      font-weight: 700;
      border-radius: 3px;
      color: ${themeGet('color.1', '#ffffff')};
      border-color: ${themeGet('primary.0', '#008489')};
      background-color: ${themeGet('primary.0', '#008489')};
      transition: all 0.3s ease;
      &:hover {
        outline: none;
        opacity: 0.8;
      }
      &:focus {
        outline: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export const ShowMapSwitch = styled.div`
  display: flex;
  align-items: center;

  .ant-switch {
    min-width: 60px;
    height: 38px;
    &.ant-switch-checked {
      background-color: ${themeGet('primary.0', '#008489')};
    }
    &::after {
      width: 34px;
      height: 34px;
    }
    .ant-click-animating-node {
      display: none;
    }
  }
`;

export const PostsWrapper = styled.div`
  padding: 30px;
  &.col-24 {
    width: 100%;
  }
  &.col-12 {
    width: 60%;
  }
`;

export const FixedMap = styled.div`
  position: fixed;
  background-color: ${themeGet('color.2', '#F7F7F7')};
  right: 0;
  width: 40%;
  height: calc(100% - 152px);
  top: 152px;
  z-index: 9;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100% !important;
    > div {
      height: 100% !important;
    }
  }
`;

export const Label = styled.div`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  margin-right: 15px;
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
    border: 1px solid ${themeGet('border.3', '#E6E6E6')};
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

export default ListingWrapper;
