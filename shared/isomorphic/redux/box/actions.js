const boxActions = {
  DELETE_BOX: 'DELETE_BOX',
  SAVE_BOX: 'SAVE_BOX',
  deleteBox: uid => ({
    type: boxActions.DELETE_BOX,
    uid,
  }),
  saveBox: box => ({
    type: boxActions.SAVE_BOX,
    box,
  }),
};
export default boxActions;
