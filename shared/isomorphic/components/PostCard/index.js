import React from 'react';
import InstagramCard from './InstagramCard';

const PostCard = ({ variant, ...props }) => {
  return <>{variant === 'instagram' && <InstagramCard {...props} />}</>;
};

export default PostCard;
