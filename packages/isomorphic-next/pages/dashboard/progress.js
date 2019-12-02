import Head from 'next/head';
import Progress from '@iso/containers/Forms/Progress/Progress';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Progress</title>
    </Head>
    <DashboardLayout>
      <Progress />
    </DashboardLayout>
  </>
));
