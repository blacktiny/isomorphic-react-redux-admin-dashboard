import Head from 'next/head';
import GithubSearch from '@iso/containers/GithubSearch/GithubSearch';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Github Search</title>
    </Head>
    <DashboardLayout>
      <GithubSearch />
    </DashboardLayout>
  </>
));
