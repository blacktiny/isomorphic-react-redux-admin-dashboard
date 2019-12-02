import { combineReducers } from 'redux';
import Auth from '../authentication/reducer';
import App from '@iso/redux/app/reducer';
import Mails from '@iso/redux/mail/reducer';
import Calendar from '@iso/redux/calendar/reducer';
import Box from '@iso/redux/box/reducer';
import Notes from '@iso/redux/notes/reducer';
import Todos from '@iso/redux/todos/reducer';
import Contacts from '@iso/redux/contacts/reducer';
import Cards from '@iso/redux/card/reducer';
import Chat from '@iso/redux/chat/reducers';
import DynamicChartComponent from '@iso/redux/dynamicEchart/reducer';
import Ecommerce from '@iso/redux/ecommerce/reducer';
import ThemeSwitcher from '@iso/redux/themeSwitcher/reducer';
import Invoices from '@iso/redux/invoice/reducer';
import LanguageSwitcher from '@iso/redux/languageSwitcher/reducer';
import YoutubeSearch from '@iso/redux/youtubeSearch/reducers';
import Articles from '@iso/redux/articles/reducers';
import Investors from '@iso/redux/investors/reducers';
import scrumBoard from '@iso/redux/scrumBoard/reducer';
import drawer from '@iso/redux/drawer/reducer';
import modal from '@iso/redux/modal/reducer';
import profile from '@iso/redux/profile/reducer';
import githubSearch from '@iso/redux/githubSearch/reducers';

export default combineReducers({
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  Box,
  Notes,
  Todos,
  Contacts,
  Cards,
  Chat,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  YoutubeSearch,
  Articles,
  Investors,
  scrumBoard,
  modal,
  drawer,
  profile,
  githubSearch,
});
