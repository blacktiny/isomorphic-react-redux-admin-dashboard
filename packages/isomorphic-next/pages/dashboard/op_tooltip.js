import Head from 'next/head';
import Tooltip from '@iso/containers/UIElements/Tooltip/Tooltip';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Tooltip</title>
    </Head>
    <DashboardLayout>
      <Tooltip />
    </DashboardLayout>
  </>
));
