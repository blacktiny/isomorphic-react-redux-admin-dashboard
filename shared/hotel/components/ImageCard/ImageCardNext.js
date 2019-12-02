import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ImageCardWrapper, {
  ContentWrapper,
  Title,
  Meta,
} from './ImageCard.style';

const ImageCardNext = ({ className, imageSrc, title, link, meta }) => {
  // Add all classs to an array
  const addAllClasses = ['image_card'];
  const pathLink = title.replace(/\s/g, '-');

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ImageCardWrapper className={addAllClasses.join(' ')}>
      <Link
        href={{
          pathname: `${link}`,
          query: { country: `${pathLink}` },
        }}
      >
        <a>
          <img
            src={imageSrc}
            alt={title}
            draggable={false}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          />
          <ContentWrapper>
            {title && <Title>{title}</Title>}

            {meta && <Meta>{meta}</Meta>}
          </ContentWrapper>
        </a>
      </Link>
    </ImageCardWrapper>
  );
};

ImageCardNext.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  meta: PropTypes.string,
};

ImageCardNext.defaultProps = {
  link: '#',
};

export default ImageCardNext;
