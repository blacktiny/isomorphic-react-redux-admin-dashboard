import Head from 'next/head';
import Button from '@iso/containers/Forms/Button/Button';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Button</title>
    </Head>
    <DashboardLayout>
      <Button />
    </DashboardLayout>
  </>
));
