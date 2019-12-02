import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LogoArea from './Logo.style';

const LogoNext = ({ className, withLink, linkTo, title, src }) => {
  return (
    <LogoArea className={className}>
      {withLink ? (
        <Link href={linkTo}>
          <a>{src ? <img src={src} alt={title} /> : <h3>{title}</h3>}</a>
        </Link>
      ) : (
        <Fragment>
          <a>{src ? <img src={src} alt={title} /> : <h3>{title}</h3>}</a>
        </Fragment>
      )}
    </LogoArea>
  );
};

LogoNext.propTypes = {
  className: PropTypes.string,
  withLink: PropTypes.bool,
  src: PropTypes.string,
  title: PropTypes.string,
  linkTo: PropTypes.string,
};

export default LogoNext;
