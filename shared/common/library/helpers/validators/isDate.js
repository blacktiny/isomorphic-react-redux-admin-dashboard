import moment from 'moment';
import { dateFormat } from './fieldFormats';

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
