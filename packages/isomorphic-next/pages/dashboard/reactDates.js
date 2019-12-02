import Head from 'next/head';
import ReactDates from '@iso/containers/AdvancedUI/ReactDates/ReactDates';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>React Dates</title>
    </Head>
    <DashboardLayout>
      <ReactDates />
    </DashboardLayout>
  </>
));
