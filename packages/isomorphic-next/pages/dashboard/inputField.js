import Head from 'next/head';
import InputField from '@iso/containers/Forms/Input/Input';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>InputField</title>
    </Head>
    <DashboardLayout>
      <InputField />
    </DashboardLayout>
  </>
));
