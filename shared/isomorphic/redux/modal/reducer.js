import modalActions from './actions';

const initialState = {
  modalVisibility: false,
  modalType: '',
  modalProps: {},
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case modalActions.SHOW_MODAL:
      return {
        modalVisibility: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case modalActions.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}
