'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowIcon, SamLogo } from '@/components/icons/Icons';
import { SamTextField } from '@/components/text-field/TextField';
import Link from 'next/link';
import { FilledButton } from '@/components/buttons/SamButtons';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'
import { SamAlert } from '@/components/alert-box/AlertBox';
import { ResetPasswordPageStyled } from './style';

const ForgetPwdByPhone = () => {
  const router = useRouter();
  // const [isSuccess, setIsSuccess] = useState(false);
  const isSuccess = false;
  // const [showConfirmForm, setShowConfirmForm] = useState(false);
  const showConfirmForm = false;

  return (
    <ResetPasswordPageStyled>
      <Box className='ResetPwd-bgImg'/>
      <Box className='ResetPwd-form-container'>
        <Stack className='ResetPwd-form-logo'
          direction='row' 
          justifyContent='center'
        >
          <SamLogo />
          <Typography fontWeight={800} component='span'
            fontSize='34.42px' lineHeight='16.91px' color='neutral.nw' ml='6.04px'
          >
            sam
          </Typography>
        </Stack>

        {/* Reset password form */}
        <Box className='ResetPwd-form'>
          <Stack direction='row' className='ResetPwd-prev' onClick={router.back}>
            <ArrowIcon />
            <Typography variant='link1' ml='8px'>
              Back
            </Typography>
          </Stack>
          <Typography variant='h4' color='neutral.n0'>
            Reset Password
          </Typography>
          {showConfirmForm ? 
            <SamAlert id='ResetPwd-alert' severity='success'  
              description='We’ve sent a 4-digit code to your phone number 04** *** 223'
            />
            : ''
          }

          {/* Phone form */}
          <Box className='ResetPwd-form-sendCode' display={showConfirmForm ? 'none' : 'block'}>
            <SamTextField label='Phone' id='ResetPwd-phone' 
              fullWidth type='tel'
              sx={{ 
                marginTop: '24px',
                marginBottom: '8px',
              }}
            />
            {(!isSuccess)
              ? 
              <Link href='/forget-password/email' className='ResetPwd-resetPass'>
                <Typography variant='link1'>
                  Reset password by sending email
                </Typography>
              </Link>
              : null
            }
            <FilledButton className='ResetPwd-btn' 
              label='Send text message'
              sx={{ 
                marginTop: '24px',
              }} 
            />
          </Box>
          
          {/* Confirm form */}
          <Box className='ResetPwd-form-confirmCode' display={showConfirmForm ? 'block' : 'none'}>
            <SamTextField label='Code' id='ResetPwd-code' 
              fullWidth 
              sx={{ 
                marginTop: '24px',
                marginBottom: '8px',
              }}
            />
            <FilledButton className='ResetPwd-confirmBtn' 
              label='Confirm'
              sx={{ 
                marginTop: '24px',
              }} 
            />
          </Box>
        </Box>
      </Box>
      <Box className='ResetPwd-goback'>
        <Typography variant='body1' component='span' color='neutral.n0'>
          Back to &nbsp; 
        </Typography>
        <Link href='/'>
          <Typography variant='link1' component='span'>
              Sign in
          </Typography>
        </Link>
      </Box>
    </ResetPasswordPageStyled>
  )
}

export default ForgetPwdByPhone;
