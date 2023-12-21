'use client';

import { styled } from '@mui/material/styles';
import TextField , {TextFieldProps} from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { AsteriskIcon } from '@/components/icons/Icons';
import { TextFieldAlert } from '@/components/alert-box/TextFieldAlert';
import { TSamTextAreaProps } from './type';
import { LatoFont } from '@/theme/theme';

const TextAreaStyled = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    paddingRight: '16px',
    '& input': {
      padding: '12px 12px 12px 16px',
      color: theme.palette.neutral.n0,
      fontFamily: LatoFont.style.fontFamily,
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    '& input:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.neutral.nw} inset`,
      WebkitTextFillColor: theme.palette.neutral.n0,
    },
    '& fieldset': {
      border: `1px solid ${theme.palette.neutral.n0}`,
      borderRadius: '8px',
      padding: '12px 16px',
    },
    '&:hover fieldset': {
      border: `2px solid ${theme.palette.neutral.n0}`,
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.pr50}`,
    },
    '&.Mui-error': {
      '& fieldset': {
        border: `2px solid ${theme.palette.error.e50}`,
      },
    },
    '&.Mui-disabled': {
      color: theme.palette.neutral.n60,
      '& fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '&:hover fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
    },
  },
  '&.Mui-success': {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${theme.palette.correct.c50}`,
      },
    }
  },
}));

export const SamTextArea = ({id, charLimit, label, value, helpText, error, 
    success, disabled, required, fullWidth, rows, onChange}: TSamTextAreaProps) => {
  const [charCountDown, setCharCountDown] = useState(charLimit ? (value ? charLimit - value?.length : charLimit) : null);
  const [textValue, setTextValue] = useState(value ? value : '');

  function handleTextAreaChange (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTextValue(event?.currentTarget?.value);
    if(charLimit) {
      setCharCountDown(charLimit - event?.currentTarget?.value?.length);
    }
    if(onChange) {
      onChange(event?.currentTarget?.value);
    }
  }

  return (
    <Box>
      {label ? 
        <Box mb='8px'>
          <AsteriskIcon 
            sx={{
              mr: '4px', 
              fontSize: '14px',
              display: required ? 'inline-block' : 'none',
            }} 
          />
          <Typography variant='body1' fontWeight={700} display='inline-block'
            color={disabled ? 'neutral.n60' : 'neutral.n0'}
          >
            {label}
          </Typography>
        </Box>
        : null
      }
      {helpText ? 
        <Typography variant='subtext1' display='block' mb='8px'
          color={disabled ? 'neutral.n60' : 'neutral.n0'}
        >
          {helpText}
        </Typography>
        : null
      }
      <Box maxWidth={fullWidth ? '100%' : '360px'}>
        <TextAreaStyled id={id} fullWidth value={textValue}
          required={required}
          error={error}
          disabled={disabled}
          className={success ? 'Mui-success' : ''}
          multiline rows={rows ? rows : 5}
          onChange={(event) => handleTextAreaChange(event)}
        />
        {charLimit ? 
          <Typography variant='subtext1' mt='8px'
            color={disabled ? 'neutral.n60' : 'neutral.n0'}
          >
            You have {charCountDown} characters remaining
          </Typography>
          : null
        }
      </Box>
      {error ? <TextFieldAlert severity='error' description='Error' />  : ''}
      {success ? <TextFieldAlert severity='success' description='Success'  /> : ''}   
    </Box>
  )
}
