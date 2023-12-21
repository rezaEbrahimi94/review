import SamCard from '@/components/card/SamCard'
import { SamTextField } from '@/components/text-field/TextField'
import Stack from '@mui/material/Stack'
import React from 'react'
import Grid from '@mui/material/Grid';
import { PercentIcon } from '@/components/icons/Icons';
import { RadioButton } from '@/components/radio-button/RadioButton';
import Typography from '@mui/material/Typography';
import Dropdown from '@/components/dropdown/Dropdown';

const Cataloguing = () => {
  return (
    <SamCard id='GeneralSetting-Cataloguing'
      className='GeneralSetting-Form'
      tooltip='sample tooltip'
      title='Bank Cataloguing'
    >
      <Stack direction='column'
        spacing='32px'
        maxWidth='360px'
      >
        {/* Commission rate */}
        <SamTextField id='CommissionRate' 
          label='Art centre commission rate' 
          required fullWidth 
          icon={<PercentIcon />}
        />
        {/* Catalogue number format */}
        <Dropdown id='ContactTitle' 
          label='Catalogue number format'
          initialOptions={[]}
          width='280px'
        />
        {/* Artwork sizes */}
        <Stack direction='column'>
          <Typography variant='body1' mb='8px'
            fontWeight={700}
            color='neutral.n0'
          >
            Artwork sizes
          </Typography>
          <Grid container maxWidth='384px'>
            <Grid item xs={6} className='GeneralSetting-ArtworkSizes-mm'>
              <RadioButton id='artistDeceased-yes' 
                name='ArtworkSize' 
                value='mm' 
                label='mm' 
              />
            </Grid>
            <Grid item xs={6} className='GeneralSetting-ArtworkSizes-cm'>
              <RadioButton id='artistDeceased-no' 
                name='ArtworkSize' 
                value='cm' 
                label='cm'
              />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </SamCard>
  )
}

export default Cataloguing
