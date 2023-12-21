import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const HeaderStyled = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.neutral.nw,
  borderBottom: `1px solid ${theme.palette.neutral.n70}`,
  [theme.breakpoints.down('lg')]: {
    padding: '48px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '24px',
  },
}))
