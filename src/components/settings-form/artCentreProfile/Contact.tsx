import AddressAutocomplete from '@/components/address-autocomplete/AddressAutocomplete'
import SamCard from '@/components/card/SamCard'
import Dropdown from '@/components/dropdown/Dropdown'
import { SamTextField } from '@/components/text-field/TextField'
import Stack from '@mui/material/Stack'
import React from 'react'

const Contact = () => {
  return (
    <SamCard id='ArtCentreProfile-Contact'
      className='ArtCentreProfile-Form'
      title='Contact'
    >
      <Stack direction='column'
        spacing='32px'
        maxWidth='360px'
      >
        {/* Primary contact person */}
        <SamTextField id='ContactPerson' 
          label='Primary contact person' 
          fullWidth 
        />
        {/* Contact title */}
        <Dropdown id='ContactTitle' 
          label='Contact title'
          initialOptions={[]}
          width='284px'
        />
        {/* Email */}
        <SamTextField id='Email' 
          label='Email' 
          required fullWidth 
        />
        {/* Phone number */}
        <SamTextField id='Phone' 
          label='Phone number' 
          fullWidth 
        />
        {/* Billing phone number */}
        <SamTextField id='BillingPhone' 
          label='Billing phone number' 
          fullWidth 
        />
        {/* Billing Email */}
        <SamTextField id='BillingEmail' 
          label='Billing Email'
          tooltip='Sample tooltip' 
          required fullWidth 
        />
        {/* Fax */}
        <SamTextField id='Fax' 
          label='Fax' 
          fullWidth 
        />
        {/* Address */}
        <AddressAutocomplete id='Address' 
          label='Address' 
        />
      </Stack>
    </SamCard>
  )
}

export default Contact
