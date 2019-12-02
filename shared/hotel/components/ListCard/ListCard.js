import React from 'react';
import PropTypes from 'prop-types';
import ListCardWrapper, {
  ImageWrapper,
  FavoriteIcon,
  ContentWrapper,
  TitleArea,
  PriceArea,
  RatingArea,
  ActionArea,
  FeatureList,
} from './ListCard.style';

const ListCard = ({
  className,
  image,
  carousel,
  isCarousel,
  favorite,
  title,
  price,
  rating,
  featureList,
  action,
}) => {
  return (
    <ListCardWrapper className={className}>
      <ImageWrapper>
        {isCarousel && carousel ? carousel : image}
        {favorite && <FavoriteIcon>{favorite}</FavoriteIcon>}
      </ImageWrapper>
      <ContentWrapper>
        {title && <TitleArea>{title}</TitleArea>}
        {price && <PriceArea>{price}</PriceArea>}
        {rating && <RatingArea>{rating}</RatingArea>}
        {featureList && <FeatureList>{featureList}</FeatureList>}
        {action && <ActionArea>{action}</ActionArea>}
      </ContentWrapper>
    </ListCardWrapper>
  );
};

ListCard.propTypes = {
  className: PropTypes.string,
  image: PropTypes.element,
  carousel: PropTypes.element,
  isCarousel: PropTypes.bool,
  favorite: PropTypes.element,
  title: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default ListCard;
