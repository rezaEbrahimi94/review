import React, { useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { DocumentsStyled } from '@/components/artist-form/history/style';
import { TForm } from './type';
import MediaUploader from '@/components/media-upload/MediaUploader';

const Documents = (props: TForm) => {
  const [isPublic, setIsPublic] = useState<boolean>(false);

  const handleFileUploadChange = (file: File) => {
    props.onChange('File', file)
  }

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    // onChange('IsProfileImagePublic', newValue);
  }

  return (
    <DocumentsStyled>
      <CardAccordion>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Documents
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-document-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                Make this public
              </Typography>
              <Switch id='addArtist-document-switch' 
                name='addArtist-document-switch' 
                value='public'
                onChange={handlePublicSwitcher} />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          {/* Image upload session */}
          {/* <MediaUpload /> */}
          <MediaUploader onChange={handleFileUploadChange} uploadProgress={props.uploadProgress} />
        </CardAccordionDetails>
      </CardAccordion>

    </DocumentsStyled>
  )
}

export default Documents;
