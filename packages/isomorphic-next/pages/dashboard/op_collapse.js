import Head from 'next/head';
import Collapse from '@iso/containers/UIElements/Collapse/Collapse';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Collapse</title>
    </Head>
    <DashboardLayout>
      <Collapse />
    </DashboardLayout>
  </>
));
