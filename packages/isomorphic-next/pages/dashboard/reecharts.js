import React, { Component } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Row, Col } from 'antd';

import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import * as configs from '@iso/containers/Charts/Recharts/config';
import { withAuthSync } from '../../authentication/auth.utils';
import DashboardLayout from '../../containers/DashboardLayout/DashboardLayout';
const SimpleLineCharts = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/SimpleLineCharts')
);
const CustomizedDotLineChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/CustomizedDotLineChart')
);
const SimpleBarChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/SimpleBarChart')
);
const MixBarChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/MixBarChart')
);
const CustomShapeBarChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/CustomShapeBarChart')
);
const BiaxialBarChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/BiaxialBarChart')
);
const SimpleAreaChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/SimpleAreaChart')
);
const StackedAreaChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/StackedAreaChart')
);
const LineBarAreaComposedChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/LineBarAreaComposedChart')
);
const CustomActiveShapePieChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/CustomActiveShapePieChart')
);
const SpecifiedDomainRadarChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/SpecifiedDomainRadarChart')
);
const SimpleRadialBarChart = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/SimpleRadialBarChart')
);
const LegendEffectOpacity = dynamic(() =>
  import('@iso/containers/Charts/Recharts/Charts/LegendEffectOpacity')
);

export default withAuthSync(() => (
  <>
    <Head>
      <title>Recharts</title>
    </Head>
    <DashboardLayout>
      <ReCharts />
    </DashboardLayout>
  </>
));

class ReCharts extends Component {
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>Re-Charts</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.SimpleLineCharts.title}>
              <ContentHolder>
                <SimpleLineCharts {...configs.SimpleLineCharts} />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.CustomizedDotLineChart.title}>
              <ContentHolder>
                <CustomizedDotLineChart {...configs.CustomizedDotLineChart} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.SimpleBarChart.title}>
              <ContentHolder>
                <SimpleBarChart {...configs.SimpleBarChart} />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.MixBarChart.title}>
              <ContentHolder>
                <MixBarChart {...configs.MixBarChart} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.CustomShapeBarChart.title}>
              <ContentHolder>
                <CustomShapeBarChart {...configs.CustomShapeBarChart} />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.BiaxialBarChart.title}>
              <ContentHolder>
                <BiaxialBarChart {...configs.BiaxialBarChart} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.SimpleAreaChart.title}>
              <ContentHolder>
                <SimpleAreaChart {...configs.SimpleAreaChart} />
              </ContentHolder>
            </Box>
          </Col>
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.StackedAreaChart.title}>
              <ContentHolder>
                <StackedAreaChart {...configs.StackedAreaChart} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.LineBarAreaComposedChart.title}>
              <ContentHolder>
                <LineBarAreaComposedChart
                  {...configs.LineBarAreaComposedChart}
                />
              </ContentHolder>
            </Box>
          </Col>

          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.CustomActiveShapePieChart.title}>
              <ContentHolder>
                <CustomActiveShapePieChart
                  {...configs.CustomActiveShapePieChart}
                />
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Box title={configs.SpecifiedDomainRadarChart.title}>
          <ContentHolder>
            <SpecifiedDomainRadarChart {...configs.SpecifiedDomainRadarChart} />
          </ContentHolder>
        </Box>
        <Box title={configs.SimpleRadialBarChart.title}>
          <ContentHolder>
            <SimpleRadialBarChart {...configs.SimpleRadialBarChart} />
          </ContentHolder>
        </Box>
        <Box title={configs.LegendEffectOpacity.title}>
          <ContentHolder>
            <LegendEffectOpacity {...configs.LegendEffectOpacity} />
          </ContentHolder>
        </Box>
      </LayoutWrapper>
    );
  }
}
