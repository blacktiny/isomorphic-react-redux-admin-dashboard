import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperWithBasicNav(props) {
  const { children } = props;
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
