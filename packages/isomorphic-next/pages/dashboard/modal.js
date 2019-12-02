import Head from 'next/head';
import Modal from '@iso/containers/Feedback/Modal/Modal';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Modal</title>
    </Head>
    <DashboardLayout>
      <Modal />
    </DashboardLayout>
  </>
));
