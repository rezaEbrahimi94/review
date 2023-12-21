'use client';

import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SidebarDesktop from '@/components/header/side-nav/SidebarDesktop';
import SidebarMobile from '@/components/header/side-nav/SidebarMobile';
import { TSidebarProps } from '@/components/header/type';

/* Sidebar component */
const Sidebar = ({id, title, items, handleSidebarExpandControl, openMobileMenu, handleSideMenuMobileControl}: TSidebarProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {isDesktop ?
        <SidebarDesktop id={id} title={title} items={items} handleSidebarExpandControl={handleSidebarExpandControl} />
        :
        <SidebarMobile id={id} title={title} items={items} openMobileMenu={openMobileMenu} handleSideMenuMobileControl={handleSideMenuMobileControl}/>
      }
    </>
  )
}

export default Sidebar;
