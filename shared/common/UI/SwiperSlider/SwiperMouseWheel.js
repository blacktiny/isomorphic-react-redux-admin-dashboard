import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperMouseWheel(props) {
  const { children } = props;
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return <Swiper {...params}>{children}</Swiper>;
}
