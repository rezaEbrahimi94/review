'use client';

import React from 'react';
import Tabs, {TabsProps} from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';
import theme from '@/theme/theme';
import { LatoFont } from '@/theme/theme';

/* Tab component */
export const DefaultTabs = styled(({...props}: TabsProps) => (
  <Tabs {...props} />
)) ({
  '& .MuiTab-root': {
    color: theme.palette.neutral.n30,
    textTransform: 'none',
    fontFamily: LatoFont.style.fontFamily,
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    padding: '16px 12px',
    '&:hover': {
      color: theme.palette.primary.pr50,
    },
    '&:focus-visible': {
      border: `3px solid ${theme.palette.primary.pr70}`,
      borderRadius: '8px 8px 2px 2px',
      padding: '13px 9px',
    },
  },
  '& .MuiTab-root.Mui-selected': {
    color: theme.palette.primary.pr50,
    '&:focus-visible': {
      color: theme.palette.primary.pr50,
      border: `3px solid ${theme.palette.primary.pr70}`,
      borderRadius: '8px 8px 2px 2px',
      padding: '13px 9px',
    },
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.pr50,
    height: '2px',
  },
  '& .MuiTab-root.Mui-disabled': {
    color: theme.palette.neutral.n30,
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '24px',
    padding: '16px 12px',
    '&.Mui-selected': {
      color: theme.palette.primary.pr50,
    }
  },
})
