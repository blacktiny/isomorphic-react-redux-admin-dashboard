import Head from 'next/head';
import Alert from '@iso/containers/Feedback/Alert/Alert';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Alert</title>
    </Head>
    <DashboardLayout>
      <Alert />
    </DashboardLayout>
  </>
));
