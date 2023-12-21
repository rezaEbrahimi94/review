'use client'

import React from 'react'
import { GeneralSettingStyled } from './style'
import Breadcrumb from '@/components/breadcrumbs/Breadcrumbs'
import { ChevronIcon } from '@/components/icons/Icons'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { FilledButton } from '@/components/buttons/SamButtons'
import { usePathname } from 'next/navigation'
import Cataloguing from './Cataloguing'
import SettingArtists from './Artists'
import Sales from './Sales'
import QRWebsite from './QRWebsite'

const GeneralSetting = () => {
  // Const for pathname
  const pathName = usePathname();
  const breadcrumb = pathName.split('/').slice(1);
  
  return (
    <GeneralSettingStyled>
      {/* Breadcrumb session */}
      <Breadcrumb id='GeneralSetting-breadcrumb' separator={<ChevronIcon />} sx={{ margin: '21px 16px' }}>
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
        General
      </Typography>

      {/* Form session*/}
      <Stack className='GeneralSetting-Forms-Root'
        direction='column'
        rowGap='24px'
      >
        {/* Cataloging form */}
        <Cataloguing />
        {/* Artists form */}
        <SettingArtists />
        {/* Sales form */}
        <Sales />
        {/* QR Website form */}
        <QRWebsite />
        {/* Action button */}
        <Box className='GeneralSetting-BtnContainer'>
          <FilledButton label='Save' 
            sx={{ width: 'fit-content' }}
          />
        </Box>
      </Stack>
    </GeneralSettingStyled>
  )
}

export default GeneralSetting
