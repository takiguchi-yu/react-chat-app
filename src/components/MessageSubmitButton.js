import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../firebase';

// 送信ボタンのコンポーネント
const MessageSubmitButton = ({ inputEl, name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ''}
      aria-label="Send"
      onClick={() => {
        pushMessage({ name: 'はむさん', text });
        setText('');
        inputEl.current.focus();
      }}
    >
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
