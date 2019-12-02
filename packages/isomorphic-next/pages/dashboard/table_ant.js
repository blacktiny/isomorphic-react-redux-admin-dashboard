import Head from 'next/head';
import AntTables from '@iso/containers/Tables/AntTables/AntTables';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>AntTables</title>
    </Head>
    <DashboardLayout>
      <AntTables />
    </DashboardLayout>
  </>
));
