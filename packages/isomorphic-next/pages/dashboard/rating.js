import Head from 'next/head';
import Rating from '@iso/containers/UIElements/Rating/Rating';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>rating</title>
    </Head>
    <DashboardLayout>
      <Rating />
    </DashboardLayout>
  </>
));
