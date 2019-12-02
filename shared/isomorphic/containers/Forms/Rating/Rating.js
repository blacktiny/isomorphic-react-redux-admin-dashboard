import React from 'react';
import Rate from '@iso/components/uielements/rate';

export default function() {
  const [value, setValue] = React.useState(3);

  const handleChange = value => {
    setValue(value);
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      {value && <span className="ant-rate-text">{value} stars</span>}
    </span>
  );
}
