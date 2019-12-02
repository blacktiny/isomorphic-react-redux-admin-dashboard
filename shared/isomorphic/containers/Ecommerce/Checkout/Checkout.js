import React from 'react';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import BillingForm from './BillingForm';
import OrderInfo from './OrderInfo';
import { CheckoutContents } from './Checkout.styles';

export default function() {
  return (
    <CheckoutContents>
      <LayoutWrapper className="isoCheckoutPage">
        <Box>
          <div className="isoBillingAddressWrapper">
            <h3 className="isoSectionTitle">Billing details</h3>
            <div className="isoBillingSection">
              <BillingForm />
              <OrderInfo />
            </div>
          </div>
        </Box>
      </LayoutWrapper>
    </CheckoutContents>
  );
}
