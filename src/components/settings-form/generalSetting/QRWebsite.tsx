import SamCard from '@/components/card/SamCard'
import Stack from '@mui/material/Stack'
import React, { useState } from 'react'
import { Switch } from '@/components/switch/Switch';
import { SETTINGS_QR_HELPTEXT } from '@/constants';
import { SamTextField } from '@/components/text-field/TextField';
import Box from '@mui/material/Box';
import ImageUploader from '@/components/media-upload/ImageUploader';
import Typography from '@mui/material/Typography';
import { RadioButton } from '@/components/radio-button/RadioButton';

const QRWebsite = () => {
  // State for display fields
  const [hasQRWeb, setHasQRWeb] = useState<boolean>(false);
  const [displayUploader, setDisplayUploader] = useState<boolean>(true);

  // Handle public switcher
  const handleQRSwitcher = () => {
    const newValue = !hasQRWeb;
    setHasQRWeb(newValue);
  }
  
  // Handle public switcher
  const handleDisplayUploader = () => {
    const newValue = (document.querySelector('input[name=DisplayUploader]:checked') as HTMLInputElement).value;
    setDisplayUploader(newValue == 'yes' ? true : false);
  }

  return (
    <SamCard id='GeneralSetting-Sales'
      className='GeneralSetting-Form'
      title='QR website'
    >
      <Stack direction='column'
        spacing='32px'
      >
        <Switch id='GeneralSetting-QRWebsite-Avalable'
          name='GeneralSetting-QRWebsite-Avalable'
          label='QR website'
          description={SETTINGS_QR_HELPTEXT}
          value='on'
          onChange={handleQRSwitcher}
          checked={hasQRWeb}
        />

        {hasQRWeb ? 
          <Box className='GeneralSetting-QRWebsiteBox'>
            <Stack maxWidth='480px' 
              direction='column'
              spacing='24px'
            >
              <Stack direction='column'
                spacing='8px' 
                onChange={handleDisplayUploader} 
              >
                <Typography variant='body1'
                  color='neutral.n0'
                  fontWeight='700'
                  mb='8px'
                >
                  Which logo would you like to use?
                </Typography>
                <RadioButton id='DisplayUploader-yes' 
                  name='DisplayUploader' 
                  value='no' 
                  label='Existing logo'
                  description='This is the logo in your art centre profile'
                  checked={!displayUploader}
                  />
                <RadioButton id='DisplayUploader-yes' 
                  name='DisplayUploader' 
                  value='yes' 
                  label='Upload new logo'
                  description='This version of the logo will only be used on the QR website.'
                  checked={displayUploader}
                />
              </Stack>
              {/* <MediaUpload /> */}
              {displayUploader ? 
                <Box>
                  <Typography variant='body1'
                    color='neutral.n0'
                    fontWeight='700'
                    mb='8px'
                  >
                    Upload your logo
                  </Typography>
                  <ImageUploader />
                </Box>
                : ''
              }
              {/* Website link */}
              <SamTextField id='WebsiteLink' 
                label='Website link' 
                helpText='Where the logo on your QR website will link to'
                required fullWidth 
              />
            </Stack>
          </Box>
          : ''
        }
      </Stack>
    </SamCard>
  )
}

export default QRWebsite
