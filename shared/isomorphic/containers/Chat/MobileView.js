import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@iso/components/Feedback/Modal';
import InputName from '@iso/components/Chat/InputName';
import ChatRooms from './ChatRooms';
import Messages from './Messages';
import ComposeMessage from './ComposeMessage';
import ViewProfile from '@iso/components/Chat/ViewProfile';
import Loader from '@iso/components/utility/loader';
import {
  ChatWindow,
  ChatBox,
  Button,
  MessageDialog,
  ToggleViewProfile,
} from './Messages.styles';

import chatActions from '@iso/redux/chat/actions';
const {
  toggleCompose,
  setComposedId,
  toggleViewProfile,
  chatInit,
  mobileActiveList,
  mobileActiveProfile,
  toggleMobileList,
  toggleMobileProfile,
} = chatActions;
export default function MobileView({ className }) {
  const dispatch = useDispatch();
  const {
    loading,
    users,
    userId,
    openCompose,
    selectedChatRoom,
    viewProfile,
  } = useSelector(state => state.Chat);
  React.useEffect(() => {
    if (!users) {
      dispatch(chatInit(userId));
    }
  });

  if (loading) {
    return <Loader />;
  }
  let CurrentView = <Loader />;
  if (mobileActiveList) {
    CurrentView = (
      <div>
        <Modal
          visible={openCompose}
          onCancel={() => dispatch(toggleCompose())}
          title="Compose Message"
          footer={null}
        >
          <MessageDialog>
            <h5>Starting your chat with...</h5>
            <InputName
              users={users}
              setComposedId={() => dispatch(setComposedId())}
              className={className}
            />
            <ComposeMessage
              autosize={{ minRows: 5, maxRows: 9 }}
              showButton
              rows={8}
            />
          </MessageDialog>
        </Modal>
        <ChatRooms toggleMobileList={() => dispatch(toggleMobileList())} />
      </div>
    );
  } else if (mobileActiveProfile) {
    CurrentView = (
      <ViewProfile
        viewProfile={viewProfile}
        toggleViewProfile={() => dispatch(toggleViewProfile())}
        toggleMobileProfile={() => dispatch(toggleMobileProfile())}
      />
    );
  } else {
    CurrentView = (
      <ChatBox className="ChatBox">
        {selectedChatRoom && (
          <ToggleViewProfile>
            <Button onClick={() => dispatch(toggleMobileList(true))}>
              <i className="ion-chevron-left" />
            </Button>
            <span
              onClick={() => {
                dispatch(toggleViewProfile(selectedChatRoom.otherUserInfo));
                dispatch(toggleMobileProfile(true));
              }}
            >
              {selectedChatRoom.otherUserInfo.name}
            </span>
          </ToggleViewProfile>
        )}

        <Messages toggleMobileProfile={() => dispatch(toggleMobileProfile())} />
        <ComposeMessage
          InputProps={{
            disableUnderline: true,
          }}
        />
      </ChatBox>
    );
  }
  return <ChatWindow className="ChatWindow">{CurrentView}</ChatWindow>;
}
