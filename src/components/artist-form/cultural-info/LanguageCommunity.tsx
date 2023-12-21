import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { GhostButton } from '@/components/buttons/SamButtons';
import { MailIcon } from '@/components/icons/Icons';
import { LanguageCommunityStyled } from '@/components/artist-form/cultural-info/style';
import { TForm } from '@/components/artist-form/cultural-info/type';
import Tag from '@/components/tags/Tag';
import DropdownWithSearch from '@/components/dropdown/DropdownWithSearch';
import axios from 'axios';
import { TDropdownItemProps } from '@/components/dropdown/type';
import { SWITCH_LABEL } from '@/constants';
import Box from '@mui/material/Box';
import ArtistContext from '@/components/context/ArtistContext';
import { parseCookies } from 'nookies';
import { generateNewToken } from '@/utils/generateNewToken';
import { environment } from '@/constants/environment';

const LanguageCommunity = ({onChange}: TForm) => {
  const [accessToken, setAccessToken] = useState(parseCookies().accessToken);
  
  // useContext
  const { culturalInfo } = useContext(ArtistContext);

  // State for searching loading
  const [searchingLoading, setSearchingLoading] = useState<boolean>(false);

  const [isPublic, setIsPublic] = useState<boolean>(culturalInfo?.IsLanguagePublic ?? true);
  const [language, setLanguage] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<TDropdownItemProps[]>(culturalInfo?.LanguageArr ?? []);
  const [languageList, setLanguageList] = useState<TDropdownItemProps[]>([]);
  const [communnityList, setCommunnityList] = useState<TDropdownItemProps[]>((culturalInfo?.CommunityIds && culturalInfo?.CommunityLabel) ? 
  [{
    Id: culturalInfo.CommunityIds,
    Description: culturalInfo.CommunityLabel,
  }] 
  : []);

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + accessToken,
  }

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsLanguagePublic', newValue);
  }

  // Handle choose multiple language
  // New tag is created below the dropdown
  const handleAddLanguage = (newValue: string | number, newDescription: string | number) => {
    let addFlag = true;
    for(let i = 0; i < language.length; i++) {
      if(language[i] == newValue) {
        addFlag = false;
      }
    }
    if(addFlag) {
      const newArray = [...language, newValue.toString()]
      const newTag = {
        Id: newValue,
        Description: newDescription,
      }
      const newTagsArray = [...selectedLanguage, newTag]
      setLanguage(newArray);
      setSelectedLanguage(newTagsArray)
      onChange('LanguageIds', newArray);
      onChange('LanguageArr', newTagsArray);
    }
  }

  // Handle search field for language
  const searchLanguage = async (newValue: string) => {
    setSearchingLoading(true);
    // Fetch API
    const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/search-record`;
    await axios.post(
      DATA_SOURCE_URL,
      {
        'Model': 'Language',
        'Description': newValue
      }, 
      {
        headers: header
      }
    )
    .then((res) => {  // res
      setLanguageList(res.data)
    })
    .catch(err => {
      const error = err.response.data.message
      if(error) {
        console.log(error);
        if(error == 'Could not validate token.' ||
          error == 'Your session has expired. Please log in again.') {
          generateNewToken();
          console.log(parseCookies().accessToken);
          setAccessToken(parseCookies().accessToken);
        }
      } else {
        console.log(err)
      }
    })
    setSearchingLoading(false);
  }

  // Handle remove selected language
  const handleRemoveLanguage = (newValue: string) => {
    const newArray = language.filter(e => e !== newValue);
    let newSelectedLanguageArr = null;
    for(let i = 0; i < selectedLanguage.length; i++) {
      if(selectedLanguage[i].Id != newValue) {
        if(newSelectedLanguageArr == null) {
          newSelectedLanguageArr = [selectedLanguage[i]]
        } else {
          newSelectedLanguageArr = [...newSelectedLanguageArr, selectedLanguage[i]]
        }
      }
    }
    if(newSelectedLanguageArr != null) {
      setSelectedLanguage(newSelectedLanguageArr);
      onChange('LanguageArr', newSelectedLanguageArr);
    } else {
      setSelectedLanguage([]);
      onChange('LanguageArr', []);
    }
    setLanguage(newArray); 
    onChange('LanguageIds', newArray)
  }

  // Handle search field for country (single selection)
  const searchModelSingleSelection = async (newValue: string, model: string, onChangeField: string,
    setList: Dispatch<SetStateAction<TDropdownItemProps[]>>) => {
      setSearchingLoading(true);
    // Fetch API
    const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/search-record`;
    await axios.post(
      DATA_SOURCE_URL,
      {
        'Model': model,
        'Description': newValue
      },
      {
        headers: header
      }
    )
      .then((res) => {
        setList(res.data)
        if (res.data.length < 1) {
          onChange(onChangeField, null)
        }
      })
      .catch(err => {
        const error = err.response.data.message
      if(error) {
        console.log(error);
        if(error == 'Could not validate token.' ||
          error == 'Your session has expired. Please log in again.') {
          generateNewToken();
          console.log(parseCookies().accessToken);
          setAccessToken(parseCookies().accessToken);
        }
        } else {
          console.log(err)
        }
      })
      setSearchingLoading(false);
  }

  // initialise field when artist is available
  useEffect(() => {
    if(culturalInfo) {
      onChange('LanguageIds', culturalInfo.LanguageIds ?? []);
      onChange('CommunityIds', culturalInfo.CommunityIds ?? []);
      onChange('IsLanguagePublic', culturalInfo.IsLanguagePublic ?? true);
      onChange('LanguageArr', culturalInfo.LanguageArr ?? []);
      onChange('CommunityLabel', culturalInfo.CommunityLabel ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [culturalInfo]);

  return (
    <LanguageCommunityStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Language & Community
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-languageCommunity-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                {SWITCH_LABEL}
              </Typography>
              <Switch id='addArtist-languageCommunity-switch' 
                name='addArtist-languageCommunity-switch' 
                value='public'
                checked={isPublic}
                onChange={handlePublicSwitcher}
              />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column' 
            rowGap='32px'
            maxWidth='600px'
          >
            {/* Language field */}
            <Box>
              <DropdownWithSearch id='Language'
                label='Language'
                initialOptions={languageList} 
                isLoading={searchingLoading}
                fullWidth 
                onChangeWithLabel={handleAddLanguage}
                onSearch={searchLanguage}
                helpText='This is a global list that is shared by all art centres'
              />
              <Stack 
                direction='row'
                marginTop='16px'
                spacing='16px'
                useFlexGap 
                flexWrap='wrap'
                display={selectedLanguage.length > 0 ? 'flex' : 'none'}
              >
                {selectedLanguage.map((item: TDropdownItemProps) => {
                  return (
                    <Tag key={item.Id}
                      type='selected' 
                      removable={true} 
                      label={item.Description.toString()}
                      onRemove={() => handleRemoveLanguage(item.Id.toString())}
                    />
                  )
                })}
              </Stack>
            </Box>
            {/* Community field */}
            <Box>
              <DropdownWithSearch id='Community'
                label='Community'
                initialOptions={communnityList} 
                fullWidth 
                helpText='This is a global list that is shared by all art centres'
                value={culturalInfo?.CommunityLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('CommunityLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('CommunityIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('CommunityIds', []);
                  searchModelSingleSelection(e, 'Community', 'CommunityIds', setCommunnityList)
                }}
              />
            </Box>
            {/* Contact button */}
            <GhostButton className='addArtist-languageCommunity-contact' 
              label='Contact Desart to update the list' 
              startIcon={<MailIcon />} 
              sx={{ width: 'fit-content' }} 
            />
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
    </LanguageCommunityStyled>
  )
}

export default LanguageCommunity;