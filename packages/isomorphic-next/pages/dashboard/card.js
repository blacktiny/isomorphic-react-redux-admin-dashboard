import Head from 'next/head';
import Card from '@iso/containers/Ecommerce/Card/Card';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Card</title>
    </Head>
    <DashboardLayout>
      <Card />
    </DashboardLayout>
  </>
));
