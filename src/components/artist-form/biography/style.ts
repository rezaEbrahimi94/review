import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Style of Biography component
export const BiographyStyled = styled(Box)(({ theme }) => ({
  margin: 'auto',
  [theme.breakpoints.up('xs')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
  '& .addArtist-biography-actionBtns': {
    marginTop: '24px',
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
    }
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    display: 'none',
  },
}));

export const BioCardStyled = styled(Box)(({ theme }) => ({
  '& .addArtist-bioCard-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
  '& .addArtist-bioCard-descriptionIcon path': {
    fill: theme.palette.secondary.s50,
  }
}));

export const VideoCardStyled = styled(Box)(() => ({
  marginTop: '24px',
  '& .addArtist-videoCard-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
}));
