import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { GhostButton } from '@/components/buttons/SamButtons';
import { SettingsIcon } from '@/components/icons/Icons';
import { OtherStyled } from '@/components/artist-form/cultural-info/style';
import { TForm } from '@/components/artist-form/cultural-info/type';
import { SWITCH_LABEL } from '@/constants';
import DropdownWithSearch from '@/components/dropdown/DropdownWithSearch';
import { TDropdownItemProps } from '@/components/dropdown/type';
import axios from 'axios';
import Box from '@mui/material/Box';
import AddFieldDialog from '@/components/dialog/AddFieldDialog';
import ArtistContext from '@/components/context/ArtistContext';
import { parseCookies } from 'nookies';
import { generateNewToken } from '@/utils/generateNewToken';
import { environment } from '@/constants/environment';

const Other = ({onChange}: TForm) => {
  const [accessToken, setAccessToken] = useState(parseCookies().accessToken);

  // useContext
  const { culturalInfo } = useContext(ArtistContext);

  // State for searching loading
  const [searchingLoading, setSearchingLoading] = useState<boolean>(false);
  
  const [isPublic, setIsPublic] = useState<boolean>(culturalInfo?.IsOtherPublic ?? true);

  // State for dreaming controlling
  const [dreamingList, setDreamingList] = useState<TDropdownItemProps[]>((culturalInfo?.DreamingIds && culturalInfo?.DreamingLabel) ? 
  [{
    Id: culturalInfo.DreamingIds,
    Description: culturalInfo.DreamingLabel,
  }] 
  : []);
  const [showDreamingDialog, setShowDreamingDialog] = useState<boolean>(false);
  
  // State for dancing controlling
  const [dancingList, setDancingList] = useState<TDropdownItemProps[]>((culturalInfo?.DanceIds && culturalInfo?.DanceLabel) ? 
  [{
    Id: culturalInfo.DanceIds,
    Description: culturalInfo.DanceLabel,
  }] 
  : []);
  const [showDancingDialog, setShowDancingDialog] = useState<boolean>(false);
  
  // State for clan/tribe controlling
  const [clanList, setClanList] = useState<TDropdownItemProps[]>((culturalInfo != null && culturalInfo.Clan && culturalInfo.ClanLabel) ? 
  [{
    Id: culturalInfo.Clan,
    Description: culturalInfo.ClanLabel,
  }] 
  : []);
  const [showClanDialog, setShowClanDialog] = useState<boolean>(false);

  // State for wind controlling
  const [windList, setWindList] = useState<TDropdownItemProps[]>((culturalInfo?.WindsIds && culturalInfo?.WindsLabel) ? 
  [{
    Id: culturalInfo.WindsIds,
    Description: culturalInfo.WindsLabel,
  }] 
  : []);
  const [showWindDialog, setShowWindDialog] = useState<boolean>(false);

  // State for moiety controlling
  const [moietyList, setMoietyList] = useState<TDropdownItemProps[]>((culturalInfo != null && culturalInfo.MoietyIds && culturalInfo.MoietyLabel) ? 
  [{
    Id: culturalInfo.MoietyIds,
    Description: culturalInfo.MoietyLabel,
  }] 
  : []);
  const [showMoietyDialog, setShowMoietyDialog] = useState<boolean>(false);

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsOtherPublic', newValue);
  }

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + accessToken,
  }

  // Handle search field for country (single selection)
  const searchModelSingleSelection = async (newValue: string, model: string, onChangeField: string,
    setList: Dispatch<SetStateAction<TDropdownItemProps[]>>) => {
    // Fetch API
    setSearchingLoading(true);
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

  // Handle add new dreaming to list
  // New country is added to the dropdown
  const handleAddDreamingToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Dreaming',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setDreamingList([...dreamingList, { Id: newData.Id, Description: newData.Description }])
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
    }
  }

  // Handle add new dance to list
  // New country is added to the dropdown
  const handleAddDanceToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Dance',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setDancingList([...dancingList, { Id: newData.Id, Description: newData.Description }])
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
    }
  }

  // Handle add new clan to list
  // New country is added to the dropdown
  const handleAddClanToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Clan',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setClanList([...clanList, { Id: newData.Id, Description: newData.Description }])
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
    }
  }

  // Handle add new winds to list
  // New country is added to the dropdown
  const handleAddWindToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Winds',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setWindList([...windList, { Id: newData.Id, Description: newData.Description }])
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
    }
  }

  // Handle add new moiety to list
  // New country is added to the dropdown
  const handleAddMoietyToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Moiety',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setMoietyList([...moietyList, { Id: newData.Id, Description: newData.Description }])
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
    }
  }

  // initialise field when artist is available
  useEffect(() => {
    if(culturalInfo) {
      onChange('IsOtherPublic', culturalInfo.IsOtherPublic ?? true);
      onChange('DreamingIds', culturalInfo.DreamingIds ?? []);
      onChange('DanceIds', culturalInfo.DanceIds ?? []);
      onChange('Clan', culturalInfo.Clan ?? '');
      onChange('MoietyIds', culturalInfo.MoietyIds ?? []);
      onChange('WindsIds', culturalInfo.WindsIds ?? []);
      onChange('ClanLabel', culturalInfo.ClanLabel ?? '');
      onChange('MoietyLabel', culturalInfo.MoietyLabel ?? '');
      onChange('DreamingLabel', culturalInfo.DreamingLabel ?? '');
      onChange('DanceLabel', culturalInfo.DanceLabel ?? '');
      onChange('WindsLabel', culturalInfo.WindsLabel ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [culturalInfo]);

  return (
    <OtherStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Other
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-other-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                {SWITCH_LABEL}
              </Typography>
              <Switch id='addArtist-other-switch' 
                name='addArtist-other-switch' 
                value='public'
                checked={isPublic}
                onChange={handlePublicSwitcher} />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column' 
            rowGap='32px'
            maxWidth='600px'
          >
            {/* Dreaming field */}
            <Box>
              <DropdownWithSearch id='Dreaming'
                label='Dreaming'
                initialOptions={dreamingList} 
                editable fullWidth 
                handleAddBtn={() => {setShowDreamingDialog(true)}}
                value={culturalInfo?.DreamingLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('DreamingLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('DreamingIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('DreamingIds', []);
                  searchModelSingleSelection(e, 'Dreaming', 'DreamingIds', setDreamingList)
                }}
              />
              <Box display={showDreamingDialog ? 'block' : 'none'}>
                <AddFieldDialog id='newDreaming'
                  title='Add a dreaming'
                  label='Your dreaming'
                  onAddField={handleAddDreamingToList}
                  onCloseEvt={() => { setShowDreamingDialog(false) }}
                />
              </Box>
            </Box>
            {/* Dance field */}
            <Box>
              <DropdownWithSearch id='Dance'
                label='Dance'
                initialOptions={dancingList} 
                editable fullWidth 
                handleAddBtn={() => {setShowDancingDialog(true)}}
                value={culturalInfo?.DanceLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('DanceLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('DanceIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('DanceIds', []);
                  searchModelSingleSelection(e, 'Dance', 'DanceIds', setDancingList)
                }}
              />
              <Box display={showDancingDialog ? 'block' : 'none'}>
                <AddFieldDialog id='newDance'
                  title='Add a dance'
                  label='Your dance'
                  onAddField={handleAddDanceToList}
                  onCloseEvt={() => { setShowDancingDialog(false) }}
                />
              </Box>
            </Box>
            {/* Clan/Tribe field */}
            <DropdownWithSearch id='Clan'
              label='Clan/Tribe'
              initialOptions={clanList}
              editable fullWidth
              handleAddBtn={() => { setShowClanDialog(true) }}
              value={culturalInfo?.ClanLabel}
              isLoading={searchingLoading}
              onLabelChange={(e: string | number) => {
                onChange('ClanLabel', e)
              }}
              onChange={(e: string | number) => {
                onChange('Clan', e.toString())
              }}
              onSearch={(e) => {
                onChange('Clan', []);
                searchModelSingleSelection(e, 'Clan', 'Clan', setClanList)
              }}
            />
            <Box display={showClanDialog ? 'block' : 'none'}>
              <AddFieldDialog id='newClan'
                title='Add a clan'
                label='Your clan'
                onAddField={handleAddClanToList}
                onCloseEvt={() => { setShowClanDialog(false) }}
              />
            </Box>
            {/* Winds field */}
            <Box>
              <DropdownWithSearch id='Winds'
                label='Winds'
                initialOptions={windList} 
                editable fullWidth 
                handleAddBtn={() => {setShowWindDialog(true)}}
                value={culturalInfo?.WindsLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('WindsLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('WindsIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('WindsIds', []);
                  searchModelSingleSelection(e, 'Winds', 'WindsIds', setWindList)
                }}
              />
              <Box display={showWindDialog ? 'block' : 'none'}>
                <AddFieldDialog id='newWind'
                  title='Add a wind'
                  label='Your wind'
                  onAddField={handleAddWindToList}
                  onCloseEvt={() => { setShowWindDialog(false) }}
                />
              </Box>
            </Box>
            {/* Moiety field */}
            <DropdownWithSearch id='Moiety'
              label='Moiety'
              initialOptions={moietyList}
              editable fullWidth
              handleAddBtn={() => { setShowMoietyDialog(true) }}
              value={culturalInfo?.MoietyLabel}
              isLoading={searchingLoading}
              onLabelChange={(e: string | number) => {
                onChange('MoietyLabel', e)
              }}
              onChange={(e: string | number) => {
                onChange('MoietyIds', [e.toString()])
              }}
              onSearch={(e) => {
                onChange('MoietyIds', []);
                searchModelSingleSelection(e, 'Moiety', 'MoietyIds', setMoietyList)
              }}
            />
            <Box display={showMoietyDialog ? 'block' : 'none'}>
              <AddFieldDialog id='newMoiety'
                title='Add a moiety'
                label='Your moiety'
                onAddField={handleAddMoietyToList}
                onCloseEvt={() => { setShowMoietyDialog(false) }}
              />
            </Box>
            {/* Contact to update list button */}
            <GhostButton className='addArtist-other-contact' 
              label='Update lists' 
              startIcon={<SettingsIcon />} 
              sx={{ width: 'fit-content' }} 
            />
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
    </OtherStyled>
  )
}

export default Other;
