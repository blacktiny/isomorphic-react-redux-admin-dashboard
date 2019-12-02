import React, { Fragment } from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RenderCreateOrUpdateForm from '@hotel/components/Agent/RenderCreateOrUpdateForm';
import { dateFormat } from '@iso/lib/helpers/validators/fieldFormats';
import { FormTitle } from './AccountSettings.style';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  agentGender: '',
  phone_number: '',
  preferredLanguage: '',
  address: '',
  describeYourself: '',
  dateOfBirthday: moment(),
  genderOptions: ['Male', 'Female', 'Other'],
  languageOptions: ['English', 'Spanish', 'French', 'Russian'],
};

const profileBuildValidationSchema = () => {
  const maxDate = moment();
  const date = new Date(maxDate);
  return Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is Required!'),
    firstName: Yup.string().required('First Name is Required!'),
    lastName: Yup.string().required('Last Name is Required!'),
    phone_number: Yup.number().required('Phone number is Required!'),
    address: Yup.string().required('Address is Required!'),
    dateOfBirthday: Yup.date()
      .default(date)
      .max(
        maxDate,
        `Date of Birth should not be equal or later than ${maxDate}`
      )
      .required('Date of Birth date required'),
    preferredLanguage: Yup.string()
      .oneOf(['English', 'Spanish', 'French', 'Russian'])
      .required('Please choose your preferred language'),
    agentGender: Yup.string()
      .oneOf(['Male', 'Female', 'Other'])
      .required('Please select Gender information'),
  });
};

const handleSubmit = formProps => {
  const {
    firstName,
    lastName,
    email,
    agentGender,
    phone_number,
    preferredLanguage,
    address,
    describeYourself,
    dateOfBirthday,
  } = formProps;
  const selectedDate = moment(dateOfBirthday).format(dateFormat);
  alert(
    `First Name : ${firstName}
    Last Name : ${lastName}
    Email : ${email} 
    Gender : ${agentGender}
    Date of Birth: ${selectedDate}
    Phone Number : ${phone_number}
    Preferred Language: ${preferredLanguage}
    Address : ${address}
    About Me: ${describeYourself}`
  );
};

export default () => (
  <Fragment>
    <FormTitle>Basic Information</FormTitle>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={RenderCreateOrUpdateForm}
      validationSchema={profileBuildValidationSchema}
    />
  </Fragment>
);
