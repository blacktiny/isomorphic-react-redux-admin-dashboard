import styled from 'styled-components';
import WithDirection from '@iso/lib/helpers/rtl';

const WDAlgoliaSearchPageWrapper = styled.div`
  padding: 70px 35px 40px;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    padding: 50px 15px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 50px 30px;
  }

  .isoAlgoliaSidebarToggle {
    margin-bottom: 20px;
    margin: ${props =>
      props['data-rtl'] === 'rtl' ? '0 0 20px 0' : '0 0 20px 0'};
    display: flex;
  }

  &.sidebarOpen {
    .isoAlgoliaSidebar {
      margin: ${props =>
        props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0'};
    }
  }

  .isoAlgoliaMainWrapper {
    width: 100%;
    display: flex;
  }
`;

const AlgoliaSearchPageWrapper = WithDirection(WDAlgoliaSearchPageWrapper);

export default AlgoliaSearchPageWrapper;
