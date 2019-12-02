import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { data } from './HorizontalConfig';

export default class HorizontalChart extends Component {
  render() {
    return <HorizontalBar data={data} />;
  }
}
