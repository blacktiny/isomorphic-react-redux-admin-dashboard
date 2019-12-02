import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperFreeMode(props) {
  const { children } = props;
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
