'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { push } = useRouter();

  const logout = async () => {
    try {
      const { data } = await axios.post('/api/auth/logout');
      console.log(JSON.stringify(data));
      push('/');
    } catch(err) {
      const error = err as AxiosError;
      console.log(error.message);
    }
  }
  
  return (
    <div className="container">
      <Typography variant='h2' 
        color='neutral.n0' 
        padding='26px 24px'
      >
        Dashboard
      </Typography>

      {/* Test link for logging out */}
      <Typography mt='25px' 
        variant='link1' component='p' 
        onClick={logout}
        padding='26px 24px'
        sx={{ cursor: 'pointer' }}>
        Logout
      </Typography>
    </div>
  );
};



export default Page;
