import React from 'react';
import moment from 'moment';
import InvoiceAddress from '@iso/components/Invoice/Address';
import { ViewTable } from '@iso/components/Invoice/InvoiceTable';

export default function Invoice({ currentInvoice }) {
  return (
    <div className="PageContent" style={{ padding: '20' }}>
      <div className="OrderInfo">
        <div className="LeftSideContent">
          <h3 className="Title">Invoice Info</h3>
          <span className="InvoiceNumber">{currentInvoice.number}</span>
        </div>
        <div className="RightSideContent">
          <p>
            <span className="orderStatusSpan">Order Status: </span>
            <span className="orderStatus">{currentInvoice.orderStatus}</span>
          </p>
          <p>
            <span className="orderDateSpan">Order date: </span>
            <span className="orderDate">
              {moment(new Date(currentInvoice.orderDate)).format(
                'MMMM Do YYYY'
              )}
            </span>
          </p>
        </div>
      </div>
      <div className="BillingInformation">
        <div className="LeftSideContent">
          <h3 className="Title">Bill From</h3>

          <InvoiceAddress
            companyName={currentInvoice.billFrom}
            companyAddress={currentInvoice.billFromAddress}
          />
        </div>
        <div className="RightSideContent">
          <h3 className="Title">Bill To</h3>

          <InvoiceAddress
            companyName={currentInvoice.billTo}
            companyAddress={currentInvoice.billToAddress}
          />
        </div>
      </div>
      <div className="InvoiceTable">
        <ViewTable invoiceList={currentInvoice.invoiceList} />
        <div className="TotalBill">
          <p>
            Sub-total :{' '}
            <span>{`${currentInvoice.currency}${currentInvoice.subTotal}`}</span>
          </p>
          <p>
            Vat :{' '}
            <span>{`${currentInvoice.currency}${currentInvoice.vatPrice}`}</span>
          </p>
          <h3>
            Grand Total :{' '}
            <span>{`${currentInvoice.currency}${currentInvoice.totalCost}`}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
