import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { SamTextField } from '@/components/text-field/TextField';
import Grid from '@mui/material/Grid';
import { GhostButton, OutlinedButton } from '@/components/buttons/SamButtons';
import { DeleteIcon, PlusIcon } from '@/components/icons/Icons';
import { InputDatePicker } from '@/components/date-picker/InputDatePicker';
import { ArtistLegalStyled } from '@/components/artist-form/personal-info/style';
import { RadioButton } from '@/components/radio-button/RadioButton';
import { TForm } from '@/components/artist-form/personal-info/type';
import ArtistContext from '@/components/context/ArtistContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/* Component of name and identity */
const Legal = ({onChange}: TForm) => {
  // useContext
  const { personalInfo } = useContext(ArtistContext);

  // State for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // state for form controlling
  const [HasWill, setHasWill] = useState<boolean>((personalInfo != null && personalInfo.HasWill) ? true : false);
  const [Disability, setDisability] = useState<boolean>((personalInfo != null && personalInfo.Disability) ? true : false);
  const [hasWillNote, setHasWillNote] = useState<boolean>((personalInfo != null && personalInfo.LegalNote) ? true : false);
  const [willNote, setWillNote] = useState<string>(personalInfo?.LegalNote ? personalInfo?.LegalNote : '');

  const onChangeDisplayWill = () => {
    const newValue = (document.querySelector('input[name=HasWill]:checked') as HTMLInputElement).value;
    setHasWill(newValue == 'yes' ? true : false);
    onChange('HasWill', newValue == 'yes' ? true : false);
  }
  
  const onChangeDisabilities = () => {
    const newValue = (document.querySelector('input[name=Disability]:checked') as HTMLInputElement).value;
    setDisability(newValue == 'yes' ? true : false);
    onChange('Disability', newValue == 'yes' ? true : false);
  }

  // Initialise fields when artist is available
  useEffect(() => {
    if(personalInfo) {
      onChange('HasWill', personalInfo.HasWill ?? false);
      onChange('DateOfWill', personalInfo.DateOfWill ?? '');
      onChange('Will', personalInfo.Will ?? '');
      onChange('LegalNote', personalInfo.LegalNote ?? '');
      onChange('Disability', personalInfo.Disability ?? false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalInfo]);

  return (
    <ArtistLegalStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column'
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4'
              color='neutral.n0'
            >
              Legal
            </Typography>
            <Typography variant='body1'
              color='neutral.n0'
            >
              This section is only visible to users with manager level access
            </Typography>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          {/* Will session */}
          <Typography variant='body1' mb='8px'
            fontWeight={700}
            color='neutral.n0'
          >
            Is there a will?
          </Typography>
          <Grid container maxWidth='384px' onChange={onChangeDisplayWill}>
            <Grid item xs={6} className='addArtist-artistWill-yes'>
              <RadioButton id='artistWill-yes'
                name='HasWill'
                value='yes'
                label='Yes'
                checked={HasWill ? true : false}
              />
            </Grid>
            <Grid item xs={6} className='addArtist-artistWill-no'>
              <RadioButton id='artistWill-no'
                name='HasWill'
                value='no'
                label='No'
                checked={!HasWill ? true : false}
              />
            </Grid>
          </Grid>
          {/* Deceased session */}
          <Stack direction='column'>

          </Stack>
          {/* Artist will box when user choose yes radio */}
          {HasWill ?
            <Stack className='addArtist-willBox'
              spacing='24px'
            >
              <InputDatePicker id='DateOfWill'
                label='Date of will if known'
                onChange={(e: string) => onChange('DateOfWill', e)}
              />
              <SamTextField id='Will'
                label='Where is the will stored?'
                fullWidth
                onChange={(e: string) => onChange('Will', e)}
              />
              <OutlinedButton className='addArtist-will-addNotebtn'
                label='Add Note'
                startIcon={<PlusIcon />}
                sx={{ 
                  width: isMobile ? '100%' : 'fit-content',
                  display: !hasWillNote ? 'flex' : 'none', 
                }}
                onClick={() => {
                  setHasWillNote(true)
                  onChange('LegalNote', willNote)
                }}
              />
              <Stack direction='column'
                spacing='8px'
                display={hasWillNote ? 'block' : 'none'}
                className='addArtist-will-note'
                maxWidth='356px'
              >
                <SamTextField id='LegalNote'
                  label='Note'
                  fullWidth
                  value={personalInfo?.LegalNote}
                  onChange={(e: string) => {
                    onChange('LegalNote', e)
                    setWillNote(e)
                  }}
                />
                <GhostButton className='addArtist-contact-removeNotebtn' 
                  label='Delete Note' 
                  startIcon={<DeleteIcon />} 
                  sx={{ 
                    width: 'fit-content',
                  }} 
                  onClick={() => {
                    setHasWillNote(false)
                    onChange('LegalNote', '')
                  }}
                />
              </Stack>
            </Stack>
            : null
          }
          {/* Disabilities session */}
          <Typography variant='body1' 
            mb='8px' mt='32px'
            fontWeight={700}
            color='neutral.n0'
          >
            Does the artist have any disabilities?
          </Typography>
          <Grid container maxWidth='384px' onChange={onChangeDisabilities}>
            <Grid item xs={6} className='addArtist-disabilities-yes'>
              <RadioButton id='disabilities-yes'
                name='Disability'
                value='yes'
                label='Yes'
                checked={Disability ? true : false}
              />
            </Grid>
            <Grid item xs={6} className='addArtist-disabilities-no'>
              <RadioButton id='disabilities-no'
                name='Disability'
                value='no'
                label='No'
                checked={!Disability ? true : false}
              />
            </Grid>
          </Grid>
        </CardAccordionDetails>
      </CardAccordion>
    </ArtistLegalStyled>
  )
}

export default Legal;
