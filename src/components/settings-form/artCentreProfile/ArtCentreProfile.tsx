'use client';

import React from 'react';
import { ArtCentreProfileStyled } from './styles';
import Breadcrumb from '../../breadcrumbs/Breadcrumbs';
import { ChevronIcon } from '../../icons/Icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Identity from './Identity';
import Stack from '@mui/material/Stack';
import { FilledButton } from '@/components/buttons/SamButtons';
import Box from '@mui/material/Box';
import Contact from './Contact';
import BusinessRegistration from './BusinessRegistration';
import BankDetails from './BankDetails';

const ArtCentreProfile = () => {
  // Const for pathname
  const pathName = usePathname();
  const breadcrumb = pathName.split('/').slice(1);

  return (
    <ArtCentreProfileStyled>
      {/* Breadcrumb session */}
      <Breadcrumb id='artCentreProfile-breadcrumb' separator={<ChevronIcon />} sx={{ margin: '21px 16px' }}>
        {breadcrumb.map((item: string, index: number) => {
          return (
            <Link key={index} href={pathName.substring(0, pathName.indexOf(item) + item.length)}>
              {item.charAt(0).toUpperCase() + item.slice(1).replaceAll('-', ' ')}
            </Link>
          )
        })}
      </Breadcrumb>

      {/* Page header*/}
      <Typography variant='h3' color='neutral.n0' mb='40px' ml='24px'>
        Art centre profile
      </Typography>

      {/* Form session*/}
      <Stack className='artCentreProfile-Forms-Root'
        direction='column'
        rowGap='24px'
      >
        {/* Identity form */}
        <Identity />
        {/* Contact form */}
        <Contact />
        {/* Business registration form */}
        <BusinessRegistration />
        {/* Bank details form */}
        <BankDetails />
        {/* Action button */}
        <Box className='artCentreProfile-BtnContainer'>
          <FilledButton label='Save' 
            sx={{ width: 'fit-content' }}
          />
        </Box>
      </Stack>
    </ArtCentreProfileStyled>
  )
}

export default ArtCentreProfile;
