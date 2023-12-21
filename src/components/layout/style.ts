
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MainSectionStyled =  styled(Box)(({theme}) => ({
  minHeight: '1000px',
  height: '100%',
  backgroundColor: theme.palette.neutral.nw,
  // backgroundColor: theme.palette.secondary.s90,
  [theme.breakpoints.down('lg')]: {
    width: '100vw',
    marginLeft: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    // transition: 'width .3s',
    '&.SamMainSection-Root-extend': {
      // width: 'calc(100vw - (88px + 12px))',
      width: 'calc(100vw - (88px + 0px))',
      marginLeft: '88px',
    },
    '&.SamMainSection-narrow': {
      width: 'calc(100vw - (260px + 0px))',
      marginLeft: '260px',
    }
  },
}))
