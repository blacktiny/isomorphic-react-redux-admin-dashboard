// import Router from 'next/router';
import actions from './actions';

const initState = {
  idToken: null,
  error: null,
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST_SUCCESS:
      // Router.replace('/dashboard');
      return { ...state, idToken: action.payload };
    case actions.LOGOUT_REQUEST_FAILURE:
    case actions.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        idToken: null,
        error: action.payload,
      };
    case actions.LOGOUT_REQUEST_SUCCESS:
      // Router.replace('/');
      return initState;
    default:
      return state;
  }
}
