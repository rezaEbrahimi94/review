import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

/* Css style for forget password by username form */
export const ResetPasswordPageStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.nw,
  height: '100vh',
  width: '100vw',
  '& .ResetPwd-bgImg': {
    position: 'absolute',
    zIndex: '1',
    width: '100vw',
    backgroundColor: '#4137B7',
    // Desktop view
    [theme.breakpoints.up('lg')]: {
      height: '367px',
    },
    // Tablet view
    [theme.breakpoints.down('lg')]: {
      height: '50vh',
    },
  },
  '& .ResetPwd-form-container': {
    position: 'absolute',
    zIndex: '2',
    // Desktop view
    [theme.breakpoints.up('lg')]: {
      left: 'calc(50vw - 50%)',
      top: 'calc(50vh - 60%)',
      transform: 'translate(calc(50vw - 50%), calc(50vh - 60%))',
      width: '432px',
    },
    // Tablet view
    [theme.breakpoints.down('lg')]: {
      left: 'calc(50vw - 50%)',
      top: 'calc(50vh - 60%)',
      transform: 'translate(calc(50vw - 50%), calc(50vh - 60%))',
      width: '432px',
    },
    // Mobile view
    [theme.breakpoints.down('md')]: {
      left: 'calc(50vw - 50%)',
      top: 'calc(50vh - 60%)',
      transform: 'translate(calc(50vw - 50%), calc(50vh - 60%))',
      width: '100%',
      '& .ResetPwd-form': {
        boxShadow: 'none!important',
      }
    },
    '& .ResetPwd-form-logo': {
      textAlign: 'center',
    },
    '& .ResetPwd-form': {
      borderRadius: '8px',
      marginTop: '36.4px',
      boxShadow: '0px 2px 4px 0px #0000001A',
      backgroundColor: theme.palette.neutral.nw,
      padding: '40px 61px 40px 48px',
      '& .MuiInputBase-root': {
        paddingRight: '0px',
      },
      '& .ResetPwd-prev': {
        cursor: 'pointer',
        marginBottom: '24px',
        '& path': {
          fill: theme.palette.primary.pr50,
        }
      },
    },
    '& .Signup-confirmForm-container': {
      borderRadius: '8px',
      marginTop: '36.4px',
      boxShadow: '0px 2px 4px 0px #0000001A',
      backgroundColor: theme.palette.neutral.nw,
      padding: '40px 61px 40px 48px',
      '& .MuiInputBase-root': {
        paddingRight: '0px',
      },
    },
  },
  '& .ResetPwd-goback': {
    position: 'absolute',
    zIndex: '2',
    bottom: 0,
    right: 0,
    left: 0,
    marginBottom: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  '& .MuiAlert-root': {
    marginTop: '24px',
  },
}));

// Style of change password form
export const ChangePasswordPageStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.nw,
  height: '100vh',
  width: '100vw',
  '& .ChangePwd-bgImg': {
    position: 'absolute',
    zIndex: '1',
    width: '100vw',
    backgroundColor: '#4137B7',
    // Desktop view
    [theme.breakpoints.up('lg')]: {
      height: '367px',
    },
    // Tablet view
    [theme.breakpoints.down('lg')]: {
      height: '50vh',
    },
  },
  '& .ChangePwd-form-container': {
    position: 'absolute',
    zIndex: '2',
    // Desktop view
    [theme.breakpoints.up('lg')]: {
      left: 'calc(50vw - 50%)',
      top: 'calc(50vh - 60%)',
      transform: 'translate(calc(50vw - 50%), calc(50vh - 60%))',
      width: '432px',
    },
    // Tablet view
    [theme.breakpoints.down('lg')]: {
      left: 'calc(50vw - 50%)',
      top: 'calc(50vh - 60%)',
      transform: 'translate(calc(50vw - 50%), calc(50vh - 60%))',
      width: '432px',
    },
    // Mobile view
    [theme.breakpoints.down('md')]: {
      left: 'calc(50vw - 50%)',
      top: 'calc(50vh - 60%)',
      transform: 'translate(calc(50vw - 50%), calc(50vh - 60%))',
      width: '100%',
      '& .ChangePwd-form': {
        boxShadow: 'none!important',
      }
    },
    '& .ChangePwd-form-logo': {
      textAlign: 'center',
    },
    '& .ChangePwd-form': {
      borderRadius: '8px',
      marginTop: '36.4px',
      boxShadow: '0px 2px 4px 0px #0000001A',
      backgroundColor: theme.palette.neutral.nw,
      padding: '40px 61px 40px 48px',
      '& .MuiInputBase-root': {
        paddingRight: '0px',
      },
      '& .password-container': {
        '& .MuiInputBase-root': {
          paddingRight: '16px',
        },
      },
      '& .ChangePwd-prev': {
        cursor: 'pointer',
        marginBottom: '24px',
        '& path': {
          fill: theme.palette.primary.pr50,
        }
      },
      '& .ChangePwd-form-signinForm': {
        '& .ChangePwd-signinForm-logo': {
          fontSize: '40px',
          '& path': {
            fill: theme.palette.correct.c50,
          }
        }
      },
      '& .ChangePwd-error': {
        '& .ChangePwd-error-cross path': {
          fill: theme.palette.secondary.s50,
        },
        '& .ChangePwd-error-tick path': {
          fill: theme.palette.correct.c50,
        },
        '& b': {
          color: theme.palette.neutral.n0,
        }
      }
    },
  },
  '& .ChangePwd-goback': {
    position: 'absolute',
    zIndex: '2',
    bottom: 0,
    right: 0,
    left: 0,
    marginBottom: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  '& .MuiAlert-root': {
    marginTop: '24px',
  },
}));
