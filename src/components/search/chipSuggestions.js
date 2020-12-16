import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


export default function SmallOutlinedChips({handleClick, suggestion}) {
  return (
    
      <Chip
        variant="outlined"
        size="small"
              avatar={<Avatar>{ suggestion.slice(0, 1)}</Avatar>}
        label={suggestion}
        onClick={handleClick}
      />
   
  );
}
