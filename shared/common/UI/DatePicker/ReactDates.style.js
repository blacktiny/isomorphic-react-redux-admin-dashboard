import styled from 'styled-components';
import WithDirection from '@iso/lib/helpers/rtl';

const ReactDatesStyleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;

  .ant-form-item {
    display: flex;
    align-items: center;
    margin-right: 30px;
    margin-bottom: 0;
    margin-left: 0;

    &:last-child {
      margin-right: 0;
    }

    .ant-form-item-label {
      label {
        font-size: 13px;
      }
    }
  }
`;

const ReactDateWrapper = ComponentName => styled(ComponentName)`
  .isoReactDate {
    height: 100vh;

    .DateInput__display-text--focused {
      color: #fff;
      font-weight: 400;
    }

    .CalendarDay--selected-start,
    .CalendarDay--selected-end,
    .CalendarDay--selected {
      color: #fff;
    }

    .CalendarDay--selected-span {
      color: #fff;
    }

    .CalendarDay--hovered-span,
    .CalendarDay--after-hovered-start {
      color: #fff;
    }

    .DayPickerKeyboardShortcuts__show--bottom-right {
      border-top: 26px solid transparent;
      bottom: 0;
      right: 0;
    }

    .DayPicker--horizontal {
      .DayPickerNavigation--horizontal {
        .DayPickerNavigation__prev,
        .DayPickerNavigation__next {
          -webkit-transform: ${props =>
            props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit'};
          -ms-transform: ${props =>
            props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit'};
          transform: ${props =>
            props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit'};
        }
      }
    }

    .DateRangePickerInput {
      .DateRangePickerInput__arrow {
        -webkit-transform: ${props =>
          props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit'};
        -ms-transform: ${props =>
          props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit'};
        transform: ${props =>
          props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit'};
      }
    }
  }
`;

const ReactDatesWrapper = WithDirection(ReactDateWrapper);

export { ReactDatesStyleWrapper, ReactDatesWrapper };
