import notification from '@iso/components/Notification';

const getChatRoom = (chatRooms, receiverId) => {
  let selectedChatroom;
  chatRooms.forEach(chatroom => {
    if (chatroom.otherUserId === receiverId) {
      selectedChatroom = chatroom;
    }
  });
  return selectedChatroom;
};
const actions = {
  CHAT_INIT: 'CHAT_INIT',
  CHAT_INIT_SAGA: 'CHAT_INIT_SAGA',
  CHAT_UPDATE_CHATROOM: 'CHAT_UPDATE_CHATROOM',
  CHAT_TOGGLE_COMPOSE: 'CHAT_TOGGLE_COMPOSE',
  CHAT_SET_TOGGLE_VIEW_PROFILE: 'CHAT_SET_TOGGLE_VIEW_PROFILE',
  CHAT_SET_TOGGLE_COMPOSED_ID: 'CHAT_SET_TOGGLE_COMPOSED_ID',
  CHAT_SEND_MESSAGE: 'CHAT_SEND_MESSAGE',
  CHAT_UPDATE_CHATROOM_SAGA: 'CHAT_UPDATE_CHATROOM_SAGA',
  TOGGLE_MOBILE_LIST: 'TOGGLE_MOBILE_LIST',
  TOGGLE_MOBILE_PROFILE: 'TOGGLE_MOBILE_PROFILE',
  RESTORE_DEMO_DATA: 'RESTORE_DEMO_DATA',
  RESTORE_DEMO_DATA_DONE: 'RESTORE_DEMO_DATA_DONE',
  UPDATE_NEW_USER_PROPS: 'UPDATE_NEW_USER_PROPS',
  ADD_NEW_USER: 'ADD_NEW_USER',
  ADD_NEW_USER_SAGA: 'ADD_NEW_USER_SAGA',
  NEW_MESSAGE_SUCCESFULL: 'NEW_MESSAGE_SUCCESFULL',
  chatInit: userId => ({
    type: actions.CHAT_INIT,
    payload: { userId },
  }),
  toggleCompose: () => ({ type: actions.CHAT_TOGGLE_COMPOSE }),
  toggleViewProfile: viewProfile => ({
    type: actions.CHAT_SET_TOGGLE_VIEW_PROFILE,
    viewProfile,
  }),
  setComposedId: id => ({ type: actions.CHAT_SET_TOGGLE_COMPOSED_ID, id }),
  setSelectedChatroom: chatRoom => ({
    type: actions.CHAT_UPDATE_CHATROOM_SAGA,
    payload: { chatRoom, selected: true },
  }),
  // sendMessage: text => {
  //   return (dispatch, getState) => {
  //     const {
  //       chatRooms,
  //       composedId,
  //       openCompose,
  //       selectedChatRoom,
  //     } = getState().Chat;
  //     let chatRoom = selectedChatRoom;

  //     if (openCompose) {
  //       if (!composedId) {
  //         notification('error', 'Please select receiver');
  //         dispatch({ type: 'null' });
  //       } else {
  //         chatRoom = getChatRoom(chatRooms, composedId);
  //       }
  //     }
  //     dispatch({
  //       type: actions.CHAT_SEND_MESSAGE,
  //       payload: { chatRoom, text, openCompose },
  //     });
  //   };
  // },
  sendMessage: message => ({
    type: actions.CHAT_SEND_MESSAGE,
    payload: message,
  }),
  toggleMobileList: mobileActiveList => ({
    type: actions.TOGGLE_MOBILE_LIST,
    mobileActiveList,
  }),
  toggleMobileProfile: mobileActiveProfile => ({
    type: actions.TOGGLE_MOBILE_PROFILE,
    mobileActiveProfile,
  }),
  restoreData: demoData => ({
    type: actions.RESTORE_DEMO_DATA,
    demoData,
  }),
  updateNewUsersProp: addNewUsersProp => ({
    type: actions.UPDATE_NEW_USER_PROPS,
    addNewUsersProp,
  }),
  addNewUser: (user, addNewUsersProp) => ({
    type: actions.ADD_NEW_USER,
    user,
    addNewUsersProp,
  }),
};
export default actions;
