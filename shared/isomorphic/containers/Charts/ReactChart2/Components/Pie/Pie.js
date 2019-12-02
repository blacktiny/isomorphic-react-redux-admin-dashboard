import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { data } from './PieConfig';

export default class extends Component {
  render() {
    return <Pie data={data} />;
  }
}
