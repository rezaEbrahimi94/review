'use client';

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SamLogo, SettingsIcon, ChevronIcon, ArrowIcon } from '@/components/icons/Icons';
import Link from 'next/link';
import SidebarItem from '@/components/header/side-nav/SidebarItem';
import { TSidebarItemProps, TSidebarProps } from '@/components/header/side-nav/type';
import { SideBarDesktopStyled } from '@/components/header/side-nav/style';
import { usePathname } from 'next/navigation';

const SidebarDesktop = ({id, title, items, handleSidebarExpandControl}: TSidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Check if setting pages
  const pathname = usePathname();
  const isSettingsPage = pathname.includes('SAM-set-up') ? true : false; 

  const handleExpandIcon = () => {
    setIsExpanded(!isExpanded);
    if(handleSidebarExpandControl) {
      handleSidebarExpandControl();
    }
  }

  return (
    <SideBarDesktopStyled className='SamSidebar-root' id={id} display='block'>
      <Box className={`SamSidebar-container 
        ${!isExpanded && 'SamSidebar-container-minimised'}`}
      >
        {/* LOGO section */}
        <Stack direction='row' 
          className='SamSidebar-logoSection'
        >
          <Link href='/'>
            <SamLogo />
            {isExpanded ? 
              <Typography fontWeight={800} component='span'
                fontSize='34.42px' lineHeight='16.91px' color='neutral.n0' ml='6.04px'
              >
                sam
              </Typography>
              : ''
            }
          </Link>
        </Stack>

        {/* Expand button */}
        <Box component='span'
          className={`SamSidebar-expandMenuIcon ${isExpanded ? 'SamSidebar-expandMenuIcon-open' : 'SamSidebar-expandMenuIcon-close'}`} 
          onClick={handleExpandIcon}
        >
          <ChevronIcon />
        </Box>

        {/* Nav Bar items section */}
        <Box className='SamSidebar-navSection'>
          {/* Back navigate section */}
          {isSettingsPage &&
            <Link href='/dashboard'>
              <Stack direction='row' 
                className='SamSidebar-backNavigate' 
                m='16px 20px' 
                p='12px 0px'
                spacing='6px'  
              >
                <ArrowIcon />
                {isExpanded &&
                  <Typography variant='body1' color='neutral.n0' ml='4px'>
                    Back
                  </Typography>
                }
              </Stack>
            </Link>
          }

          {/* Title section */}
          {(title && isExpanded) &&
            <Typography variant='h5' color='neutral.n0' m='16px 20px' padding='16px 0px'>
              {title}
            </Typography>
          }

          {/* Menu items section */}
          <Box className='SamSidebar-menu'>
            {items.map((navItem: TSidebarItemProps) => {
              return (
                <SidebarItem id={navItem.id} icon={navItem.icon} key={navItem.id}
                  label={navItem.label} url={navItem.url} items={navItem.items}
                  defaultExpand={isExpanded}
                  />
              )
            })}
          </Box>
        </Box>

        {/* Settings section */}
        <Box className='SamSidebar-settings'>
          <SettingsIcon />
        </Box>
      </Box>
    </SideBarDesktopStyled>
  )
}

export default SidebarDesktop;
