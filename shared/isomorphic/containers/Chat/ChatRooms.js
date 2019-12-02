import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddNewUser from './AddNewUser';
import Scrollbars from '@iso/components/utility/customScrollBar';
import Button from '@iso/components/uielements/button';
import HelperText from '@iso/components/utility/helper-text';
import chatActions from '@iso/redux/chat/actions';
import { timeDifference } from '@iso/lib/helpers/utility';
import {
  UserListsWrapper,
  UserLists,
  SidebarSearchBox,
  Input,
  ChatSidebar,
} from './Messages.styles';
const { setSelectedChatroom, toggleMobileList, toggleCompose } = chatActions;
function filteredChatRooms(chatrooms) {
  return chatrooms.filter(chatroom => chatroom.lastMessageTime > 0);
}
export default function ChatRooms() {
  const dispatch = useDispatch();
  const { users, chatRooms, selectedChatRoom } = useSelector(
    state => state.Chat
  );
  const { view } = useSelector(state => state.App);
  const [currentChatRooms, setCurrentChatRooms] = React.useState(
    filteredChatRooms(chatRooms)
  );
  React.useEffect(() => {
    setCurrentChatRooms(filteredChatRooms(chatRooms));
  }, [chatRooms]);

  const currentChatRoom = view === 'DesktopView' ? selectedChatRoom : {};

  const onSearch = event => {
    const value = event.target.value;

    let searchedChatRooms = filteredChatRooms(chatRooms);
    if (value.trim()) {
      searchedChatRooms = searchedChatRooms.filter(chatRoom =>
        chatRoom.otherUserInfo.name.toLowerCase().includes(value.toLowerCase())
      );
    }
    setCurrentChatRooms(searchedChatRooms);
  };
  const singleChatRoom = (chatRoom, index) => {
    const { otherUserInfo, lastMessage, lastMessageTime } = chatRoom;
    const { name, profileImageUrl } = otherUserInfo;
    const selected = currentChatRoom.id === chatRoom.id;
    const style = {
      background: selected ? '#f7f7f7' : 'rgba(0,0,0,0)',
    };
    const selectChatroom = event => {
      event.stopPropagation();

      if (!selected) {
        dispatch(setSelectedChatroom(chatRoom));
      }
      if (toggleMobileList) {
        dispatch(toggleMobileList(false));
      }
    };
    return (
      <UserLists key={index} style={style} onClick={selectChatroom}>
        <div className="userListsGravatar">
          <img
            alt="#"
            style={{ width: 45, height: 45 }}
            src={profileImageUrl}
          />
        </div>
        <div className="userListsContent">
          <h4>{name}</h4>
          <div className="chatExcerpt">
            <p>{lastMessage}</p>
            <span className="userListsTime">
              {timeDifference(lastMessageTime)}
            </span>
          </div>
        </div>
      </UserLists>
    );
  };
  return (
    <ChatSidebar>
      <SidebarSearchBox>
        <Input onChange={onSearch} placeholder="Search Contact" />
        <AddNewUser />
      </SidebarSearchBox>
      <UserListsWrapper>
        <Scrollbars style={{ height: '100%' }}>
          {currentChatRooms.length === 0 ? (
            <HelperText text="No Conversation" className="messageHelperText" />
          ) : (
            currentChatRooms.map(singleChatRoom)
          )}
        </Scrollbars>
      </UserListsWrapper>

      {users.length > 0 && (
        <div className="ComposeMessageButton">
          <Button onClick={() => dispatch(toggleCompose())} type="primary">
            Compose
          </Button>
        </div>
      )}
    </ChatSidebar>
  );
}
