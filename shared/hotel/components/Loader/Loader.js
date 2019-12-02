import React from 'react';
import PropTypes from 'prop-types';
import LoaderWrapper from './Loader.style';

const Loader = ({ fill, className }) => {
  // default className
  const addAllClasses = ['loader'];

  // add new class using className prop
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <LoaderWrapper className={addAllClasses.join(' ')}>
      <svg enableBackground="new 0 0 0 0">
        <circle fill={fill} stroke="none" cx="6" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill={fill} stroke="none" cx="26" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill={fill} stroke="none" cx="46" cy="50" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  /** ClassName of the Loader component. */
  className: PropTypes.string,

  /** Add Loader color using fill prop. */
  fill: PropTypes.string,
};

Loader.defaultProps = {
  fill: '#008489',
};

export default Loader;
