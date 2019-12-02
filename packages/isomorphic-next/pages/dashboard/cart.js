import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import ecommerceActions from '@iso/redux/ecommerce/actions';
import SingleCart from '@iso/components/Cart/SingleCart';
import { direction } from '@iso/lib/helpers/rtl';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';

import ProductsTable from '../../styled/Cart.styles';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
export default withAuthSync(() => (
  <>
    <Head>
      <title>Cart</title>
    </Head>
    <DashboardLayout>
      <LayoutWrapper>
        <CartTable className="bordered" />
      </LayoutWrapper>
    </DashboardLayout>
  </>
));

const { changeProductQuantity } = ecommerceActions;

let totalPrice = 0;
function CartTable({ style }) {
  const dispatch = useDispatch();
  const { productQuantity, products } = useSelector(state => state.Ecommerce);

  function renderItems() {
    totalPrice = 0;
    if (!productQuantity || productQuantity.length === 0) {
      return <tr className="isoNoItemMsg">No item found</tr>;
    }
    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return (
        <SingleCart
          key={product.objectID}
          quantity={product.quantity}
          changeQuantity={changeQuantity}
          cancelQuantity={cancelQuantity}
          {...products[product.objectID]}
        />
      );
    });
  }
  function changeQuantity(objectID, quantity) {
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      } else {
        newProductQuantity.push({
          objectID,
          quantity,
        });
      }
    });
    dispatch(changeProductQuantity(newProductQuantity));
  }
  function cancelQuantity(objectID) {
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      }
    });
    dispatch(changeProductQuantity(newProductQuantity));
  }
  const classname = style != null ? style : '';
  return (
    <ProductsTable className={`isoCartTable ${classname}`}>
      <table>
        <thead>
          <tr>
            <th className="isoItemRemove" />
            <th className="isoItemImage" />
            <th className="isoItemName">Name</th>
            <th className="isoItemPrice">Price</th>
            <th className="isoItemQuantity">Quantity</th>
            <th className="isoItemPriceTotal">Total</th>
          </tr>
        </thead>

        <tbody>
          {renderItems()}
          <tr className="isoTotalBill">
            <td className="isoItemRemove" />
            <td className="isoItemImage" />
            <td className="isoItemName" />
            <td className="isoItemPrice" />
            <td className="isoItemQuantity">Total</td>
            <td className="isoItemPriceTotal">${totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td
              style={{
                width: '100%',
                paddingRight: `${direction === 'rtl' ? '0' : '25px'}`,
                paddingLeft: `${direction === 'rtl' ? '25px' : '0'}`,
              }}
            >
              <Input size="large" placeholder="Discount Coupon" />
            </td>
            <td
              style={{
                paddingRight: `${direction === 'rtl' ? '0' : '25px'}`,
                paddingLeft: `${direction === 'rtl' ? '25px' : '0'}`,
              }}
            >
              <Button>Apply</Button>
            </td>
            <td>
              <Button type="primary">
                <Link to={'/dashboard/checkout'}>Checkout</Link>
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </ProductsTable>
  );
}
