'use client';

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconSelection from '@/components/icons/IconSelection';
import { ChevronIcon } from '@/components/icons/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TSidebarItemProps } from '@/components/header/side-nav/type';
import { SideBarItemDesktopStyled, SidebarSubItemDesktopStyled } from '@/components/header/side-nav/style';

const SidebarSubItem = ({id, label, url, defaultOpen}: TSidebarItemProps) => {
  const pathname = usePathname();

  return (
    <Link href={url ? url : ''} 
      className={`SamSidebar-subItem-link ${pathname == url ? 'SamLink-active' : ''}`}
    >
      <SidebarSubItemDesktopStyled direction='row' 
        className='SamSidebar-subItem' key={id}
        display={defaultOpen ? 'flex' : 'none'}
      >
        <Box className='SamSidebar-subItem-focusLine' />
        <Typography variant='body1' color='neutral.n0' className='SamSidebar-subItem-label'>
          {label}
        </Typography>
      </SidebarSubItemDesktopStyled>
    </Link>
  )
}

const SidebarItem = ({id, label, url, icon, items, defaultExpand}: TSidebarItemProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {items ? 
        <>
          <SideBarItemDesktopStyled direction='row' id={id} 
            className='SamSidebar-menuItem'
            onClick={() => setOpen(!open)}
          >
            <Box className='SamSidebar-menuItem-focusLine' />
            <Stack direction='row' 
              className={`SamSidebar-menuItem-stack
              ${!defaultExpand && 'SamSidebar-menuItem-stack-minimised'}
              ${open ? 'SamSidebar-menuItem-stack-open' : 'SamSidebar-menuItem-stack-closed'}`}
            >
              <Box className='SamSidebar-menuItem-logo'>
                <IconSelection iconName={icon} />
              </Box>
              {defaultExpand &&
                <Typography variant='body1' color='neutral.n0' className='SamSidebar-menuItem-label'>
                  {label}
                </Typography>
              }
            </Stack>
            <Box className={`SamSidebar-menuItem-expandIcon
              ${open ? 'SamSidebar-menuItem-expandIcon-open' : 'SamSidebar-menuItem-expandIcon-closed'}`}              
            >
              <ChevronIcon />
            </Box>
          </SideBarItemDesktopStyled>
          {/* Submenu */}
          {defaultExpand &&
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
          }
        </>
        :
            // ${router.pathname == url && 'SamLink-active'}
        <Link href={url ? url : ''} 
          className={`SamSidebar-menuItem-link ${pathname == url ? 'SamLink-active' : ''}`} 
        >
          <SideBarItemDesktopStyled direction='row' id={id} className='SamSidebar-menuItem'>
            <Box className='SamSidebar-menuItem-focusLine' />
            <Stack direction='row' 
              className={`SamSidebar-menuItem-stack
              ${!defaultExpand && 'SamSidebar-menuItem-stack-minimised'}
              `}>
            <Box className='SamSidebar-menuItem-logo'>
                <IconSelection iconName={icon} />
              </Box>
              {defaultExpand &&
                <Typography variant='body1' color='neutral.n0' className='SamSidebar-menuItem-label'>
                  {label}
                </Typography>
              }
            </Stack>
          </SideBarItemDesktopStyled>
        </Link>
      }
    </>
  )
}

export default SidebarItem; 
