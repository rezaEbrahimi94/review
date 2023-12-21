'use client';

import React from 'react'
import { useState } from 'react';
import { ChevronIcon, SearchIcon, UserIcon } from '@/components/icons/Icons';
import Box from '@mui/material/Box';
import { DropdownWithSearchStyled } from '@/components/dropdown/style';
import { TDropdownArtistItemProps, TDropdownArtistProps } from '@/components/dropdown/type';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/* Component of Dropdown for Artist text field
*/
const ArtistSearchField = ({ id, initialOptions,
  fullWidth, width, onChange, onLabelChange, onSearch,
  onChangeWithLabel, onLabelChangeWithLabel, value, isLoading }: TDropdownArtistProps) => {
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

  // handle search field change
  const handleSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  }

  return (
    <DropdownWithSearchStyled>
      <ClickAwayListener onClickAway={() => setShowDropdown(false)} >
        <Box maxWidth={fullWidth ? (isMobile ? '100%' : width) : width}
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
              ${(initialOptions !== undefined && initialOptions.length > 0) ? 'DropdownWithSearch-input-dropdownActive' : null}`}
          />
          <div className='DropdownWithSearch-iconChevronContainer'>
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
              {initialOptions?.map((item: TDropdownArtistItemProps, index: number) => {
                return (
                  <div key={index}
                    className='DropdownWithSearch-item'
                    onClick={() => handleSelectChange(item.Id ?? '', (item.Firstname + ' ' + item.Surname) ?? '')}
                  >
                    <Stack direction='row'
                      alignItems='center'
                    >
                      <UserIcon
                        sx={{ 
                          margin: '16px 18px',
                          '& path': {
                            fill: theme.palette.neutral.n20,
                          }
                        }} 
                      />
                      <Stack direction='column'>
                        <Typography fontWeight={700}
                          variant='body1' color='neutral.n0' 
                        >
                          {item.Firstname} {item.Surname}
                        </Typography>
                        <Typography  
                          variant='body1' color='neutral.n30' 
                        >
                          {item.ArtistSubSectionSkin?.SubSectionSkin.Description ? 
                            `${item.ArtistSubSectionSkin?.SubSectionSkin.Description} |`: null}
                          {item.Bushname ? ` ${item.Bushname} |`: null}
                          {item.OtherName ? ` ${item.OtherName}`: null}
                        </Typography>
                      </Stack>
                      <Typography
                        variant='body1' color='neutral.n0'
                        marginLeft='auto' marginRight='18px'
                      >
                        {item.ArtistCommunity?.Community.Description}
                      </Typography>
                    </Stack>
                  </div>
                )
              })}
            </div>
          </Box>
        </Box>
      </ClickAwayListener>
    </DropdownWithSearchStyled>
  )
}

export default ArtistSearchField;
