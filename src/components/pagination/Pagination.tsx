'use client';

import React, { ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Dropdown from '@/components/dropdown/Dropdown';
import Typography from '@mui/material/Typography'
import { TSamPaginationProps } from './type';
import { mockPaginationLimitData } from '@/constants/mockData';
import { PaginationStyled, SamStack } from './style';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SamPagination = ({id, count, boundaryCount, siblingCount, disabled, 
    totalNum, onChange, defaultPageSize}: TSamPaginationProps) => {

  // State for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePaginationChange = (event: ChangeEvent<unknown>, value: number) => {
    onChange('Page', value)
  }

  const options = mockPaginationLimitData;

  return (
    <SamStack direction={isMobile ? 'column' : 'row'} 
      justifyContent='space-between' 
      alignItems={isMobile ? 'left' : 'center'} 
    >
      <Stack direction='row' alignItems='center' spacing='8px' className='SamPagination-count'>
        <Typography variant='body2' color='neutral.n30'>
          Showing
        </Typography>
        <Dropdown id='PageSize' 
          value={`${defaultPageSize}`}
          initialOptions={options}
          width='80px'
          onChange={(e: string | number) => onChange('PageSize', e)}
        />
        <Typography variant='body2' color='neutral.n30'>
          of {totalNum} results
        </Typography>
      </Stack>
      <Pagination count={count || 0} id={id} disabled={disabled} 
        siblingCount={siblingCount} 
        boundaryCount={boundaryCount}
        sx={PaginationStyled} 
        onChange={handlePaginationChange}
      />
    </SamStack>
  )
}

export default SamPagination;