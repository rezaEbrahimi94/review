'use client';

import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/header/Sidebar';
import Header from '@/components/header/Header';
import MainSection from '@/components/layout/MainSection';
import { usePathname } from 'next/navigation'
import { sideMenuData, sideMenuSettingsData } from '@/constants/sidebarData';

/* Layout for main content of page */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // States for initialising
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const pathname = usePathname();
  const { push } = useRouter();

  // States for control side menu
  const [extendedMain, setExtendedMain] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  // Initialise sideMenu
  const sideMenu = pathname.includes('SAM-set-up') ? sideMenuSettingsData : sideMenuData; 

  const handleSidebarExpandControl = () => {
    setExtendedMain(!extendedMain);
  }

  const handleSideMenuMobileControl = () => {
    setOpenSideMenu(!openSideMenu);
  }

  // Initialise
  useEffect(() => {
    (async() => {
      const { error } = await getUser();
      if(error) {
        push('/');
        return;
      }
      // if error is null, user login succesfully
      setIsSuccess(true);
      
    })();

  }, [push]);

  // Hide main content from authorised user
  if(!isSuccess) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <>
      {!pathname.includes('login') ? 
        <>
          <Sidebar id={sideMenu.id} items={sideMenu.items} 
            handleSidebarExpandControl={handleSidebarExpandControl}
            handleSideMenuMobileControl={handleSideMenuMobileControl}
            openMobileMenu={openSideMenu}  
          />
          <MainSection extend={extendedMain}>
            <Header id='header-01' handleSideMenuMobileControl={handleSideMenuMobileControl} />
            {children}
          </MainSection>
        </>
      : 
        <>
        {children}
        </>
      }
    </>
  )
}

type UserResponse = {
  user: string | null;
  error: AxiosError | null;
}

// Function to get user session
async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/auth/me')
    return {
      user: data,
      error: null,
    }
  } catch(e) {
    const error = e as AxiosError;
    return {
      user: null,
      error,
    }
  }
}
