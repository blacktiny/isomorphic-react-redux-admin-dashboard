import React from 'react';
import { Row, Col } from 'antd';
import message from '@iso/components/Feedback/Message';
import Button from '@iso/components/uielements/button';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import MessageContent from './Message.styles';

const success = () => {
  message.success(
    <MessageContent>
      This is a message of success will dessapear after 3 seconds
    </MessageContent>,
    3
  );
};

const error = () => {
  message.error(
    <MessageContent>This is a message of error</MessageContent>,
    10
  );
};

const warning = () => {
  message.warning(<MessageContent>This is message of warning</MessageContent>);
};

const loadSuccess = () => {
  const hide = message.loading(
    <MessageContent>Action in progress..</MessageContent>,
    0
  );
  setTimeout(hide, 2500);
};

const customDuration = () => {
  message.success(
    <MessageContent>
      This is a prompt message for success, and it will disappear in 10 seconds
    </MessageContent>,
    10
  );
};

export default function() {
  const info = () => {
    message.info('This is a normal message');
  };

  const { rowStyle, colStyle, gutter } = basicStyle;
  const marginStyle = { marginRight: '5px', marginBottom: '5px' };

  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="feedback.alert.message" />}</PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.normalMessageTitle" />}
            subtitle={
              <IntlMessages id="feedback.alert.normalMessageSubtitle" />
            }
          >
            <ContentHolder>
              <Button type="primary" onClick={info}>
                {<IntlMessages id="feedback.alert.displayMessage" />}
              </Button>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={
              <IntlMessages id="feedback.alert.displayOtherTypeMessageTitle" />
            }
            subtitle={
              <IntlMessages id="feedback.alert.displayOtherTypeMessageSubTitle" />
            }
          >
            <ContentHolder>
              <Button onClick={success} style={marginStyle}>
                {<IntlMessages id="feedback.alert.successText" />}
              </Button>
              <Button onClick={error} style={marginStyle}>
                {<IntlMessages id="feedback.alert.errorText" />}
              </Button>
              <Button onClick={warning}>
                {<IntlMessages id="feedback.alert.warningText" />}
              </Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.customizeDurationTitle" />}
            subtitle={
              <IntlMessages id="feedback.alert.customizeDurationSubTitle" />
            }
          >
            <ContentHolder>
              <Button onClick={customDuration}>
                {<IntlMessages id="feedback.alert.customizeDurationButton" />}
              </Button>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.messageLoadingTitle" />}
            subtitle={
              <IntlMessages id="feedback.alert.messageLoadingSubTitle" />
            }
          >
            <ContentHolder>
              <Button onClick={loadSuccess}>
                {<IntlMessages id="feedback.alert.displayLoadIndicator" />}
              </Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
