import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@iso/components/uielements/button';
import notification from '@iso/components/Notification';
import actions from '@iso/redux/chat/actions';
import { ComposeMessageWrapper, Textarea } from './Messages.styles';
const { sendMessage } = actions;

export default function ComposeMessage(props) {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  const onChange = event => {
    setValue(event.target.value);
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (value && value.length > 0) {
        dispatch(sendMessage(value));
        setValue('');
      } else {
        notification('error', 'Please type something');
      }
    }
  };
  return (
    <ComposeMessageWrapper>
      <Textarea
        autosize={props.autosize}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Type your message"
      />
      {props.showButton && (
        <div className="sendMessageButton">
          <Button type="primary" onClick={() => dispatch(sendMessage(value))}>
            Send Message
          </Button>
        </div>
      )}
    </ComposeMessageWrapper>
  );
}
