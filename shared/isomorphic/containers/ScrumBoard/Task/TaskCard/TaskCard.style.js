import styled from 'styled-components';

export const CardAttachment = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;
export const CardComment = styled.div`
  display: flex;
  align-items: center;
`;
export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 30px;
  color: #788195;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  color: #2d3446;
  margin-bottom: 20px;
`;

export const CardIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: ${props => props.mr && props.mr}px;
`;
