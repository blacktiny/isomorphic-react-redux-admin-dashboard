import React from 'react';
import { Row, Col, Icon } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import Breadcrumb from './Breadcrumb.styles';

export default function() {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>BreadCrumb</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col span={12} style={colStyle}>
          <Box
            title="Basic BreadCrumb"
            subtitle="The simplest usage that close the notification box after 4.5s."
          >
            <ContentHolder>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="# ">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="# ">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </ContentHolder>
          </Box>
        </Col>
        <Col span={12} style={colStyle}>
          <Box
            title="Breadcrumb with Icon"
            subtitle="The simplest usage that close the notification box after 4.5s."
          >
            <ContentHolder>
              <Breadcrumb>
                <Breadcrumb.Item href="# ">
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="# ">
                  <Icon type="user" />
                  <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
              </Breadcrumb>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col span={12} style={colStyle}>
          <Box
            title="Breadcrumb Configuring the Separator"
            subtitle="The simplest usage that close the notification box after 4.5s."
          >
            <ContentHolder>
              <Breadcrumb separator=">">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="# ">Application Center</Breadcrumb.Item>
                <Breadcrumb.Item href="# ">Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
