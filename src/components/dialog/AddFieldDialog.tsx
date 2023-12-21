import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { AddFieldDialogStyled } from './style';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon } from '@/components/icons/Icons';
import { SamTextField } from '@/components/text-field/TextField';
import { FilledButton, GhostButton } from '@/components/buttons/SamButtons';

type TAddFieldDialog = {
  id: string,
  title: string,
  label: string,
  validate?: (a: string) => void,
  onAddField?: (a: string) => void,
  onCloseEvt?: () => void,
}

const AddFieldDialog = ({id, title, label, validate, onAddField, onCloseEvt}: TAddFieldDialog) => {
  const [value, setValue] = useState<string>('');

  const handleAddField = () => {
    if(validate) {
      validate(value);
    }
    if(onAddField) {
      onAddField(value);
    }
    if(onCloseEvt) {
      onCloseEvt();
      setValue('');
    }
  }

  return (
    <AddFieldDialogStyled>
      <Box className='addFieldDialog-bg' />
      <Stack direction='column'
        spacing='46px'
        padding='48px'
        className='addFieldDialog-container'
      >
        <Stack direction='row'
          justifyContent='space-between'
        >
          <Typography variant='h3'
            color='neutral.n0'
          >
            {title}
          </Typography>
          <CrossIcon onClick={onCloseEvt} />
        </Stack>
        <SamTextField id={id} 
          label={label}
          fullWidth 
          onChange={setValue}
          value={value}
        />
        <Stack direction='row'
          spacing='16px'
          justifyContent='flex-end'
        >
          <FilledButton className='addFieldDialog-addBtn' 
            label='Add' 
            sx={{ 
              width: 'fit-content',
            }} 
            onClick={handleAddField}
          />
          <GhostButton className='addFieldDialog-cancelBtn' 
            label='Cancel' 
            sx={{ 
              width: 'fit-content',
            }} 
            onClick={onCloseEvt}
          />
        </Stack>
      </Stack>
    </AddFieldDialogStyled>
  )
}

export default AddFieldDialog;
