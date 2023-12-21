import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Style of Personal Info component
export const PersonalInfoStyled = styled(Box)(({ theme }) => ({
  margin: 'auto',
  '& .addArtist-personalInfo-actionBtns': {
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
  [theme.breakpoints.up('xs')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    display: 'none',
  }
}));

// Style of name & identity component
export const NameIdentityStyled = styled(Box)(({ theme }) => ({
  '& .addArtist-nameIdentity-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
  '& hr': {
    border: `1px solid ${theme.palette.neutral.n80}`,
  },
  '& .addArtist-deceasedRd-yes .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '8px 0px 0px 8px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-deceasedRd-no .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '0px 8px 8px 0px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-name-note': {
    textAlign: 'right',
    '& .MuiBox-root': {
      textAlign: 'left',
    },
    '& .addArtist-name-removeNotebtn': {
      color: theme.palette.error.e50,
      '& path': {
        fill: theme.palette.error.e50,
      }
    }
  },
  '& .addArtist-deceasedBox': {
    marginTop: '16px',
    padding: '24px',
    backgroundColor: theme.palette.neutral.n100,
    borderLeft: `2px solid ${theme.palette.primary.pr80}`,
    '& .MuiTypography-body1': {
      fontWeight: 400,
    },
    '& input': {
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .addArtist-deceased-addNotebtn': {
      marginTop: '24px',
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .addArtist-deceased-note': {
      textAlign: 'right',
      '& .MuiBox-root': {
        textAlign: 'left',
      },
      '& .addArtist-deceased-removeNotebtn': {
        color: theme.palette.error.e50,
        '& path': {
          fill: theme.palette.error.e50,
        }
      }
    }
  },
  '& .MuiAlert-root': {
    marginTop: '32px',
    '& .MuiAlertTitle-root': {
      fontSize: '14px',
      lineHeight: '22px',
    },
    '& .SamAlert-description': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
    }
  }
}));

// Style of Profile Image component
export const ProfileImageStyled = styled(Box)(() => ({
  marginTop: '24px',
  '& .addArtist-profileImage-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
}));

// Style of Contact component
export const ArtistContactStyled = styled(Box)(({ theme }) => ({
  marginTop: '24px',
  '& .addArtist-contact-note': {
    textAlign: 'right',
    '& .MuiBox-root': {
      textAlign: 'left',
    },
    '& .addArtist-contact-removeNotebtn': {
      color: theme.palette.error.e50,
      '& path': {
        fill: theme.palette.error.e50,
      }
    }
  },
}));

// Style of Artist Address component
export const ArtistAddressStyled = styled(Box)(() => ({
  marginTop: '24px',
  '& .MuiCheckbox-root': {
    paddingLeft: '0px',
  }
}));

// Style of Artist Legal component
export const ArtistLegalStyled = styled(Box)(({ theme }) => ({
  marginTop: '24px',
  '& .addArtist-artistWill-yes .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '8px 0px 0px 8px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-artistWill-no .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '0px 8px 8px 0px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-willBox': {
    marginTop: '16px',
    padding: '24px',
    backgroundColor: theme.palette.neutral.n100,
    borderLeft: `2px solid ${theme.palette.primary.pr80}`,
    '& .MuiTypography-body1': {
      fontWeight: 400,
    },
    '& input': {
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .MuiInputBase-root': {
      maxWidth: '356px',
      paddingRight: '0px',
    },
    '& .addArtist-will-addNotebtn': {
      backgroundColor: theme.palette.neutral.nw,
    }
  },
  '& .addArtist-disabilities-yes .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '8px 0px 0px 8px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-disabilities-no .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '0px 8px 8px 0px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-will-note': {
    textAlign: 'right',
    '& .MuiBox-root': {
      textAlign: 'left',
    },
    '& .addArtist-contact-removeNotebtn': {
      color: theme.palette.error.e50,
      '& path': {
        fill: theme.palette.error.e50,
      }
    }
  },
}));
