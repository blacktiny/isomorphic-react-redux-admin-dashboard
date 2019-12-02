import React from 'react';
import { Col, Row } from 'antd';

import LaddaButton, {
  XL,
  L,
  XS,
  S,
  CONTRACT,
  EXPAND_RIGHT,
  SLIDE_LEFT,
  SLIDE_UP,
  ZOOM_IN,
  ZOOM_OUT,
} from 'react-ladda';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import './laddaButton.css';

export default function() {
  const [loading, setLoading] = React.useState(false);

  const toggle = () => {
    setLoading(loading => !loading);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const rowStyle = {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
  };
  const colStyle = {
    marginBottom: '16px',
  };
  const gutter = 16;
  return (
    <LayoutWrapper>
      <PageHeader>Ladda Button</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Button One" subtitle="Slide Up">
            <ContentHolder>
              <LaddaButton
                loading={loading}
                onClick={toggle}
                data-color="#eee"
                data-size={XL}
                data-style={SLIDE_UP}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
              >
                Click Here!
              </LaddaButton>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Button Two" subtitle="Slide Left">
            <ContentHolder>
              <LaddaButton
                loading={loading}
                onClick={toggle}
                data-color="#eee"
                data-size={XL}
                data-style={SLIDE_LEFT}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
              >
                Click Here!
              </LaddaButton>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Button Three" subtitle="Zoom In">
            <ContentHolder>
              <LaddaButton
                loading={loading}
                onClick={toggle}
                data-color="#eee"
                data-size={L}
                data-style={ZOOM_IN}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
              >
                Click Here!
              </LaddaButton>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Button Four" subtitle="Slide Out">
            <ContentHolder>
              <LaddaButton
                loading={loading}
                onClick={toggle}
                data-color="#eee"
                data-size={S}
                data-style={ZOOM_OUT}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
              >
                Click Here!
              </LaddaButton>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Button Five" subtitle="Expand Right">
            <ContentHolder>
              <LaddaButton
                loading={loading}
                onClick={toggle}
                data-color="#eee"
                data-size={XL}
                data-style={EXPAND_RIGHT}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
              >
                Click Here!
              </LaddaButton>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Button Six" subtitle="CONTRACT">
            <ContentHolder>
              <LaddaButton
                loading={loading}
                onClick={toggle}
                data-color="#eee"
                data-size={XS}
                data-style={CONTRACT}
                data-spinner-size={30}
                data-spinner-color="#fff"
                data-spinner-lines={12}
              >
                Click Here!
              </LaddaButton>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
