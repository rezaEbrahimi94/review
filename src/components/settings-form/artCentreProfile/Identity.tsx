import { OutlinedButton } from '@/components/buttons/SamButtons'
import SamCard from '@/components/card/SamCard'
import { DeleteIcon } from '@/components/icons/Icons'
import { SamTextField } from '@/components/text-field/TextField'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

const Identity = () => {
  return (
    <SamCard id='ArtCentreProfile-Identity'
      className='ArtCentreProfile-Form'
      title='Identity'
    >
      <Stack direction='column'
        spacing='32px'
        maxWidth='360px'
      >
        {/* Art centre display name */}
        <SamTextField id='DisplayName' 
          label='Display name' 
          tooltip='Sample tooltip'
          required={true} fullWidth 
        />
        {/* Logo */}
        <Box>
          <Typography variant='body1' 
            fontWeight={700} 
            mb='16px'
          >
            Logo
          </Typography>
          <Box width='276px'
            height='160px'
            component='img'
            mb='16px'
            sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',}}
          />
          <OutlinedButton label='Remove logo'
            startIcon={<DeleteIcon />}
          />
        </Box>
        {/* Website link */}
        <SamTextField id='WebsiteLink' 
          label='Website link' 
          isLink
          required={true} fullWidth 
        />
      </Stack>
    </SamCard>
  )
}

export default Identity
