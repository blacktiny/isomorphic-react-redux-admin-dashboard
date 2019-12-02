import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
import { data } from './BubbleConfig';

export default class extends Component {
  render() {
    return <Bubble data={data} />;
  }
}
