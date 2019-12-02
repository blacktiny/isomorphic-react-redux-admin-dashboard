import Head from 'next/head';
import ReactTrend from '@iso/containers/Charts/ReactTrend/ReactTrend';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>React Trend</title>
    </Head>
    <DashboardLayout>
      <ReactTrend />
    </DashboardLayout>
  </>
));
