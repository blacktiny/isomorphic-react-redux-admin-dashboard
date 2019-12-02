import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ImageCardWrapper, {
  ContentWrapper,
  Title,
  Meta,
} from './ImageCard.style';

const ImageCard = ({ className, imageSrc, title, link, meta }) => {
  // Add all classs to an array
  const addAllClasses = ['image_card'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <ImageCardWrapper className={addAllClasses.join(' ')}>
      <Link to={link}>
        <img src={imageSrc} alt={title} />
        <ContentWrapper>
          {title && <Title>{title}</Title>}
          {meta && <Meta>{meta}</Meta>}
        </ContentWrapper>
      </Link>
    </ImageCardWrapper>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  meta: PropTypes.string,
};

ImageCard.defaultProps = {
  link: '#',
};

export default ImageCard;
