import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Row, Col } from 'antd';
import * as configs from '@iso/containers/Charts/ReactVis/config';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import 'react-vis/dist/style.css';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';

const LineSeries = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/LineSeries')
);
const LineMark = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/LineMark')
);
const AreaChartElevated = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/AreaChartElevated')
);
const StackedHorizontalBarChart = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/StackedHorizontalBarChart')
);
const ClusteredStackedBarChart = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/ClusteredStackedBarChart')
);
const CustomScales = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/CustomScales')
);
const CircularGridLines = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/CircularGridLines')
);
const DynamicProgrammaticRightedgehints = dynamic(() =>
  import(
    '@iso/containers/Charts/ReactVis/Charts/DynamicProgrammaticRightedgehints'
  )
);
const DynamicCrosshairScatterplot = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/DynamicCrosshairScatterplot')
);
const SimpleRadialChart = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/SimpleRadialChart')
);
const SimpleDonutChart = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/SimpleDonutChart')
);
const CustomRadius = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/CustomRadius')
);
const SimpleTreeMap = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/SimpleTreeMap')
);
const DynamicTreeMap = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/DynamicTreeMap')
);
const BasicSunburst = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/BasicSunburst')
);
const AnimatedSunburst = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/AnimatedSunburst')
);
const CandleStick = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/CandleStick')
);
const ComplexChart = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/ComplexChart')
);
const StreamGraph = dynamic(() =>
  import('@iso/containers/Charts/ReactVis/Charts/StreamGraph')
);
export default withAuthSync(() => (
  <>
    <Head>
      <title>React Vis</title>
    </Head>
    <DashboardLayout>
      <ReactVis />
    </DashboardLayout>
  </>
));

function ReactVis() {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper className="isoMapPage">
      <PageHeader>React Vis</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.LineSeries.title}>
            <ContentHolder>
              <LineSeries {...configs.LineSeries} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.LineMark.title}>
            <ContentHolder>
              <LineMark {...configs.LineMark} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.AreaChartElevated.title}>
            <ContentHolder>
              <AreaChartElevated {...configs.AreaChartElevated} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.StackedHorizontalBarChart.title}>
            <ContentHolder>
              <StackedHorizontalBarChart
                {...configs.StackedHorizontalBarChart}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.ClusteredStackedBarChart.title}>
            <ContentHolder>
              <ClusteredStackedBarChart {...configs.ClusteredStackedBarChart} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.CustomScales.title}>
            <ContentHolder>
              <CustomScales {...configs.CustomScales} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.CircularGridLines.title}>
            <ContentHolder>
              <CircularGridLines {...configs.CircularGridLines} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.DynamicProgrammaticRightedgehints.title}>
            <ContentHolder>
              <DynamicProgrammaticRightedgehints
                {...configs.DynamicProgrammaticRightedgehints}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.DynamicCrosshairScatterplot.title}>
            <ContentHolder>
              <DynamicCrosshairScatterplot
                {...configs.DynamicCrosshairScatterplot}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.SimpleRadialChart.title}>
            <ContentHolder>
              <SimpleRadialChart {...configs.SimpleRadialChart} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.SimpleDonutChart.title}>
            <ContentHolder>
              <SimpleDonutChart {...configs.SimpleDonutChart} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.CustomRadius.title}>
            <ContentHolder>
              <CustomRadius {...configs.CustomRadius} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.SimpleTreeMap.title}>
            <ContentHolder>
              <SimpleTreeMap {...configs.SimpleTreeMap} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.DynamicTreeMap.title}>
            <ContentHolder>
              <DynamicTreeMap {...configs.DynamicTreeMap} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.BasicSunburst.title}>
            <ContentHolder>
              <BasicSunburst {...configs.BasicSunburst} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.AnimatedSunburst.title}>
            <ContentHolder>
              <AnimatedSunburst {...configs.AnimatedSunburst} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.CandleStick.title}>
            <ContentHolder>
              <CandleStick {...configs.CandleStick} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} xs={24} style={colStyle}>
          <Box title={configs.ComplexChart.title}>
            <ContentHolder>
              <ComplexChart {...configs.ComplexChart} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col span={24} style={colStyle}>
          <Box title={configs.StreamGraph.title}>
            <ContentHolder>
              <StreamGraph {...configs.StreamGraph} />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
