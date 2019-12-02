import React from 'react';
import { SaleWidgetWrapper } from './SaleWidget.styles';

export default function({ fontColor, label, price, details }) {
  const textColor = {
    color: fontColor,
  };

  return (
    <SaleWidgetWrapper className="isoSaleWidget">
      <h3 className="isoSaleLabel">{label}</h3>
      <span className="isoSalePrice" style={textColor}>
        {price}
      </span>
      <p className="isoSaleDetails">{details}</p>
    </SaleWidgetWrapper>
  );
}
