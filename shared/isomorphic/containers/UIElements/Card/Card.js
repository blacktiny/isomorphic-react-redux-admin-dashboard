import React from 'react';
import { Row, Col } from 'antd';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import Card from './Card.styles';

export default function() {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="uiElements.cards.cards" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.cards.basicCard" />}
            subtitle={<IntlMessages id="uiElements.cards.basicCardSubTitle" />}
          >
            <ContentHolder>
              <Card
                title={<IntlMessages id="uiElements.cards.cardTitle" />}
                extra={
                  <a href="# ">{<IntlMessages id="uiElements.cards.more" />}</a>
                }
                style={{ width: '100%' }}
              >
                <p>{<IntlMessages id="uiElements.cards.lorem" />}</p>
                <p>{<IntlMessages id="uiElements.cards.cardContent" />}</p>
              </Card>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.cards.noBorder" />}
            subtitle={<IntlMessages id="uiElements.cards.noBorderSubTitle" />}
          >
            <ContentHolder>
              <Card
                title={<IntlMessages id="uiElements.cards.cardTitle" />}
                bordered={false}
                style={{ width: '100%' }}
              >
                <p>{<IntlMessages id="uiElements.cards.lorem" />}</p>
                <p>{<IntlMessages id="uiElements.cards.cardContent" />}</p>
              </Card>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col span={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.cards.gridCard" />}
            subtitle={<IntlMessages id="uiElements.cards.gridCardSubTitle" />}
          >
            <Row>
              <ContentHolder style={{ overflow: 'hidden' }}>
                <Col md={8} sm={8} xs={24} style={{ padding: '0 8px' }}>
                  <Card
                    title={<IntlMessages id="uiElements.cards.cardTitle" />}
                  >
                    {<IntlMessages id="uiElements.cards.cardContent" />}
                  </Card>
                </Col>
                <Col md={8} sm={8} xs={24} style={{ padding: '0 8px' }}>
                  <Card
                    title={<IntlMessages id="uiElements.cards.cardTitle" />}
                  >
                    {<IntlMessages id="uiElements.cards.cardContent" />}
                  </Card>
                </Col>
                <Col md={8} sm={8} xs={24} style={{ padding: '0 8px' }}>
                  <Card
                    title={<IntlMessages id="uiElements.cards.cardTitle" />}
                  >
                    {<IntlMessages id="uiElements.cards.cardContent" />}
                  </Card>
                </Col>
              </ContentHolder>
            </Row>
          </Box>
        </Col>
      </Row>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.cards.loadingCard" />}
            subtitle={
              <IntlMessages id="uiElements.cards.loadingCardSubTitle" />
            }
          >
            <ContentHolder>
              <Card
                loading
                title={<IntlMessages id="uiElements.cards.cardTitle" />}
                style={{ width: '100%' }}
              >
                {<IntlMessages id="uiElements.cards.whateverContent" />}
              </Card>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={
              <IntlMessages id="uiElements.cards.customizedContentTitle" />
            }
            subtitle={<IntlMessages id="uiElements.cards.customizedContent" />}
          >
            <ContentHolder>
              <Card bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img
                    alt="example"
                    width="100%"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                </div>
                <div className="custom-card">
                  <h3>
                    {<IntlMessages id="uiElements.cards.europeStreetBeat" />}
                  </h3>
                  <p>{<IntlMessages id="uiElements.cards.instagram" />}</p>
                </div>
              </Card>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
