import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import { data } from './PolarConfig';

export default class extends Component {
  render() {
    return <Polar data={data} height={230} />;
  }
}
