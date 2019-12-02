import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const LeafletMap = dynamic(
  () => import('@iso/containers/Map/Leaflet/Leaflet'),
  { ssr: false }
);
export default withAuthSync(() => (
  <>
    <Head>
      <title>Leaflet Map</title>
    </Head>
    <DashboardLayout>
      <LeafletMap />
    </DashboardLayout>
  </>
));
