import styled from 'styled-components';
import { palette } from 'styled-theme';
import WithDirection from '@iso/lib/helpers/rtl';
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 10px 0 30px;
`;

const CardInfoWrapper = styled.div`
  margin: 20px auto 40px;
`;

const WDInfoFormWrapper = styled.div`
  .isoCardInfoForm {
    display: flex;
    width: 100%;
    flex-wrap: wrap;

    .isoCardInput {
      margin-bottom: 10px;

      &.name {
        order: 2;
        margin-bottom: 0;
      }

      &.expiry,
      &.cvc {
        width: calc(100% / 2 - 5px);
      }

      &.expiry {
        color: #000000;
        margin: ${props =>
          props['data-rtl'] === 'rtl' ? '0 0 10px 10px' : '0 10px 10px 0'};
      }

      &::-webkit-input-placeholder {
        text-align: ${props =>
          props['data-rtl'] === 'rtl' ? 'right' : 'left'};
        color: ${palette('grayscale', 0)};
      }

      &:-moz-placeholder {
        text-align: ${props =>
          props['data-rtl'] === 'rtl' ? 'right' : 'left'};
        color: ${palette('grayscale', 0)};
      }

      &::-moz-placeholder {
        text-align: ${props =>
          props['data-rtl'] === 'rtl' ? 'right' : 'left'};
        color: ${palette('grayscale', 0)};
      }
      &:-ms-input-placeholder {
        text-align: ${props =>
          props['data-rtl'] === 'rtl' ? 'right' : 'left'};
        color: ${palette('grayscale', 0)};
      }
    }
  }
`;

const InfoFormWrapper = WithDirection(WDInfoFormWrapper);

export { ButtonWrapper, CardInfoWrapper, InfoFormWrapper };
