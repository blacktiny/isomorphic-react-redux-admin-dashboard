import allMails from './data';
import actions from './actions';

const initState = {
  allMails,
  tag: undefined,
  selectedMail: -1,
  filterAttr: { bucket: 'Inbox' },
  composeMail: false,
  replyMail: false,
  searchString: '',
};

export default function mailReducer(state = initState, action) {
  switch (action.type) {
    case actions.FILTER_ATTRIBUTE:
      return {
        ...state,
        composeMail: false,
        replyMail: false,
        selectedMail: -1,
        filterAttr: { ...action.filterAttr },
      };
    case actions.SELECTED_MAIL:
      return {
        ...state,
        replyMail: false,
        selectedMail: action.selectedMail,
        allMails: action.allMails,
      };
    case actions.COMPOSE_MAIL:
      return {
        ...state,
        replyMail: false,
        composeMail: action.composeMail,
      };
    case actions.REPLY_MAIL:
      return {
        ...state,
        replyMail: action.replyMail,
      };
    case actions.SEARCH_STRING:
      return {
        ...state,
        searchString: action.searchString,
      };
    default:
      return state;
  }
}
