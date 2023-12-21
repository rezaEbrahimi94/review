'use client';

import Login from '@/components/login/Login';
import React, { useEffect, useState } from 'react';
import './globals.css'
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const { push } = useRouter();

  useEffect(() => {
    (async() => {
      const { error } = await getUser();
      if(!error) {
        push('/dashboard');
        return;
      }
      // if error is null, user login succesfully
      setIsSuccess(false);
      
    })();

  }, [push]);

  if(isSuccess) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <Login />
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

export default LoginPage;
