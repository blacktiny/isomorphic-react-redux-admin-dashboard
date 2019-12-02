import React from 'react';
import { Field, Form } from 'formik';
import { AntInput } from '@iso/ui/Antd/AntdInputWithFormik';
import Row from '@iso/ui/Antd/Grid/Row';
import Col from '@iso/ui/Antd/Grid/Col';
import Button from '@iso/ui/Antd/Button/Button';

const RenderChangePassWordForm = props => {
  const { values, submitCount, handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Row gutter={30}>
        <Col lg={12}>
          <Field
            component={AntInput}
            name="password"
            type="password"
            size="large"
            label="Enter old password"
            submitCount={submitCount}
            value={values.password}
            hasFeedback
          />
        </Col>
        <Col lg={12}>
          <Field
            component={AntInput}
            name="newPassWord"
            type="password"
            size="large"
            label="Enter new password"
            submitCount={submitCount}
            value={values.newPassWord}
            hasFeedback
          />
        </Col>
        <Col lg={24}>
          <Field
            component={AntInput}
            name="confrimNewPassWord"
            type="password"
            size="large"
            label="Confirm new password"
            submitCount={submitCount}
            value={values.confrimNewPassWord}
            hasFeedback
          />
        </Col>
      </Row>
      <div className="submit-container">
        <Button className="signin-btn" type="primary" htmlType="submit">
          Sent Email
        </Button>
      </div>
    </Form>
  );
};

export default RenderChangePassWordForm;
