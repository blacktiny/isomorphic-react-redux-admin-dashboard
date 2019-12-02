import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import ecommerceActions from '@iso/redux/ecommerce/actions';
const DesktopView = lazy(() => import('./DesktopView'));
const MobileView = lazy(() => import('./MobileView'));

export default function InstantSearch() {
  const { view } = useSelector(state => state.App);
  const { view: ecommerceView, productQuantity } = useSelector(
    state => state.Ecommerce
  );
  const props = {
    view,
    ecommerceView,
    productQuantity,
    ...ecommerceActions,
  };
  const View = view !== 'MobileView' ? DesktopView : MobileView;
  return (
    <div style={{ height: '100%' }}>
      <View {...props} />
    </div>
  );
}
