import React from 'react';
import IsoButton from '@iso/components/uielements/button';

export default function({ buttonContent, onClick }) {
  return (
    <IsoButton size="small" onClick={onClick}>
      {buttonContent}
    </IsoButton>
  );
}
