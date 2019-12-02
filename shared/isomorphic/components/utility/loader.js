import React from 'react';
import LoaderComponent from './loader.style';

export default Loader => (
  <LoaderComponent>
    <svg className="isoContentLoader" viewBox="0 0 50 50">
      <circle
        className="isoContentLoaderCircle"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="3.6"
      />
    </svg>
  </LoaderComponent>
);
