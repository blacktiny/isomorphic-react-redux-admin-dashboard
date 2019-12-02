import React from 'react';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';

import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Instagram from '@uppy/instagram';
// import Webcam from '@uppy/webcam'
import { Dashboard } from '@uppy/react';

const UppyDashboard = () => {
  const uppy = Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: 1000000,
      maxNumberOfFiles: 3,
      minNumberOfFiles: 2,
      allowedFileTypes: ['image/*', 'video/*'],
    },
  });

  uppy.use(GoogleDrive, {
    id: 'GoogleDrive',
    companionUrl: 'https://companion.uppy.io',
  });
  uppy.use(Dropbox, { companionUrl: 'https://companion.uppy.io' });
  uppy.use(Instagram, { companionUrl: 'https://companion.uppy.io' });
  // .use(Webcam)
  uppy.use(Tus, { endpoint: 'https://master.tus.io/files/' });

  uppy.on('complete', result => {
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);
  });
  return (
    <LayoutWrapper>
      <PageHeader>Uppy</PageHeader>
      <Box>
        <ContentHolder>
          <Dashboard
            plugins={['GoogleDrive', 'Dropbox', 'Instagram']}
            uppy={uppy}
            inline={true}
            target=".DashboardContainer"
            replaceTargetContent={true}
            showProgressDetails={true}
            note="Images and video only, 2–3 files, up to 1 MB"
            height={470}
            width="100%"
            metaFields={[
              { id: 'name', name: 'Name', placeholder: 'file name' },
              {
                id: 'caption',
                name: 'Caption',
                placeholder: 'describe what the image is about',
              },
            ]}
            browserBackButtonClose={true}
          />
        </ContentHolder>
      </Box>
    </LayoutWrapper>
  );
};

export default UppyDashboard;
