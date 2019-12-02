import React from 'react';
import InputNumber from '../uielements/InputNumber';
import { notification } from '../index';

export default function({
  price,
  quantity,
  image,
  objectID,
  cancelQuantity,
  changeQuantity,
  _highlightResult,
}) {
  const onChange = value => {
    if (!isNaN(value)) {
      if (value !== quantity) {
        changeQuantity(objectID, value);
      }
    } else {
      notification('error', 'Please give valid number');
    }
  };

  const totalPrice = (price * quantity).toFixed(2);
  return (
    <tr>
      <td
        className="isoItemRemove"
        onClick={() => {
          cancelQuantity(objectID);
        }}
      >
        <a href="# ">
          <i className="ion-android-close" />
        </a>
      </td>
      <td className="isoItemImage">
        <img alt="#" src={image} />
      </td>
      <td className="isoItemName">
        <h3>{_highlightResult.name.value}</h3>
        <p>{_highlightResult.description.value}</p>
      </td>
      <td className="isoItemPrice">
        <span className="itemPricePrefix">$</span>
        {price.toFixed(2)}
      </td>
      <td className="isoItemQuantity">
        <InputNumber
          min={1}
          max={1000}
          value={quantity}
          step={1}
          onChange={onChange}
        />
      </td>
      <td className="isoItemPriceTotal">${totalPrice}</td>
    </tr>
  );
}
