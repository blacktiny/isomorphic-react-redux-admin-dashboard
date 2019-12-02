import actions from './actions';

const initState = {
  searcText: 'react',
  total_count: 0,
  page: 1,
  result: [],
  loading: false,
  error: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GIT_SEARCH:
      return {
        ...state,
        loading: true,
        searcText: action.payload.searcText,
      };
    case actions.GIT_SUCCESS_RESULT:
      return {
        ...state,
        loading: false,
        error: false,
        result: action.result,
        total_count: action.total_count,
        page: action.page,
      };
    case actions.GIT_ERROR_RESULT:
      return {
        ...state,
        loading: false,
        error: false,
        result: [],
      };
    default:
      return state;
  }
}
