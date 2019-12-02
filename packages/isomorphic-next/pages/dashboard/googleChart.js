import Head from 'next/head';
import GoogleChart from '@iso/containers/Charts/GoogleChart/GoogleChart';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Google Chart</title>
    </Head>
    <DashboardLayout>
      <GoogleChart />
    </DashboardLayout>
  </>
));
