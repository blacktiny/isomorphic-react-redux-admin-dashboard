import styled from 'styled-components';

export const CommentListWrapper = styled.div`
  border-top: 1px solid #e2e2e2;
  margin-top: 30px;
  .ant-comment-inner {
    padding: 30px 0 16px;
  }
  .ant-comment-avatar {
    flex-shrink: 0;
    position: relative;
    margin-right: 16px;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
  .ant-comment-content-author {
    margin-bottom: 4px;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
  }
  .ant-comment-content-author > a,
  .ant-comment-content-author > span {
    height: auto;
    padding-right: 8px;
    font-size: 16px;
    line-height: 30px;
    color: #788195;
    font-family: 'Roboto';
    font-weight: 500;
  }
  .ant-comment-content-author-time > span {
    font-size: 14px;
    line-height: 30px;
    color: #8c90b5;
    font-family: 'Roboto';
    font-weight: 400;
  }
  .ant-comment-content-detail {
    font-size: 14px;
    line-height: 22px;
    color: #797979;
    font-family: 'Roboto';
    font-weight: 400;
  }
`;
