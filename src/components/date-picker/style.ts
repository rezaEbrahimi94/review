import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { LatoFont } from '@/theme/theme';

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginTop: '4px',
  '& label': {
    color: `#6A697A!important`,
    textAlign: 'center!important',
    width: '100%',
    left: '-3px!important',
    top: '-4px!important',
  },
  '& .MuiOutlinedInput-root': {
    // paddingRight: '16px',
    '& input': {
      [theme.breakpoints.up('xs')]: {
        padding: '8px 12px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '12px 16px',
      },
      color: theme.palette.neutral.n0,
      fontFamily: LatoFont.style.fontFamily,
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      textAlign: 'center',
    },
    '& input:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.neutral.nw} inset`,
      WebkitTextFillColor: theme.palette.neutral.n0,
    },
    '& fieldset': {
      border: `1px solid ${theme.palette.neutral.n0}`,
      borderRadius: '8px',
      padding: {xs: '8px 0px', lg: '12px 0px'},
    
    },
    '&:hover fieldset': {
      border: `2px solid ${theme.palette.neutral.n0}`,
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.pr50}`,
    },
    '&.Mui-error': {
      '& fieldset': {
        border: `2px solid ${theme.palette.error.e50}`,
      },
    },
    '& .MuiInputAdornment-root': {
      marginRight: '0px',
      '& svg': {
        width: '20px', height: '20px',
        color: theme.palette.neutral.n0,   
        '& path': {
          fill: theme.palette.neutral.n60,
        }
      }
    },
    '&.Mui-disabled': {
      color: theme.palette.neutral.n60,
      '& fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '&:hover fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '& .MuiInputAdornment-root': {
        '& svg': {
          color: theme.palette.neutral.n60,
          '& path': {
            fill: theme.palette.neutral.n60,
          }
        },
      },
    },
  },
  '&.Mui-success': {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${theme.palette.correct.c50}`,
      },
    }
  },
}));
