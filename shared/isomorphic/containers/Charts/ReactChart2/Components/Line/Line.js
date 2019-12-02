import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { data } from './LineConfig';

export default class LineChart extends Component {
  render() {
    return <Line data={data} />;
  }
}
