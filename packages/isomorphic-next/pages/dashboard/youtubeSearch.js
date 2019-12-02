import Head from 'next/head';
import YoutubeSearch from '@iso/containers/YoutubeSearch/YoutubeSearch';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Alert</title>
    </Head>
    <DashboardLayout>
      <YoutubeSearch />
    </DashboardLayout>
  </>
));
