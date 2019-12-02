import styled from 'styled-components';

export const ImageUpload = styled.div`
  display: flex;
  align-items: center;
  .image-drag-area {
    width: 125px;
    height: 125px;
    border: 1px dashed #e6e6e6;
    border-radius: 3px;
    font-size: 38px;
    color: #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-upload-text {
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    background-color: #008489;
    border-radius: 3px;
    padding: 8px 15px;
    margin-left: 30px;
  }
`;
