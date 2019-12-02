import React from 'react';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import CartTable from './CartTable';

export default function() {
  return (
    <LayoutWrapper>
      <CartTable className="bordered" />
    </LayoutWrapper>
  );
}
