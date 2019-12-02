import React from 'react';
import dynamic from 'next/dynamic';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
const Editor = dynamic(import('@iso/components/uielements/editor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

function uploadCallback(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/image');
    xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
    const data = new FormData();
    data.append('image', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

export default function() {
  const [editorState, setEditorState] = React.useState(null);
  const onEditorStateChange = editorState => {
    setEditorState(editorState);
  };
  const editorOption = {
    style: { width: '90%', height: '70%' },
    editorState: editorState,
    toolbarClassName: 'home-toolbar',
    wrapperClassName: 'home-wrapper',
    editorClassName: 'home-editor',
    onEditorStateChange: onEditorStateChange,
    uploadCallback: uploadCallback,
    toolbar: { image: { uploadCallback: uploadCallback } },
  };

  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.editor.header" />}</PageHeader>
      <Box>
        <ContentHolder>
          <Editor {...editorOption} />
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
}
