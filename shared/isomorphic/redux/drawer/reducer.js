import drawerActions from './actions';

const initialState = {
  drawerVisibility: false,
  drawerType: '',
  drawerProps: {},
};

export default function drawerReducer(state = initialState, action) {
  switch (action.type) {
    case drawerActions.SHOW_DRAWER:
      return {
        drawerVisibility: true,
        drawerType: action.payload.drawerType,
        drawerProps: action.payload.drawerProps,
      };
    case drawerActions.HIDE_DRAWER:
      return {
        ...state,
        drawerVisibility: false,
      };
    default:
      return state;
  }
}
