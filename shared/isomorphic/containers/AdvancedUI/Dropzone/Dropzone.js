import React from 'react';
import Dropzone from '@iso/components/uielements/dropzone';
import { notification } from '@iso/components';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import DropzoneWrapper from './Dropzone.styles';

export default () => {
  const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    method: true,
    showFiletypeIcon: true,
    uploadMultiple: false,
    maxFilesize: 2, // MB
    maxFiles: 2,
    dictMaxFilesExceeded: 'You can only upload upto 2 images',
    dictRemoveFile: 'Delete',
    dictCancelUploadConfirmation: 'Are you sure to cancel upload?',
    postUrl: 'no-url',
  };
  const djsConfig = { autoProcessQueue: false };
  const eventHandlers = {
    addedfile: file => notification('success', `${file.name} added`),
    success: file =>
      notification('success', `${file.name} successfully uploaded`),
    error: error => notification('error', 'Server is not set in the demo'),
  };
  return (
    <LayoutWrapper>
      <PageHeader>Dropzone</PageHeader>
      <Box>
        <ContentHolder>
          <DropzoneWrapper>
            <Dropzone
              config={componentConfig}
              eventHandlers={eventHandlers}
              djsConfig={djsConfig}
            />
          </DropzoneWrapper>
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
};
