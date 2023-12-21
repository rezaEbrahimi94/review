import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const ArtCentreProfileStyled = styled(Box)(({ theme }) => ({
  '& .artCentreProfile-Forms-Root': {
    padding: '40px',
    backgroundColor: theme.palette.neutral.n100,
  },
  '& .DefaultSpinner': {
    width: '36px',
    height: '36px',
    borderWidth: '6px',
    marginTop: '24px',
  },
  '& .ArtCentreProfile-Form': {
    margin: 'auto',
  },
  '& .artCentreProfile-BtnContainer': {
    margin: '0px auto 0px auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '800px'
    },
  }
}));
