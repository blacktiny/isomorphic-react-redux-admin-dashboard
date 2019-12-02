import Head from 'next/head';
import Tab from '@iso/containers/Forms/Tab/Tab';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Tab</title>
    </Head>
    <DashboardLayout>
      <Tab />
    </DashboardLayout>
  </>
));
