import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperInfiniteLoop(props) {
  const { children } = props;
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  return <Swiper {...params}>{children}</Swiper>;
}
