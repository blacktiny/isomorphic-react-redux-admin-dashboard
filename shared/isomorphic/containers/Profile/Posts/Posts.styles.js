import styled from 'styled-components';
import { palette } from 'styled-theme';

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .post-card {
    width: calc(100% / 3 - 20px);
    margin-bottom: 30px;
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 15px);
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const ContentWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  @media only screen and (max-width: 991px) {
    height: 480px;
  }
  .media {
    width: calc(100% - 335px);
    @media only screen and (max-width: 767px) {
      width: 100%;
      height: calc(100% - 172px);
      margin-top: 69px;
      pointer-events: all;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .glide {
      position: relative;
      height: 100%;
      .glide__track {
        height: 100%;
        .glide__slides {
          height: 100%;
        }
      }
      .glide__controls {
        > div {
          position: absolute;
          top: calc(50% - 15px);
          svg {
            width: 28px;
            height: auto;
            fill: rgba(255, 255, 255, 0.7);
          }
          &.glide__prev--area {
            left: 11px;
            right: auto;
          }
          &.glide__next--area {
            left: auto;
            right: 11px;
          }
        }
      }
      .glide__bullets {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 15px;
        .glide__bullet {
          width: 6px;
          height: 6px;
          margin: 0 2px;
          background-color: #ffffff;
          opacity: 0.4;
          &.glide__bullet--active {
            opacity: 1;
            background-color: #ffffff;
          }
        }
      }
    }
    .video-container {
      position: relative;
      background-color: #000000;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      iframe {
        width: 100% !important;
      }
    }
  }
  .content {
    width: 334px;
    display: flex;
    flex-direction: column;
    min-height: 450px;
    border-left: 1px solid #efefef;
    overflow: hidden;
    @media only screen and (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      pointer-events: none;
      border-left: 0;
    }
    header,
    .comments,
    footer > div {
      padding-left: 16px;
      padding-right: 16px;
      background-color: #ffffff;
    }
    header {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #efefef;
      padding-top: 16px;
      padding-bottom: 16px;
      @media only screen and (max-width: 767px) {
        pointer-events: all;
      }
      .avatar-wrapper {
        display: flex;
        align-items: center;
        .avatar-card {
          .avatar {
            width: 36px;
            height: 36px;
            border: 0;
          }
          .info {
            width: calc(100% - 46px);
            .username {
              font-weight: 600;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: ${palette('secondary', 5)};
              margin: 0;
            }
          }
        }
        span {
          font-weight: 600;
          color: ${palette('secondary', 5)};
          margin-left: -7px;
          margin-right: 5px;
        }
        a {
          font-weight: 600;
          color: ${palette('primary', 0)};
        }
      }
      button {
        border: 0;
        padding: 0;
        background-color: transparent;
        display: inline-flex;
        cursor: pointer;
        margin-left: auto;
        svg {
          width: 22px;
          height: auto;
        }
        &:hover,
        &:focus {
          outline: none;
        }
      }
    }
    .body {
      flex: 1 0 auto;
      overflow-x: hidden;
      position: relative;
      margin-right: -16px;
      @media only screen and (max-width: 767px) {
        display: none;
        visibility: hidden;
      }
      .comments {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding-bottom: 16px;
        box-sizing: border-box;
        position: absolute;
        padding-right: 32px;
        .comment {
          display: flex;
          padding-top: 12px;
          .avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .info {
            padding-left: 18px;
            @media only screen and (max-width: 991px) {
              padding-left: 10px;
            }
            h3 {
              display: inline-flex;
              font-weight: 600;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: ${palette('secondary', 5)};
              font-size: 14px;
            }
            span {
              color: ${palette('secondary', 5)};
              margin-left: 5px;
              a {
                color: ${palette('secondary', 4)};
              }
            }
            .time {
              margin-top: 12px;
              color: ${palette('text', 2)};
              button {
                border: 0;
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
                margin-left: 16px;
                padding: 0;
                background-color: transparent;
                &:hover,
                &:focus {
                  outline: 0;
                }
              }
            }
          }
        }
      }
    }
    footer {
      border-top: 1px solid #efefef;
      @media only screen and (max-width: 767px) {
        pointer-events: all;
      }
      .top-bar {
        display: flex;
        align-items: center;
        padding-top: 13px;
        padding-bottom: 10px;
        button {
          border: 0;
          font-size: 20px;
          background-color: transparent;
          color: ${palette('secondary', 5)};
          display: inline-flex;
          cursor: pointer;
          &:hover,
          &:focus {
            outline: none;
          }
          &.like {
            margin-left: -8px;
          }
          &.bookmark {
            margin-left: auto;
            margin-right: -8px;
          }
        }
      }
      .activity-info {
        padding-top: 5px;
        padding-bottom: 9px;
        h5 {
          color: ${palette('secondary', 5)};
          font-size: 14px;
          font-weight: 600;
        }
        time {
          font-size: 10px;
          color: ${palette('text', 3)};
        }
      }
    }
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  top: calc(50% - 18px);
  z-index: 1;
  color: #fff;
  font-size: 36px;
  padding: 0;
  line-height: 1;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 0;
  }
  &.prev {
    right: calc(100% + 15px);
    left: auto;
  }
  &.next {
    left: calc(100% + 15px);
    right: auto;
  }
`;

export default PostsWrapper;
