import styled from 'styled-components';
import { transition } from '@iso/lib/helpers/style_utils';
import WithDirection from '@iso/lib/helpers/rtl';

const WDSocialWidgetWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;

  li {
    line-height: 1;
    &:nth-child(n + 2) {
      margin-left: ${props => (props['data-rtl'] === 'rtl' ? '0' : '16px')};
      margin-right: ${props => (props['data-rtl'] === 'rtl' ? '15px' : '0')};
    }

    a {
      display: flex;
      line-height: 1;
      opacity: 0.8;
      font-size: 19px;
      ${transition()};

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const SocialWidgetWrapper = WithDirection(WDSocialWidgetWrapper);
export { SocialWidgetWrapper };
