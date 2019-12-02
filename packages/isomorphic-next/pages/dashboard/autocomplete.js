import Head from 'next/head';
import AutoComplete from '@iso/containers/Forms/AutoComplete/AutoComplete';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>AutoComplete</title>
    </Head>
    <DashboardLayout>
      <AutoComplete />
    </DashboardLayout>
  </>
));
