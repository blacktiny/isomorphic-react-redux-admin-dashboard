const modalActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',

  openModal: payload => ({
    type: modalActions.SHOW_MODAL,
    payload,
  }),
  closeModal: () => ({
    type: modalActions.HIDE_MODAL,
  }),
};

export default modalActions;
