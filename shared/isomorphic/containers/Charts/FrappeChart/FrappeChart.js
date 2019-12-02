import React, { Component } from 'react';
import { Row, Col } from 'antd';
import FrappeChart from 'frappe-charts/dist/frappe-charts.min.esm';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import Button from '@iso/components/uielements/button';
import basicStyle from '@iso/assets/styles/constants';
import * as configs from './config';
import 'frappe-charts/dist/frappe-charts.min.css';

export default class extends Component {
  state = {
    currentIndex: 2,
  };
  componentDidMount() {
    new FrappeChart(configs.barChart);
    new FrappeChart(configs.lineChart);
    new FrappeChart(configs.scatterChart);
    new FrappeChart(configs.pieChart);
    new FrappeChart(configs.percentageChart);
    this.updatedChart = new FrappeChart(configs.updatedChart);
  }
  addData = () => {
    let { currentIndex } = this.state;
    currentIndex += 1;
    const data = configs.basicData.datasets[currentIndex % 3];
    this.updatedChart.add_data_point(data.values, data.title);
    this.setState({ currentIndex });
  };
  removeData = () => {
    const { currentIndex } = this.state;
    if (currentIndex > 0) {
      this.updatedChart.remove_data_point(currentIndex);
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };
  render() {
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (
      <LayoutWrapper className="isoMapPage">
        <PageHeader>Frappe Charts</PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} xs={24} style={colStyle}>
            <Box title={configs.updatedChart.header}>
              <ContentHolder>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    onClick={this.addData}
                    style={{ marginRight: '10px' }}
                  >
                    + Add Value
                  </Button>
                  <Button onClick={this.removeData}>Remove Value</Button>
                </div>
                <div id={configs.updatedChart.parentId} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} xs={24} style={colStyle}>
            <Box title={configs.barChart.header}>
              <ContentHolder>
                <div id={configs.barChart.parentId} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} xs={24} style={colStyle}>
            <Box title={configs.lineChart.header}>
              <ContentHolder>
                <div id={configs.lineChart.parentId} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} xs={24} style={colStyle}>
            <Box title={configs.scatterChart.header}>
              <ContentHolder>
                <div id={configs.scatterChart.parentId} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.pieChart.header}>
              <ContentHolder>
                <div id={configs.pieChart.parentId} />
              </ContentHolder>
            </Box>
          </Col>

          <Col md={12} xs={24} style={colStyle}>
            <Box title={configs.percentageChart.header}>
              <ContentHolder>
                <div id={configs.percentageChart.parentId} />
              </ContentHolder>
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}
export { FrappeChart };
