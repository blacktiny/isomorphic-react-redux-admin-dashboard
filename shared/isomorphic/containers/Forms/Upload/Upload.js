import React from 'react';
import { Icon } from 'antd';
import Modal from '@iso/components/Feedback/Modal';
import Upload from '@iso/components/uielements/upload';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';

export default function() {
  const [state, setState] = React.useState({
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  });

  const handleCancel = () => setState({ previewVisible: false });

  const handlePreview = file => {
    setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  const handleChange = ({ fileList }) => setState({ fileList });

  const { previewVisible, previewImage, fileList } = state;
  const uploadButton = (
    <div className="isoUploadBtn">
      <Icon type="plus" />
      <span className="isoUploadText">Upload</span>
    </div>
  );
  return (
    <LayoutWrapper>
      <PageHeader>Upload</PageHeader>

      <Box
        title="Search"
        subtitle="You could pass AutoComplete.Option as children of AutoComplete, instead of using dataSource"
      >
        <ContentHolder>
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
}
