import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import { CrossIcon } from '@/components/icons/Icons';
import Dropdown from '@/components/dropdown/Dropdown';
import { FilledButton } from '@/components/buttons/SamButtons';
import { RadioButton } from '@/components/radio-button/RadioButton';
import { mockGenderData, mockPricingLevelData } from '@/constants/mockData';
import { TDropdownItemProps } from '@/components/dropdown/type';
import DropdownWithSearch from '@/components/dropdown/DropdownWithSearch';
import SearchArtistContext from '@/components/context/SearchArtistContext';
import axios from 'axios';
import { TFilterArtistDialog } from './type';
import Grid from '@mui/material/Grid';
import { DialogStyled, SamBox } from './style';
import { parseCookies } from 'nookies';
import { generateNewToken } from '@/utils/generateNewToken';
import { environment } from '@/constants/environment';

const FilterArtistDialog = ({handleToggleDialog, onChange}: TFilterArtistDialog) => {
  // useContext
  const { filter, setFilter, resultsCount } = useContext(SearchArtistContext);
  const [accessToken, setAccessToken] = useState(parseCookies().accessToken);

  // State for searching loading
  const [searchingLoading, setSearchingLoading] = useState<boolean>(false);

  // State for language controlling
  const [languageList, setLanguageList] = useState<TDropdownItemProps[]>((filter?.Language && filter?.LanguageLabel) ? 
  [{
    Id: filter.Language,
    Description: filter.LanguageLabel,
  }] 
  : []);

  // State for country controlling
  const [communityList, setCommunityList] = useState<TDropdownItemProps[]>((filter?.Community && filter?.CommunityLabel) ? 
  [{
    Id: filter.Community,
    Description: filter.CommunityLabel,
  }] 
  : []);
  
  // State for country controlling
  const [clanList, setClanList] = useState<TDropdownItemProps[]>((filter?.Clan && filter?.ClanLabel) ? 
  [{
    Id: filter.Clan,
    Description: filter.ClanLabel,
  }] 
  : []);

  // State for country controlling
  const [countryList, setCountryList] = useState<TDropdownItemProps[]>((filter?.Country && filter?.CountryLabel) ? 
  [{
    Id: filter.Country,
    Description: filter.CountryLabel,
  }] 
  : []);

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
          onChange(onChangeField, undefined)
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

  // Handle radio change for decease
  const [Deceased, setDeceased] = useState<boolean | undefined>(filter?.Deceased ? filter.Deceased : undefined);
  const onChangeIsDeceasedValue = () => {
    const newValue = (document.querySelector('input[name=Deceased]:checked') as HTMLInputElement).value;
    setDeceased(newValue == 'yes' ? true : false);
    onChange('Deceased', newValue == 'yes' ? true : false);
  }

  // Clear filter
  const isFilterEmpty = () => {
    if(filter.Language || filter.Community || filter.Clan || filter.Country || 
      filter.Gender || filter.PricingLevel || filter.Deceased !== undefined) {
        return false;
    } else {
      return true;
    }
  }

  const clearField = (id: string, type: string) => {
    if(type == 'text') {
      (document.getElementById(id) as HTMLInputElement).value = '';
    } else if(type == 'select') {
      (document.getElementById(id) as HTMLInputElement).innerHTML = '';
    }
  }

  const handleClearFilterBtn = () => {
    if(isFilterEmpty()) {
      handleToggleDialog();
    } else {
      setFilter((prevState) => ({
        ...prevState,
        Language: undefined,
        LanguageLabel: undefined,
        Community: undefined,
        CommunityLabel: undefined,
        Clan: undefined,
        ClanLabel: undefined,
        Country: undefined,
        CountryLabel: undefined,
        Gender: undefined,
        PricingLevel: undefined,
        Deceased: undefined,
      }));
      clearField('Language', 'text');
      clearField('Community', 'text');
      clearField('Clan', 'text');
      clearField('Country', 'text');
      clearField('Gender', 'select');
      clearField('PricingLevel', 'select');
      setDeceased(undefined);
    }
  }

  return (
    <>
      <SamBox></SamBox>
      <DialogStyled direction='column' spacing='32px'>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h3' color='neutral.n0'>
            Artist Filters
          </Typography>
          <CrossIcon sx={{ cursor: 'pointer' }}
           onClick={handleToggleDialog} />
        </Stack>
        <Box className='FilterDialog-fields'>         
          <DropdownWithSearch id='Language'
            label='Language'
            initialOptions={languageList}
            fullWidth
            value={filter?.LanguageLabel}
            isLoading={searchingLoading}
            onLabelChange={(e: string | number) => {
              onChange('LanguageLabel', e)
            }}
            onChange={(e: string | number) => {
              onChange('Language', e.toString())
            }}
            onSearch={(e) => {
              onChange('Language', undefined);
              searchModelSingleSelection(e, 'Language', 'Language', setLanguageList)
            }}
          />
        </Box>
        <Box className='FilterDialog-fields'>         
          <DropdownWithSearch id='Community'
            label='Community'
            initialOptions={communityList}
            fullWidth
            value={filter?.CommunityLabel}
            isLoading={searchingLoading}
            onLabelChange={(e: string | number) => {
              onChange('CommunityLabel', e)
            }}
            onChange={(e: string | number) => {
              onChange('Community', e.toString())
            }}
            onSearch={(e) => {
              onChange('Community', undefined);
              searchModelSingleSelection(e, 'Community', 'Community', setCommunityList)
            }}
          />
        </Box>
        <Box className='FilterDialog-fields'>         
          <DropdownWithSearch id='Clan'
            label='Clan/Tribe'
            initialOptions={clanList}
            fullWidth
            value={filter?.ClanLabel}
            isLoading={searchingLoading}
            onLabelChange={(e: string | number) => {
              onChange('ClanLabel', e)
            }}
            onChange={(e: string | number) => {
              onChange('Clan', e.toString())
            }}
            onSearch={(e) => {
              onChange('Clan', undefined);
              searchModelSingleSelection(e, 'Clan', 'Clan', setClanList)
            }}
          />
        </Box>
        <Box className='FilterDialog-fields'>         
          <DropdownWithSearch id='Country'
            label='Country'
            initialOptions={countryList}
            fullWidth
            value={filter?.CountryLabel}
            isLoading={searchingLoading}
            onLabelChange={(e: string | number) => {
              onChange('CountryLabel', e)
            }}
            onChange={(e: string | number) => {
              onChange('Country', e.toString())
            }}
            onSearch={(e) => {
              onChange('Country', undefined);
              searchModelSingleSelection(e, 'Country', 'CountryIds', setCountryList)
            }}
          />
        </Box>
        <Box className='FilterDialog-fields'>
          <Dropdown id='Gender' 
            fullWidth label='Gender' 
            value={filter.Gender ? filter.Gender : undefined}
            initialOptions={mockGenderData}
            onChange={(e: string | number) => onChange('Gender', e)}
          />
        </Box>
        <Box className='FilterDialog-fields'>
          <Dropdown id='PricingLevel' 
            fullWidth label='Artist Pricing Level' 
            value={filter?.PricingLevel}
            initialOptions={mockPricingLevelData}
            onChange={(e: string | number) => onChange('PricingLevel', e)}
          />
        </Box>
        <Box className='FilterDialog-fields'>
          <Typography variant='body1' fontWeight={700} display='inline-block'
            color='neutral.n0' mb='8px'>
              Is the artist deceased?
          </Typography>
          <Grid container maxWidth='384px' onChange={onChangeIsDeceasedValue}>
            <Grid item xs={6} className='addArtist-deceasedRd-yes'>
              <RadioButton id='artistDeceased-yes' 
                name='Deceased' 
                value='yes' 
                label='Yes' 
                checked={Deceased !== undefined ? Deceased : false}
              />
            </Grid>
            <Grid item xs={6} className='addArtist-deceasedRd-no'>
              <RadioButton id='artistDeceased-no' 
                name='Deceased' 
                value='no' 
                label='No'
                checked={Deceased !== undefined ? !Deceased : false} 
              />
            </Grid>
          </Grid>
        </Box>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <FilledButton label={`Show ${resultsCount} Results`} 
            onClick={handleToggleDialog}
          />
          <Typography variant='link1' 
            color='primary.pr50' 
            fontWeight={700}
            onClick={handleClearFilterBtn}
            sx={{
              cursor: 'pointer',
            }}
          >
            {isFilterEmpty() ? 'Back' : 'Clear all filters'}
          </Typography>
        </Stack>
      </DialogStyled>
    </>
  )
}

export default FilterArtistDialog;