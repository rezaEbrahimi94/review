import SamCard from '@/components/card/SamCard'
import Stack from '@mui/material/Stack'
import React from 'react'
import Dropdown from '@/components/dropdown/Dropdown';

const Sales = () => {
  return (
    <SamCard id='GeneralSetting-Sales'
      className='GeneralSetting-Form'
      title='Sales'
    >
      <Stack direction='column'
        spacing='32px'
      >
        {/* Point of sale payment types */}
        <Dropdown id='SalePaymentType' 
          label='Point of sale payment types'
          initialOptions={[]}
          width='280px'
        />
        {/* Artist payment types */}
        <Dropdown id='ArtistPaymentType' 
          label='Artist payment types'
          initialOptions={[]}
          width='280px'
        />
      </Stack>
    </SamCard>
  )
}

export default Sales
