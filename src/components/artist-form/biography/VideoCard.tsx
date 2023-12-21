import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { VideoCardStyled } from './style';
import { SamTextField } from '@/components/text-field/TextField';
import { SWITCH_LABEL } from '@/constants';
import { TForm } from './type';
import ArtistContext from '@/components/context/ArtistContext';

const VideoCard = ({onChange}: TForm) => {
  // useContext
  const { biography, setErrors, errors } = useContext(ArtistContext);
  
  const [isPublic, setIsPublic] = useState<boolean>(biography?.IsVideoPublic ?? true);

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsVideoPublic', newValue)
  }

  useEffect(() => {
    if(biography) {
      onChange('IsVideoPublic', biography.IsVideoPublic ?? true);
      onChange('VideoTitle', biography.VideoTitle ?? '');
      onChange('VideoUrl', biography.VideoUrl ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biography]);

  return (
    <VideoCardStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Video
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-locations-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                {SWITCH_LABEL}
              </Typography>
              <Switch id='addArtist-locations-switch' 
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
          <Stack direction='column' 
            spacing='32px'
            maxWidth='600px'
          >
            {/* Video url field */}
            <SamTextField id='VideoUrl' 
              label='URL' 
              isLink
              fullWidth
              value={biography?.VideoUrl}
              errorMessage={errors?.VideoUrl}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                VideoUrl: e
              }))}
              onChange={(e: string) => onChange('VideoUrl', e)}
            />
            {/* Video url field */}
            <SamTextField id='VideoTitle' 
              label='Title' 
              fullWidth 
              value={biography?.VideoTitle}
              min={0} max={30}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                VideoTitle: e
              }))}
              onChange={(e: string) => onChange('VideoTitle', e)}
            />
            {/* Disable for now */}
            {/* <OutlinedButton className='addArtist-video-addNewbtn' 
              label='Add New' 
              startIcon={<PlusIcon />} 
              sx={{ width: 'fit-content' }} 
            /> */}
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
    </VideoCardStyled>
  )
}

export default VideoCard;
