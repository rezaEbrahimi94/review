import { styled } from '@mui/material/styles';
import TextField  from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LatoFont } from '@/theme/theme';

/* Style for search text field in desktop mode */
export const SearchTextfieldStyled = styled(TextField)(({theme}) => ({
  '& .MuiOutlinedInput-root': {
    paddingRight: '16px',
    '& input': {
      minWidth: '360px',
      padding: '12px 12px 12px 16px',
      color: theme.palette.neutral.n0,
      fontFamily: LatoFont.style.fontFamily,
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    '& fieldset': {
      minWidth: '360px',
      border: `1px solid ${theme.palette.neutral.n70}`,
      borderRadius: '50px',
      padding: '12px 16px',
      boxShadow: '0px 2px 4px 0px #0000001A',
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
      marginRight: '-10px',
      width: '34px',
      height: '34px',
      backgroundColor: theme.palette.primary.pr100,
      borderRadius: '50%',
      '& svg': {
        '& path': {
          fill: theme.palette.primary.pr50,   
        },
        margin: 'auto',
        fontSize: '21px',
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

/* Style for header in desktop mode */
export const HeaderDesktopStyled = styled(Stack)(() => ({
  '& .SamHeader-desktop-notif, & .SamHeader-desktop-help': {
    cursor: 'pointer',
  }
}))

/* Style for header in mobile mode */
export const HeaderMobileStyled = styled(Stack)(() => ({
  '& .SamHeader-mobile-search, & .SamHeader-mobile-menuIcon': {
    cursor: 'pointer',
  }
}))
