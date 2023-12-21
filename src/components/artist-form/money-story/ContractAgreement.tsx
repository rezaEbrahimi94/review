import React from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { ContractAgreementStyled } from '@/components/artist-form/money-story/style';
import MediaUploader from '@/components/media-upload/MediaUploader';
import { TForm } from './type';

const ContractAgreement = ({onChange, uploadProgress}: TForm) => {
  // useContext
  // const { artist } = useContext(ArtistContext);

  const handleFileUploadChange = (file: File) => {
    onChange('ProfileImage', file)
  }

  return (
    <ContractAgreementStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Contract / Agreement
            </Typography>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          {/* Contract upload session */}
          <MediaUploader onChange={handleFileUploadChange} uploadProgress={uploadProgress} />
        </CardAccordionDetails>
      </CardAccordion>

    </ContractAgreementStyled>
  )
}

export default ContractAgreement;