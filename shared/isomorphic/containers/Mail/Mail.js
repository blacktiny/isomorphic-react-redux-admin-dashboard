import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
const DesktopView = lazy(() => import('./DesktopView'));
const MobileView = lazy(() => import('./MobileView'));
const TabView = lazy(() => import('./TabView'));

function renderMailView(view, height) {
  if (view === 'MobileView') return <MobileView height={height} />;
  if (view === 'DesktopView') return <DesktopView height={height} />;
  if (view === 'TabView') return <TabView height={height} />;
}
export default function Mail() {
  const { view, height } = useSelector(state => state.App);

  return <div style={{ height: '100%' }}>{renderMailView(view, height)}</div>;
}
