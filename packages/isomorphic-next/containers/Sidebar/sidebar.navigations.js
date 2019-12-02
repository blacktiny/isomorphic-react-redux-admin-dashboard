export default [
  {
    key: 'mailbox',
    path: '/mailbox',
    label: 'sidebar.email',
    leftIcon: 'ion-android-mail',
  },
  {
    key: 'chat',
    label: 'sidebar.chat',
    leftIcon: 'ion-chatbubbles',
  },
  {
    key: 'ecommerce',
    label: 'sidebar.ecommerce',
    leftIcon: 'ion-bag',
    children: [
      {
        key: 'shop',
        label: 'sidebar.shop',
      },
      {
        key: 'cart',
        label: 'sidebar.cart',
      },
      {
        key: 'checkout',
        label: 'sidebar.checkout',
      },
      {
        key: 'card',
        label: 'sidebar.cards',
      },
    ],
  },
  {
    key: 'maps',
    label: 'sidebar.maps',
    leftIcon: 'ion-map',
    children: [
      {
        key: 'googlemap',
        label: 'sidebar.googleMap',
      },
      {
        key: 'leafletmap',
        label: 'sidebar.leafletMap',
      },
    ],
  },
  {
    key: 'my_profile',
    label: 'sidebar.profile',
    leftIcon: 'ion-person',
  },
  {
    key: 'invoice',
    label: 'sidebar.invoice',
    leftIcon: 'ion-clipboard',
  },
  {
    key: 'youtubeSearch',
    label: 'sidebar.youtubeSearch',
    leftIcon: 'ion-social-youtube',
  },
  {
    key: 'calendar',
    label: 'sidebar.calendar',
    leftIcon: 'ion-calendar',
  },
  {
    key: 'notes',
    label: 'sidebar.notes',
    leftIcon: 'ion-ios-paper',
  },
  {
    key: 'todo',
    label: 'sidebar.todos',
    leftIcon: 'ion-android-checkbox-outline',
  },

  {
    key: 'contacts',
    label: 'sidebar.contacts',
    leftIcon: 'ion-android-person-add',
  },
  {
    key: 'shuffle',
    label: 'sidebar.shuffle',
    leftIcon: 'ion-grid',
  },
  {
    key: 'charts',
    label: 'sidebar.charts',
    leftIcon: 'ion-arrow-graph-up-right',
    children: [
      {
        key: 'googleChart',
        label: 'sidebar.googleCharts',
      },
      {
        key: 'reecharts',
        label: 'sidebar.recharts',
      },
      {
        key: 'reactChart2',
        label: 'sidebar.reactChart2',
      },
      {
        key: 'reactTrend',
        label: 'sidebar.reactTrend',
      },
    ],
  },
  {
    key: 'Forms',
    label: 'sidebar.forms',
    leftIcon: 'ion-android-mail',
    children: [
      {
        key: 'InputField',
        label: 'sidebar.input',
      },
      {
        key: 'editor',
        label: 'sidebar.editor',
      },
      {
        key: 'FormsWithValidation',
        label: 'sidebar.formsWithValidation',
      },
      {
        key: 'progress',
        label: 'sidebar.progress',
      },
      {
        key: 'button',
        label: 'sidebar.button',
      },
      {
        key: 'tab',
        label: 'sidebar.tab',
      },
      {
        key: 'checkbox',
        label: 'sidebar.checkbox',
      },
      {
        key: 'radiobox',
        label: 'sidebar.radiobox',
      },
      {
        key: 'selectbox',
        label: 'sidebar.selectbox',
      },
      {
        key: 'transfer',
        label: 'sidebar.transfer',
      },
      {
        key: 'autocomplete',
        label: 'sidebar.autocomplete',
      },
    ],
  },
  // {
  //   key: 'gridLayout',
  //   label: 'sidebar.boxOptions',
  //   leftIcon: 'ion-cube'
  // },
  {
    key: 'uielements',
    label: 'sidebar.uiElements',
    leftIcon: 'ion-leaf',
    children: [
      {
        key: 'op_badge',
        label: 'sidebar.badge',
      },
      {
        key: 'op_card',
        label: 'sidebar.card2',
      },
      {
        key: 'op_carousel',
        label: 'sidebar.corusel',
      },
      {
        key: 'op_collapse',
        label: 'sidebar.collapse',
      },
      {
        key: 'op_popover',
        label: 'sidebar.popover',
      },
      {
        key: 'op_tooltip',
        label: 'sidebar.tooltip',
      },
      {
        key: 'op_tag',
        label: 'sidebar.tag',
      },
      {
        key: 'op_timeline',
        label: 'sidebar.timeline',
      },
      {
        key: 'dropdown',
        label: 'sidebar.dropdown',
      },
      {
        key: 'pagination',
        label: 'sidebar.pagination',
      },
      {
        key: 'rating',
        label: 'sidebar.rating',
      },
      {
        key: 'tree',
        label: 'sidebar.tree',
      },
      {
        key: 'swiper_slider',
        label: 'sidebar.swiperslider',
      },
    ],
  },
  {
    key: 'advancedUielements',
    label: 'sidebar.advancedElements',
    leftIcon: 'ion-flash',
    children: [
      {
        key: 'reactDates',
        label: 'sidebar.reactDates',
      },
      {
        key: 'codeMirror',
        label: 'sidebar.codeMirror',
      },
      {
        key: 'uppy',
        label: 'sidebar.uppy',
      },
      {
        key: 'dropzone',
        label: 'sidebar.dropzone',
      },
    ],
  },
  {
    key: 'feedback',
    label: 'sidebar.feedback',
    leftIcon: 'ion-thumbsup',
    children: [
      {
        key: 'alert',
        label: 'sidebar.alert',
      },
      {
        key: 'modal',
        label: 'sidebar.modal',
      },
      {
        key: 'message',
        label: 'sidebar.message',
      },
      {
        key: 'notification',
        label: 'sidebar.notification',
      },
      {
        key: 'popConfirm',
        label: 'sidebar.popConfirm',
      },
      {
        key: 'spin',
        label: 'sidebar.spin',
      },
    ],
  },
  {
    key: 'table',
    label: 'sidebar.tables',
    leftIcon: 'ion-android-menu',
    children: [
      {
        key: 'table_ant',
        label: 'sidebar.antTables',
      },
    ],
  },
  {
    key: 'pages',
    label: 'sidebar.pages',
    leftIcon: 'ion-document-text',
    children: [
      {
        key: '404',
        label: 'sidebar.404',
        withoutDashboard: true,
      },
      {
        key: '500',
        label: 'sidebar.500',
        withoutDashboard: true,
      },
      {
        key: 'signin',
        label: 'sidebar.signIn',
        withoutDashboard: true,
      },
      {
        key: 'signup',
        label: 'sidebar.signUp',
        withoutDashboard: true,
      },
      {
        key: 'forgotpassword',
        label: 'sidebar.forgotPw',
        withoutDashboard: true,
      },
      {
        key: 'resetpassword',
        label: 'sidebar.resetPw',
        withoutDashboard: true,
      },
    ],
  },
  {
    key: 'githubSearch',
    label: 'sidebar.githubSearch',
    leftIcon: 'ion-social-github',
  },
  {
    key: 'blank_page',
    label: 'sidebar.blankPage',
    leftIcon: 'ion-document',
  },
];
