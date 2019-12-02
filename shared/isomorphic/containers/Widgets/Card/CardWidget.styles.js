import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '@iso/lib/helpers/rtl';

const CardWidgetWrapper = styled.div`
  width: 100%;
  min-height: 126px;
  padding: 20px 30px 20px 20px;
  background-color: #ffffff;
  overflow: hidden;
  border: 1px solid ${palette('border', 2)};
  display: flex;
  align-items: center;

  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props =>
      props['data-rtl'] === 'rtl'
        ? '20px 20px 20px 30px'
        : '20px 30px 20px 20px'};

    i {
      font-size: 36px;
    }
  }

  .isoContentWrapper {
    .isoStatNumber {
      font-size: 19px;
      color: ${palette('text', 0)};
      font-weight: 500;
      line-height: 1.2;
      margin: 0 0 10px;
    }

    .isoLabel {
      font-size: 14px;
      color: ${palette('text', 2)};
      font-weight: 400;
      margin: 0;
      text-transform: uppercase;
    }
  }
`;

export default WithDirection(CardWidgetWrapper);
