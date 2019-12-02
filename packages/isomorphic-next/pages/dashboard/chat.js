import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { ChatViewWrapper } from '@iso/containers/Chat/Messages.styles';

import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const DesktopView = dynamic(() => import('@iso/containers/Chat/DesktopView'));
const MobileView = dynamic(() => import('@iso/containers/Chat/MobileView'));

export default withAuthSync(function Chat() {
  const { view, height } = useSelector(state => state.App);
  const ChatView = view === 'MobileView' ? MobileView : DesktopView;
  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>
      <DashboardLayout>
        <ChatViewWrapper
          style={{
            height: view === 'MobileView' ? height - 108 : height - 138,
          }}
        >
          <ChatView height={height} view={view} />
        </ChatViewWrapper>
      </DashboardLayout>
    </>
  );
});
