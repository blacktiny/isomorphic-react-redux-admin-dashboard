import styled from 'styled-components';
import { palette } from 'styled-theme';
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
        color: ${palette('text', 3)};
        font-size: 13px;
      }
    }
  }
`;

const ReactDateWrapper = styled.div`
  .isoReactDate {
    height: 100vh;

    .DateInput_input__focused {
      /* background-color: ${palette('primary', 0)}; */
      border-color: ${palette('primary', 0)};
      color: #fff;
      font-weight: 400;
    }

    .CalendarDay__selected_start,
    .CalendarDay__selected_end,
    .CalendarDay__selected {
      background: ${palette('primary', 0)};
      border: 1px double ${palette('primary', 0)};
      color: #fff;

      &.CalendarDay__hovered_span {
        background: ${palette('primary', 0)};
        border: 1px double ${palette('primary', 0)};
      }

      &:active {
        background: ${palette('primary', 0)};
      }
    }

    .CalendarDay__selected_span {
      background: ${palette('primary', 7)};
      border: 1px double ${palette('primary', 7)};
      color: #fff;
    }

    .CalendarDay__hovered_span,
    .CalendarDay__after_hovered_start {
      background: ${palette('primary', 7)};
      border: 1px double ${palette('primary', 8)};
      color: #fff;

      &:active {
        background: ${palette('primary', 0)};
      }

      &:hover {
        background: ${palette('primary', 0)};
      }
    }

    .CalendarDay__selected_span:hover,
    .CalendarDay__selected_span:active {
      background: ${palette('primary', 0)};
      border: 1px double ${palette('primary', 0)};
    }

    .CalendarDay__selected_span.CalendarDay__last_in_range {
      border-right: ${palette('primary', 7)};
    }

    .DayPickerKeyboardShortcuts_show__bottomRight::before {
      border-top: 26px solid transparent;
      border-right: 33px solid ${palette('primary', 0)};
      bottom: 0;
      right: 0;
      border-radius: 0;
    }
  }
`;

const ReactDatesWrapper = WithDirection(ReactDateWrapper);

export { ReactDatesStyleWrapper, ReactDatesWrapper };
