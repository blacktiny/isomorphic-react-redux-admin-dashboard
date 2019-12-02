import Head from 'next/head';
import Checkbox from '@iso/containers/Forms/Checkbox/Checkbox';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Checkbox</title>
    </Head>
    <DashboardLayout>
      <Checkbox />
    </DashboardLayout>
  </>
));
