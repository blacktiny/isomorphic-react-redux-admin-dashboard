import React, { Fragment, useState, useContext } from 'react';
import Container from '@iso/ui/UI/Container/Container';
import Heading from '@iso/ui/Heading/Heading';
import RadioGroup from '@iso/ui/RadioGroup/RadioGroup';
import StatisticsComponent from '@iso/ui/Statistics/Statistics';

import ApiProvider, { ApiContext } from '../../../context/ApiProvider';

import StatWrapper, {
  HeaderSection,
  ContentWrapper,
  ChartWrapper,
  SectionWrapper,
} from './Statistics.style';

const radioItems = [
  {
    id: 1,
    label: 'Weekly',
    value: 'weekly',
  },
  {
    id: 2,
    label: 'Monthly',
    value: 'monthly',
  },
  {
    id: 3,
    label: 'Yearly',
    value: 'yearly',
  },
];

const DataProcessor = (statData, dataScope) => {
  let tempDataScope = '';
  let tempData = [];

  if (dataScope) {
    if (dataScope.yearly === true) {
      tempDataScope = 'yearly';
    } else if (dataScope.monthly === true) {
      tempDataScope = 'monthly';
    } else {
      tempDataScope = 'weekly';
    }
  }

  tempData = statData
    ? statData.filter(item => {
        return item.type === tempDataScope;
      })
    : [];

  return tempData;
};

const HotelStatRender = () => {
  const { data } = useContext(ApiContext);

  const [dataScope, setDataScope] = useState({
    weekly: true,
    monthly: false,
    yearly: false,
    timeFrame: '',
    countTime: '',
  });

  let graphData = [];
  const statData = data && data.data ? data.data : [];
  graphData = DataProcessor(statData, dataScope);

  const handleChange = value => {
    switch (value) {
      case 'yearly':
        setDataScope({
          ...dataScope,
          weekly: false,
          monthly: false,
          yearly: true,
        });
        break;
      case 'monthly':
        setDataScope({
          ...dataScope,
          weekly: false,
          monthly: true,
          yearly: false,
        });
        break;
      default:
        setDataScope({
          ...dataScope,
          weekly: true,
          monthly: false,
          yearly: false,
        });
        break;
    }
  };

  const handleStatisticsTime = (timeFrame, countTime) => {
    setDataScope({
      ...dataScope,
      timeFrame,
      countTime,
    });
  };

  return (
    <StatWrapper>
      <Container fluid={true}>
        <HeaderSection>
          <Heading as="h2" content="RedQ, Inc stats" size="25px" />
        </HeaderSection>

        <SectionWrapper>
          <ContentWrapper>
            <h3>
              Total view ({dataScope.countTime} {dataScope.timeFrame})
            </h3>
            <span>The total amount of time spent checking your hotel </span>
          </ContentWrapper>

          <ChartWrapper>
            {graphData && graphData.length ? (
              <Fragment>
                <RadioGroup
                  items={radioItems}
                  name="chartFilter"
                  value="weekly"
                  onUpdate={handleChange}
                />
                <StatisticsComponent
                  postStatData={graphData}
                  dataScope={dataScope}
                  onUpdate={handleStatisticsTime}
                />
              </Fragment>
            ) : (
              ''
            )}
          </ChartWrapper>
        </SectionWrapper>
      </Container>
    </StatWrapper>
  );
};

const HotelStatistics = () => {
  return (
    <ApiProvider url="/data/hotel-statistics.json" limit="100">
      <HotelStatRender />
    </ApiProvider>
  );
};

export default HotelStatistics;
