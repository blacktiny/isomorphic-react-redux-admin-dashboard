import React from 'react';
import { IoIosCloudUpload } from 'react-icons/io';
import { Upload, message } from 'antd';
import styled from 'styled-components';

const DraggerWrapper = styled.div``;

const { Dragger } = Upload;

const photos = [
  {
    uid: '1',
    name: 'hotel-1.png',
    status: 'done',
    url:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '2',
    name: 'hotel-2.png',
    status: 'done',
    url:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '3',
    name: 'hotel-3.png',
    status: 'done',
    url:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

const DragAndDropUploader = ({ onUploadChange }) => {
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    defaultFileList: photos,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
        onUploadChange(info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} photo uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} photo upload failed.`);
      }
    },
  };

  return (
    <DraggerWrapper className="drag_and_drop_uploader">
      <Dragger {...props} className="uploader">
        <div className="ant-upload-drag-icon">
          <IoIosCloudUpload />
        </div>
        <p className="ant-upload-text">
          Drag & drop to your image assets or browse
        </p>
      </Dragger>
    </DraggerWrapper>
  );
};

export default DragAndDropUploader;
