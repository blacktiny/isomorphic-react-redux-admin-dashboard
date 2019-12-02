import Head from 'next/head';
import FormsWithValidation from '@iso/containers/Forms/FormsWithValidation/FormsWithValidation';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>FormsWithValidation</title>
    </Head>
    <DashboardLayout>
      <FormsWithValidation />
    </DashboardLayout>
  </>
));
