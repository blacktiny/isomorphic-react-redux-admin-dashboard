import Head from 'next/head';
import Checkout from '@iso/containers/Ecommerce/Checkout/Checkout';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Checkout</title>
    </Head>
    <DashboardLayout>
      <Checkout />
    </DashboardLayout>
  </>
));
