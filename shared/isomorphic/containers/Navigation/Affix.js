import React from 'react';
import { Affix, Button } from 'antd';

export default function() {
  return (
    <div>
      <h2> Basic Affix </h2>
      <Affix>
        <Button type="primary">Affix top</Button>
      </Affix>
      <br />
      <Affix offsetBottom={0}>
        <Button type="primary">Affix bottom</Button>
      </Affix>
      <br />
      <br />
      <br />
      <br />
      <h2> Containter to Scroll Affix </h2>
      <div
        className="scrollable-container"
        ref={node => {
          this.container = node;
        }}
      >
        <div className="background">
          <Affix target={() => this.container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h2> Affix with Callback </h2>
      <Affix offsetTop={120} onChange={affixed => {}}>
        <Button>120px to affix top</Button>
      </Affix>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
