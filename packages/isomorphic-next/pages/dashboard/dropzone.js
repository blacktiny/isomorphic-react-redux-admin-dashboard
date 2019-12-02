import Head from 'next/head';
import Dropzon from '@iso/containers/AdvancedUI/Dropzone/Dropzone';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Dropzon</title>
    </Head>
    <DashboardLayout>
      <Dropzon />
    </DashboardLayout>
  </>
));
