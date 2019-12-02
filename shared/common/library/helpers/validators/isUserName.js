export const validateUserName = value => {
  let errors;
  if (!value) {
    errors = 'Required!';
  } else if (value && value.length < 9) {
    errors = 'Username must be 9 characters long';
  }
  return errors;
};
