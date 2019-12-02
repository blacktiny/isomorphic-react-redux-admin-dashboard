import Head from 'next/head';
import Notification from '@iso/containers/Feedback/Notification/Notification';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Notification</title>
    </Head>
    <DashboardLayout>
      <Notification />
    </DashboardLayout>
  </>
));
