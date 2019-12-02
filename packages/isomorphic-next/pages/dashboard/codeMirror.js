import Head from 'next/head';
import dynamic from 'next/dynamic';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const CodeMirror = dynamic(
  () => import('@iso/containers/AdvancedUI/CodeMirror/CodeMirror'),
  { ssr: false }
);

export default withAuthSync(() => (
  <>
    <Head>
      <title>Code Mirror</title>
    </Head>
    <DashboardLayout>
      <CodeMirror />
    </DashboardLayout>
  </>
));
