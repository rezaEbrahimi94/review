import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NotificationIcon, HelpIcon, SearchIcon } from '@/components/icons/Icons';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import { HeaderDesktopStyled, SearchTextfieldStyled } from '@/components/header/top-nav/style';

/* Header component in desktop view */
const HeaderDesktop = () => {
  return (
    <HeaderDesktopStyled direction='row' justifyContent='space-between' 
      className='SamHeaderRoot-desktop'
    >
      <SearchTextfieldStyled 
        InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        }}
      />
      <Stack direction='row' px='12px' spacing='12px' alignItems='center'>
        <Box className='SamHeader-desktop-notif'>
          <NotificationIcon />
        </Box>
        <Box>
          <HelpIcon className='SamHeader-desktop-help' />
        </Box>
        <Typography variant='body1' color='neutral.n0' pl='12px'>
          Werte, Anna
        </Typography>
        <Avatar className='SamHeader-desktop-avtar' alt="Anna" src="/avatar_sample.png" />
      </Stack>
    </HeaderDesktopStyled>
  )
}

export default HeaderDesktop;
