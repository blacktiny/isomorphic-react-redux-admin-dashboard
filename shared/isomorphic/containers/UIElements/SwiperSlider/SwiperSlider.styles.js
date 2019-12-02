import styled from 'styled-components';

const PageWrapper = styled.div`
  .swiper-container {
    &.swiper-container-vertical {
      .swiper-wrapper {
        img {
          height: auto !important;
        }
      }
    }
    &.swiper-container-multirow {
      &.swiper-container-multirow-column {
        .swiper-wrapper {
          img {
            margin-top: 0 !important;
            margin-bottom: 30px !important;
          }
        }
      }
    }
    .lazy-item {
      img {
        height: 450px !important;
        @media only screen and (max-width: 1200px) {
          height: 350px !important;
        }
        @media only screen and (max-width: 991px) {
          height: 270px !important;
        }
      }
    }
  }
`;

export default PageWrapper;
