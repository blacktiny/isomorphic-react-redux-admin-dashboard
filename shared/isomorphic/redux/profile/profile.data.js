import userpic from '@iso/assets/images/user1.png';
import profilebg from '@iso/assets/images/profile-bg.jpg';
// posts
import post1 from '@iso/assets/images/posts/1.png';
import post2 from '@iso/assets/images/posts/2.png';
import post3 from '@iso/assets/images/posts/3.png';
import post4 from '@iso/assets/images/posts/4.png';
import post5 from '@iso/assets/images/posts/5.png';
import post6 from '@iso/assets/images/posts/6.png';
import post7 from '@iso/assets/images/posts/7.png';
import post8 from '@iso/assets/images/posts/8.png';
import post9 from '@iso/assets/images/posts/9.png';
import post10 from '@iso/assets/images/posts/10.png';
import post11 from '@iso/assets/images/posts/11.png';

const profileData = {
  id: 1,
  name: 'Samwell Martina',
  username: '@samwell_martina',
  avatar: userpic,
  profile_bg: profilebg,
  post: [
    {
      id: 1,
      type: 'image',
      thumb_url: post1,
      numberOflike: '21',
      numberOfcomment: '8',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment: 'Hey. This is so dope',
          time: '133w',
        },
      ],
    },
    {
      id: 2,
      type: 'gallery',
      thumb_url: post2,
      gallery: [post2, post11, post6],
      numberOflike: '34',
      numberOfcomment: '2',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment: '💪 😊 👍 🏆',
          time: '133w',
        },
        {
          id: 3,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          username: '@jenny_doe',
          comment: 'wow!! 👌👌😍😍',
          time: '133w',
        },
      ],
    },
    {
      id: 3,
      type: 'video',
      thumb_url: post9,
      video: `<iframe src="https://player.vimeo.com/video/359281775?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
      numberOfView: '134',
      numberOflike: '47',
      numberOfcomment: '48',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment:
            'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
          time: '133w',
        },
      ],
    },
    {
      id: 4,
      type: 'image',
      thumb_url: post3,
      numberOflike: '21',
      numberOfcomment: '8',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment: 'Hey. This is so dope',
          time: '133w',
        },
      ],
    },
    {
      id: 5,
      type: 'image',
      thumb_url: post4,
      numberOflike: '34',
      numberOfcomment: '2',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment: '💪 😊 👍 🏆',
          time: '133w',
        },
        {
          id: 3,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          username: '@jenny_doe',
          comment: 'wow!! 👌👌😍😍',
          time: '133w',
        },
      ],
    },
    {
      id: 6,
      type: 'image',
      thumb_url: post5,
      numberOflike: '47',
      numberOfcomment: '48',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment:
            'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
          time: '133w',
        },
      ],
    },
    {
      id: 7,
      type: 'gallery',
      thumb_url: post7,
      gallery: [post7, post5, post9],
      numberOflike: '34',
      numberOfcomment: '2',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment: '💪 😊 👍 🏆',
          time: '133w',
        },
        {
          id: 3,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
          username: '@jenny_doe',
          comment: 'wow!! 👌👌😍😍',
          time: '133w',
        },
      ],
    },
    {
      id: 8,
      type: 'video',
      thumb_url: post8,
      video: `<iframe src="https://player.vimeo.com/video/35396305?color=d4d4d4&title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`,
      numberOfView: '134',
      numberOflike: '47',
      numberOfcomment: '48',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment:
            'How delightful, total eye candy🌸😻😻 Are you interested in being featured next in our gallery? Write to me for more info!!',
          time: '133w',
        },
      ],
    },
    {
      id: 9,
      type: 'image',
      thumb_url: post10,
      numberOflike: '21',
      numberOfcomment: '8',
      comments: [
        {
          id: 1,
          role: 'author',
          avatar: userpic,
          username: '@samwell_martina',
          comment:
            'Hi 👋🏻😊<br /> These are my personal favorites of my last year\'s render challenge. And maybe that\'s also a reason to try this new instagram feature... 😜<br /> <a class="" href="#">#lekoarts</a> <a class="" href="#">#arsaurea</a> <a class="" href="#">#photoshop</a> <a class="" href="#">#cinema4d</a> <a class="" href="#">#c4d</a> <a class="" href="#">#graphicdesign</a> <a class="" href="#">#artwork</a> <a class="" href="#">#digitalart</a> <a class="" href="#">#artoftheday</a> <a class="" href="#">#abstract</a>',
          time: '133w',
        },
        {
          id: 2,
          role: 'user',
          avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
          username: '@jon_doe',
          comment: 'Hey. This is so dope',
          time: '133w',
        },
      ],
    },
  ],
  followers: [
    {
      id: 1,
      avatar:
        'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
      name: 'Nykyta Korotkevych',
    },
    {
      id: 2,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Christine Maldonado',
    },
    {
      id: 3,
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Konsta Peura',
    },
    {
      id: 4,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'Britney Cooper',
    },
    {
      id: 5,
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
      name: 'Eduardo Hernandez',
    },
    {
      id: 6,
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      name: ' Elizabeth Olsen',
    },
    {
      id: 7,
      avatar:
        'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
      name: 'Hrvoje Šimić',
    },
    {
      id: 8,
      avatar:
        'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
      name: 'Monroe Bond',
    },
  ],
  following: [
    {
      id: 1,
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
      name: 'Eduardo Hernandez',
    },
    {
      id: 2,
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      name: ' Elizabeth Olsen',
    },
    {
      id: 3,
      avatar:
        'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
      name: 'Hrvoje Šimić',
    },
    {
      id: 4,
      avatar:
        'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
      name: 'Monroe Bond',
    },
    {
      id: 5,
      avatar:
        'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
      name: 'Nykyta Korotkevych',
    },
    {
      id: 6,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Christine Maldonado',
    },
    {
      id: 7,
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Konsta Peura',
    },
    {
      id: 8,
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      name: 'Britney Cooper',
    },
    {
      id: 9,
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      name: ' Elizabeth Olsen',
    },
    {
      id: 10,
      avatar:
        'https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg',
      name: 'Hrvoje Šimić',
    },
    {
      id: 11,
      avatar:
        'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb',
      name: 'Monroe Bond',
    },
    {
      id: 12,
      avatar:
        'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
      name: 'Nykyta Korotkevych',
    },
    {
      id: 13,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Christine Maldonado',
    },
    {
      id: 14,
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Konsta Peura',
    },
  ],
};

export default profileData;
