import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperMultiple(props) {
  const { children } = props;
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
