import { TickInCircleIcon, CrossInCircleIcon } from '@/components/icons/Icons';
import Alert, { AlertProps } from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

/* css style for Textfield's alert */
const AlertStyled = styled((props: AlertProps) => (
  <Alert 
    iconMapping={{
      success: <TickInCircleIcon fontSize="inherit" />,
      error: <CrossInCircleIcon fontSize="inherit" />,
    }} 
    {...props} />
))(({ theme }) => ({
  marginTop: '8px!important',
  borderRadius: '8px',
  padding: '8px',
  // maxWidth: '344px',
  '& .MuiAlert-icon': {
    marginRight: '8px',
  },
  '&.MuiAlert-standardSuccess': {
    backgroundColor: theme.palette.correct.c100,
    '& .MuiSvgIcon-root': {
      color: theme.palette.correct.c50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.correct.c50,
      },
    },
    '& .MuiAlert-message': {
      '& .MuiTypography-root': {
        '& a': {
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          color: theme.palette.correct.c20,
        }
      },
    }
  },
  '&.MuiAlert-outlinedSuccess': {
    backgroundColor: theme.palette.correct.c100,
    border: `2px solid ${theme.palette.correct.c50}`,
    '& .MuiSvgIcon-root': {
      color: theme.palette.correct.c50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.correct.c50,
      },
    },
    '& .MuiAlert-message': {
      '& .MuiTypography-root': {
        '& a': {
          textDecoration: 'underline',
          textUnderlineOffset: '2px',
          color: theme.palette.correct.c20,
        }
      },
    }
  },
  '&.MuiAlert-standardError': {
    backgroundColor: theme.palette.error.e100,
    '& .MuiSvgIcon-root': {
      color: theme.palette.error.e50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.error.e50,
      }
    },
    '& a': {
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
      color: theme.palette.error.e20,
    }
  },
  '&.MuiAlert-outlinedError': {
    backgroundColor: theme.palette.error.e100,
    border: `2px solid ${theme.palette.error.e50}`,
    '& .MuiSvgIcon-root': {
      color: theme.palette.error.e50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.error.e50,
      }
    },
    '& a': {
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
      color: theme.palette.error.e20,
    }
  },
}));

type TTextFieldAlert = {
  severity: 'info' | 'success' | 'warning' | 'error',
  description: string,
}

/* Alert banner for Textfield component */
export const TextFieldAlert = ({severity, description}: TTextFieldAlert) => {
  return (
    <AlertStyled severity={severity}>
      <Typography variant='body2' fontWeight={700} mt='-1px'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </AlertStyled>
  )
}
