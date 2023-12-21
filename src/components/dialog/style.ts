import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Style of Biography component
export const AddFieldDialogStyled = styled(Box)(({ theme }) => ({
  '& .addFieldDialog-bg': {
    position: 'fixed',
    zIndex: 4,
    top: 0,
    left: 0,
    backgroundColor: theme.palette.neutral.nbl,
    opacity: '70%',
    width: '100vw',
    height: '100vh',
  },
  '& .addFieldDialog-container': {
    position: 'fixed',
    zIndex: 5,
    backgroundColor: theme.palette.neutral.nw,
    width: '588px',
    left: 'calc(50vw - 50%)',
    top: 'calc(50vh - 60%)',
    transform: 'translate(calc(50vw - 50%), calc(50vh - 50%))',
  },
  '& .addFieldDialog-cancelBtn': {
    color: theme.palette.primary.pr50,
  }
}));
