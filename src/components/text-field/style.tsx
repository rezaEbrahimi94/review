import { styled } from '@mui/material/styles';
import TextField , {TextFieldProps} from '@mui/material/TextField';
import { LatoFont } from '@/theme/theme';

export const TextFieldStyled = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    paddingRight: '16px',
    '& input': {
      padding: '12px 12px 12px 16px',
      color: theme.palette.neutral.n0,
      fontFamily: LatoFont.style.fontFamily,
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      backgroundColor: theme.palette.neutral.nw,
    },
    '& input:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.neutral.nw} inset`,
      WebkitTextFillColor: theme.palette.neutral.n0,
    },
    '& fieldset': {
      border: `1px solid ${theme.palette.neutral.n0}`,
      borderRadius: '8px',
      padding: '12px 16px',
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