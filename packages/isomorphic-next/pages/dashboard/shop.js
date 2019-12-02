import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import ecommerceActions from '@iso/redux/ecommerce/actions';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const DesktopView = dynamic(() =>
  import('@iso/containers/Ecommerce/Algolia/DesktopView')
);
const MobileView = dynamic(() =>
  import('@iso/containers/Ecommerce/Algolia/MobileView')
);
export default withAuthSync(() => (
  <>
    <Head>
      <title>Shop</title>
    </Head>
    <DashboardLayout>
      <Shop />
    </DashboardLayout>
  </>
));

function Shop() {
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
