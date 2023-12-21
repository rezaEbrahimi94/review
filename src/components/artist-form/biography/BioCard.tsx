import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { TickInCircleIcon } from '@/components/icons/Icons';
import { BioCardStyled } from './style';
import { SamTextArea } from '@/components/text-area/TextArea';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TForm } from './type';
import { SWITCH_LABEL } from '@/constants';
import ArtistContext from '@/components/context/ArtistContext';

const BioCard = ({onChange}: TForm) => {
  // useContext
  const { biography } = useContext(ArtistContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isPublic, setIsPublic] = useState<boolean>(biography?.IsBiographyPublic ?? true);

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsBiographyPublic', newValue)
  }

  useEffect(() => {
    if(biography) {
      onChange('IsBiographyPublic', biography.IsBiographyPublic ?? true);
      onChange('Biography', biography.Biography ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biography]);

  return (
    <BioCardStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Biography
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-bioCard-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                {SWITCH_LABEL}
              </Typography>
              <Switch id='addArtist-bioCard-switch' 
                name='addArtist-locations-switch' 
                value='public'
                onChange={handlePublicSwitcher} 
                checked={isPublic}  
              />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Grid container spacing='32px'>
            {/* Biography text area description (mobile) */}
            <Grid item xs={12} 
              display={isMobile ? 'block' : 'none'}
            >
              <Stack direction='column' 
                spacing='12px'
              >
                <Typography variant='body2'
                  fontWeight={700}
                  color='neutral.n0'
                  mb='4px'
                >
                  Consider including the below points:
                </Typography>
                <Stack direction='row'
                  spacing='12px'
                  alignItems='center'
                >
                  <TickInCircleIcon className='addArtist-bioCard-descriptionIcon' />
                  <Typography variant='body2'
                    color='neutral.n0'
                  >
                    When did the artist start making art? 
                  </Typography>
                </Stack>
                <Stack direction='row'
                  spacing='12px'
                  alignItems='center'
                >
                  <TickInCircleIcon className='addArtist-bioCard-descriptionIcon' />
                  <Typography variant='body2'
                    color='neutral.n0'
                  >
                    How do they make their art?
                  </Typography>
                </Stack>
                <Stack direction='row'
                  spacing='12px'
                  alignItems='center'
                >
                  <TickInCircleIcon className='addArtist-bioCard-descriptionIcon' />
                  <Typography variant='body2'
                    color='neutral.n0'
                  >
                    What has been a career highlight?
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Text area for biography */}
            <Grid item xs={12} md={7} lg={7}>
              <SamTextArea id='biography'
                fullWidth
                rows={7}
                value={biography?.Biography}
                onChange={(e: string) => onChange('Biography', e)}
              />
            </Grid>
            {/* Biography text area description (desktop & tablet) */}
            <Grid item xs={12} md={5} lg={5} 
              display={!isMobile ? 'block' : 'none'}
            >
              <Stack direction='column' 
                spacing='12px'
              >
                <Typography variant='body2'
                  fontWeight={700}
                  color='neutral.n0'
                  mb='4px'
                >
                  Consider including the below points:
                </Typography>
                <Stack direction='row'
                  spacing='12px'
                  alignItems='center'
                >
                  <TickInCircleIcon className='addArtist-bioCard-descriptionIcon' />
                  <Typography variant='body2'
                    color='neutral.n0'
                  >
                    When did the artist start making artwork?
                  </Typography>
                </Stack>
                <Stack direction='row'
                  spacing='12px'
                  alignItems='center'
                >
                  <TickInCircleIcon className='addArtist-bioCard-descriptionIcon' />
                  <Typography variant='body2'
                    color='neutral.n0'
                  >
                    How did the artist make the artwork?
                  </Typography>
                </Stack>
                <Stack direction='row'
                  spacing='12px'
                  alignItems='center'
                >
                  <TickInCircleIcon className='addArtist-bioCard-descriptionIcon' />
                  <Typography variant='body2'
                    color='neutral.n0'
                  >
                    What has been a career highlight?
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardAccordionDetails>
      </CardAccordion>
    </BioCardStyled>
  )
}

export default BioCard;
