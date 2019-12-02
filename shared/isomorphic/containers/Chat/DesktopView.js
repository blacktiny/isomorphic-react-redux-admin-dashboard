import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatRooms from './ChatRooms';
import Messages from './Messages';
import ComposeMessage from './ComposeMessage';
import ViewProfile from '@iso/components/Chat/ViewProfile';
import InputName from '@iso/components/Chat/InputName';
import Loader from '@iso/components/utility/loader';
import Modal from '@iso/components/Feedback/Modal';
import {
  ChatWindow,
  ChatBox,
  ToggleViewProfile,
  MessageDialog,
} from './Messages.styles';
import { resetDemoData } from './DemoDataImporter';
import chatActions from '@iso/redux/chat/actions';
const {
  toggleCompose,
  setComposedId,
  toggleViewProfile,
  chatInit,
} = chatActions;
export default function DesktopView({ className }) {
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
    // resetDemoData();
  }, [userId]);

  if (loading) {
    return <Loader />;
  }
  return (
    <ChatWindow className="ChatWindow">
      <ChatRooms />
      <ChatBox style={{ height: '100%' }}>
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
              setComposedId={id => dispatch(setComposedId(id))}
              className={className}
            />
            <ComposeMessage
              autosize={{ minRows: 5, maxRows: 9 }}
              showButton
              rows={8}
            />
          </MessageDialog>
        </Modal>
        {selectedChatRoom && (
          <ToggleViewProfile>
            <span
              onClick={() =>
                dispatch(toggleViewProfile(selectedChatRoom.otherUserInfo))
              }
            >
              {selectedChatRoom.otherUserInfo.name}
            </span>
          </ToggleViewProfile>
        )}
        <Messages />

        <ComposeMessage autosize={{ minRows: 2, maxRows: 6 }} />
      </ChatBox>
      {viewProfile !== false ? (
        <ViewProfile
          user={selectedChatRoom.otherUserInfo}
          toggleViewProfile={() => dispatch(toggleViewProfile())}
          viewProfile={viewProfile}
        />
      ) : null}
    </ChatWindow>
  );
}
