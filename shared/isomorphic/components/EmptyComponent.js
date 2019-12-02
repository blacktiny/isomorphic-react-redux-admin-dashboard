import React from 'react';
import { EmptyComponent } from './EmptyComponent.style';

export default function({ value }) {
  return (
    <EmptyComponent className="isoEmptyComponent">
      {value ? <span>{value}</span> : 'Please include Config'}
    </EmptyComponent>
  );
}
