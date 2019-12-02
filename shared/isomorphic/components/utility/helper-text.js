import React from 'react';

export default ({ text = '' }) => (
  <div
    className="isoHelperText"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '20px',
    }}
  >
    <h3>{text}</h3>
  </div>
);
