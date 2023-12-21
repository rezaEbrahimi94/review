import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField , {TextFieldProps} from '@mui/material/TextField';

// Style of Biography component
export const HistoryStyled = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: 'auto',
  '& .addArtist-history-actionBtns': {
    marginTop: '24px',
    '& .addArtist-saveAndNextBtn': {
      backgroundColor: theme.palette.neutral.nw,
      '& svg': {
        transform: 'rotate(180deg)',
      }
    },
    '& .addArtist-cancelBtn': {
      color: theme.palette.primary.pr50,
    }
  }
}));

// Style of Profile Image component
export const DocumentsStyled = styled(Box)(() => ({
  marginTop: '24px',
  '& .addArtist-document-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
}));

// Style of Profile Image component
export const StylesStyled = styled(Box)(() => ({
  marginTop: '24px',
  '& .addArtist-document-public': {
    '& .SamSwitch-slider': {
      marginTop: '-6px',
    }
  },
}));

// Text field style on adding dialog
export const DialogTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    paddingRight: '24px 16px',
    '& input': {
      padding: '12px 12px 12px 16px',
      color: theme.palette.neutral.n30,
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    '& fieldset': {
      border: `1px solid ${theme.palette.neutral.n0}`,
      borderRadius: '8px',
      padding: '24px 16px 18px 16px',
    },
    '&:hover fieldset': {
      border: `2px solid ${theme.palette.neutral.n0}`,
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.pr50}`,
    },
  },
}));

// Style of Add Collection Dialog component
export const HistoryDialogStyled = styled(Box)(({ theme }) => ({
  '& .historyDialog-bg': {
    position: 'fixed',
    zIndex: 4,
    top: 0,
    left: 0,
    backgroundColor: theme.palette.neutral.nbl,
    opacity: '70%',
    width: '100vw',
    height: '100vh',
  },
  '& .historyDialog-container': {
    position: 'fixed',
    zIndex: 5,
    backgroundColor: theme.palette.neutral.nw,
    maxWidth: '1020px',
    left: 'calc(50vw - 50%)',
    top: 'calc(50vh - 60%)',
    transform: 'translate(calc(50vw - 50%), calc(50vh - 50%))',
  },
  '& .addFieldDialog-addRowBtn': {
    backgroundColor: theme.palette.neutral.n80,
  }
}));
