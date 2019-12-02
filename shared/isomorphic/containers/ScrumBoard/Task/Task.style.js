import styled from 'styled-components';
import { colors, grid } from '@iso/assets/styles/constants';

export const getBackgroundColor = (isDragging, isGroupedOver) => {
  if (isDragging) {
    return 'colors.green';
  }

  if (isGroupedOver) {
    return colors.grey.N30;
  }

  return colors.white;
};

// background-color: ${({ isDraggingOver }) =>
//     isDraggingOver ? colors.grey.dark : 'inherit'};
export const Container = styled.span`
  border-radius: 10px;
  background-color: ${props =>
    getBackgroundColor(props.isDragging, props.isGroupedOver)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.shadow}` : 'none'};
  min-height: 40px;
  margin-top: 20px;
  user-select: none;
  /* overflow: hidden; */
  /* anchor overrides */
  color: ${colors.black};

  &:hover,
  &:active {
    color: ${colors.black};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.purple};
    box-shadow: none;
  }

  /* flexbox */
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  /* flex child */
  flex-grow: 1;
  flex-basis: 100%;
  /* flex parent */
  display: flex;
  flex-direction: column;
`;

export const CardBodyContent = styled.div`
  display: flex;
  margin-top: ${grid}px;
  justify-content: space-between;
`;

export const HrBar = styled.div`
  height: 1px;
  background-color: #f3f5fd;
`;

export const CardBody = styled.div`
  padding: 0 24px 10px;
  cursor: pointer;
  .ant-badge-status-dot {
    width: 20px;
    height: 5px;
    border-radius: 2px;
  }
`;
export const CardFooter = styled.div`
  padding: 15px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`;

export const AttachmentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskName = styled.div`
  font-size: 20px;
  color: #323332;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 30px;
`;
export const TaskDescription = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #797979;
  font-family: 'Roboto';
  font-weight: 400;
`;
export const CardDetailsWrapper = styled.div`
  padding: 0 30px;
  .ant-badge-status-dot {
    width: 35px;
    height: 35px;
    border-radius: 5px 13px 13px;
  }
`;

export const ClockIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: middle;
`;
