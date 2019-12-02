import Head from 'next/head';
import Shuffle from '@iso/containers/Shuffle/Shuffle';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Shuffle</title>
    </Head>
    <DashboardLayout>
      <Shuffle />
    </DashboardLayout>
  </>
));
