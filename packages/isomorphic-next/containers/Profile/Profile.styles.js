import styled from 'styled-components';
import { palette } from 'styled-theme';

const Wrapper = styled.div``;

export const Banner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
  &::after {
    content: '';
    height: 160px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.41));
  }

  .container {
    height: 400px;
    position: relative;
    z-index: 1;
    .avatar-card {
      position: absolute;
      bottom: -42px;
      left: 30px;
      pointer-events: none;
      width: calc(100% - 60px);
      @media only screen and (max-width: 767px) {
        bottom: -35px;
      }
      @media only screen and (max-width: 667px) {
        bottom: 20px;
      }
      .avatar {
        @media only screen and (max-width: 767px) {
          width: 160px;
          height: 160px;
        }
        @media only screen and (max-width: 667px) {
          width: 140px;
          height: 140px;
        }
        @media only screen and (max-width: 480px) {
          width: 100px;
          height: 100px;
          border-width: 3px;
        }
      }
      .info {
        @media only screen and (max-width: 767px) {
          padding-left: 15px;
          width: calc(100% - 160px);
        }
        @media only screen and (max-width: 667px) {
          width: calc(100% - 140px);
        }
        @media only screen and (max-width: 480px) {
          width: calc(100% - 100px);
        }
        h3 {
          font-size: 24px;
          line-height: 36px;
          font-weight: 500;
          color: #ffffff;
          pointer-events: all;
          margin: 0;
          @media only screen and (max-width: 667px) {
            font-size: 22px;
            line-height: 34px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 18px;
            line-height: 30px;
          }
        }
        p {
          color: #ffffff;
          font-size: 14px;
          line-height: 24px;
          pointer-events: all;
        }
      }
    }
  }
`;

export const Navigation = styled.div`
  background-color: #ffffff;
  pointer-events: all;
  box-shadow: 0 1px 2px #e5e5e5;
  ul.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 667px) {
      justify-content: flex-start;
    }
    li {
      margin: 0 15px;
      display: block;
      padding: 18px 15px 19px;
      color: ${palette('secondary', 5)};
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      @media only screen and (max-width: 320px) {
        margin: 0 7px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      strong {
        font-size: 18px;
        font-weight: 600;
        margin-right: 4px;
      }
      &.active {
        border-bottom: 2px solid ${palette('secondary', 5)};
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 30px 0;
`;

export default Wrapper;
