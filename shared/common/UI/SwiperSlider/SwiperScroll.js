import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperScroll(props) {
  const { children } = props;
  const params = {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
