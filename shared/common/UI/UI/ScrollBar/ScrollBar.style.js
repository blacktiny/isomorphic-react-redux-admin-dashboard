import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 82px;
  background-color: #ffffff;
  overflow-y: hidden;

  @media only screen and (max-width: 1200px) {
    min-height: 60px;
  }

  .linkItem {
    padding: 1rem;
  }

  .scrollbar_right {
    flex-shrink: 0;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  min-height: 110px;
  padding-bottom: 30px;
  margin-bottom: -30px;

  @media only screen and (max-width: 1200px) {
    min-height: 80px;
    padding-bottom: 20px;
    margin-bottom: -20px;
  }
`;
