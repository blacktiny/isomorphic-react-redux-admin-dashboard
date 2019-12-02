import Head from 'next/head';
import Notes from '@iso/containers/Note/Note';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Notes</title>
    </Head>
    <DashboardLayout>
      <Notes />
    </DashboardLayout>
  </>
));
