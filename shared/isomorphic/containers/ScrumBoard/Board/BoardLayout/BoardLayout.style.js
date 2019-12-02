import styled from 'styled-components';

export const DropdownHeader = styled.div`
  font-size: 16px;
  color: #788195;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 10px 20px;
`;

export const ViewAll = styled.div`
  a {
    font-size: 14px;
    color: #1f92fa;
    font-family: 'Roboto';
    font-weight: 500;
    display: inline-block;
    text-transform: capitalize;
  }
`;

export const CreateProject = styled.div`
  a {
    font-size: 14px;
    color: #788195;
    font-family: 'Roboto';
    font-weight: 500;
    display: inline-block;
  }
`;

export const ProjectInfoCard = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #00c6e6;
  margin-right: 8px;
`;

export const InfoWrapper = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #323332;
  margin-bottom: 3px;
  font-weight: 500;
`;

export const Category = styled.p`
  font-size: 13px;
  color: #838b9d;
  margin: 0;
  font-weight: 400;
`;

export const AssigneeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Assignee = styled.h2`
  font-size: 14px;
  line-height: 30px;
  color: #788195;
  font-family: 'Roboto';
  font-weight: 500;
  margin-right: 1rem;
`;

export const Filters = styled.div`
  font-size: 14px;
  line-height: 30px;
  color: #2d3446;
  font-family: 'Roboto';
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  > div {
    padding: 0.5rem 1rem;
    cursor: pointer;
    i {
      color: #aeb0c1;
      margin-left: 15px;
    }
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
  margin-bottom: 20px;
`;
