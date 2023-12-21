import React, { useContext, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { OutlinedButton } from '@/components/buttons/SamButtons';
import { SearchIcon, SortIcon, TuneIcon } from '@/components/icons/Icons';
import { TTableFilterProps } from './type';
import { MobileFilterStyled, MobileSearchFieldStyled } from './style';
import SearchArtistContext from '@/components/context/SearchArtistContext';

const FilterMobile = ({id, bulkActions, handleSearchFieldChange, 
    handleToggleDialog}: TTableFilterProps) => {
  const {filter} = useContext(SearchArtistContext);

  const [searchValue, setSearchValue] = useState('');

  const searchItems = (searchValue: string) => {
    setSearchValue(searchValue);
    if(handleSearchFieldChange) {
      handleSearchFieldChange(searchValue);
    }
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
      <MobileFilterStyled className='Filter-mobile-root'>
        <Box className='Filter-mobile-searchField'>
          <MobileSearchFieldStyled id={`${id}-searchTxt`} 
            // label={`${searchValue ? '' : 'Search an artist'} `}
            value={searchValue} fullWidth
            onChange={(e) => searchItems(e.target.value)}
            InputLabelProps={{ shrink: false }}
          />
          <SearchIcon className='Filter-searchIcon' />
        </Box>
        <Grid container
          alignItems='stretch'
          className='Filter-mobile-btnContainer'
        >
          {bulkActions ? 
            <>
              <Grid item xs={6}>
                <OutlinedButton endIcon={ <TuneIcon />}
                  label={countFilters() > 0 ? `${countFilters()} Filters` : 'Filter'} 
                  className={countFilters() > 0 ? 'Filter-filterBtn-filterAvailable' : 'Filter-filterBtn'} 
                  fullWidth
                  onClick={handleToggleDialog}
                />
              </Grid>
              <Grid item xs={6}>
                <OutlinedButton label='Sort' endIcon={ <SortIcon />}
                  className='Filter-sortBtn' fullWidth
                />
              </Grid>
            </>
            : 
            <Grid item xs={12}>
              <OutlinedButton endIcon={ <TuneIcon />}
                label={countFilters() > 0 ? `${countFilters()} Filters` : 'Filter'} 
                className={countFilters() > 0 ? 'Filter-filterBtn-filterAvailable' : 'Filter-filterBtn'} 
                fullWidth
                onClick={handleToggleDialog}
                sx={{
                  borderRadius: '8px!important',
                }}
              />
            </Grid>
          }
          
        </Grid>

      </MobileFilterStyled>
    </>
  )
}

export default FilterMobile