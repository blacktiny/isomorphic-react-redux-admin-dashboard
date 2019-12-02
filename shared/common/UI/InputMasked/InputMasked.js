import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';

const InputMask = props => {
  const { mask, placeholderChar, showMask, component } = props;

  return (
    <MaskedInput
      className="ant-input"
      mask={mask}
      placeholderChar={placeholderChar}
      showMask={showMask}
    >
      {component}
    </MaskedInput>
  );
};

InputMask.propTypes = {
  className: PropTypes.string,
  mask: PropTypes.any,
  placeholderChar: PropTypes.string,
  showMask: PropTypes.bool,
};

export default InputMask;
