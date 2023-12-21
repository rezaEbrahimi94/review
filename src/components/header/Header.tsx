'use client';

import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import HeaderMobile from '@/components/header/top-nav/HeaderMobile';
import HeaderDesktop from '@/components/header/top-nav/HeaderDesktop';
import { THeaderProps } from '@/components/header/type';
import { HeaderStyled } from '@/components/header/style';

/* Header component */
const Header = ({id, handleSideMenuMobileControl}: THeaderProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <HeaderStyled id={id} className='SamHeader-Root'>
      <Stack>
        {isDesktop ? 
        <HeaderDesktop />
        :
        <HeaderMobile handleSideMenuMobileControl={handleSideMenuMobileControl} />
        }
      </Stack>
    </HeaderStyled>
  )
}

export default Header;
