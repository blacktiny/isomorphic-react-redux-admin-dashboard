import Head from 'next/head';
import Select from '@iso/containers/Forms/Select/Select';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Select</title>
    </Head>
    <DashboardLayout>
      <Select />
    </DashboardLayout>
  </>
));
