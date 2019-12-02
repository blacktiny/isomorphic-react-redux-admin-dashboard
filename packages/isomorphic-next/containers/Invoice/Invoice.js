import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import notification from '@iso/components/Notification';
import Box from '@iso/components/utility/box';
import HelperText from '@iso/components/utility/helper-text';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import PageHeader from '@iso/components/utility/pageHeader';
import IntlMessages from '@iso/components/utility/intlMessages';
import Scrollbars from '@iso/components/utility/customScrollBar';
import Button from '@iso/components/uielements/button';
import invoiceActions from '@iso/redux/invoice/actions';
import CardWrapper from './Invoice.styles';
import TableWrapper from '@iso/containers/Tables/AntTables/AntTables.styles';

class Invoices extends Component {
  state = {
    selected: [],
  };
  componentDidMount() {
    const { initialInvoices, initData } = this.props;
    if (!initialInvoices) {
      initData();
    }
  }
  columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      rowKey: 'number',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Bill From',
      dataIndex: 'billFrom',
      rowKey: 'billFrom',
      width: '25%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Bill TO',
      dataIndex: 'billTo',
      rowKey: 'billTo',
      width: '22%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Total Cost',
      dataIndex: 'totalCost',
      rowKey: 'totalCost',
      width: '15%',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'orderStatus',
      rowKey: 'orderStatus',
      width: '13%',
      render: text => <span>{text}</span>,
    },
    {
      title: '',
      dataIndex: 'view',
      rowKey: 'view',
      width: '10%',
      render: (text, invoice) => (
        <div className="isoInvoiceBtnView">
          <Link href={`invoice?id=${invoice.id}`}>
            <a>
              <Button color="primary" className="invoiceViewBtn">
                View
              </Button>
            </a>
          </Link>{' '}
          <Button
            className="invoiceDltBtn"
            icon="delete"
            onClick={() => {
              notification('error', '1 invoice deleted');
              this.props.deleteInvoice([invoice.key]);
              this.setState({ selected: [] });
            }}
          />
        </div>
      ),
    },
  ];

  getnewInvoiceId = () => new Date().getTime();
  render() {
    const { match, invoices, deleteInvoice } = this.props;

    const { selected } = this.state;
    const rowSelection = {
      hideDefaultSelections: true,
      selectedRowKeys: selected,
      onChange: selected => this.setState({ selected }),
      selections: [
        {
          key: 'all-data',
          text: 'Select All Invoices',
          onSelect: () =>
            this.setState({
              selected: this.props.invoices.map(invoice => invoice.key),
            }),
        },
        {
          key: 'no-data',
          text: 'Unselect all',
          onSelect: () => this.setState({ selected: [] }),
        },
        {
          key: 'delete-selected',
          text: 'Delete selected',
          onSelect: changableRowKeys => {
            if (selected.length > 0) {
              deleteInvoice(selected);
              this.setState({ selected: [] });
              notification('error', `${selected.length} invoices deleted`);
            }
          },
        },
      ],
      onSelection: selected => this.setState({ selected }),
    };
    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="sidebar.invoice" />
        </PageHeader>
        <Box>
          <CardWrapper title="Invoices">
            {invoices.length === 0 ? (
              <HelperText text="No Invoices" />
            ) : (
              <div className="isoInvoiceTable">
                <Scrollbars
                  style={{ width: '100%', height: 'calc(60vh - 70px)' }}
                >
                  <TableWrapper
                    rowSelection={rowSelection}
                    dataSource={invoices}
                    columns={this.columns}
                    pagination={false}
                    className="invoiceListTable"
                  />
                </Scrollbars>
              </div>
            )}
            <div className="isoInvoiceTableBtn">
              <Link href={`invoice?id=${this.getnewInvoiceId()}`}>
                <a>
                  <Button type="primary" className="mateAddInvoiceBtn">
                    Add Invoice
                  </Button>
                </a>
              </Link>
            </div>
          </CardWrapper>
        </Box>
      </LayoutWrapper>
    );
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
)(Invoices);
