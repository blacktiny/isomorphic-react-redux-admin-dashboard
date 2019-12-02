import Head from 'next/head';
import Transfer from '@iso/containers/Forms/Transfer/Transfer';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Transfer</title>
    </Head>
    <DashboardLayout>
      <Transfer />
    </DashboardLayout>
  </>
));
