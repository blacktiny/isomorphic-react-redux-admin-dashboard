import actions from './actions';
import events from './DemoEvents';

const initState = {
  events,
  view: 'month',
};

export default function calendarReducer(state = initState, action) {
  switch (action.type) {
    case actions.CALENDAR_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case actions.CALENDAR_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    default:
      return state;
  }
}
