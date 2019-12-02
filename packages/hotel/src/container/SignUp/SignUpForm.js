import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import RenderSignUpForm from '@hotel/components/SignUp/RenderSignUpForm';
import { AuthContext } from '../../context/AuthProvider';

const initialValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  termsAndConditions: false,
  rememberMe: false,
};

const getRegisterValidationSchema = () => {
  return Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username is Required!'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required!'),
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .max(20, 'Too Long!')
      .required('Password is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords are not the same!')
      .required('Password confirmation is required'),
    termsAndConditions: Yup.bool()
      .test(
        'consent',
        'You have to agree with our Terms and Conditions!',
        value => value === true
      )
      .required('You have to agree with our Terms and Conditions!'),
  });
};

export default () => {
  const { signUp, loggedIn } = useContext(AuthContext);
  if (loggedIn) return <Redirect to={{ pathname: '/' }} />;
  const handleSubmit = formProps => {
    signUp(formProps);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getRegisterValidationSchema}
      render={RenderSignUpForm}
    />
  );
};
