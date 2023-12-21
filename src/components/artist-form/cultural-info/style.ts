import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Style of Cultural Info component
export const CulturalInfoStyled = styled(Box)(({ theme }) => ({
  margin: 'auto',
  [theme.breakpoints.up('xs')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
  '& .addArtist-culturalInfo-actionBtns': {
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

export const LanguageCommunityStyled = styled(Box)(({ theme }) => ({
  '& .addArtist-languageCommunity-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
  '& .addArtist-languageCommunity-contact': {
    color: theme.palette.primary.pr50,
    '& path': {
      fill: theme.palette.primary.pr50,
    }
  }
}));

export const LocationStyled = styled(Box)(({ theme }) => ({
  marginTop: '24px',
  '& .addArtist-locations-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
  '& .addArtist-locations-contact': {
    color: theme.palette.primary.pr50,
    '& path': {
      fill: theme.palette.primary.pr50,
    }
  }
}));

export const OtherStyled = styled(Box)(({ theme }) => ({
  marginTop: '24px',
  '& .addArtist-other-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
  '& .addArtist-other-contact': {
    color: theme.palette.primary.pr50,
    '& path': {
      fill: theme.palette.primary.pr50,
    }
  }
}));
