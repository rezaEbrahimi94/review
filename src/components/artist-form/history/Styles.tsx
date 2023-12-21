import React, { useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { StylesStyled } from '@/components/artist-form/history/style';
import { SamTextArea } from '@/components/text-area/TextArea';
import { TForm } from './type';
import Dropdown from '@/components/dropdown/Dropdown';
import Tag from '@/components/tags/Tag';

const Styles = ({onChange}: TForm) => {
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [Mediums, setMediums] = useState<string[]>([]);

  // Handle choose multiple language
  // New tag is created below the dropdown
  const handleAddMedium = (newValue: string) => {
    let addFlag = true;
    for(let i = 0; i < Mediums.length; i++ ) {
      if(Mediums[i] == newValue) {
        addFlag = false;
        break;
      }
    }
    if(addFlag) {
      const newArray = [...Mediums, newValue]
      setMediums(newArray);
      onChange('Mediums', newArray)
    }
  }

  // Handle remove selected language
  const handleRemoveLanguage = (newValue: string) => {
    const newArray = Mediums.filter(e => e !== newValue);
    setMediums(newArray); 
    onChange('language', newArray)
  }

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    // onChange('IsProfileImagePublic', newValue);
  }

  return (
    <StylesStyled>
      <CardAccordion>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Styles
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
          <Stack direction='column'
            maxWidth='600px'
            spacing='32px'
          >
            {/* Language field */}
            <Dropdown id='Mediums' 
              label='Mediums'
              initialOptions={[]} 
              fullWidth 
              onChange={(e) => handleAddMedium(e.toString())}
              editable
            />
            <Stack direction='row'
              spacing='16px'
              display={Mediums.length > 0 ? 'flex' : 'none'}
            >
              {Mediums.map((item: string) => {
                return (
                  <Tag key={item}
                    type='selected' 
                    removable={true} 
                    label={item}
                    onRemove={() => handleRemoveLanguage(item)}
                  />
                )
              })}
            </Stack>
            <SamTextArea id='themes' 
              label='Themes' 
              helpText='You could use a comma to separate different themes'  
              fullWidth
            />
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>

    </StylesStyled>
  )
}

export default Styles;
