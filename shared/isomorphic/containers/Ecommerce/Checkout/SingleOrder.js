import React from 'react';

export default function({ price, quantity, _highlightResult }) {
  const name = _highlightResult.name.value;
  const totalPrice = (price * quantity).toFixed(2);
  const trimName = name ? name.substring(0, 30) : '';
  return (
    <div className="isoSingleOrderInfo">
      <p>
        <span>{trimName}</span>
        <span>x</span>
        <span className="isoQuantity">{quantity}</span>
      </p>
      <span className="totalPrice">${totalPrice}</span>
    </div>
  );
}
