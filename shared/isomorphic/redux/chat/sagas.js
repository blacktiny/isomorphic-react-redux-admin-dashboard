import { all, takeEvery, put, call, fork, select } from 'redux-saga/effects';
import actions from './actions';
import { rsf, db } from '@iso/lib/firebase/firebase';
import {
  getDocuments,
  getDocumentsByQuery,
  addDocument,
  setDocument,
  getNewDocRef,
} from '@iso/lib/firebase/firebase.util';
const getSelectedChatRoom = state => state.Chat.selectedChatRoom;
const fsProps = {};
const reverseString = str =>
  str
    .split('')
    .reverse()
    .join('');

const sortChatrooms = (optionA, optionB) =>
  optionB.lastMessageTime - optionA.lastMessageTime;
const sortMessages = (optionA, optionB) =>
  optionA.messageTime - optionB.messageTime;
const getCurrentUser = () => {
  return {
    userId: 'wt4TiasxgPrQ3dNwVZ55',
    user: {
      id: 'wt4TiasxgPrQ3dNwVZ55',
      dob: '06-Apr-1993',
      gender: 'Male',
      language: 'Burmese',
      mobileNo: '5726784596',
      name: 'Zondra Kulic',
      profileImageUrl:
        'https://s3.amazonaws.com/redqteam.com/mateadmin/support-male-zonra.png',
    },
  };
};

let chatroomsUserCollections;
let chatroomCollectionRef = db.collection('chatRooms');
let messagesCollectionRef = db.collection('messages');
const sendMessageBatch = async ({ payload, selectedChatRoom }) => {
  const batch = db.batch();
  // const { chatRoom, text } = payload;

  console.log(selectedChatRoom, payload, 'send');
  const revId = reverseString(selectedChatRoom.id);
  const messageTime = new Date().getTime();
  const chatRoomModified = {
    lastMessage: payload,
    lastMessageTime: messageTime,
  };
  batch.update(
    chatroomCollectionRef.doc(selectedChatRoom.id),
    chatRoomModified
  );
  batch.update(chatroomCollectionRef.doc(revId), chatRoomModified);
  batch.set(messagesCollectionRef.doc(), {
    sender: selectedChatRoom.userId,
    text: payload,
    messageTime,
    chatRoomId: selectedChatRoom.id,
  });
  batch.commit();
  // yield fork(updateChatrooms);
};

function* initChat(action) {
  // console.log(payload, 'chatinit');

  const payload = getCurrentUser();
  const users = yield call(getDocuments, 'users');

  const chatRooms = yield call(getDocumentsByQuery, 'chatRooms', [
    'userId',
    '==',
    payload.userId,
  ]);
  chatRooms.sort(sortChatrooms);
  const messages = yield call(getDocumentsByQuery, 'messages', [
    'chatRoomId',
    '==',
    chatRooms[0].id,
  ]);
  console.log(chatRooms, 'chatRooms');
  messages.sort(sortMessages);
  // fsProps.selectedChatRoom = chatRooms.length > 0 && chatRooms[0];
  chatroomsUserCollections = db
    .collection('chatRooms')
    .where('userId', '==', payload.userId);
  yield fork(updateChatrooms);
  yield put({
    type: actions.CHAT_INIT_SAGA,
    user: payload.user,
    userId: payload.userId,
    users,
    chatRooms,
    messages,
  });
}

function* sendMessage({ payload }) {
  // fsProps.selectedChatRoom = payload.chatRoom;
  const selectedChatRoom = yield select(getSelectedChatRoom);

  yield call(sendMessageBatch, { payload, selectedChatRoom });
  yield put({
    type: actions.NEW_MESSAGE_SUCCESFULL,
  });
  // yield fork(updateChatrooms);
}
function* addNewUser({ user, addNewUsersProp }) {
  const newUserId = yield call(addDocument, 'users', addNewUsersProp);
  const newUser = { id: newUserId, ...addNewUsersProp };
  const newChatroom = {
    reverse: false,
    userId: user.id,
    otherUserId: newUserId,
    otherUserInfo: newUser,
    lastMessage: '',
    lastMessageTime: 0,
  };
  const newChatRoomId = yield call(addDocument, 'chatRooms', newChatroom);
  const chatRoomKeyRev = reverseString(newChatRoomId);
  const newChatroomRev = {
    id: chatRoomKeyRev,
    reverse: true,
    userId: newUserId,
    otherUserId: user.id,
    otherUserInfo: user,
    lastMessage: '',
    lastMessageTime: 0,
  };
  yield call(addDocument, 'chatRooms', newChatroomRev);

  yield put({
    type: actions.ADD_NEW_USER_SAGA,
    user: newUser,
    chatRoom: { id: newChatRoomId, ...newChatroom },
  });
}
function* updateChatrooms() {
  const successActionCreator = data => {
    const { type, newIndex } = data.docChanges()[0];
    const dataMoodified = type === 'modified';
    if (!dataMoodified) {
      return { type: 'NO_CHANGE' };
    }
    const chatRoom = data.docs[newIndex].data();

    return {
      type: actions.CHAT_UPDATE_CHATROOM_SAGA,
      payload: { chatRoom },
    };
  };
  yield call(rsf.firestore.syncCollection, chatroomsUserCollections, {
    successActionCreator,
  });
}
function* updateChatroomSaga({ payload }) {
  const { chatRoom } = payload;
  let { selected } = payload;

  const selectedChatRoom = yield select(getSelectedChatRoom);

  let messages;
  if (selected || chatRoom.id === selectedChatRoom.id) {
    messages = yield call(getDocumentsByQuery, 'messages', [
      'chatRoomId',
      '==',
      chatRoom.id,
    ]);
    selected = true;
  }

  yield put({
    type: actions.CHAT_UPDATE_CHATROOM,
    chatRoom,
    messages,
    selected,
  });
}
export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHAT_INIT, initChat),
    takeEvery(actions.CHAT_UPDATE_CHATROOM_SAGA, updateChatroomSaga),
    takeEvery(actions.CHAT_SEND_MESSAGE, sendMessage),
    takeEvery(actions.ADD_NEW_USER, addNewUser),
  ]);
}
