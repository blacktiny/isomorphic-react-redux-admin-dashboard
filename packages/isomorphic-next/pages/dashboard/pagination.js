import Head from 'next/head';
import Pagination from '@iso/containers/UIElements/Pagination/Pagination';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Pagination</title>
    </Head>
    <DashboardLayout>
      <Pagination />
    </DashboardLayout>
  </>
));
