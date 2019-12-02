import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperPagination(props) {
  const { children } = props;
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
