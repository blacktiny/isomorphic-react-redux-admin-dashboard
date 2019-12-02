import Head from 'next/head';
import Tag from '@iso/containers/UIElements/Tag/Tag';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Tag</title>
    </Head>
    <DashboardLayout>
      <Tag />
    </DashboardLayout>
  </>
));
