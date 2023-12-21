'use client';

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowIcon, SamLogo } from '@/components/icons/Icons';
import { SamTextField } from '@/components/text-field/TextField';
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import { FilledButton } from '@/components/buttons/SamButtons';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { LoginPageStyled } from './style';
import { SAM_LOGO, SAM_WELCOME, SAM_INTRODUCTION, SAM_INTRODUCTION_MOBILE } from '@/constants';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { DefaultSpinner } from '../spinner/Spinners';
import { setCookie, parseCookies } from 'nookies';

/* Login component */
const Login = () => {
  // Responsive consts
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // States
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState<boolean>(parseCookies().rememberedUsername == 'true' ? true : false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();

  // Function to handle submit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      username: username,
      password: password,
    }
    
    try {
      setIsLoading(true);
      await axios.post('/api/auth/login', payload);
      setIsLoading(false);
      if(rememberMe) {
        // Set cookies for display tooltip
        setCookie(null, 'rememberedUsername', 'true', {
          maxAge: 90 * 24 * 60 * 60, // 90 days
          path: '/',
        })
      } else {
        setCookie(null, 'rememberedUsername', 'false', {
          maxAge: 0, // 90 days
          path: '/',
        })
      }
      setCookie(null, 'username', username, {
        path: '/',
      })
      push('/dashboard');
    } catch(err) {
      // const error = err as AxiosError;
      setHasError(true);
    }
  }

  useEffect(() => {
    if(parseCookies().rememberedUsername == 'true') {
      setUsername(parseCookies().username ?? '');
    }
  }, [])

  return (
    <LoginPageStyled container>
      {/* Introduction session */}
      <Grid item lg={7} md={12} className='Welcome-root'>
        <Box className='Welcome-description-container'>
          <Stack direction='row'>
            <SamLogo />
            <Typography fontWeight={800}
              component='span'
              fontSize='34.42px' 
              lineHeight='16.91px' 
              color='neutral.nw' 
              ml='6.04px'
            >
              {SAM_LOGO}
            </Typography>
          </Stack>
          <Typography variant='h1' 
            color='neutral.nw' my={isDesktop ? '16px' : '40px'}
          >
            {SAM_WELCOME}
          </Typography>
          <Typography variant='body1' 
            color='neutral.nw' my='16px'
            dangerouslySetInnerHTML={{ __html: isDesktop ? SAM_INTRODUCTION : SAM_INTRODUCTION_MOBILE }}
          />
        </Box>
      </Grid>

      {/* Signin session */}
      <Grid item lg={5} xs={12} className='Signin-root' alignItems='center'>
        <form onSubmit={onSubmit}>
          <Box className='Signin-container'>
            <Box className='Signin-innerContainer'>
              <Typography variant='h3' fontWeight={700} color='neutral.n0'>
                Sign in
              </Typography>
              <Box className='username-container'>
                <SamTextField label='Username' 
                  dataTestid='username'
                  id='username' 
                  value={(parseCookies().rememberedUsername == 'true' && parseCookies().username) 
                    ? parseCookies().username : ''}
                  error={hasError} 
                  fullWidth 
                  onChange={setUsername}
                  sx={{ 
                    marginTop: '24px' 
                  }}
                />
              </Box>
              <SamTextField label='Password' 
                dataTestid='password'
                id='password'
                type='password' 
                error={hasError} 
                onChange={setPassword}
                errorMessage={hasError ? 'Wrong Username or Password' : ''}
                fullWidth 
                sx={{ 
                  marginTop: '24px', 
                  marginBottom: '8px' 
                }}
              />
              <Link href='/forget-password/username' className='Signin-resetPass'>
                <Typography variant='link1'>
                  Forgot password?
                </Typography>
              </Link>
              <Stack direction='row' 
                alignItems='center' 
                justifyContent='space-between'
                className='Signin-btnContainer'
              >
                <Stack direction='row' alignItems='center'>
                  <Checkbox className='Signin-rememberChkBox' 
                    defaultChecked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <Typography color='neutral.n0'>
                    Remember me
                  </Typography>
                </Stack>
                {isLoading ? 
                  <DefaultSpinner /> 
                  :
                  <FilledButton className='Signin-btn' label='Sign in' type='submit' endIcon={<ArrowIcon />} />
                }
              </Stack>
            </Box>
          </Box>
        </form>
      </Grid>
    </LoginPageStyled>
  )
}

export default Login;
