import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const AddArtistBox = styled(Box)(({ theme }) => ({
  '& .addArtist-contentSession': {
    backgroundColor: theme.palette.neutral.n100,
    [theme.breakpoints.up('xs')]: {
      padding: '40px 30px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '40px 0px',
    },
  },
  '& .newArtist-stepDropdown-container': {
    padding: '24px 30px 0px 30px',
    backgroundColor: theme.palette.neutral.n100,
  },
  '& .addArtist-actionBtns': {
    margin: '24px auto 0px auto',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '800px',
    },
    '& .addArtist-saveAndExitBtn': {
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .addArtist-saveAndNextBtn': {
      '& svg': {
        transform: 'rotate(180deg)',
      }
    },
    '& .addArtist-cancelBtn': {
      color: theme.palette.primary.pr50,
    },
  },
  '& .DefaultSpinner': {
    width: '36px',
    height: '36px',
    borderWidth: '6px',
    marginTop: '24px',
  }
}));

export const AddArtistDialog = styled(Box)(({ theme }) => ({
  '& .Dialog-BG': {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 3,
    backgroundColor: '#000000',
    opacity: '70%',
    top: 0,
    left: 0,
  },
  '& .Dialog-Container': {
    borderRadius: '8px',
    padding: '48px',
    backgroundColor: theme.palette.neutral.nw,
    position: 'fixed',
    zIndex: 4,
    left: 'calc(50vw - 50%)',
    top: 'calc(50vh - 50%)',
    transform: 'translate(calc(50vw - 50%), calc(50vh - 50%))',
    overflowY: 'auto',
    [theme.breakpoints.up('xs')]: {
      height: '100%',
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      height: 'auto',
      width: '600px',
    },
    '& .Dialog-HeaderIcon': {
      width: '32px',
      height: '32px',
      '& path': {
        fill: theme.palette.correct.c50,
      }
    },
    '& .Dialog-ArtistName': {
      fontWeight: 700,
      color: theme.palette.primary.pr50,
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1px',
    },
    '& .Dialog-cancelBtn': {
      color: theme.palette.primary.pr50,
    },
  },
}));
