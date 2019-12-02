import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperNumberedPagination(props) {
  const { children } = props;
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span className="' + className + '">' + (index + 1) + '</span>';
      },
    },
  };
  return <Swiper {...params}>{children}</Swiper>;
}
