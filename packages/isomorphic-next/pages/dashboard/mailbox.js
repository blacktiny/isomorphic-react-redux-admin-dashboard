import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';

import { useSelector } from 'react-redux';
const DesktopView = dynamic(() => import('@iso/containers/Mail/DesktopView'));
const MobileView = dynamic(() => import('@iso/containers/Mail/MobileView'));
const TabView = dynamic(() => import('@iso/containers/Mail/TabView'));

function renderMailView(view, height) {
  if (view === 'MobileView') return <MobileView height={height} />;
  if (view === 'DesktopView') return <DesktopView height={height} />;
  if (view === 'TabView') return <TabView height={height} />;
}
export default withAuthSync(function() {
  const { view, height } = useSelector(state => state.App);

  return (
    <>
      <Head>
        <title>Mail</title>
      </Head>
      <DashboardLayout>
        <div style={{ height: '100%' }}>{renderMailView(view, height)}</div>
      </DashboardLayout>
    </>
  );
});
