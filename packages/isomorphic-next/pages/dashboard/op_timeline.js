import Head from 'next/head';
import Timeline from '@iso/containers/UIElements/Timeline/Timeline';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Timeline</title>
    </Head>
    <DashboardLayout>
      <Timeline />
    </DashboardLayout>
  </>
));
