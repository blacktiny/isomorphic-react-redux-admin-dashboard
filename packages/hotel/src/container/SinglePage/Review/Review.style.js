import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const ReviewWrapper = styled.div`
  padding: 29px 0;

  .ant-row {
    margin-bottom: -29px;
    > div {
      margin-bottom: 29px;
    }
  }

  /* comment area style */
  .comment-area {
    .comment-wrapper {
      padding: 7px 0;

      /* comment header style */
      .comment-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        @media only screen and (max-width: 480px) {
          margin-bottom: 18px;
        }
        .avatar-area {
          display: flex;
          align-items: center;
          .author-avatar {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 20px;
            @media only screen and (max-width: 480px) {
              width: 50px;
              height: 50px;
              margin-right: 10px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .author-info {
            .author-name {
              color: ${themeGet('text.0', '#2C2C2C')};
              font-size: 15px;
              font-weight: 700;
              line-height: 18px;
              @media only screen and (max-width: 480px) {
                margin: 0 0 6px;
              }
            }
            .comment-date {
              color: ${themeGet('text.2', '#777777')};
              font-size: 13px;
              line-height: 16px;
            }
          }
        }
        .rating-area {
          > span {
            margin-right: 15px;
            color: ${themeGet('text.2', '#777777')};
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      /* comment body style */
      .comment-body {
        h4 {
          color: ${themeGet('text.0', '#2C2C2C')};
          font-size: 15px;
          font-weight: 700;
          line-height: 18px;
          margin-bottom: 7px;
          @media only screen and (max-width: 767px) {
            line-height: 26px;
            margin-bottom: 10px;
          }
        }
        p {
          color: ${themeGet('text.0', '#2C2C2C')};
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 19px;
        }
      }

      /* comment rating style */
      .comment-rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media only screen and (max-width: 667px) {
          flex-wrap: wrap;
        }
        @media only screen and (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
        }

        .rating-widget {
          display: flex;
          align-items: center;
          @media only screen and (max-width: 667px) {
            margin: 5px 0;
          }
          span {
            font-size: 13px;
            font-weight: 700;
            color: ${themeGet('text.0', '#2C2C2C')};
            margin-right: 10px;
            @media only screen and (max-width: 480px) {
              min-width: 80px;
              font-size: 14px;
            }
          }
          svg {
            fill: ${themeGet('primary.0', '#008489')};
          }
        }
      }
    }
  }
`;

export const FilterElement = styled.div`
  font-size: 13px;
  color: ${themeGet('text.0', '#2C2C2C')};
  line-height: 16px;
  margin: 19px 0;
  &:last-child {
    margin-bottom: 0;
  }

  /* checkbox component style */
  .ant-checkbox-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    .ant-checkbox {
      flex-shrink: 0;
      .ant-checkbox-inner {
        border-radius: 0;
        border-color: ${themeGet('text.1', '#909090')};
      }
      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          border-color: ${themeGet('primary.0', '#008489')};
          background-color: ${themeGet('primary.0', '#008489')};
        }
      }
      &::after {
        display: none;
      }
    }
    > span {
      &:last-child {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
  }
`;

export const RatingWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  flex: 1;
  color: ${themeGet('primary.0', '#008489')};
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
  @media only screen and (max-width: 736px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const RatingStatus = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 736px) {
    margin-bottom: 15px;
  }
  i {
    font-size: 18px;
    color: ${themeGet('primary.0', '#008489')};
    position: relative;
    top: 1px;
  }
  svg {
    width: 21px;
    height: 21px;
    fill: ${themeGet('primary.0', '#008489')};
    margin-right: 2px;
    position: relative;
    top: 1px;
  }
`;

export const RatingSearch = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* input search style */
  .ant-input-search {
    width: calc(100% - 165px);
    margin-right: 30px;
    .ant-input {
      padding-left: 44px;
      padding-right: 11px;
      border-radius: 3px;
      border-color: ${themeGet('border.3', '#E6E6E6')};
      color: ${themeGet('text.0', '#2C2C2C')};
      &::placeholder {
        color: ${themeGet('text.1', '#909090')};
      }
      &:hover,
      &:focus {
        border-color: ${themeGet('border.3', '#E6E6E6')} !important;
        box-shadow: none;
      }
    }
    .ant-input-suffix {
      left: 18px;
      right: auto;
      color: ${themeGet('text.1', '#909090')};
    }
  }

  /* button style */
  button {
    &.ant-btn {
      flex-shrink: 0;
      &.ant-btn-primary {
        height: 37px;
        min-width: 133px;
        border-color: ${themeGet('primary.0', '#008489')};
        background-color: ${themeGet('primary.0', '#008489')};
        text-shadow: none;
        font-size: 15px;
        font-weight: 700;
        border-radius: 3px;
        line-height: 1;
      }
    }
  }
`;

export const TextButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${themeGet('primary.0', '#008489')};
  font-size: 13px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  svg {
    width: 15px;
    height: 15px;
    margin-left: 4px;
    fill: ${themeGet('primary.0', '#008489')};
    position: relative;
    top: 1px;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ModalTitle = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin-bottom: 40px;
  @media only screen and (max-width: 1260px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export default ReviewWrapper;
