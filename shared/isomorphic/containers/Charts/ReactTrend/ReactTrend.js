import React, { Component } from 'react';
import {
  data,
  autoDraw,
  autoDrawDuration,
  autoDrawEasing,
  smooth,
  gradient,
  radius,
  strokeWidth,
  strokeLinecap,
} from './config';
import PageHeader from '@iso/components/utility/pageHeader';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';

import Trend from 'react-trend';

export default function() {
  return (
    <LayoutWrapper className="isoMapPage">
      <PageHeader>React Trend</PageHeader>

      <Box>
        <Trend
          smooth={smooth}
          autoDraw={autoDraw}
          autoDrawDuration={parseInt(autoDrawDuration, 10)}
          autoDrawEasing={autoDrawEasing}
          height={100}
          width={600}
          data={data}
          gradient={gradient}
          radius={parseInt(radius, 10)}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
      </Box>
    </LayoutWrapper>
  );
}
