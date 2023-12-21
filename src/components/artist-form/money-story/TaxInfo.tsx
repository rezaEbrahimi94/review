import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { SamTextField } from '@/components/text-field/TextField';
import Grid from '@mui/material/Grid';
import { TaxInfoStyled } from '@/components/artist-form/money-story/style';
import Box from '@mui/material/Box';
import { RadioButton } from '@/components/radio-button/RadioButton';
import { SamAlert } from '@/components/alert-box/AlertBox';
import { TForm } from './type';
import { GST_ALERT, HAS_ABN_TOOLTIP, REGISTERED_GST_TOOLTIP } from '@/constants';
import { SamTooltip } from '@/components/tooltips/Tooltips';
import ArtistContext from '@/components/context/ArtistContext';

const TaxInfo = ({onChange, errorsEndpoint}: TForm) => {
  // useContext
  const { moneyStory, setErrors } = useContext(ArtistContext);
  
  const [hasABN, setHasABN] = useState<boolean>(moneyStory?.HasABN ?? false);
  const [registeredABN, setRegisteredABN] = useState<boolean>(moneyStory?.RegisteredForGST ?? false);

  // Handle radio change for has ABN
  const onChangeHasABNValue = () => {
    const newValue = (document.querySelector('input[name=hasABN]:checked') as HTMLInputElement).value;
    setHasABN(newValue == 'yes' ? true : false);
    onChange('HasABN', newValue == 'yes' ? true : false);
    if (newValue == 'no') {
      onChange('ABN', '');
    }
  }

  // Handle radio change for registered ABN
  const onChangeRegisteredABNValue = () => {
    const newValue = (document.querySelector('input[name=registeredABN]:checked') as HTMLInputElement).value;
    setRegisteredABN(newValue == 'yes' ? true : false);
    onChange('RegisteredForGST', newValue == 'yes' ? true : false);
  }

  useEffect(() => {
    if(moneyStory) {
      onChange('HasABN', moneyStory.HasABN ?? false);
      onChange('ABN', moneyStory.ABN ?? '');
      onChange('RegisteredForGST', moneyStory.RegisteredForGST ?? false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moneyStory]);

  return (
    <TaxInfoStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column'
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4'
              color='neutral.n0'
            >
              Tax Information
            </Typography>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column'
            spacing='8px'
          >
            <Stack direction='row'
              spacing='8px'
            >
              <Typography variant='body1' mb='8px'
                fontWeight={700}
                color='neutral.n0'
              >
                Does the artist have an ABN?
              </Typography>
              <SamTooltip id='addArtist-hasABN-tooltip'
                content={HAS_ABN_TOOLTIP}
              />
            </Stack>
            <Grid container maxWidth='384px' onChange={onChangeHasABNValue}>
              {/* has ABN radio 
                If user choose yes then display ABN info box
              */}
              <Grid item xs={6} className='addArtist-hasABN-yes'>
                <RadioButton id='hasABN-yes' 
                  name='hasABN' 
                  value='yes' 
                  label='Yes' 
                  checked={hasABN ? true : false}
                />
              </Grid>
              <Grid item xs={6} className='addArtist-hasABN-no'>
                <RadioButton id='hasABN-no' 
                  name='hasABN' 
                  value='no' 
                  label='No'
                  checked={!hasABN ? true : false} 
                />
              </Grid>
            </Grid>
          </Stack>
        {/* Artist deceased box when user choose yes radio */}
        {hasABN ? 
            <Stack className='addArtist-hasABNBox'
              direction='column'
              spacing='24px'
              maxWidth='600px'
              padding='24px'
            >
              {/* ABN textfield */}
              <Box className='addArtist-abnContainter'>
                <SamTextField id='ABN' 
                  label='ABN (Australian Business Number)' 
                  fullWidth 
                  value={moneyStory?.ABN}
                  onChange={(e: string) => onChange('ABN', e)}
                  errorMessage={errorsEndpoint?.ABN}
                  setFormError={(e: string) => setErrors(prevState => ({
                    ...prevState,
                    ABN: e
                  }))}
                  min={0} max={20}
                />
              </Box>
              <Box>
                <Stack direction='row'
                  spacing='8px'
                  alignItems='center'
                  mb='8px'
                >
                  <Typography variant='body1' mb='8px'
                    color='neutral.n0'
                  >
                    Is the artist registered for GST or required to be registered for GST?
                  </Typography>
                  <SamTooltip id='addArtist-registeredABN-tooltip'
                    content={REGISTERED_GST_TOOLTIP}
                  />
                </Stack>
                <Grid container   
                  maxWidth='384px' 
                  mb='24px'
                  onChange={onChangeRegisteredABNValue}>
                  {/* has registered ABN radio 
                    If user choose yes then display info banner
                  */}
                  <Grid item xs={6} className='addArtist-registeredABN-yes'>
                    <RadioButton id='registeredABN-yes' 
                      name='registeredABN' 
                      value='yes' 
                      label='Yes' 
                      checked={registeredABN ? true : false}
                    />
                  </Grid>
                  <Grid item xs={6} className='addArtist-registeredABN-no'>
                    <RadioButton id='registeredABN-no' 
                      name='registeredABN' 
                      value='no' 
                      label='No'
                      checked={!registeredABN ? true : false} 
                    />
                  </Grid>
                </Grid>
                {registeredABN ? 
                  <SamAlert severity='info'
                    variant='outlined'
                    title='GST applied'
                    description={GST_ALERT}         
                  />
                  : null
                }
              </Box>
            </Stack>
            : null
          }
        </CardAccordionDetails>
      </CardAccordion>
    </TaxInfoStyled>
  )
}

export default TaxInfo;