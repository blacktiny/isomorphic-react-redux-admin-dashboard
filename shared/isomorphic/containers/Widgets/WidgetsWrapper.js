import React from 'react';
import { WidgetWrapper } from './Widgets.styles';

export default function({ children, ...props }) {
  return (
    <WidgetWrapper className="isoWidgetsWrapper" {...props}>
      {children}
    </WidgetWrapper>
  );
}
