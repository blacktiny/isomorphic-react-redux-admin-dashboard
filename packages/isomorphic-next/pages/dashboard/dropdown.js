import Head from 'next/head';
import Dropdown from '@iso/containers/UIElements/Dropdown/Dropdown';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Dropdown</title>
    </Head>
    <DashboardLayout>
      <Dropdown />
    </DashboardLayout>
  </>
));
