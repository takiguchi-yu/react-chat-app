import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  }
})

// メッセージ一覧部分のコンポーネント
const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles();

  useEffect(() => {
    // 時系列に firebase から直近15件のデータを取得
    messagesRef.orderByKey().limitToLast(15).on('value', (snapshot) => {
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
    <List className={classes.root}>
      {
        messages.map(({ key, name, text }) => {
          return <MessageItem key={key} name={name} text={text}></MessageItem>;
        })
      }
    </List>
  );
}

export default MessageList;