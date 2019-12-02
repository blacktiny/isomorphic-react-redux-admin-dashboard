import Head from 'next/head';
import Invoice from '../../containers/Invoice/Invoice';
import SingleInvoice from '../../containers/Invoice/SingleInvoice';
import { withRouter } from 'next/router';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const getInvoiceId = props => {
  try {
    const { router } = props;
    return {
      invoiceId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};
export default withRouter(
  withAuthSync(props => {
    let { invoiceId, redirectPath } = getInvoiceId(props);
    return (
      <>
        <Head>
          <title>Invoice</title>
        </Head>
        <DashboardLayout>
          {invoiceId ? (
            <SingleInvoice invoiceId={invoiceId} redirectPath={redirectPath} />
          ) : (
            <Invoice />
          )}
        </DashboardLayout>
      </>
    );
  })
);
