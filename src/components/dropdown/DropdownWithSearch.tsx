'use client';

import React from 'react'
import { useState } from 'react';
import { AsteriskIcon, ChevronIcon, SearchIcon } from '@/components/icons/Icons';
import { TextFieldAlert } from '@/components/alert-box/TextFieldAlert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DropdownWithSearchStyled } from '@/components/dropdown/style';
import { TDropdownItemProps, TDropdownProps } from '@/components/dropdown/type';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/* Component of Dropdown 
  enable editable to display add button
*/
const DropdownWithSearch = ({ id, label, editable, required, disabled, error, initialOptions,
  success, fullWidth, handleAddBtn, helpText, width, onChange, onLabelChange, onSearch,
  onChangeWithLabel, onLabelChangeWithLabel, value, isLoading }: TDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // State for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // handle dropdown select
  const handleSelectChange = (newValue: string | number, newDescription: string | number) => {
    if (onChange) {
      onChange(newValue);
      (document.getElementById(id) as HTMLInputElement).value = String(newDescription);
      if (onLabelChange) {
        onLabelChange(newDescription);
      }
    }
    if (onChangeWithLabel) {
      onChangeWithLabel(newValue, newDescription);
      if(onLabelChangeWithLabel) {
        onLabelChangeWithLabel(newValue, newDescription);
      }
    }
    setShowDropdown(false);
  }

  // handle add new value
  const handleAddNewBtn = () => {
    if (handleAddBtn) {
      handleAddBtn();
    }
  }

  // handle search field change
  const handleSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  }

  return (
    <DropdownWithSearchStyled>
      {label ?
        <Box mb='8px' className='DropdownWithSearch-label'>
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
          {helpText ?
            <Typography variant='subtext1' display='block' mt='8px' mb='8px'
              color={disabled ? 'neutral.n60' : 'neutral.n0'}
            >
              {helpText}
            </Typography>
            : ''}
        </Box>
        : null}
      <ClickAwayListener onClickAway={() => setShowDropdown(false)} >
        <Box maxWidth={fullWidth ? (isMobile ? 'calc(100% - 40px)' : '100%') : width}
          className='DropdownWithSearch-containerRoot'
        >
          <div className='DropdownWithSearch-iconContainer'>
            <SearchIcon className='DropdownWithSearch-searchIcon' />
          </div>
          <input id={id}
            type='text'
            onFocus={() => setShowDropdown(true)}
            defaultValue={value}
            onChange={(e) => handleSearchFieldChange(e)}
            className={`DropdownWithSearch-input 
              ${initialOptions.length > 0 ? 'DropdownWithSearch-input-dropdownActive' : null}`}
          />
          <div className={`DropdownWithSearch-iconChevronContainer 
            ${label ? 'DropdownWithSearch-iconChevronContainer-withLabel' : null}
            ${helpText ? 'DropdownWithSearch-iconChevronContainer-withHelpText' : null}`}>
            <ChevronIcon className={`DropdownWithSearch-chevronIcon
              ${showDropdown ? 'DropdownWithSearch-active' : null}`} />
          </div>

          {/* Search Results Container */}
          <Box className='DropdownWithSearch-itemContainer'
            display={showDropdown ? 'block' : 'none'}
          >
            {initialOptions.length < 1 ? 
              <div className='DropdownWithSearch-loading'>
                {isLoading ? 'Loading...' : 'No result.'}
              </div>
              : null
            }
            <div className='DropdownWithSearch-item-Root'>
              {initialOptions.map((item: TDropdownItemProps, index: number) => {
                return (
                  <div key={index}
                    className='DropdownWithSearch-item'
                    onClick={() => handleSelectChange(item.Id, item.Description)}
                  >
                    {item.Description}
                  </div>
                )
              })}
            </div>
            {editable ? 
              <Box className='DropdownWithSearch-AddNew'>
                <Typography variant='body1' 
                  component='span'
                  color='neutral.n30'
                >
                  Can’t find what you are looking for?&nbsp;
                </Typography>
                <Typography variant='link1' 
                  component='span'
                  color='primary.pr50'
                  className='DropdownWithSearch-addNewTrigger'
                  onClick={handleAddNewBtn}
                >
                  Add a new {label?.toLowerCase()}
                </Typography>
              </Box>
              : ''
            }
          </Box>
        </Box>
      </ClickAwayListener>

      {error ? <TextFieldAlert severity='error' description='Error' /> : ''}
      {success ? <TextFieldAlert severity='success' description='Success' /> : ''}
    </DropdownWithSearchStyled>
  )
}

export default DropdownWithSearch;
