import React from 'react';
import { Row, Col } from 'antd';
import Collapse from '@iso/components/uielements/collapse';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';

const text = <IntlMessages id="uiElements.collapse.text" />;
const { Panel } = Collapse;

export default function() {
  const callback = key => {};
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>
        {<IntlMessages id="uiElements.collapse.collapse" />}
      </PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.collapse.collapse" />}
            subtitle={
              <IntlMessages id="uiElements.collapse.collapseSubTitle" />
            }
          >
            <ContentHolder>
              <Collapse accordion>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerOne" />}
                  key="1"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerTwo" />}
                  key="2"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerThree" />}
                  key="3"
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.collapse.nestedExample" />}
            subtitle={
              <IntlMessages id="uiElements.collapse.nestedExampleSubTitle" />
            }
          >
            <ContentHolder>
              <Collapse onChange={callback}>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerOne" />}
                  key="1"
                >
                  <Collapse defaultActiveKey="1">
                    <Panel
                      header={
                        <IntlMessages id="uiElements.collapse.headerNested" />
                      }
                      key="1"
                    >
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerTwo" />}
                  key="2"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerThree" />}
                  key="3"
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.collapse.borderlessExample" />}
            subtitle={
              <IntlMessages id="uiElements.collapse.borderlessExampleSubTitle" />
            }
          >
            <ContentHolder>
              <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerOne" />}
                  key="1"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerTwo" />}
                  key="2"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerThree" />}
                  key="3"
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.collapse.accordion" />}
            subtitle={
              <IntlMessages id="uiElements.collapse.accordionSubTitle" />
            }
          >
            <ContentHolder>
              <Collapse accordion>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerOne" />}
                  key="1"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerTwo" />}
                  key="2"
                >
                  <p>{text}</p>
                </Panel>
                <Panel
                  header={<IntlMessages id="uiElements.collapse.headerThree" />}
                  key="3"
                >
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
