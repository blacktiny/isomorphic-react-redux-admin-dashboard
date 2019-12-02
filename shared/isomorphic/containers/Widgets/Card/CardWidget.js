import React from 'react';
import CardWidgetWrapper from './CardWidget.styles';

export default function({ icon, iconcolor, number, text }) {
  const iconStyle = {
    color: iconcolor,
  };

  return (
    <CardWidgetWrapper className="isoCardWidget">
      <div className="isoIconWrapper">
        <i className={icon} style={iconStyle} />
      </div>

      <div className="isoContentWrapper">
        <h3 className="isoStatNumber">{number}</h3>
        <span className="isoLabel">{text}</span>
      </div>
    </CardWidgetWrapper>
  );
}
