import React from 'react';

export default function({ url, icon, iconcolor }) {
  const iconStyle = {
    color: iconcolor,
  };
  return (
    <li>
      <a href={url}>
        <i className={icon} style={iconStyle} />
      </a>
    </li>
  );
}
