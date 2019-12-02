import React from 'react';
import { BackTop } from 'antd';
import './BackToTop.css';

export default function() {
  return (
    <div>
      <div className="isoContent">
        <h2>Back to top with Gray</h2>
        <BackTop />
        Scroll down to see the bottom-right
        <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
        button.
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="isoContent">
        <h2>Back to top with Blue</h2>
        <BackTop>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
        Scroll down to see the bottom-right
        <strong style={{ color: '#1088e9' }}> blue </strong>
        button.
      </div>
    </div>
  );
}
