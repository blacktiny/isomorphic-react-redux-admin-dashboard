import Head from 'next/head';
import Calendar from '@iso/containers/Calendar/Calendar';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Alert</title>
    </Head>
    <DashboardLayout>
      <Calendar />
    </DashboardLayout>
  </>
));
