export const validateEmail = value => {
  let errors;
  if (!value) {
    errors = 'Required!';
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errors = 'Invalid email address!';
  }
  return errors;
};
