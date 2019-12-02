import moment from 'moment';
import { dateFormat } from './FieldFormats';

export const validateDate = value => {
  let errors;

  if (!value) {
    errors = 'Required!';
  } else if (
    moment(value).format(dateFormat) < moment(Date.now()).format(dateFormat)
  ) {
    errors = 'Invalid date!';
  }

  return errors;
};

export const validateEmail = value => {
  let errors;

  if (!value) {
    errors = 'Required!';
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors = 'Invalid email address!';
  }

  return errors;
};

export const isRequired = value => (!value ? 'Required!' : '');
