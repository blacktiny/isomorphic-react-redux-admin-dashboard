import React from 'react';
import IntlMessages from '@iso/components/utility/intlMessages';
import Img1 from '@iso/assets/images/1.jpg';
import Img2 from '@iso/assets/images/2.jpg';
import Img3 from '@iso/assets/images/3.jpg';
import Img4 from '@iso/assets/images/4.jpg';
import Img5 from '@iso/assets/images/5.jpg';
import Img6 from '@iso/assets/images/6.jpg';
import Img7 from '@iso/assets/images/7.jpg';

const articles = [
  {
    id: 'a',
    timestamp: 811396800000,
    desc: <IntlMessages id="shuffle.descriptionOne" />,
    img: Img1,
  },
  {
    id: 'b',
    timestamp: 1108702800000,
    desc: <IntlMessages id="shuffle.descriptionTwo" />,
    img: Img2,
  },
  {
    id: 'c',
    timestamp: 1156564800000,
    desc: <IntlMessages id="shuffle.descriptionThree" />,
    img: Img3,
  },
  {
    id: 'd',
    timestamp: 1256443200000,
    desc: <IntlMessages id="shuffle.descriptionFour" />,
    img: Img4,
  },
  {
    id: 'e',
    timestamp: 1286942400000,
    desc: <IntlMessages id="shuffle.descriptionFive" />,
    img: Img5,
  },

  {
    id: 'f',
    timestamp: 1331697600000,
    desc: <IntlMessages id="shuffle.descriptionSix" />,
    img: Img6,
  },
  {
    id: 'g',
    timestamp: 1369800000000,
    desc: <IntlMessages id="shuffle.descriptionSeven" />,
    img: Img7,
  },
];

export default articles;
