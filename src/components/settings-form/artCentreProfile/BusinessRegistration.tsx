import SamCard from '@/components/card/SamCard'
import { SamTextField } from '@/components/text-field/TextField'
import Stack from '@mui/material/Stack'
import React from 'react'

const BusinessRegistration = () => {
  return (
    <SamCard id='ArtCentreProfile-BusinessRegistration'
      className='ArtCentreProfile-Form'
      title='Business registration'
    >
      <Stack direction='column'
        spacing='32px'
        maxWidth='360px'
      >
        {/* ABN */}
        <SamTextField id='ABN' 
          label='ABN' 
          fullWidth 
        />
        {/* Registered business name */}
        <SamTextField id='BusinessName' 
          label='Registered business name' 
          disabled
          fullWidth 
        />
      </Stack>
    </SamCard>
  )
}

export default BusinessRegistration
