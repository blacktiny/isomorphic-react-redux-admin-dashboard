import Head from 'next/head';
import Message from '@iso/containers/Feedback/Message/Message';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Message</title>
    </Head>
    <DashboardLayout>
      <Message />
    </DashboardLayout>
  </>
));
