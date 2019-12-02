import React from 'react';
import { Row, Col } from 'antd';
// import Modals from '@iso/components/Feedback/Modal';
import Button from '@iso/components/uielements/button';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import Modals from '@iso/components/Feedback/Modal';
import basicStyle from '@iso/assets/styles/constants';

import ModalStyle, { ModalContent } from './Modal.styles';
import WithDirection from '@iso/lib/helpers/rtl';

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

const confirm = Modals.confirm;

function info() {
  Modals.info({
    title: <h3>This is a notification message</h3>,
    content: (
      <ModalContent>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p>some messages...some messages...</p>
      </ModalContent>
    ),
    onOk() {},
    okText: 'OK',
    cancelText: 'Cancel',
  });
}

function success() {
  Modals.success({
    title: 'This is a success message',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: 'OK',
    cancelText: 'Cancel',
  });
}

function error() {
  Modals.error({
    title: 'This is an error message',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: 'OK',
    cancelText: 'Cancel',
  });
}

function warning() {
  Modals.warning({
    title: 'This is a warning message',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    okText: 'OK',
    cancelText: 'Cancel',
  });
}

function showConfirm() {
  confirm({
    title: 'Want to delete these items?',
    content:
      'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => {});
    },
    onCancel() {},
    okText: 'OK',
    cancelText: 'Cancel',
  });
}

export default function() {
  const [state, setState] = React.useState({
    loading: false,
    visible: false,
  });
  const showModal = () => {
    setState({
      visible: true,
    });
  };
  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 2000);
  };
  const handleCancel = () => {
    setState({ visible: false });
  };
  const { rowStyle, colStyle, gutter } = basicStyle;
  const marginStyle = { marginRight: '5px', marginBottom: '5px' };

  return (
    <LayoutWrapper>
      <PageHeader>
        {<IntlMessages id="feedback.alert.modalBlockTitle" />}
      </PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.modalTitle" />}
            subtitle={<IntlMessages id="feedback.alert.modalSubTitle" />}
          >
            <ContentHolder>
              <Button type="primary" onClick={showModal}>
                {<IntlMessages id="feedback.alert.simpleModalDialogue" />}
              </Button>
              <Modal
                visible={state.visible}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="back" size="large" onClick={handleCancel}>
                    Return
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    size="large"
                    loading={state.loading}
                    onClick={handleOk}
                  >
                    Submit
                  </Button>,
                ]}
              >
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>Some contents...</p>
              </Modal>
            </ContentHolder>
          </Box>
        </Col>

        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.modalTitle" />}
            subtitle={<IntlMessages id="feedback.alert.modalSubTitle" />}
          >
            <ContentHolder>
              <Button onClick={info} style={marginStyle}>
                {<IntlMessages id="feedback.alert.infoTitle" />}
              </Button>
              <Button onClick={success} style={marginStyle}>
                {<IntlMessages id="feedback.alert.successTitle" />}
              </Button>
              <Button onClick={error} style={marginStyle}>
                {<IntlMessages id="feedback.alert.errorTitle" />}
              </Button>
              <Button onClick={warning}>
                {<IntlMessages id="feedback.alert.warningTitle" />}
              </Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.modalTitle" />}
            subtitle={<IntlMessages id="feedback.alert.modalSubTitle" />}
          >
            <ContentHolder>
              <Button onClick={showConfirm}>
                {<IntlMessages id="feedback.alert.confirmationModalDialogue" />}
              </Button>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
