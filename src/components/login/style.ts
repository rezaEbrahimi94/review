import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export const LoginPageStyled = styled(Grid)(({ theme }) => ({
  height: '100vh',
  '& .Welcome-root': {
    backgroundColor: '#4137B7',
    // Desktop view
    [theme.breakpoints.up('lg')]: {
      '& .Welcome-description-container': {
        maxWidth: '574px',
        transform: 'translate(0, calc(50vh - 50%))',
        marginLeft: '101px',
        marginRight: '101px',
      },
    },
    // Tablet view
    [theme.breakpoints.down('lg')]: {
      '& .Welcome-description-container': {
        maxWidth: '522px',
        margin: '80px auto auto auto',
      },
    },
    // Mobile view
    [theme.breakpoints.down('md')]: {
      '& .Welcome-description-container': {
        maxWidth: '100%',
        margin: '76px 32px auto 32px',
      },
    },
  },
  '& .Signin-root': {
    backgroundColor: theme.palette.neutral.nw,

    // Desktop view
    [theme.breakpoints.up('lg')]: {
      '& .Signin-container': {
        maxWidth: '323px',
        transform: 'translate(0, calc(50vh - 50%))',
        marginLeft: '129px',
        marginRight: '146px',
      },
    },
    // Tablet view
    [theme.breakpoints.down('lg')]: {
      '& .Signin-container': {
        maxWidth: '566px',
        transform: 'translate(0, calc(-40%))',
        margin: 'auto',
        padding: '40px',
        boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.neutral.nw,
        borderRadius: '8px',
        '& .Signin-innerContainer': {
          maxWidth: '323px',
          margin: 'auto',
        },
      },
    },
    // Mobile view
    [theme.breakpoints.down('md')]: {
      '& .Signin-container': {
        maxWidth: '100vw',
        transform: 'translate(0, calc(-50%))',
        margin: 'auto',
        padding: '24px',
        boxShadow: 'none',
      },
    },

    '& .Signin-container': {
      '& .username-container .MuiInputBase-root': {
        paddingRight: '0px',
      },
      '& .MuiCheckbox-root': {
        marginLeft: '-12px',
        '&.Mui-checked': {
          color: theme.palette.primary.pr50,
        }
      },
      '& .Signin-btn svg': {
        transform: 'rotate(180deg)',
      }
    },
    '& .Signin-btnContainer': {
      marginTop: '24px',
    }
  },
  '& .DefaultSpinner': {
    width: '36px',
    height: '36px',
    borderWidth: '6px',
  }
}));
