import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

/* Style of Artist Address component */
export const MediaUploadStyled = styled(Stack)(({ theme }) => ({
  maxWidth: '400px',
  height: '124px',
  padding: '20px 0px',
  // border: `4px dashed ${theme.palette.primary.pr80}`,
  background: `linear-gradient(to right, ${theme.palette.primary.pr80} 45%, #fff 0%) top/25px 2px repeat-x, 
    linear-gradient(${theme.palette.primary.pr80} 45%, #fff 0%) right/2px 25px repeat-y, 
    linear-gradient(to right, ${theme.palette.primary.pr80} 45%, #fff 0%) bottom/25px 2px repeat-x, 
    linear-gradient(${theme.palette.primary.pr80} 45%, #fff 0%) left/2px 25px repeat-y`,
  borderRadius: '8px',
  cursor: 'pointer',
  '& .mediaUpload-icon': {
    '& path': {
      fill: theme.palette.primary.pr50,
    }
  }, 
  '& .mediaUpload-browse': {
    textDecoration: 'underline', 
    textUnderlineOffset: '2px',
  }
}));

/* Style of Artist Address component */
export const UploadItemStyled = styled(Stack)(({ theme }) => ({
  maxWidth: '400px',
  padding: '16px',
  border: `1px solid ${theme.palette.neutral.n80}`,
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
  '& .uploadItem-completeIcon': {
    '& path': {
      fill: theme.palette.primary.pr50,
    }
  }, 
  '& .uploadItem-cancelBtn': {
    textDecoration: 'underline', 
    textUnderlineOffset: '2px',
  },
  '& .uploadItem-progressBar': {
    width: '100%',
    height: '4px',
    '& .MuiLinearProgress-root': {
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.primary.pr80,
      borderRadius: '50px',
    },
  }
}));
