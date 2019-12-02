import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 19px;
  color: #788195;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0;
`;
export const Filters = styled.h2`
  font-size: 14px;
  color: #788195;
  font-family: 'Roboto';
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    padding: 0.5rem 1rem;
    cursor: pointer;

    @media only screen and (max-width: 767px) {
      padding: 0.5rem;
    }
  }
  .ant-checkbox-group-item {
    display: block;
  }
  i.anticon {
    color: #aeb0c1;
    margin-left: 8px;
  }

  @media only screen and (max-width: 767px) {
    flex-shrink: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background-color: #f8f9fe;
`;
export const HeaderSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-top: 30px;
`;
