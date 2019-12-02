import React, { Component, lazy } from 'react';
import { Row, Col } from 'antd';
import basicStyle from '@iso/assets/styles/constants';
import ChartWrapper from '../Charts.styles';

const Doughnut = lazy(() => import('./Components/Doughnut/Doughnut'));
const DynamicDoughnut = lazy(() =>
  import('./Components/DynamicDoughnut/DynamicDoughnut')
);
const Pie = lazy(() => import('./Components/Pie/Pie'));
const Line = lazy(() => import('./Components/Line/Line'));
const Bar = lazy(() => import('./Components/Bar/Bar'));
const HorizontalBar = lazy(() =>
  import('./Components/HorizontalBar/HorizontalBar')
);
const Radar = lazy(() => import('./Components/Radar/Radar'));
const Polar = lazy(() => import('./Components/Polar/Polar'));
const Bubble = lazy(() => import('./Components/Bubble/Bubble'));
const MixedData = lazy(() => import('./Components/Mix/Mix'));
const RandomizedDataLine = lazy(() =>
  import('./Components/RandomizedLine/RandomizedLine')
);
const PageHeader = lazy(() => import('@iso/components/utility/pageHeader'));
const Box = lazy(() => import('@iso/components/utility/box'));
const LayoutWrapper = lazy(() =>
  import('@iso/components/utility/layoutWrapper')
);
const ContentHolder = lazy(() =>
  import('@iso/components/utility/contentHolder')
);
export default class extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>React Charts 2</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Doughnut">
              <ContentHolder>
                <Doughnut />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Dynamicly refreshed Doughnut">
              <ContentHolder>
                <DynamicDoughnut />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Pie">
              <ContentHolder>
                <Pie />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Line">
              <ContentHolder>
                <Line />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Bar (custom size)">
              <ContentHolder>
                <Bar />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Horizontal Bar Example">
              <ContentHolder>
                <HorizontalBar />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Radar">
              <ContentHolder>
                <Radar />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Polar">
              <ContentHolder>
                <Polar />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Bubble">
              <ContentHolder>
                <Bubble />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Mixed Data">
              <ContentHolder>
                <MixedData />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title="Random Animated">
              <ContentHolder>
                <RandomizedDataLine />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
