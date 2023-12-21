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

const ForgetPwdByEmail = () => {
  const router = useRouter();
  // const [isSuccess, setIsSuccess] = useState(false);
  const isSuccess = false;
  // const [hasMultiple, setHasMultiple] = useState(false);
  const hasMultiple = false;

  return (
    <ResetPasswordPageStyled>
      <Box className='ResetPwd-bgImg' />
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
          {hasMultiple ?
            <SamAlert id='ResetPwd-alert' severity='success'
              description='Please contact your art centre manager to retrieve your username'
            />
            : ''
          }
          <SamTextField label='Email' id='ResetPwd-username'
            fullWidth type='email'
            sx={{
              marginTop: '24px',
              marginBottom: '8px',
            }}
            success={isSuccess}
            successMessage={isSuccess ?
              'We’ve sent a link to your email <a href="#">example@email.com.au</a>'
              : ''}
          />
          {(!isSuccess && !hasMultiple)
            ?
            <Link href='/forget-password/phone' className='ResetPwd-resetPass'>
              <Typography variant='link1'>
                Reset password by sending text message
              </Typography>
            </Link>
            : null
          }
          <FilledButton className='ResetPwd-btn'
            label={isSuccess ? 'Resend the link' : 'Send by email'}
            sx={{
              marginTop: '24px',
            }}
          />
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

export default ForgetPwdByEmail;
