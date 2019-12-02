import Head from 'next/head';
import Carousel from '@iso/containers/UIElements/Carousel/Carousel';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Carousel</title>
    </Head>
    <DashboardLayout>
      <Carousel />
    </DashboardLayout>
  </>
));
