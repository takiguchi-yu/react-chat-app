import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { messagesRef } from '../firebase'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  }
})

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles();

  useEffect(() => {
    // 時系列に firebase から直近3件のデータを取得
    messagesRef.orderByKey().limitToLast(3).on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;  // データが0件の場合は即リターン

      const entries = Object.entries(messages);

      // マップで回しながら{key, name, text}の形式に変換する
      const newMessages = entries.map(entry => {
        const [key, nameAndText] = entry;
        return { key, ...nameAndText };
      })
      setMessages(newMessages);
    });
  }, [])

  return (
    <div className={classes.root}>MessageList</div>
  );
}

export default MessageList;