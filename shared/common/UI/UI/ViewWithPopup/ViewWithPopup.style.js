import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: ${props => (props.radius ? props.radius : 3)}px;
  ${props =>
    props.showPopup &&
    css`
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);
      position: absolute;
      width: 100%;
      z-index: 999;
      min-width: 300px;
      padding: 30px;
      background-color: #ffffff;
    `}

  .ant-checkbox-group {
    display: flex;
    flex-direction: column;
    .ant-checkbox-group-item {
      margin: 9px 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .date_picker {
    margin-bottom: 0;

    .DateRangePicker {
      .DateRangePickerInput {
        border-radius: 3px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
