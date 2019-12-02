import Head from 'next/head';
import Contacts from '@iso/containers/Contacts/Contacts';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <DashboardLayout>
      <Contacts />
    </DashboardLayout>
  </>
));
