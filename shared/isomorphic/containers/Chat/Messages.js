import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timeDifference } from '@iso/lib/helpers/utility';
import { MessageSingle, MessageChatWrapper } from './Messages.styles';
import chatActions from '@iso/redux/chat/actions';
const { toggleViewProfile, toggleMobileProfile } = chatActions;
export default function Messages() {
  const dispatch = useDispatch();
  const { user, userId, selectedChatRoom, messages } = useSelector(
    state => state.Chat
  );

  const scrollToBottom = () => {
    const messageChat = document.getElementById('messageChat');
    messageChat.scrollTop = messageChat.scrollHeight;
  };
  React.useEffect(() => {
    scrollToBottom();
  });

  const renderMessage = message => {
    const isUser = userId === message.sender;
    const messageUser = isUser ? user : selectedChatRoom.otherUserInfo;
    if (isUser) {
      return (
        <MessageSingle className="loggedUser" key={message.messageTime}>
          <div className="messageContent isUser">
            <div className="messageContentText">
              <p>{message.text}</p>
            </div>
            <div className="messageTime">
              <p>{timeDifference(message.messageTime)}</p>
            </div>
          </div>
          <div className="messageGravatar">
            <img
              alt="#"
              src={messageUser.profileImageUrl}
              onClick={() => {
                dispatch(toggleMobileProfile(true));
                dispatch(toggleViewProfile(messageUser));
              }}
            />
          </div>
        </MessageSingle>
      );
    } else {
      return (
        <MessageSingle key={message.messageTime}>
          <div className="messageGravatar">
            <img
              alt="#"
              src={messageUser.profileImageUrl}
              onClick={() => {
                dispatch(toggleMobileProfile(true));
                dispatch(toggleViewProfile(messageUser));
              }}
            />
          </div>
          <div className="messageContent notUser">
            <div className="messageContentText">
              <p>{message.text}</p>
            </div>
            <div className="messageTime">
              <p>{timeDifference(message.messageTime)}</p>
            </div>
          </div>
        </MessageSingle>
      );
    }
  };
  return (
    <MessageChatWrapper id="messageChat">
      {messages.map(renderMessage)}
    </MessageChatWrapper>
  );
}
