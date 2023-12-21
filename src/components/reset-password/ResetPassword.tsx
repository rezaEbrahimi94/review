'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ArrowIcon, CrossInCircleIcon, SamLogo, TickInCircleIcon } from '@/components/icons/Icons';
import { SamTextField } from '@/components/text-field/TextField';
import Link from 'next/link';
import { FilledButton } from '@/components/buttons/SamButtons';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/navigation'
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '../aws-cognito/UserPool';
import { SamAlert } from '../alert-box/AlertBox';
import { ChangePasswordPageStyled } from './style';

/* Type of Reset password form */
type TResetPassword = {
  username: string,
  confirmationCode: string,
  goBack: () => void,
}

/* Reset password component 
  Using confirmPassword function of AWS Cognito for reset password
  Confirmation code will also be checked in this step
*/
const ResetPassword = ({username, confirmationCode, goBack}: TResetPassword) => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  
  // States for error and validate
  const [matchPassword, setMatchPassword] = useState(true);
  const [errors, setErrors] = useState({
    charLimit: false,
    containNumber: false,
    containUppercase: false,
  });
  const [formError, setFormError] = useState('');

  // Function for password validation
  const validate = (newPassword: string) => {
    setStartTyping(true);
    const containNumberValidate = /(?=.*\d)/;
    const containUppercaseValidate = /(?=.*[A-Z])/;
    if(newPassword.length < 8) {
      setErrors(prevState => ({
        ...prevState,
        charLimit: true,
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        charLimit: false,
      }))
    }
    if(containNumberValidate.test(newPassword)) {
      setErrors(prevState => ({
        ...prevState,
        containNumber: false,
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        containNumber: true,
      }))
    }
    if(containUppercaseValidate.test(newPassword)) {
      setErrors(prevState => ({
        ...prevState,
        containUppercase: false,
      }))
    } else {
      setErrors(prevState => ({
        ...prevState,
        containUppercase: true,
      }))
    }
  }

  // Function to handle submit reset password form
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!errors.charLimit && !errors.containNumber && !errors.containUppercase) {
      if(newPassword == rePassword) {
        setMatchPassword(true);

        const user = new CognitoUser({
          Username: username,
          Pool: UserPool,
        })

        user.confirmPassword(confirmationCode, newPassword, {
          onSuccess: () => {
            setIsSuccess(true);
          },
          onFailure: (err) => {
            setIsSuccess(false);
            setFormError(err.message);
          }
        })
      }
    } else {
      setMatchPassword(false);
    }
  }

  return (
    <ChangePasswordPageStyled>
      <Box className='ChangePwd-bgImg'/>
      <Box className='ChangePwd-form-container'>
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
        <Box className='ChangePwd-form'>
          <Box className='ChangePwd-form-sendCode' display={isSuccess ? 'none' : 'block'}>
            <Stack direction='row' className='ChangePwd-prev' onClick={goBack}>
              <ArrowIcon />
              <Typography variant='link1' ml='8px'>
                Back
              </Typography>
            </Stack>
            <form onSubmit={onSubmit}>
              <Typography variant='h4' color='neutral.n0'>
                Change Password
              </Typography>
              {formError != '' ?
                <SamAlert id='ResetPwd-formError' severity='error'
                description={formError}
                />
                : null
              }
              <Box className='password-container'>
                <SamTextField label='New Password' id='ChangePwd-passwordTxtFd' 
                  fullWidth type='password' validate={validate}
                  onChange={setNewPassword}
                  sx={{ 
                    marginTop: '24px',
                    marginBottom: '8px',
                  }}
                  error={(errors.charLimit || errors.containNumber || errors.containUppercase) ? true : false}
                />

                {/* Error messages */}
                {startTyping ? 
                  <>
                    <Stack direction='row' spacing='8px' my='8px'
                      className='ChangePwd-error'
                    >
                      {errors.charLimit 
                        ?
                        <>
                          <CrossInCircleIcon className='ChangePwd-error-cross' />
                          <Typography color='neutral.n30'>
                            at least <b>8 characters</b>
                          </Typography>
                        </> 
                        : 
                        <>
                          <TickInCircleIcon className='ChangePwd-error-tick' />
                          <Typography color='correct.c50'>
                            at least 8 characters
                          </Typography>
                        </>
                      }
                    </Stack>
                    <Stack direction='row' spacing='8px' my='8px'
                      className='ChangePwd-error'
                    >
                      {errors.containNumber 
                        ?
                        <>
                          <CrossInCircleIcon className='ChangePwd-error-cross' />
                          <Typography color='neutral.n30'>
                            must contain <b>1 number</b>
                          </Typography>
                        </> 
                        : 
                        <>
                          <TickInCircleIcon className='ChangePwd-error-tick' />
                          <Typography color='correct.c50'>
                            must contain 1 number
                          </Typography>
                        </>
                      }
                    </Stack>
                    <Stack direction='row' spacing='8px' my='8px'
                      className='ChangePwd-error'
                    >
                      {errors.containUppercase 
                        ?
                        <>
                          <CrossInCircleIcon className='ChangePwd-error-cross' />
                          <Typography color='neutral.n30'>
                            must contain <b>1 uppercase</b>
                          </Typography>
                        </> 
                        : 
                        <>
                          <TickInCircleIcon className='ChangePwd-error-tick' />
                          <Typography color='correct.c50'>
                            must contain 1 uppercase
                          </Typography>
                        </>
                      }
                    </Stack>
                  </>
                  : ''
                }

                <SamTextField label='Re-enter New Password' id='ChangePwd-reEnterPasswordTxtFd' 
                  fullWidth type='password'
                  // validate={comparePassword}
                  onChange={setRePassword}
                  error={!matchPassword}
                  errorMessage={!matchPassword ? 'Passwords do not match' : ''}
                  sx={{ 
                    marginTop: '24px',
                    marginBottom: '8px',
                  }}
                />
              </Box>
              <FilledButton className='ChangePwd-btn' 
                type='submit'
                label='Change password'
                sx={{ 
                  marginTop: '24px',
                }} 
              />
            </form>
          </Box>
          
          {/* Confirm form */}
          <Box className='ChangePwd-form-signinForm' display={isSuccess ? 'block' : 'none'}>
            <TickInCircleIcon className='ChangePwd-signinForm-logo' />
            <Typography variant='h4' color='neutral.n0' my='8px'>
              Password Reset
            </Typography>
            <Typography variant='body1' color='neutral.n0'>
              Your password has been successfully reset.
            </Typography>
            <FilledButton className='ChangePwd-signinBtn' 
              onClick={() => router.push('/')}
              label='Sign in'
              sx={{ 
                marginTop: '24px',
              }} 
            />
          </Box>
        </Box>
      </Box>
      <Box className='ChangePwd-goback'>
        <Typography variant='body1' component='span' color='neutral.n0'>
          Back to &nbsp; 
        </Typography>
        <Link href='/'>
          <Typography variant='link1' component='span'>
              Sign in
          </Typography>
        </Link>
      </Box>
    </ChangePasswordPageStyled>
  )
}

export default ResetPassword;
