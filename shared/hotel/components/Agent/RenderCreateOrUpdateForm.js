import React from 'react';
import { Form, Field } from 'formik';
import {
  AntDatePicker,
  AntInput,
  AntSelect,
  AntTextArea,
} from '@iso/ui/Antd/AntdInputWithFormik';
import Row from '@iso/ui/Antd/Grid/Row';
import Col from '@iso/ui/Antd/Grid/Col';
import Button from '@iso/ui/Antd/Button/Button';

export default function RenderCreateOrUpdateForm({
  handleSubmit,
  values,
  submitCount,
}) {
  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <Row gutter={30}>
        <Col lg={12}>
          <Field
            component={AntInput}
            name="firstName"
            type="text"
            label="First Name"
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
        <Col lg={12}>
          <Field
            component={AntInput}
            name="lastName"
            type="text"
            label="Last Name"
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>
      <Row gutter={30}>
        <Col lg={12}>
          <Field
            component={AntDatePicker}
            name="dateOfBirthday"
            label="Date Of Birth"
            defaultValue={values.dateOfBirthday}
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
        <Col lg={12}>
          <Row gutter={30}>
            <Col md={12}>
              <Field
                component={AntSelect}
                name="agentGender"
                label="I Am"
                defaultValue={values.agentGender}
                selectOptions={values.genderOptions}
                submitCount={submitCount}
                tokenSeparators={[',']}
                hasFeedback
              />
            </Col>
            <Col md={12}>
              <Field
                component={AntSelect}
                name="preferredLanguage"
                label="Preferred Language"
                defaultValue={values.preferredLanguage}
                selectOptions={values.languageOptions}
                submitCount={submitCount}
                tokenSeparators={[',']}
                hasFeedback
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={30}>
        <Col lg={12}>
          <Field
            component={AntInput}
            name="email"
            type="email"
            label="Email Adress"
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
        <Col lg={12}>
          <Field
            component={AntInput}
            name="phone_number"
            type="number"
            label="Phone Number"
            submitCount={submitCount}
            hasFeedback
          />
        </Col>
      </Row>
      <Field
        component={AntInput}
        name="address"
        type="text"
        label="Where You Live"
        submitCount={submitCount}
        hasFeedback
      />
      <Field
        component={AntTextArea}
        name="describeYourself"
        type="text"
        label="Describe Yourself (Optional)"
        submitCount={submitCount}
        hasFeedback
        rows={4}
      />

      <div className="submit-container">
        <Button htmlType="submit" type="primary">
          Save Changes
        </Button>
      </div>
    </Form>
  );
}
