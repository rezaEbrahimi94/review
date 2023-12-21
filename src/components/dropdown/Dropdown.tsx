'use client';

import React, { useEffect } from 'react'
import { useState } from 'react';
import { AsteriskIcon, ChevronIcon, PlusInCircleIcon } from '@/components/icons/Icons';
import { TextFieldAlert } from '@/components/alert-box/TextFieldAlert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DropdownStyled } from '@/components/dropdown/style';
import { TDropdownItemProps, TDropdownProps } from '@/components/dropdown/type';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SamTooltip } from '../tooltips/Tooltips';
import Stack from '@mui/material/Stack';

/* Component of Dropdown 
  enable editable to display add button
*/
const Dropdown = ({id, label, initialOptions, editable, required, disabled, errorMessage,
    success, fullWidth, handleAddBtn, icon, helpText, width, onChange, value, tooltip,
    setFormError}: TDropdownProps) => {
  const [inputValue, setInputValue] = useState(value ? value : '');
  const [fieldError, setFieldError] = useState(errorMessage ? errorMessage : '')

  // State for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // handle dropdown select
  const handleSelectChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string
    let errorMess = '';
    setInputValue(newValue)
    if(onChange) {
      onChange(newValue);
    } 
    if(required) {
      if(newValue.length == 0) {
        errorMess = 'The field is required.'
      }
    }
    setFieldError(errorMess);
    if(setFormError) {
      setFormError(errorMess);
    }
  }

  // handle add new value
  const handleAddNewBtn = () => {
    if(handleAddBtn) {
      handleAddBtn();
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
    <DropdownStyled id={id + '-Container'}>
      {label ?
        <Stack mb='8px' 
          className='SamDropdown-label'
          spacing='8px'
          direction='row'>
          {required ? 
            <AsteriskIcon 
              sx={{
                mr: '4px', 
                fontSize: '14px',
              }} 
            />
            : null
          }
          <Typography variant='body1' fontWeight={700} display='inline-block'
            color={disabled ? 'neutral.n60' : 'neutral.n0'}
          >
            {label}
          </Typography>
          {helpText ?
            <Typography variant='subtext1' display='block' mt='8px' mb='8px'
              color={disabled ? 'neutral.n60' : 'neutral.n0'}
            >
              {helpText}
            </Typography>
          : ''}
          {tooltip ? 
            <SamTooltip id={`${id}-tooltip`}
              content={tooltip}          
            />
            : null
          }
        </Stack>
       : null}
       <Box maxWidth={fullWidth ? (editable ? 'calc(100% - 40px)' : 'auto') : '344px'}
        className={`DropdownContainer ${icon ? 'DropdownContainer-WithIcon' : 'DropdownContainer-WithoutIcon'}`}
       >
          <Select id={id}
            value={inputValue}
            onChange={handleSelectChange}
            fullWidth={fullWidth}
            disabled={disabled}
            error={fieldError ? true : false}
            startAdornment={
              <InputAdornment 
              position='start'
              >
                {icon}
              </InputAdornment>
            }
            IconComponent={ChevronIcon}
            sx={{
              width: isMobile ? '100%' : (width ? width : (fullWidth ? 'none' : 'auto')),
            }}
          >
            {initialOptions.map((option: TDropdownItemProps, index: number) => {
              return (
                <MenuItem key={index}
                  value={option.Id}
                >
                  {option.Description}
                </MenuItem>
              )
            })}
          </Select>
          {editable ? 
            <IconButton disabled={disabled}
              className='addValue-btn'
              onClick={handleAddNewBtn} 
            >
              <PlusInCircleIcon sx={{ 
                  '& path': {
                    fill: disabled ? 'neutral.n60' : 'neutral.n0' 
                  }
                }} 
              />
            </IconButton>
            : ''
          }
      </Box>
        {fieldError ? <TextFieldAlert severity='error' description={fieldError} />  : ''}
        {success ? <TextFieldAlert severity='success' description='Success'  /> : ''}
    </DropdownStyled>
  )
}

export default Dropdown;
