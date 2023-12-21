'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SettingsIcon, ArrowIcon, CrossIcon, NotificationIcon, HelpIcon } from '@/components/icons/Icons';
import Link from 'next/link';
import SidebarItemMobile from '@/components/header/side-nav/SidebarItemMobile';
import Avatar from '@mui/material/Avatar';
import { TSidebarItemProps, TSidebarMobileProps } from '@/components/header/side-nav/type';
import { SideBarMobileStyled } from '@/components/header/side-nav/style';


const SidebarMobile = ({id, title, items, openMobileMenu, handleSideMenuMobileControl}: TSidebarMobileProps) => {
  return (
    <SideBarMobileStyled className='SamSidebar-root' id={id} 
      display={(!openMobileMenu) ? 'none' : 'block'}
    >
      <Box className='SamSidebar-blurredBackground' />
      <Box className={`SamSidebar-container`}
      >
        {/* Menu heading section */}
        <Stack className='SamSidebar-menuHeading' direction='row' justifyContent='space-between'>
          <Typography fontFamily='Montserrat' fontWeight={700} component='span'
            fontSize='16px' lineHeight='24px' color='neutral.n0' ml='6.04px'
            >
            Menu
          </Typography>
          {/* Close button on mobile view */}
          <Box className='SamSidebar-closeBtn' 
            onClick={handleSideMenuMobileControl}>
            <CrossIcon />
          </Box>
        </Stack>

        {/* Profile section */}
        <Stack direction='row' spacing='16px' alignItems='center' className='SamSidebar-mobile-profile'>
          <Avatar className='SamSidebar-mobile-avatar' alt="Anna" src="/avatar_sample.png" />
          <Typography variant='body1' color='neutral.n0' fontWeight={600} pl='12px'>
            Werte, Anna
          </Typography>
        </Stack>

        {/* Nav Bar items section */}
        <Box className='SamSidebar-navSection'>
          {/* Back navigate section */}
          {title &&
            <Link href='#'>
              <Stack direction='row' className='SamSidebar-backNavigate' m='16px 20px' p='12px 0px'>
                <ArrowIcon />
                <Typography variant='body1' color='neutral.n0' ml='4px'>
                  Back
                </Typography>
              </Stack>
            </Link>
          }

          {/* Title section */}
          {(title) &&
            <Typography variant='h5' color='neutral.n0' m='16px 20px' padding='16px 0px'>
              {title}
            </Typography>
          }

          {/* Menu items section */}
          <Box className='SamSidebar-menu'>
            {items.map((navItem: TSidebarItemProps) => {
              return (
                <SidebarItemMobile id={navItem.id} icon={navItem.icon} key={navItem.id}
                  label={navItem.label} url={navItem.url} items={navItem.items}
                />
              )
            })}
          </Box>
        </Box>

        {/* Others section */}
        <Box className='SamSidebar-mobile-others'>
          <Stack className='SamSidebar-mobile-notifications' direction='row' spacing='16px' alignItems='center'>
            <NotificationIcon />
            <Typography variant='body1' color='neutral.n0' ml='4px'>
              Notifications
            </Typography>
          </Stack>
          <Stack className='SamSidebar-mobile-help' direction='row' spacing='16px' alignItems='center'>
            <HelpIcon />
            <Typography variant='body1' color='neutral.n0' ml='4px'>
              Help
            </Typography>
          </Stack>
          <Stack className='SamSidebar-mobile-settings' direction='row' spacing='16px' alignItems='center'>
            <SettingsIcon />
            <Typography variant='body1' color='neutral.n0' ml='4px'>
              Settings
            </Typography>
          </Stack>
        </Box>
      </Box>
    </SideBarMobileStyled>
  )
}

export default SidebarMobile;
