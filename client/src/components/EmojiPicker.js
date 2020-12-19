import { useState } from 'react';
import { Popover, Button, IconButton } from '@material-ui/core';
import { useEmojiPanelStyles } from '../styles/muiStyles';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const EmojiPicker = ({ handleEmojiAdd }) => {
  const classes = useEmojiPanelStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const emojis = ['😂', '😭', '❤️', '🤣', '😍', '😌', '🔥', '🤔', '😫', '🙄'];

  return (
    <div>
      <IconButton
        size="small"
        color="primary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <InsertEmoticonIcon fontSize="large" />
      </IconButton>
      <Popover
        open={anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        elevation={1}
      >
        <div className={classes.emojiWrapper}>
          {emojis.map((emoji) => (
            <Button
              onClick={() => handleEmojiAdd(emoji)}
              className={classes.emojiBtn}
            >
              {emoji}
            </Button>
          ))}
        </div>
      </Popover>
    </div>
  );
};

export default EmojiPicker;
