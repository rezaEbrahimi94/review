'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowIcon, SamLogo } from '@/components/icons/Icons';
import { SamTextField } from '@/components/text-field/TextField';
import Link from 'next/link';
import { FilledButton } from '@/components/buttons/SamButtons';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'
import { SamAlert } from '@/components/alert-box/AlertBox';
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../aws-cognito/UserPool';
import ResetPassword from './ResetPassword';
import { ResetPasswordPageStyled } from './style';

/* Forget password by username component 
  Using forgotPassword function of AWS Cognito for sending code to email
  Confirmation code will not be checked in this step
*/
const ForgetPwdByUsername = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');
  
  // State for error and validation
  // const [hasMultiple, setHasMultiple] = useState(false);
  const [error, setError] = useState('');
  const [codeError, setCodeError] = useState(false);
  // const [codeSuccess, setCodeSuccess] = useState(false);

  // Function for proceed the send code to user's email
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    })

    user.forgotPassword(
      {
        onSuccess: () => {
          setStep(2);
        },
        onFailure: (err) => {
          setError(err.message);
        }
      }
    )
  }

  // Function for proceed the confirmation code
  const onSubmitConfirm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if(code.length == 6) {

      // const user = new CognitoUser({
      //   Username: username,
      //   Pool: UserPool,
      // })

      // user.confirmPassword(code, '', {
      //   onSuccess: (data) => {
      //   },
      //   onFailure: (err) => {
      //     console.log(err.message);
      //   }
      // })

      setStep(3);
    } else {
      setCodeError(true);
    }
    
  }

  return (
    (step != 3) ?
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
          <Box className='ResetPwd-form' display={(step == 1) ? 'block' : 'none'}>
            <Stack direction='row' className='ResetPwd-prev' onClick={router.back}>
              <ArrowIcon />
              <Typography variant='link1' ml='8px'>
                Back
              </Typography>
            </Stack>
            <form onSubmit={onSubmit}>
              <Typography variant='h4' color='neutral.n0'>
                Reset Password
              </Typography>
              {/* {hasMultiple ?
                <SamAlert id='ResetPwd-alert' severity='success'
                  description='Please contact your art centre manager to retrieve your username'
                />
                : ''
              } */}
              <SamTextField label='Username' id='ResetPwd-username'
                onChange={setUsername}
                fullWidth type='text'
                sx={{
                  marginTop: '24px',
                  marginBottom: '8px',
                }}
                error={(error == '') ? false : true}
                errorMessage={error}
              />
              <Stack direction='column' spacing='24px'>
                <Link href='/forget-password/email' className='ResetPwd-resetPass'>
                  <Typography variant='link1'>
                    I don’t remember my username
                  </Typography>
                </Link>
                <FilledButton className='ResetPwd-btn'
                  type='submit'
                  label='Reset password'
                  sx={{ width: 'fit-content' }}
                />
              </Stack>
            </form>
          </Box>

          {/* Confirm code form */}
          <Box className='Signup-confirmForm-container' display={(step == 2) ? 'block' : 'none'}>
            <Typography variant='h4' color='neutral.n0'>
              Reset Password
            </Typography>
            <SamAlert id='Signup-confirmForm-alert' severity={`${codeError ? 'error' : 'success'}`}
              description={`${codeError ?
                'The confirmation code is incorrect. We’ve sent a 6-digit code to your email.' :
                // (codeSuccess ?
                  // 'Signup successfully! Please <a href="/">login</a>' :
                  'We’ve sent a 6-digit code to your email'
                // )
                }`}
            />
            <form onSubmit={onSubmitConfirm}>
              <SamTextField label='Code' id='Signup-code'
                fullWidth
                onChange={setCode}
                sx={{
                  marginTop: '24px',
                  marginBottom: '8px',
                }}
              />
              <FilledButton className='ResetPwd-confirmBtn'
                label='Confirm'
                type='submit'
                sx={{
                  marginTop: '24px',
                }}
              />
            </form>
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
      :
      <ResetPassword confirmationCode={code} username={username} goBack={() => setStep(2)}/>
  )
}

export default ForgetPwdByUsername;
