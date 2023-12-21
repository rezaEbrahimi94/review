'use client';

import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { AsteriskIcon, VisibilityIcon } from '@/components/icons/Icons';
import { TextFieldAlert } from '@/components/alert-box/TextFieldAlert';
import { TTextFieldProps } from '@/components/text-field/type';
import { TextFieldStyled } from './style';
import { digitOnly, isValidEmail, isValidLink, checkStringLength, valueIsRequired, isValidPhone } from '@/utils/validate';
import { SamTooltip } from '../tooltips/Tooltips';
import Stack from '@mui/material/Stack';

export const SamTextField = ({id, icon, label, value, type, helpText, errorMessage, success, 
  successMessage, disabled, required, readOnly, onClick, fullWidth, validate, sx,
  onChange, dataTestid, isDigit, isEmail, isLink, isPhone, min, max, setFormError, tooltip}: TTextFieldProps) => {
  const [textValue, setTextValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);
  const [fieldError, setFieldError] = useState(errorMessage ? errorMessage : '')

  function handleTextFieldChange (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const value = event?.currentTarget?.value;
    let errorFlag = true;
    let errorMess = '';
    setTextValue(value);
    if(validate) {
      validate(value)
    }
    if(min && max) {
      errorFlag = checkStringLength(value, min, max);
      if( !errorFlag ) {
        errorMess = `The field's length: ${min} - ${max} characters`;
      }
    }
    if(isDigit) {
      errorFlag = digitOnly(value);
      if( !errorFlag ) {
        errorMess = 'The field allows number only';
      }
    }
    if(isEmail) {
      errorFlag = isValidEmail(value);
      if( !errorFlag ) {
        errorMess = 'Invalid email.';
      }
    }
    if(isLink) {
      errorFlag = isValidLink(value);
      if( !errorFlag ) {
        errorMess = 'Invalid link.';
      }
    }
    if(isPhone) {
      errorFlag = isValidPhone(value);
      if( !errorFlag ) {
        errorMess = 'Invalid phone number.';
      }
    }
    if(required) {
      errorFlag = valueIsRequired(value);
      if( !errorFlag ) {
        errorMess = 'The field is required.';
      }
    }
    setFieldError(errorMess);
    if(onChange) {
      onChange(value);
    }
    if(setFormError) {
      setFormError(errorMess);
    }
  }

  useEffect(() => {
    if(setFormError && errorMessage) {
      setFormError(errorMessage);
      setFieldError(errorMessage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  return (
    <Box sx={sx} id={`${id}-Container`}>
      {label ?
        <Stack mb='8px'
          direction='row'
          spacing='4px'
        >
          {required ? 
            <AsteriskIcon 
              sx={{
                fontSize: '14px',
              }} 
            />
            : ''
          }
          <Typography variant='body1' fontWeight={700} 
            color={disabled ? 'neutral.n60' : 'neutral.n0'}
          >
            {label}
          </Typography>
          {tooltip ? 
            <SamTooltip id={`${id}-tooltip`}
              content={tooltip}          
            />
            : ''
          }
        </Stack>
       : ''}
      {helpText ?
        <Typography variant='subtext1' display='block' mb='8px'
          color={disabled ? 'neutral.n60' : 'neutral.n0'}
        >
          {helpText}
        </Typography>
      : ''}
      <Box 
        // maxWidth='360px' 
        className='TextField-container'
      >
        <TextFieldStyled id={id} fullWidth={fullWidth} value={textValue || ''}
          type={type == 'password' ? (showPassword ? 'text' : 'password') : type}
          required={required}
          error={fieldError ? true : false}
          disabled={disabled}
          className={success ? 'Mui-success' : ''}
          onChange={(event) => handleTextFieldChange(event)}
          onClick={onClick}
          InputProps={{
            readOnly: readOnly,
            endAdornment: (
              <InputAdornment position="start" 
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {type == 'password' ? <VisibilityIcon /> : icon}
              </InputAdornment>
            ),
          }}
          inputProps={{
            "data-testid": dataTestid,
          }}
          sx={{
            '& .MuiInputBase-root': {
              paddingRight: icon ? '16px' : (type == 'password' ?  '16px' : '0px'),
            }
          }}
        />
      </Box>
      {/* <Box display={`${(hasError && errorMessage) ? 'none' : 'block'}`}> */}
        {fieldError ? <TextFieldAlert severity='error' description={fieldError} />  : ''}
      {/* </Box> */}
      {(success && successMessage) ? <TextFieldAlert severity='success' description={successMessage}  /> : ''}   
    </Box>
  )
}
