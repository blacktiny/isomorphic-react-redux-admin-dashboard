import React from 'react';
import Button from '../uielements/button';
import Input from '../uielements/input';
import ComposeAutoComplete from './ComposeAutoComplete';
import notification from '../Notification';
import IntlMessages from '../utility/intlMessages';
import ComposeForm from './ComposeMail.style';
import Editor from '../uielements/editor';

function uploadCallback(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.imgur.com/3/image');
    xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
    const data = new FormData();
    data.append('image', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}
export default function ComposeMail(props) {
  const state = React.useState({
    editorState: null,
    loading: false,
    iconLoading: false,
  });
  const onEditorStateChange = editorState => {
    setState({ ...state, editorState });
  };
  const ComposeAutoCompleteTO = {
    allMails: props.allMails,
    updateData: () => {},
    placeholder: 'To',
    autofocus: true,
  };
  const ComposeAutoCompleteCC = {
    allMails: props.allMails,
    updateData: () => {},
    placeholder: 'CC',
  };
  const editorOption = {
    style: { width: '90%', height: '70%' },
    editorState: state.editorState,
    toolbarClassName: 'home-toolbar',
    wrapperClassName: 'home-wrapper',
    editorClassName: 'home-editor',
    onEditorStateChange: onEditorStateChange,
    uploadCallback: uploadCallback,
    toolbar: { image: { uploadCallback: uploadCallback } },
  };

  return (
    <ComposeForm className="isoComposeMailWrapper">
      <ComposeAutoComplete {...ComposeAutoCompleteTO} />
      <ComposeAutoComplete {...ComposeAutoCompleteCC} />
      <Input placeholder="Subject" className="isoInputBox" />
      <Editor {...editorOption} />
      <div className="isoComposeMailBtnWrapper">
        {props.mobileView || props.tabView ? (
          <Button
            type="primary"
            onClick={() => {
              props.changeComposeMail(false);
            }}
            className="isoCancelMailBtn"
          >
            <IntlMessages id="email.cancel" />
          </Button>
        ) : (
          ''
        )}

        <Button
          type="primary"
          onClick={e => notification('success', `Mail has been sent`, '')}
          className="isoSendMailBtn"
        >
          <IntlMessages id="email.send" />
        </Button>
      </div>
    </ComposeForm>
  );
}
