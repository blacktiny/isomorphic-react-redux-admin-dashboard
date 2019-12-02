import actions from './actions';

const initState = {
  users: null,
  chatRooms: [],
  messages: [],
  selectedChatRoom: null,
  openCompose: false,
  viewProfile: false,
  composedId: null,
  loading: true,
  error: false,
  mobileActiveList: true,
  mobileActiveProfile: false,
  restoringData: false,
  addNewUsersProp: {
    modalActive: false,
  },
};
const sortTimeStamp = (optionA, optionB) =>
  optionA.messageTime - optionB.messageTime;
const sortChatRooms = (optionA, optionB) =>
  optionB.lastMessageTime - optionA.lastMessageTime;
export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.CHAT_INIT_SAGA: {
      return {
        ...state,
        userId: action.userId,
        user: action.user,
        users: action.users,
        chatRooms: action.chatRooms,
        messages: action.messages,
        selectedChatRoom: action.chatRooms[0],
        loading: false,
      };
    }
    case actions.CHAT_UPDATE_CHATROOM: {
      const { chatRoom, messages, selected } = action;
      return {
        ...state,
        chatRooms: state.chatRooms
          .map(chatroom =>
            chatroom.id === chatRoom.id
              ? {
                  ...chatroom,
                  lastMessage: chatRoom.lastMessage,
                  lastMessageTime: chatRoom.lastMessageTime,
                }
              : chatroom
          )
          .sort(sortChatRooms),
        composedId: null,
        openCompose: false,
        selectedChatRoom: selected ? chatRoom : state.selectedChatRoom,
        viewProfile: selected ? false : state.viewProfile,
        messages: messages ? messages.sort(sortTimeStamp) : state.messages,
      };
    }
    case actions.CHAT_TOGGLE_COMPOSE:
      return {
        ...state,
        openCompose: !state.openCompose,
        viewProfile: false,
      };
    case actions.CHAT_SET_TOGGLE_COMPOSED_ID:
      return {
        ...state,
        composedId: action.id,
      };
    case actions.CHAT_SET_TOGGLE_VIEW_PROFILE:
      return {
        ...state,
        viewProfile: action.viewProfile,
      };
    case actions.TOGGLE_MOBILE_LIST:
      return {
        ...state,
        mobileActiveList: action.mobileActiveList,
      };
    case actions.TOGGLE_MOBILE_PROFILE:
      return {
        ...state,
        mobileActiveProfile: action.mobileActiveProfile,
      };
    case actions.RESTORE_DEMO_DATA:
      return {
        ...state,
        restoringData: true,
      };
    case actions.RESTORE_DEMO_DATA_DONE:
      return {
        ...state,
        restoringData: false,
      };
    case actions.UPDATE_NEW_USER_PROPS:
      return {
        ...state,
        addNewUsersProp: action.addNewUsersProp,
      };
    case actions.NEW_MESSAGE_SUCCESFULL:
      return {
        ...state,
        openCompose: false,
        composedId: null,
      };
    case actions.ADD_NEW_USER_SAGA:
      return {
        ...state,
        addNewUsersProp: { modalActive: false },
        users: [action.user, ...state.users],
        chatRooms: [action.chatRoom, ...state.chatRooms],
      };

    default:
      return state;
  }
}
