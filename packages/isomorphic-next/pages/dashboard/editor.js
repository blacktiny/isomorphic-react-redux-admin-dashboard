import Head from 'next/head';
import Editor from '../../containers/Editor/Editor';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Editor</title>
    </Head>
    <DashboardLayout>
      <Editor />
    </DashboardLayout>
  </>
));
