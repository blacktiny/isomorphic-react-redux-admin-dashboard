import React from 'react';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import PageHeader from '@iso/components/utility/pageHeader';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import Box from '@iso/components/utility/box';
import basicStyle from '@iso/assets/styles/constants';
import LeafletMap from './LeafletMap';
import { customHtmlMarker, basicMarkers, customIconMarkers } from './config';

export default function() {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>Leaflet Map</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="Map.leaflet.basicTitle" />}>
            <ContentHolder>
              <LeafletMap />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="Map.leaflet.basicMarkerTitle" />}>
            <ContentHolder>
              <LeafletMap id="map-with-markers" markerList={basicMarkers} />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="Map.leaflet.leafletCustomMarkerTitle" />}
          >
            <ContentHolder>
              <LeafletMap
                id="map-with-custom-icon"
                customIconMarkerList={customIconMarkers}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={
              <IntlMessages id="Map.leaflet.leafletCustomHtmlMarkerTitle" />
            }
          >
            <ContentHolder>
              <LeafletMap
                id="map-with-custom-markers"
                htmlMarkerList={customHtmlMarker}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
