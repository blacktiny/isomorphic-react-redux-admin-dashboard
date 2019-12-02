import React from 'react';
import Swiper from 'react-id-swiper';

export default function SwiperBasic(props) {
  const { children } = props;
  return <Swiper>{children}</Swiper>;
}
