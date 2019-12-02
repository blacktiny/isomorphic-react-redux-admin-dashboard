import Head from 'next/head';
import Badge from '@iso/containers/UIElements/Badge/Badge';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Badge</title>
    </Head>
    <DashboardLayout>
      <Badge />
    </DashboardLayout>
  </>
));
