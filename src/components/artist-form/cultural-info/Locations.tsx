import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { GhostButton } from '@/components/buttons/SamButtons';
import { SettingsIcon } from '@/components/icons/Icons';
import { LocationStyled } from '@/components/artist-form/cultural-info/style';
import { TForm } from '@/components/artist-form/cultural-info/type';
import Box from '@mui/material/Box';
import AddFieldDialog from '@/components/dialog/AddFieldDialog';
import { SWITCH_LABEL } from '@/constants';
import DropdownWithSearch from '@/components/dropdown/DropdownWithSearch';
import { TDropdownItemProps } from '@/components/dropdown/type';
import axios from 'axios';
import ArtistContext from '@/components/context/ArtistContext';
import { parseCookies } from 'nookies';
import { generateNewToken } from '@/utils/generateNewToken';
import { environment } from '@/constants/environment';

const Locations = ({ onChange }: TForm) => {
  const [accessToken, setAccessToken] = useState(parseCookies().accessToken);

  // State for searching loading
  const [searchingLoading, setSearchingLoading] = useState<boolean>(false);
  
  // useContext
  const { culturalInfo } = useContext(ArtistContext);
  
  // State for display fields
  const [isPublic, setIsPublic] = useState<boolean>(culturalInfo?.IsLocationPublic ?? true);

  // State for country controlling
  const [countryList, setCountryList] = useState<TDropdownItemProps[]>((culturalInfo?.CountryIds && culturalInfo?.CountryLabel) ? 
  [{
    Id: culturalInfo.CountryIds,
    Description: culturalInfo.CountryLabel,
  }] 
  : []);
  const [showCountryDialog, setShowCountryDialog] = useState<boolean>(false);

  // State for father country controlling
  const [fatherCountryList, setFatherCountryList] = useState<TDropdownItemProps[]>((culturalInfo?.FatherCountryIds && culturalInfo?.FatherCountryLabel) ? 
  [{
    Id: culturalInfo.FatherCountryIds,
    Description: culturalInfo.FatherCountryLabel,
  }] 
  : []);
  const [showFatherCountryDialog, setShowFatherCountryDialog] = useState<boolean>(false);

  // State for mother country controlling
  const [motherCountryList, setMotherCountryList] = useState<TDropdownItemProps[]>((culturalInfo?.MotherCountryIds && culturalInfo?.MotherCountryLabel) ? 
  [{
    Id: culturalInfo.MotherCountryIds,
    Description: culturalInfo.MotherCountryLabel,
  }] 
  : []);
  const [showMotherCountryDialog, setShowMotherCountryDialog] = useState<boolean>(false);

  // State for birthplace controlling
  const [birthPlaceList, setBirthPlaceList] = useState<TDropdownItemProps[]>((culturalInfo?.ArtistBirthPlace && culturalInfo?.ArtistBirthPlaceLabel) ? 
  [{
    Id: culturalInfo.ArtistBirthPlace,
    Description: culturalInfo.ArtistBirthPlaceLabel,
  }] 
  : []);
  const [showBirthPlaceDialog, setShowBirthPlaceDialog] = useState<boolean>(false);

  // State for outstation controlling
  const [outstationList, setOutstationList] = useState<TDropdownItemProps[]>((culturalInfo?.ArtistOutstation && culturalInfo?.ArtistOutstationLabel) ? 
  [{
    Id: culturalInfo.ArtistOutstation,
    Description: culturalInfo.ArtistOutstationLabel,
  }] 
  : []);
  const [showOutstationDialog, setShowOutstationDialog] = useState<boolean>(false);

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + accessToken,
  }

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsLocationPublic', newValue);
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

  // Handle add new country to list
  // New country is added to the dropdown
  const handleAddCountryToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Country',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setCountryList([...countryList, { Id: newData.Id, Description: newData.Description }])
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

  // Handle add new country to list
  // New father country is added to the dropdown
  const handleAddFatherCountryToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Country',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setFatherCountryList([...fatherCountryList, { Id: newData.Id, Description: newData.Description }])
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

  // Handle add new country to list
  // New mother country is added to the dropdown
  const handleAddMotherCountryToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Country',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setMotherCountryList([...motherCountryList, { Id: newData.Id, Description: newData.Description }])
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

  // Handle add new country to list
  // New birthplace is added to the dropdown
  const handleAddBirthPlaceToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Country',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setBirthPlaceList([...birthPlaceList, { Id: newData.Id, Description: newData.Description }])
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

  // Handle add new country to list
  // New outstation is added to the dropdown
  const handleAddOutstationToList = async (newValue: string) => {
    // Fetch API
    if (newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'Country',
          'Description': newValue
        },
        {
          headers: header
        }
      )
        .then((res) => {
          const newData = res.data;
          setOutstationList([...outstationList, { Id: newData.Id, Description: newData.Description }])
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
      onChange('IsLocationPublic', culturalInfo.IsLocationPublic ?? true);
      onChange('CountryIds', culturalInfo.CountryIds ?? []);
      onChange('FatherCountryIds', culturalInfo.FatherCountryIds ?? []);
      onChange('MotherCountryIds', culturalInfo.MotherCountryIds ?? []);
      onChange('ArtistBirthPlace', culturalInfo.ArtistBirthPlace ?? '');
      onChange('ArtistOutstation', culturalInfo.ArtistOutstation ?? '');
      onChange('ArtistBirthPlaceLabel', culturalInfo.ArtistBirthPlaceLabel ?? '');
      onChange('ArtistOutstationLabel', culturalInfo.ArtistOutstationLabel ?? '');
      onChange('CountryLabel', culturalInfo.CountryLabel ?? '');
      onChange('FatherCountryLabel', culturalInfo.FatherCountryLabel ?? '');
      onChange('MotherCountryLabel', culturalInfo.MotherCountryLabel ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [culturalInfo]);

  return (
    <LocationStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column'
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4'
              color='neutral.n0'
            >
              Locations
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
            {/* Country field */}
            <Box>
              <DropdownWithSearch id='Country'
                label='Country'
                initialOptions={countryList}
                fullWidth
                editable
                handleAddBtn={() => { setShowCountryDialog(true) }}
                value={culturalInfo?.CountryLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('CountryLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('CountryIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('CountryIds', []);
                  searchModelSingleSelection(e, 'Country', 'CountryIds', setCountryList)
                }}
              />
              <Box display={showCountryDialog ? 'block' : 'none'}>
                <AddFieldDialog id='newCountry'
                  title='Add a country'
                  label='Your country'
                  onAddField={handleAddCountryToList}
                  onCloseEvt={() => { setShowCountryDialog(false) }}
                />
              </Box>
            </Box>
            {/* Father country field */}
            <Box>
              <DropdownWithSearch id='FatherCountry'
                label='Father Country'
                initialOptions={fatherCountryList}
                fullWidth
                editable
                handleAddBtn={() => { setShowFatherCountryDialog(true) }}
                value={culturalInfo?.FatherCountryLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('FatherCountryLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('FatherCountryIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('FatherCountryIds', []);
                  searchModelSingleSelection(e, 'Country', 'FatherCountryIds', setFatherCountryList)
                }}
              />
              <Box display={showFatherCountryDialog ? 'block' : 'none'}>
                <AddFieldDialog id='newFatherCountry'
                  title='Add a father country'
                  label='Your father country'
                  onAddField={handleAddFatherCountryToList}
                  onCloseEvt={() => { setShowFatherCountryDialog(false) }}
                />
              </Box>
            </Box>
            {/* Mother country field */}
            <Box>
              <DropdownWithSearch id='MotherCountry'
                label='Mother Country'
                initialOptions={motherCountryList}
                fullWidth
                editable
                handleAddBtn={() => { setShowMotherCountryDialog(true) }}
                value={culturalInfo?.MotherCountryLabel}
                isLoading={searchingLoading}
                onLabelChange={(e: string | number) => {
                  onChange('MotherCountryLabel', e)
                }}
                onChange={(e: string | number) => {
                  onChange('MotherCountryIds', [e.toString()])
                }}
                onSearch={(e) => {
                  onChange('MotherCountryIds', []);
                  searchModelSingleSelection(e, 'Country', 'MotherCountryIds', setMotherCountryList)
                }}
              />
              <Box display={showMotherCountryDialog ? 'block' : 'none'}>
                <AddFieldDialog id='newMotherCountry'
                  title='Add a mother country'
                  label='Your mother country'
                  onAddField={handleAddMotherCountryToList}
                  onCloseEvt={() => { setShowMotherCountryDialog(false) }}
                />
              </Box>
            </Box>
            {/* Birth Place field */}
            <DropdownWithSearch id='BirthPlace'
              label='Birth Place'
              initialOptions={birthPlaceList}
              editable fullWidth
              handleAddBtn={() => { setShowBirthPlaceDialog(true) }}
              value={culturalInfo?.ArtistBirthPlaceLabel}
              isLoading={searchingLoading}
              onChange={(e: string | number) => {
                onChange('ArtistBirthPlace', e.toString())
              }}
              onLabelChange={(e: string | number) => {
                onChange('ArtistBirthPlaceLabel', e)
              }}
              onSearch={(e) => {
                onChange('ArtistBirthPlace', [])
                searchModelSingleSelection(e, 'Country', 'ArtistBirthPlace', setBirthPlaceList)
              }}
            />
            <Box display={showBirthPlaceDialog ? 'block' : 'none'}>
              <AddFieldDialog id='newBirthPlace'
                title='Add a birth place'
                label='Your birth place'
                onAddField={handleAddBirthPlaceToList}
                onCloseEvt={() => { setShowBirthPlaceDialog(false) }}
              />
            </Box>
            {/* Outstation field */}
            <DropdownWithSearch id='Outstation'
              label='Outstation'
              initialOptions={outstationList}
              editable fullWidth
              handleAddBtn={() => { setShowOutstationDialog(true) }}
              value={culturalInfo?.ArtistOutstationLabel}
              isLoading={searchingLoading}
              onLabelChange={(e: string | number) => {
                onChange('ArtistOutstationLabel', e)
              }}
              onChange={(e: string | number) => {
                onChange('ArtistOutstation', e.toString())
              }}
              onSearch={(e) => {
                onChange('ArtistOutstation', [])
                searchModelSingleSelection(e, 'Country', 'ArtistOutstation', setOutstationList)
              }}
            />
            <Box display={showOutstationDialog ? 'block' : 'none'}>
              <AddFieldDialog id='newOutstation'
                title='Add an outstation'
                label='Your outstation'
                onAddField={handleAddOutstationToList}
                onCloseEvt={() => { setShowOutstationDialog(false) }}
              />
            </Box>
            {/* Contact to update list button */}
            <GhostButton className='addArtist-locations-contact'
              label='Update the location list'
              startIcon={<SettingsIcon />}
              sx={{ width: 'fit-content' }}
            />
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
    </LocationStyled>
  )
}

export default Locations
