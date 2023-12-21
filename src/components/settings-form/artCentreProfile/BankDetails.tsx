import SamCard from '@/components/card/SamCard'
import { SamTextField } from '@/components/text-field/TextField'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SamAlert } from '@/components/alert-box/AlertBox';
import { SETTINGS_BANK_ALERT } from '@/constants';

const BankDetails = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SamCard id='ArtCentreProfile-BankDetails'
      className='ArtCentreProfile-Form'
      title='Bank details'
    >
      <Stack direction='column'
        spacing='32px'
      >
        <SamAlert severity='info'
          description={SETTINGS_BANK_ALERT}        
        />
        {/* Account name */}
        <Box maxWidth='360px'>
          <SamTextField id='AccountName' 
            label='Account name' 
            fullWidth 
          />
        </Box>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <SamTextField id='BSB' 
              label='BSB' 
              fullWidth 
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <SamTextField id='AccountNumber' 
              label='Account number' 
              fullWidth 
              sx={{ ml: isMobile ? '0px' : '24px',
                mt: isMobile ? '24px' : '0px',
              }}
            />
          </Grid>
        </Grid>
      </Stack>
    </SamCard>
  )
}

export default BankDetails
