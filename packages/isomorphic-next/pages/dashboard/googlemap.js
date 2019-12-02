import React from 'react';
import Head from 'next/head';
import GoogleMap from '@iso/containers/Map/GoogleMap/GoogleMap';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Google Map</title>
    </Head>
    <DashboardLayout>
      <GoogleMap />
    </DashboardLayout>
  </>
));
