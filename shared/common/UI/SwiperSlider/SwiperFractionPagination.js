import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperFractionPagination(props) {
  const { children } = props;
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
