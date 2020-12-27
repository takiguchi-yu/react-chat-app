import React, { useEffect, useRef } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { gravatarPath } from '../gravatar';

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}));

// メッセージのデータ
const MessageItem = ({ name, text, isLastItem }) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(() => {
    if (isLastItem) {
      // 投稿されたメッセージまでスクロール(最後の要素に移動)
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLastItem]); // isLastItemの状態を監視

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  )
};

export default MessageItem;
