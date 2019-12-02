import React from 'react';
import { Field, Form } from 'formik';
import Link from 'next/link';
import { MdLockOpen } from 'react-icons/md';
import { AntInput, AntSwitch } from '@iso/ui/Antd/AntdInputWithFormik';
import Button from '@iso/ui/Antd/Button/Button';

import FormWrapper, {
  FieldWrapper,
  SwitchWrapper,
  Label,
} from './SiginFormStyle';

const RenderBasicInfoForm = props => {
  console.log(props, 'formprops');

  const { values, submitCount, handleSubmit, forgetPasswordLink } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Field
          component={AntInput}
          name="email"
          type="email"
          size="large"
          placeholder="dummy@dummy.io"
          defaultValue={values.email}
          submitCount={submitCount}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="password"
          type="password"
          size="large"
          placeholder="Type anything..."
          submitCount={submitCount}
          hasFeedback
        />
        <FieldWrapper className="field-container">
          <SwitchWrapper>
            <Field
              component={AntSwitch}
              name="rememberMe"
              submitCount={submitCount}
              defaultValue={values.rememberMe}
            />
            <Label>Remember Me</Label>
          </SwitchWrapper>
          <Link href={forgetPasswordLink}>
            <a>Forget Password ?</a>
          </Link>
        </FieldWrapper>

        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          <MdLockOpen />
          Login
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default RenderBasicInfoForm;
