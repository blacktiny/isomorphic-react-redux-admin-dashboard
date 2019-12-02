import React from 'react';
import { WidgetColumn } from './style';

export default function({ children, ...props }) {
  return (
    <WidgetColumn className="isoWidgetsColumn" {...props}>
      {children}
    </WidgetColumn>
  );
}
