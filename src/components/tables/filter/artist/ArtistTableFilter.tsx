import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FilterMobile from '@/components/tables/filter/artist/FilterMobile';
import FilterDesktop from '@/components/tables/filter/artist/FilterDesktop';
import FilterArtistDialog from '@/components/tables/filter/artist/FilterArtistDialog';
import Box from '@mui/material/Box';
import { TTableFilterProps } from './type';
import { toggleScrollbar } from '@/utils/navigation';

const ArtistTableFilter = ({id, bulkActions, handleSearchFieldChange, type, noOfResults, onChange}: TTableFilterProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showDialog, setShowDialog] = useState(false);

  const handleToggleDialog = () => {
    const newValue = !showDialog;
    setShowDialog(newValue);
    toggleScrollbar(!newValue);
  }

  return (
    <>
      <Box className='filterDialog-Root' 
        display={showDialog ? 'block' : 'none'} 
      >
        <FilterArtistDialog handleToggleDialog={handleToggleDialog} 
          onChange={onChange} 
        />
      </Box>
      {isMobile ?
        <FilterMobile id={id} bulkActions={bulkActions} 
          handleSearchFieldChange={handleSearchFieldChange} type={type}
          noOfResults={noOfResults} handleToggleDialog={handleToggleDialog}
          onChange={onChange}
        />
        :
        <FilterDesktop id={id} bulkActions={bulkActions} 
          handleSearchFieldChange={handleSearchFieldChange} type={type}
          noOfResults={noOfResults} handleToggleDialog={handleToggleDialog}
          onChange={onChange}  
        />
      }
    </>
  )
}

export default ArtistTableFilter;
