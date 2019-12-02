import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperVerticle(props) {
  const { children } = props;
  const params = {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
