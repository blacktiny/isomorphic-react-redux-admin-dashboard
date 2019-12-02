import React from 'react';
import { Field, Form } from 'formik';
import { MdLockOpen } from 'react-icons/md';
import { AntInput, AntSwitch } from '@iso/ui/Antd/AntdInputWithFormik';
import Button from '@iso/ui/Antd/Button/Button';

import FormWrapper, {
  FieldWrapper,
  SwitchWrapper,
  Label,
} from './SignUpFormStyle';

const RenderSignUpForm = props => {
  const { values, submitCount, handleSubmit } = props;
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Field
          component={AntInput}
          name="username"
          type="text"
          size="large"
          placeholder="Username"
          submitCount={submitCount}
          value={values.username}
          hasFeedback
        />
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
        <Field
          component={AntInput}
          name="password"
          type="password"
          size="large"
          placeholder="Password"
          submitCount={submitCount}
          value={values.password}
          hasFeedback
        />
        <Field
          component={AntInput}
          name="confirmPassword"
          type="password"
          size="large"
          placeholder="Confirm Password"
          submitCount={submitCount}
          value={values.confirmPassword}
          hasFeedback
        />
        <FieldWrapper className="field-container">
          <SwitchWrapper>
            <Field
              component={AntSwitch}
              name="rememberMe"
              submitCount={submitCount}
              value={values.rememberMe}
            />
            <Label>Remember Me</Label>
          </SwitchWrapper>
          <SwitchWrapper className="termsAndConditions">
            <Field
              component={AntSwitch}
              name="termsAndConditions"
              submitCount={submitCount}
              value={values.termsAndConditions}
            />
            <Label>I agree with terms and condtions</Label>
          </SwitchWrapper>
        </FieldWrapper>

        <Button
          className="signin-btn"
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: '100%' }}
        >
          <MdLockOpen />
          Register
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default RenderSignUpForm;
