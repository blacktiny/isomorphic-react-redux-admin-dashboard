import styled from 'styled-components';
import { palette } from 'styled-theme';

const AntCheckbox = ComponentName => styled(ComponentName)`
  &.ant-checkbox-wrapper {
    font-size: 13px;
    color: ${palette('text', 1)};
    vertical-align: middle;

    .ant-checkbox {
      top: inherit;
    }
  }
`;

export default AntCheckbox;
