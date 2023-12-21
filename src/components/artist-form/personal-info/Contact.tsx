import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { SamTextField } from '@/components/text-field/TextField';
import { GhostButton, OutlinedButton } from '@/components/buttons/SamButtons';
import { MailIcon, PlusIcon } from '@/components/icons/Icons';
import { ArtistContactStyled } from '@/components/artist-form/personal-info/style';
import { TForm } from '@/components/artist-form/personal-info/type';
import ArtistContext from '@/components/context/ArtistContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/* Component of contact */
const Contact = ({onChange}: TForm) => {
  // useContext
  const { personalInfo, errors, setErrors } = useContext(ArtistContext);

  // State for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // state for form controlling
  const [hasContactNote, setHasContactNote] = useState<boolean>((personalInfo != null && personalInfo.ContactNote != '') ? true : false);
  const [contactNote, setContactNote] = useState<string>('');

  // Initialise fields when artist is available
  useEffect(() => {
    if(personalInfo) {
      onChange('Phone', personalInfo.Phone ?? '');
      onChange('EmailAddress', personalInfo.EmailAddress ?? '');
      onChange('ContactNote', personalInfo.ContactNote ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalInfo]);

  return (
    <ArtistContactStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Typography variant='h4' 
            color='neutral.n0'
          >
            Contact
          </Typography>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column' 
            rowGap='32px'
            maxWidth='284px'
          >
            {/* Phone number field */}
            <SamTextField id='Phone' 
              label='Phone Number' 
              value={personalInfo?.Phone}
              fullWidth 
              isPhone
              errorMessage={errors?.Phone}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                Phone: e
              }))}
              onChange={(e: string) => onChange('Phone', e)}
            />
            {/* email field */}
            <SamTextField id='EmailAddress' 
              label='Email'
              value={personalInfo?.EmailAddress} 
              type='email'
              fullWidth 
              isEmail
              errorMessage={errors?.EmailAddress}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                EmailAddress: e
              }))}
              onChange={(e: string) => onChange('EmailAddress', e)}
            />
            {/* Add note button */}
            <OutlinedButton className='addArtist-contact-addNotebtn' 
              label='Add Note' 
              startIcon={<PlusIcon />} 
              sx={{ 
                width: isMobile ? '100%' : 'fit-content',
                display: !hasContactNote ? 'flex' : 'none',
              }} 
              onClick={() => {
                setHasContactNote(true)
                onChange('ContactNote', contactNote)
              }}
            />
            <Stack direction='column'
              spacing='8px'
              display={hasContactNote ? 'block' : 'none'}
              className='addArtist-contact-note'
            >
              <SamTextField id='ContactNote'
                label='Note'
                value={personalInfo?.ContactNote}
                fullWidth
                onChange={(e: string) => {
                  onChange('ContactNote', e)
                  setContactNote(e)
                }}
              />
              <GhostButton className='addArtist-contact-removeNotebtn' 
                label='Delete Note' 
                startIcon={<MailIcon />} 
                sx={{ 
                  width: 'fit-content',
                }} 
                onClick={() => {
                  setHasContactNote(false)
                  onChange('ContactNote', '')
                }}
              />
            </Stack>
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
    </ArtistContactStyled>
  )
}

export default Contact;
