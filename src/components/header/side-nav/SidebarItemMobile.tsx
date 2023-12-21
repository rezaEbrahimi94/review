'use client';

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconSelection from '@/components/icons/IconSelection';
import { ChevronIcon } from '@/components/icons/Icons';
import Link from 'next/link';
import { TSidebarItemProps } from '@/components/header/side-nav/type';
import { SideBarItemMobileStyled, SidebarSubItemMobileStyled } from '@/components/header/side-nav/style';

const SidebarSubItem = ({id, label, url, defaultOpen}: TSidebarItemProps) => {
  return (
    <Link href={url ? url : ''} className='SamSidebar-subItem-link'>
      <SidebarSubItemMobileStyled direction='row' 
        className='SamSidebar-subItem' key={id}
        display={defaultOpen ? 'flex' : 'none'}
      >
        <Box className='SamSidebar-subItem-focusLine' />
        <Typography variant='body1' color='neutral.n0' className='SamSidebar-subItem-label'>
          {label}
        </Typography>
      </SidebarSubItemMobileStyled>
    </Link>
  )
}

const SidebarItemMobile = ({id, label, url, icon, items}: TSidebarItemProps) => {
  const [open, setOpen] = useState(false);
  // const router = useRouter();

  return (
    <>
      {items ? 
        <>
          <SideBarItemMobileStyled direction='row' id={id} 
            className='SamSidebar-menuItem'
            onClick={() => setOpen(!open)}
          >
            <Box className='SamSidebar-menuItem-focusLine' />
            <Stack direction='row' 
              className='SamSidebar-menuItem-stack'
            >
              <Box className='SamSidebar-menuItem-logo'>
                <IconSelection iconName={icon} />
              </Box>
              <Typography variant='body1' color='neutral.n0' className='SamSidebar-menuItem-label'>
                {label}
              </Typography>
            </Stack>
            <Box className={`SamSidebar-menuItem-expandIcon
              ${open ? 'SamSidebar-menuItem-expandIcon-open' : 'SamSidebar-menuItem-expandIcon-closed'}`}              
            >
              <ChevronIcon />
            </Box>
          </SideBarItemMobileStyled>
          {/* Submenu */}
          <Box>
            {items.map((submenu: TSidebarItemProps) => {
              return (
                <SidebarSubItem id={submenu.id} icon={submenu.icon} key={submenu.id}
                  label={submenu.label} url={submenu.url} items={submenu.items}
                  defaultOpen={open}
                  />
              )
            })}
          </Box>
        </>
        :
            // ${router.pathname == url && 'SamLink-active'}
        <Link href={url ? url : ''} className='SamSidebar-menuItem-link'>
          <SideBarItemMobileStyled direction='row' id={id} className='SamSidebar-menuItem'>
            <Box className='SamSidebar-menuItem-focusLine' />
            <Stack direction='row' className='SamSidebar-menuItem-stack'>
              <Box className='SamSidebar-menuItem-logo'>
                <IconSelection iconName={icon} />
              </Box>
              <Typography variant='body1' color='neutral.n0' className='SamSidebar-menuItem-label'>
                {label}
              </Typography>
            </Stack>
          </SideBarItemMobileStyled>
        </Link>
      }
    </>
  )
}

export default SidebarItemMobile; 
