import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Style of Biography component
export const SystemDocumentsStyled = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: 'auto',
  '& .systemDocuments-container': {
    backgroundColor: theme.palette.neutral.nw,
    padding: '40px',
    '& .systemDocument-type': {
      width: '316px',
    },
    '& .systemDocument-actions': {
      '& .systemDocument-downloadBtn svg': {
        transform: 'rotate(90deg)',
      }
    },
    '& .systemDocument-btn': {
      color: theme.palette.primary.pr50,
      '& path': {
        fill: theme.palette.primary.pr50,
      }
    }
  },
  '& .addArtist-systemDocuments-actionBtns': {
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

export const SamBox = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: 3,
  backgroundColor: '#000000',
  opacity: '70%',
  top: 0,
  left: 0,
}))

export const DialogStyled = styled(Stack)(({theme}) => ({
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
  '& .FilterDialog-fields': {
    marginLeft: '50px',
    marginRight: '50px',
  },
}))