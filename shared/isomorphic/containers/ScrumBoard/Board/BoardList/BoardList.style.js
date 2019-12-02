import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-top: 2px solid #f1f3f6;
  margin-top: 30px;
  tr {
    border-bottom: 2px solid #f1f3f6;
    td {
      padding: 20px;
      text-align: center;
      @media (min-width: 768px) {
        padding-left: 0;
        padding-right: 0;
        text-align: left;
      }
      color: #788195;
      font-size: 14px;
      font-weight: 500;
      .ant-progress {
        > div {
          display: flex;
          align-items: center;
        }
        .ant-progress-text {
          color: #788195;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
`;
