import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditInvoice from './EditInvoice';
import ViewInvoice from './ViewInvoice';
import Loader from '@iso/components/utility/loader';
import invoiceActions from '@iso/redux/invoice/actions';

class SingleInvoice extends Component {
  componentDidMount() {
    const { initialInvoices, initData } = this.props;
    if (!initialInvoices) {
      initData();
    }
    this.toggleCreatedInvoice(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.toggleCreatedInvoice(nextProps);
  }
  toggleCreatedInvoice(props) {
    const {
      invoiceId,
      initialInvoices,
      currentInvoice,
      selectCurrentInvoice,
    } = props;
    if (initialInvoices && currentInvoice.id !== invoiceId) {
      selectCurrentInvoice(invoiceId);
    }
  }
  render() {
    const {
      redirectPath,
      invoiceId,
      currentInvoice,
      enableEditView,
    } = this.props;
    if (currentInvoice.id !== invoiceId) {
      return <Loader />;
    } else if (enableEditView) {
      return <EditInvoice {...this.props} redirectPath={redirectPath} />;
    } else {
      return <ViewInvoice {...this.props} redirectPath={redirectPath} />;
    }
  }
}
function mapStateToProps(state) {
  return {
    ...state.Invoices,
  };
}
export default connect(
  mapStateToProps,
  invoiceActions
)(SingleInvoice);
