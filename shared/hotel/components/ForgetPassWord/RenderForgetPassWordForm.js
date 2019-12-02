import React from 'react';
import { Field, Form } from 'formik';
import { MdLockOpen } from 'react-icons/md';
import { AntInput } from '@iso/ui/Antd/AntdInputWithFormik';
import Button from '@iso/ui/Antd/Button/Button';

import FormWrapper from './RenderForgetPassWordForm.style';

const RenderForgetPassWordForm = props => {
  const { values, submitCount, handleSubmit } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Field
          component={AntInput}
          name="email"
          type="text"
          size="large"
          placeholder="Email"
          submitCount={submitCount}
          value={values.email}
          hasFeedback
        />
        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          <MdLockOpen />
          Sent Email
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default RenderForgetPassWordForm;
