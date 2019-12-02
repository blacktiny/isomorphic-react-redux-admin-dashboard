import React from 'react';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import Editor from '@iso/components/uielements/editor';
export default function() {
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="forms.editor.header" />}</PageHeader>
      <Box>
        <ContentHolder>
          <Editor placeholder={'Write something...'} />
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
}
