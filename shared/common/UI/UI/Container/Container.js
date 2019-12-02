import React from 'react';
import PropTypes from 'prop-types';
import ContainerWrapper from './Container.style';

const Container = ({ children, className, fullWidth, noGutter, fluid }) => {
  return (
    <ContainerWrapper
      className={className}
      fullWidth={fullWidth}
      noGutter={noGutter}
      fluid={fluid}
    >
      {children}
    </ContainerWrapper>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  noGutter: PropTypes.bool,
};

export default Container;
