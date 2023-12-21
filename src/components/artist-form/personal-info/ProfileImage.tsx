import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { ProfileImageStyled } from '@/components/artist-form/personal-info/style';
// import MediaUpload from '@/components/media-upload/MediaUpload';
import ImageUploader from '@/components/media-upload/ImageUploader';
import { TForm } from '@/components/artist-form/personal-info/type';
import { SWITCH_LABEL } from '@/constants';
import ArtistContext from '@/components/context/ArtistContext';

const ProfileImage = ({onChange, uploadProgress}: TForm) => {
  // useContext
  const { personalInfo } = useContext(ArtistContext);

  // state for form controlling
  const [isPublic, setIsPublic] = useState<boolean>(personalInfo?.IsProfileImagePublic ?? true);

  const handleFileUploadChange = (file: File) => {
    onChange('ProfileImage', file)
  }

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsProfileImagePublic', newValue);
  }

  useEffect(() => {
    if(personalInfo) {
      onChange('IsProfileImagePublic', personalInfo.IsProfileImagePublic ?? true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalInfo]);

  return (
    <ProfileImageStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Profile Image
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-profileImage-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                {SWITCH_LABEL}
              </Typography>
              <Switch id='addArtist-profileImage-switch' 
                name='addArtist-profileImage-switch' 
                value='public'
                checked={isPublic}
                onChange={handlePublicSwitcher} />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          {/* Image upload session */}
          {/* <MediaUpload /> */}
          <ImageUploader onChange={handleFileUploadChange} uploadProgress={uploadProgress} />
        </CardAccordionDetails>
      </CardAccordion>

    </ProfileImageStyled>
  )
}

export default ProfileImage;
