import React, { useContext } from 'react';
import { Formik } from 'formik';
import Router from 'next/router';
import RenderSignInForm from '@hotel/components/SignIn/RenderSignInForm';
import * as Yup from 'yup';
import { AuthContext } from '../../context/AuthProvider';
import { FORGET_PASSWORD_PAGE } from '../../settings/constant';
const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const getLoginValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required!'),
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .max(20, 'Too Long!')
      .required('Password is required!'),
  });
};

export default () => {
  const { signIn, loggedIn } = useContext(AuthContext);
  if (loggedIn) Router.push(`/`);
  const handleSubmit = formProps => {
    signIn(formProps);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={props => (
        <RenderSignInForm
          {...props}
          forgetPasswordLink={FORGET_PASSWORD_PAGE}
        />
      )}
      validationSchema={getLoginValidationSchema}
    />
  );
};
