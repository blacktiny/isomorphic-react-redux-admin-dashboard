import React from 'react';
import { Row, Col } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import BasicTree from './BasicTree';
import BasicControlledTree from './BasicControlledTree';
import DraggableTree from './DraggableTree';
import AsyncTree from './AsyncTree';
import SearchableTree from './SearchableTree';
import LineTree from './LineTree';

export default function() {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="uiElements.tree.tree" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tree.basicExample" />}
            subtitle={
              <IntlMessages id="uiElements.tree.basicExampleSubTitle" />
            }
          >
            <ContentHolder>
              <BasicTree />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tree.basicControlledExample" />}
            subtitle={<IntlMessages id="uiElements.tree.tree" />}
          >
            <ContentHolder>
              <BasicControlledTree />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tree.draggableExample" />}
            subtitle={
              <IntlMessages id="uiElements.tree.draggableExampleSubTitle" />
            }
          >
            <ContentHolder>
              <DraggableTree />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tree.loadAsync" />}
            subtitle={<IntlMessages id="uiElements.tree.loadAsyncSubTitle" />}
          >
            <ContentHolder>
              <AsyncTree />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tree.searchableExample" />}
            subtitle={
              <IntlMessages id="uiElements.tree.searchableExampleSubTitle" />
            }
          >
            <ContentHolder>
              <SearchableTree />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tree.treeWithLine" />}
            subtitle={<IntlMessages id="uiElements.tree.treeWithLine" />}
          >
            <ContentHolder>
              <LineTree />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
