import styled from 'styled-components';
import { palette } from 'styled-theme';

const Wrapper = styled.div`
  overflow: hidden;
  > h3 {
    display: block;
    padding: 0 0 10px;
    margin: 0 0 15px;
    color: ${palette('secondary', 5)};
    border-bottom: 1px solid ${palette('border', 0)};
    font-weight: 400;
    strong {
      font-weight: 600;
    }
  }
`;

export const FollowerList = styled.div`
  max-height: 396px;
  overflow-y: auto;
  width: calc(100% + 40px);
  padding-right: 40px;
  .avatar-card {
    width: 100%;
    .avatar {
      width: 60px;
      height: 60px;
    }
    .info {
      h3 {
        color: ${palette('secondary', 5)};
        font-size: 14px;
      }
    }
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default Wrapper;
