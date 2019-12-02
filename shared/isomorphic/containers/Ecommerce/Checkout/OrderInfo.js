import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@iso/components/uielements/button';
import SingleOrderInfo from './SingleOrder';
import { OrderTable } from './Checkout.styles';

let totalPrice;

export default function OrderInfo() {
  const { productQuantity, products } = useSelector(state => state.Ecommerce);
  function renderProducts() {
    totalPrice = 0;
    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return (
        <SingleOrderInfo
          key={product.objectID}
          quantity={product.quantity}
          {...products[product.objectID]}
        />
      );
    });
  }

  return (
    <OrderTable className="isoOrderInfo">
      <div className="isoOrderTable">
        <div className="isoOrderTableHead">
          <span className="tableHead">Product</span>
          <span className="tableHead">Total</span>
        </div>

        <div className="isoOrderTableBody">{renderProducts()}</div>
        <div className="isoOrderTableFooter">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <Button type="primary" className="isoOrderBtn">
          Place Order
        </Button>
      </div>
    </OrderTable>
  );
}
