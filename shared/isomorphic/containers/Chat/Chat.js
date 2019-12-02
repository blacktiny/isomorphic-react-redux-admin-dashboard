import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { ChatViewWrapper } from './Messages.styles';
const DesktopView = lazy(() => import('./DesktopView'));
const MobileView = lazy(() => import('./MobileView'));

export default function Chat() {
  const { view, height } = useSelector(state => state.App);
  const ChatView = view === 'MobileView' ? MobileView : DesktopView;
  return (
    <ChatViewWrapper
      style={{ height: view === 'MobileView' ? height - 108 : height - 138 }}
    >
      <ChatView height={height} view={view} />
    </ChatViewWrapper>
  );
}
