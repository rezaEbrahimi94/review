import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const SamCardStyled = styled(Box)(({ theme }) => ({
  padding: '40px',
  color: theme.palette.neutral.n0,
  margin: 'auto',
  backgroundColor: theme.palette.neutral.nw,
  border: '4px 0px 0px 0px',
  borderRadius: '10px',
  boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.up('xs')]: {
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px'
  },
  '& .SamCard-Children': {
    paddingTop: '32px',
    borderTop: `1px solid ${theme.palette.neutral.n80}`,
  },
}));