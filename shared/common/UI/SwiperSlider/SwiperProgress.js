import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperProgress(props) {
  const { children } = props;
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
