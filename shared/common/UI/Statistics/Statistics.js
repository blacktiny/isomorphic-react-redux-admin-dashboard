import React, { useEffect } from 'react';
import { BarChart } from 'react-d3-components';
import { ProcessChartData } from './StatHelperFunction';

const StatisticsComponent = ({ onUpdate, ...props }) => {
  const { dataScope, postStatData } = props;

  let viewTime = '',
    timeFrame = '';

  if (dataScope) {
    if (dataScope.yearly === true) {
      viewTime = 'yearly';
      timeFrame = ' in 12 months';
    } else if (dataScope.monthly === true) {
      viewTime = 'monthly';
      timeFrame = ' in 30 days';
    } else {
      viewTime = 'weekly';
      timeFrame = ' in 7 days';
    }
  }

  let countTime = 0,
    countSingle = 0;
  for (const key in postStatData) {
    countSingle = postStatData[key].value;
    countTime = countTime + countSingle;
  }

  const data = ProcessChartData(dataScope, postStatData);

  useEffect(() => {
    onUpdate(timeFrame, countTime);
  }, []);

  const GraphView = props => {
    const { dataScope } = props;
    if (dataScope && dataScope.monthly === true) {
      return (
        <BarChart
          data={data}
          width={800}
          height={500}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          xAxis={{ label: ' Time' }}
          yAxis={{ label: ' View' }}
        />
      );
    } else if (dataScope && dataScope.yearly === true) {
      return (
        <BarChart
          data={data}
          width={800}
          height={500}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          xAxis={{ label: ' Time' }}
          yAxis={{ label: ' View' }}
        />
      );
    } else {
      return (
        <BarChart
          data={data}
          width={800}
          height={500}
          margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          xAxis={{ label: ' Time' }}
          yAxis={{ label: ' View' }}
        />
      );
    }
  };

  return <GraphView dataScope={dataScope} />;
};

export default StatisticsComponent;
