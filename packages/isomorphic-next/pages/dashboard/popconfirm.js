import Head from 'next/head';
import Popconfirm from '@iso/containers/Feedback/Popconfirm/Popconfirm';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Popconfirm</title>
    </Head>
    <DashboardLayout>
      <Popconfirm />
    </DashboardLayout>
  </>
));
