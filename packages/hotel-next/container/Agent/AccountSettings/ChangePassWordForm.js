import React, { Fragment } from 'react';
import { Formik } from 'formik';
import RenderChangePassWordForm from '@hotel/components/ChangePassWord/RenderChangePassWordForm';
import * as Yup from 'yup';
import { FormTitle } from './AccountSettings.style';

const initialValues = {
  password: '',
  newPassWord: '',
  confrimNewPassWord: '',
};

const getChangePassWordValidationSchema = () => {
  return Yup.object().shape({
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .max(20, 'Too Long!')
      .required('Old Password is required!'),
    newPassWord: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')
      .max(20, 'Too Long!')
      .required('New Password is required!'),
    confrimNewPassWord: Yup.string()
      .oneOf([Yup.ref('newPassWord'), null], 'Passwords are not the same!')
      .required('Password confirmation is required'),
  });
};

const handleSubmit = formProps => {
  const { password, newPassWord, confrimNewPassWord } = formProps;
  alert(
    `\nSelected Client password: ${password} \nSelected Client New Password: ${newPassWord} \nSelected Client Confirmed Password: ${confrimNewPassWord} `
  );
};

export default function ChangePassWord() {
  return (
    <Fragment>
      <FormTitle>Change Password</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={RenderChangePassWordForm}
        validationSchema={getChangePassWordValidationSchema}
      />
    </Fragment>
  );
}
