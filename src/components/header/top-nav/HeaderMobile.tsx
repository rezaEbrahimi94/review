import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SearchIcon, SamLogo, HamburgerMenuIcon } from '@/components/icons/Icons';
import Link from 'next/link';
import { THeaderMobileProps } from '@/components/header/type';
import { HeaderMobileStyled } from '@/components/header/top-nav/style';

/* Header component in mobile view */
const HeaderMobile = ({handleSideMenuMobileControl}: THeaderMobileProps) => {
  const handleOpenSideMenu = () => {
    if(handleSideMenuMobileControl) {
      handleSideMenuMobileControl();
    }
  }

  return (
    <HeaderMobileStyled direction='row' justifyContent='space-between' className='SamHeaderRoot-mobile'>
      <Link href='/'>
        <Stack direction='row' className='SamHeader-mobile-logo' spacing='6.04px'>
            <SamLogo />
            <Typography fontWeight={800} component='span'
              fontSize='34.42px' lineHeight='16.91px' color='neutral.n0' ml='6.04px'
            >
              sam
            </Typography>
        </Stack>
      </Link>
      <Stack direction='row' px='12px' spacing='38px' alignItems='center'>
        <Box className='SamHeader-mobile-search'>
          <SearchIcon />
        </Box>
        <Box className='SamHeader-mobile-menuIcon'
          onClick={handleOpenSideMenu}
        >
          <HamburgerMenuIcon />
        </Box>
      </Stack>
    </HeaderMobileStyled>
  )
}

export default HeaderMobile;
