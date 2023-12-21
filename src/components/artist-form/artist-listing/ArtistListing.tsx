'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableArtist from '@/components/tables/table/TableArtist';
import SamPagination from '@/components/pagination/Pagination';
import { TArtistItemProps, TFilterProps } from './type';
import SearchArtistContext from '@/components/context/SearchArtistContext';
import ArtistTableFilter from '@/components/tables/filter/artist/ArtistTableFilter';
import { generateNewToken } from '@/utils/generateNewToken';
import { parseCookies } from 'nookies';
import { environment } from '@/constants/environment';

const ArtistListing = () => {
  const [filteredData, setFilteredData] = useState<TArtistItemProps[]>([]);
  const [accessToken, setAccessToken] = useState(parseCookies().accessToken);

  // state for filter selections
  const [filter, setFilter] = useState<TFilterProps>({
    Name: '',
    NameLabel: '',
    Page: 1,
    PageSize: 10,
    SortBy: 'Firstname',
    SortOrder: 'ASC',
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
  })

  // state for result counts
  const [resultsCount, setResultsCount] = useState<number>(0);

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + accessToken,
  }

  const setQuery = (key: string, value: string | number | boolean | undefined) => {
    const searchQuery = 'Name=' + (key == 'Name' ? value : filter.Name) +
      '&Page=' + (key == 'Page' ? value : 1) +
      '&PageSize=' + (key == 'PageSize' ? value : 10) +
      '&SortBy=' + (key == 'SortBy' ? value : filter.SortBy) +
      '&SortOrder=' + (key == 'SortOrder' ? value : filter.SortOrder) +
      (key === 'Language' ? (value ? ('&Language=' + value) : '') 
        : (filter.Language ? ('&Language=' + filter.Language) : '')) +
      (key === 'Community' ? (value ? ('&Community=' + value) : '') 
        : (filter.Community ? ('&Community=' + filter.Community) : '')) +
      (key === 'Clan' ? (value ? ('&Clan=' + value) : '') 
        : (filter.Clan ? ('&Clan=' + filter.Clan) : '')) +
      (key === 'Country' ? (value ? ('&Country=' + value) : '') 
        : (filter.Country ? ('&Country=' + filter.Country) : '')) +
      (key === 'Gender' ? (value ? ('&Gender=' + value) : '') 
        : (filter.Gender ? ('&Gender=' + filter.Gender) : '')) +
      (key === 'PricingLevel' ? (value ? ('&PricingLevel=' + value) : '') 
        : (filter.PricingLevel ? ('&PricingLevel=' + filter.PricingLevel) : '')) +
      (key === 'Deceased' ? (value ? ('&Deceased=' + value) : '') 
        : (filter.Deceased ? ('&Deceased=' + filter.Deceased) : ''));
    return searchQuery;
  }

  const handleSearchFieldChange = async (searchValue: string) => {
    let searchQuery = '';
    if(filter) {
      searchQuery = setQuery('Name', searchValue)
    }
    const fetchUrl = `${environment.BASE_URL}/dev/artist/search-artists?${searchQuery}`;
    await fetch(fetchUrl, {
      method: 'GET',
      headers: header,
    })
      .then(async (res) => {
        const data = await res.json();
        if(data.message == 'Could not validate token.' ||
          data.message == 'Your session has expired. Please log in again.'
        ) {
          generateNewToken();
          setAccessToken(parseCookies().accessToken)
        } else {
          if(data) {
            setFilteredData(data.results);
            setResultsCount(data.count.length);
          }
        }
      })
      .catch(() => {
        console.log("No result.");
        setResultsCount(0);
      })
  }

  // Handle filter change function
  const handleFilterChange = async (key: string, value: string | number | boolean | undefined ) => {
    if(key == 'NameLabel') {
      setFilter((prevState) => ({
        ...prevState,
        'NameLabel': value ? value.toString() : '',
      }));
    } else {
      if(filter) {
        setFilter((prevState) => ({
          ...prevState,
          [key]: value
        }));
        const searchQuery = setQuery(key, value)
        const fetchUrl = `${environment.BASE_URL}/dev/artist/search-artists?${searchQuery}`;
        await fetch(fetchUrl, {
          method: 'GET',
          headers: header,
        })
          .then(async (res) => {
            const data = await res.json();
            if(data.message == 'Could not validate token.' ||
              data.message == 'Your session has expired. Please log in again.'
            ) {
              generateNewToken();
              setAccessToken(parseCookies().accessToken)
            } else {
              setFilteredData(data.results);
              setResultsCount(data.count.length);
            }
          })
          .catch(() => {
            console.log("No result.");
            setResultsCount(0);
          })
      }
    }
  }

  return (
    <SearchArtistContext.Provider value={{ filteredData, setFilteredData, resultsCount, setResultsCount, filter, setFilter }}>
      <Box padding='26px 24px'>
        <Typography variant='h3' color='neutral.n0'>
          Artists
        </Typography>
        <ArtistTableFilter bulkActions={false}
          handleSearchFieldChange={handleSearchFieldChange}
          noOfResults={resultsCount}
          onChange={handleFilterChange}
        />
        <TableArtist id='artist-listing-table' 
          items={filteredData}
          onChange={handleFilterChange}  
        />
        <Box mt='24px' textAlign='center' 
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'center',
            }
          }}
        >
          <SamPagination totalNum={resultsCount} 
            defaultPageSize={filter.PageSize}
            count={Math.ceil(resultsCount / (filter?.PageSize ?? 0))}
            onChange={handleFilterChange}
          />
        </Box>
      </Box>
    </SearchArtistContext.Provider>
  )
}

export default ArtistListing;
