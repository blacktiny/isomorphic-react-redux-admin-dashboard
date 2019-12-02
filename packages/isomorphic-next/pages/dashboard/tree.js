import Head from 'next/head';
import Tree from '@iso/containers/UIElements/Tree/Tree';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Tree</title>
    </Head>
    <DashboardLayout>
      <Tree />
    </DashboardLayout>
  </>
));
