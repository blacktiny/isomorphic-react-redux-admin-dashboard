import Head from 'next/head';
import Todo from '@iso/containers/Todo/Todo';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Todo</title>
    </Head>
    <DashboardLayout>
      <Todo />
    </DashboardLayout>
  </>
));
