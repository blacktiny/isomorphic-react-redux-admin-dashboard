import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('@iso/containers/Widgets/Widgets')),
    exact: true,
  },
  {
    path: 'inbox',
    component: lazy(() => import('@iso/containers/Mail/Mail')),
  },
  {
    path: 'my-profile',
    component: lazy(() => import('@iso/containers/Profile/Profile')),
  },
  {
    path: 'swiperslider',
    component: lazy(() =>
      import('@iso/containers/UIElements/SwiperSlider/SwiperSlider')
    ),
  },
  {
    path: 'scrum-board',
    component: lazy(() => import('@iso/containers/ScrumBoard')),
    exact: false,
  },
  {
    path: 'mailbox',
    component: lazy(() => import('@iso/containers/Mail/Mail')),
  },
  {
    path: 'calendar',
    component: lazy(() => import('@iso/containers/Calendar/Calendar')),
  },
  {
    path: 'googlemap',
    component: lazy(() => import('@iso/containers/Map/GoogleMap/GoogleMap')),
  },
  {
    path: 'leafletmap',
    component: lazy(() => import('@iso/containers/Map/Leaflet/Leaflet')),
  },
  {
    path: 'table_ant',
    component: lazy(() => import('@iso/containers/Tables/AntTables/AntTables')),
  },
  {
    path: 'allFormComponent',
    component: lazy(() => import('@iso/containers/Forms/Forms')),
  },
  {
    path: 'InputField',
    component: lazy(() => import('@iso/containers/Forms/Input/Input')),
  },
  {
    path: 'editor',
    component: lazy(() => import('@iso/containers/Forms/Editor/Editor')),
  },
  {
    path: 'stepperForms',
    component: lazy(() =>
      import('@iso/containers/Forms/StepperForms/StepperForms')
    ),
  },
  {
    path: 'FormsWithValidation',
    component: lazy(() =>
      import('@iso/containers/Forms/FormsWithValidation/FormsWithValidation')
    ),
  },
  {
    path: 'progress',
    component: lazy(() => import('@iso/containers/Forms/Progress/Progress')),
  },
  {
    path: 'button',
    component: lazy(() => import('@iso/containers/Forms/Button/Button')),
  },
  {
    path: 'tab',
    component: lazy(() => import('@iso/containers/Forms/Tab/Tab')),
  },
  {
    path: 'autocomplete',
    component: lazy(() =>
      import('@iso/containers/Forms/AutoComplete/AutoComplete')
    ),
  },
  {
    path: 'checkbox',
    component: lazy(() => import('@iso/containers/Forms/Checkbox/Checkbox')),
  },
  {
    path: 'radiobox',
    component: lazy(() => import('@iso/containers/Forms/Radiobox/Radiobox')),
  },
  {
    path: 'selectbox',
    component: lazy(() => import('@iso/containers/Forms/Select/Select')),
  },
  {
    path: 'transfer',
    component: lazy(() => import('@iso/containers/Forms/Transfer/Transfer')),
  },
  {
    path: 'gridLayout',
    component: lazy(() => import('@iso/containers/Box/GridLayout')),
  },
  {
    path: 'notes',
    component: lazy(() => import('@iso/containers/Note/Note')),
  },
  {
    path: 'todo',
    component: lazy(() => import('@iso/containers/Todo/Todo')),
  },
  {
    path: 'articles',
    component: lazy(() =>
      import('@iso/containers/FirestoreCRUD/Article/Article')
    ),
  },
  {
    path: 'investors',
    component: lazy(() =>
      import('@iso/containers/FirestoreCRUD/Investor/Investor')
    ),
  },
  {
    path: 'contacts',
    component: lazy(() => import('@iso/containers/Contacts/Contacts')),
  },
  {
    path: 'alert',
    component: lazy(() => import('@iso/containers/Feedback/Alert/Alert')),
  },
  {
    path: 'modal',
    component: lazy(() => import('@iso/containers/Feedback/Modal/Modal')),
  },
  {
    path: 'message',
    component: lazy(() => import('@iso/containers/Feedback/Message/Message')),
  },
  {
    path: 'notification',
    component: lazy(() =>
      import('@iso/containers/Feedback/Notification/Notification')
    ),
  },
  {
    path: 'Popconfirm',
    component: lazy(() =>
      import('@iso/containers/Feedback/Popconfirm/Popconfirm')
    ),
  },
  {
    path: 'spin',
    component: lazy(() => import('@iso/containers/Feedback/Spin/Spin')),
  },
  {
    path: 'shuffle',
    component: lazy(() => import('@iso/containers/Shuffle/Shuffle')),
  },
  {
    path: 'affix',
    component: lazy(() => import('@iso/containers/Navigation/Affix')),
  },
  {
    path: 'breadcrumb',
    component: lazy(() =>
      import('@iso/containers/UIElements/Breadcrumb/Breadcrumb')
    ),
  },
  {
    path: 'backToTop',
    component: lazy(() => import('@iso/containers/Navigation/BackToTop')),
  },
  {
    path: 'dropdown',
    component: lazy(() =>
      import('@iso/containers/UIElements/Dropdown/Dropdown')
    ),
  },
  {
    path: 'op_badge',
    component: lazy(() => import('@iso/containers/UIElements/Badge/Badge')),
  },
  {
    path: 'op_card',
    component: lazy(() => import('@iso/containers/UIElements/Card/Card')),
  },
  {
    path: 'op_carousel',
    component: lazy(() =>
      import('@iso/containers/UIElements/Carousel/Carousel')
    ),
  },
  {
    path: 'op_collapse',
    component: lazy(() =>
      import('@iso/containers/UIElements/Collapse/Collapse')
    ),
  },
  {
    path: 'op_tooltip',
    component: lazy(() => import('@iso/containers/UIElements/Tooltip/Tooltip')),
  },
  {
    path: 'rating',
    component: lazy(() => import('@iso/containers/UIElements/Rating/Rating')),
  },
  {
    path: 'tree',
    component: lazy(() => import('@iso/containers/UIElements/Tree/Tree')),
  },
  {
    path: 'op_tag',
    component: lazy(() => import('@iso/containers/UIElements/Tag/Tag')),
  },
  {
    path: 'op_timeline',
    component: lazy(() =>
      import('@iso/containers/UIElements/Timeline/Timeline')
    ),
  },
  {
    path: 'pagination',
    component: lazy(() =>
      import('@iso/containers/UIElements/Pagination/Pagination')
    ),
  },
  {
    path: 'op_popover',
    component: lazy(() => import('@iso/containers/UIElements/Popover/Popover')),
  },
  {
    path: 'googleChart',
    component: lazy(() =>
      import('@iso/containers/Charts/GoogleChart/GoogleChart')
    ),
  },
  {
    path: 'reecharts',
    component: lazy(() => import('@iso/containers/Charts/Recharts/Recharts')),
  },
  {
    path: 'menu',
    component: lazy(() => import('@iso/containers/Navigation/NavigationMenu')),
  },
  {
    path: 'ReactChart2',
    component: lazy(() =>
      import('@iso/containers/Charts/ReactChart2/ReactChart2')
    ),
  },
  {
    path: 'card',
    component: lazy(() => import('@iso/containers/Ecommerce/Card/Card')),
  },
  {
    path: 'cart',
    component: lazy(() => import('@iso/containers/Ecommerce/Cart/Cart')),
  },
  {
    path: 'checkout',
    component: lazy(() =>
      import('@iso/containers/Ecommerce/Checkout/Checkout')
    ),
  },
  {
    path: 'shop',
    component: lazy(() =>
      import('@iso/containers/Ecommerce/Algolia/InstantSearch')
    ),
  },
  {
    path: 'reactDates',
    component: lazy(() =>
      import('@iso/containers/AdvancedUI/ReactDates/ReactDates')
    ),
  },
  {
    path: 'codeMirror',
    component: lazy(() =>
      import('@iso/containers/AdvancedUI/CodeMirror/CodeMirror')
    ),
  },
  {
    path: 'uppy',
    component: lazy(() => import('@iso/containers/AdvancedUI/Uppy/Uppy')),
  },
  {
    path: 'dropzone',
    component: lazy(() =>
      import('@iso/containers/AdvancedUI/Dropzone/Dropzone')
    ),
  },
  {
    path: 'youtubeSearch',
    component: lazy(() =>
      import('@iso/containers/YoutubeSearch/YoutubeSearch')
    ),
  },
  {
    path: 'frappeChart',
    component: lazy(() =>
      import('@iso/containers/Charts/FrappeChart/FrappeChart')
    ),
  },
  {
    path: 'invoice/:invoiceId',
    component: lazy(() => import('@iso/containers/Invoice/SingleInvoice')),
  },
  {
    path: 'invoice',
    component: lazy(() => import('@iso/containers/Invoice/Invoices')),
  },
  {
    path: 'chat',
    component: lazy(() => import('@iso/containers/Chat/Chat')),
  },

  {
    path: 'githubSearch',
    component: lazy(() => import('@iso/containers/GithubSearch/GithubSearch')),
  },
  {
    path: 'blank_page',
    component: lazy(() => import('@iso/containers/BlankPage')),
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
