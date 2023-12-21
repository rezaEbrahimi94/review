import React, { useContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { OutlinedButton } from '@/components/buttons/SamButtons';
import { ChevronIcon, SortIcon } from '@/components/icons/Icons';
import Typography from '@mui/material/Typography';
import { TTableFilterProps } from './type';
import { FilterStyled } from './style';
import SearchArtistContext from '@/components/context/SearchArtistContext';
import ArtistSearchField from '@/components/dropdown/ArtistSearchField';

const FilterDesktop = ({bulkActions, handleSearchFieldChange,  
    noOfResults, handleToggleDialog}: TTableFilterProps) => {
  // use context
  const {filteredData, filter } = useContext(SearchArtistContext)

  // State for searching loading
  const [searchingLoading, setSearchingLoading] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (value: string) => {
    setSearchingLoading(true);

    new Promise(resolve => {
      setTimeout(() => {
        if(handleSearchFieldChange) {
          handleSearchFieldChange(value)
        }
        setSearchValue(value);
        resolve(true);
      }, 1)
    })
    .then (() => {
      setSearchingLoading(false);
    })
  }

  const countFilters = () => {
    let count = 0;
    if(filter.Language) {
      count++;
    }
    if(filter.Community) {
      count++;
    }
    if(filter.Clan) {
      count++;
    }
    if(filter.Country) {
      count++;
    }
    if(filter.Gender) {
      count++;
    }
    if(filter.PricingLevel) {
      count++;
    }
    if(filter.Deceased !== undefined) {
      count++;
    }
    return count;
  }

  return (
    <>
      <FilterStyled className='Filter-desktop-root'>
        <Stack direction='row' spacing='12px' 
          alignItems='center'
          className='Filter-desktop-container'
        >
        <Box className='Filter-desktop-searchField'>
          <ArtistSearchField id='ArtistSearch-TxtFld' 
            initialOptions={filteredData}
            onChange={(e: string | number) => {
              handleInputChange(e.toString())
            }}
            onSearch={(e) => handleInputChange(e.toString())}
            isLoading={searchingLoading}
          />
          {searchValue ? 
            <Typography variant='body2' color='neutral.n30'
              className='Filter-noOfResults'
              sx={{ cursor: 'pointer' }}
            >
              Showing {noOfResults} Results
            </Typography>
            :
            null
          }
        </Box>
        <OutlinedButton endIcon={ <SortIcon />}
          label={countFilters() > 0 ? `${countFilters()} Filters` : 'Filter'} 
          className={countFilters() > 0 ? 'Filter-filterBtn-filterAvailable' : 'Filter-filterBtn'} 
          onClick={handleToggleDialog}
        />
        {bulkActions ? 
          <OutlinedButton label='Bulk actions' endIcon={ <ChevronIcon />} 
            className='Filter-ActionsBtn'
          />
          : ''
        }
        </Stack>

      </FilterStyled>
    </>
  )
}

export default FilterDesktop