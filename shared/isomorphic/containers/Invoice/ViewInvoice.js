import React from 'react';
import { Link } from 'react-router-dom';
import { PDFExport } from '@progress/kendo-react-pdf';
import Box from '@iso/components/utility/box';
import Button from '@iso/components/uielements/button';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import InvoicePageWrapper from './SingleInvoice.styles';
import Invoice from './Invoice';

export default function(props) {
  let pdfExportComponent;
  const printDocument = () => {
    pdfExportComponent.save();
  };
  const { currentInvoice, toggleView, redirectPath } = props;
  console.log(props, 'props');

  return (
    <LayoutWrapper>
      <Box style={{ padding: 20 }}>
        <InvoicePageWrapper className="InvoicePageWrapper">
          <div className="PageHeader" style={{ padding: '20px 20px 0' }}>
            <Link to={redirectPath}>
              <Button className="isoGoInvoBtn">
                <span>Go To Invoices</span>
              </Button>
            </Link>
            <Button color="secondary" onClick={() => toggleView(true)}>
              <span>Edit Invoice</span>
            </Button>
            <Button
              onClick={printDocument}
              type="primary"
              className="isoInvoPrint"
            >
              <span>Download Invoice</span>
            </Button>
          </div>
          {/* <div
              id="divToPrint"
              className="mt4"
              style={{
                backgroundColor: '#ffffff',
                width: '210mm',
                minHeight: '297mm',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            > */}
          <PDFExport
            ref={component => (pdfExportComponent = component)}
            paperSize="A4"
            margin="20pt"
          >
            <Invoice
              currentInvoice={currentInvoice}
              ref={invoice => (invoice = invoice)}
            />
          </PDFExport>
          {/* </div> */}
          <div className="ButtonWrapper">
            <Button type="primary" className="mateInvoPrint">
              <span>Send Invoice</span>
            </Button>
          </div>
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
