import styled from 'styled-components';
import { palette } from 'styled-theme';

const AntRadiobox = ComponentName => styled(ComponentName)`
  &.ant-radio-wrapper,
  .ant-radio-wrapper {
    font-size: 13px;
    color: ${palette('text', 1)};

    .ant-radio-inner {
      &:after {
        width: 6px;
        height: 6px;
        top: 4px;
        left: 4px;
        background-color: ${palette('primary', 0)};
        border-radius: 50%;
      }
    }

    .ant-radio-checked .ant-radio-inner,
    .ant-radio-indeterminate .ant-radio-inner {
      border-color: ${palette('primary', 0)};
    }

    .ant-radio:hover .ant-radio-inner,
    .ant-radio-input:focus + .ant-radio-inner {
      border-color: ${palette('primary', 0)};
    }

    .ant-radio-disabled .ant-radio-inner:after {
      background-color: #ccc;
    }

    &:hover {
      .ant-radio-inner {
        border-color: ${palette('primary', 0)};
      }
    }

    .ant-radio-checked {
      .ant-radio-inner {
        &:after {
          transform: scale(1);
        }
      }
    }
  }
`;

export default AntRadiobox;
