import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperAutoPlay(props) {
  const { children } = props;
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
