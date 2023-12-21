'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CrossIcon } from '@/components/icons/Icons';
import { TagContainer } from '@/components/tags/style';
import { TagProps } from '@/components/tags/type';

const Tag = ({id, type, label, removable, onRemove}: TagProps) => {

  const handleRemoveTag = () => {
    if(onRemove) {
      onRemove();
    }
  }

  return (
    <TagContainer id={id}
      direction='row'
      spacing='4px'
      className={`SamTag  
        ${(type == 'link' ? 'SamTag-link' : 
        (type == 'complete' ? 'SamTag-complete' :
        (type == 'pending' ? 'SamTag-pending' :
        (type == 'error' ? 'SamTag-error' : 
        (type == 'inactive' ? 'SamTag-inactive' : 
        (type == 'selected' ? 'SamTag-selected' : 
        (removable ? 'SamTag-default-removable' : '')))))))}`}
    >
      <Typography variant='body2' className='SamTag-label'>
        {label}
      </Typography>
      {removable ? 
        <Box className='SamTag-icon' 
          onClick={handleRemoveTag}
        >
          <CrossIcon />
        </Box>
        : ''
      }
    </TagContainer>
  )
}

export default Tag;