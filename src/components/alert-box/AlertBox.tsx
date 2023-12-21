'use client';

import { styled } from '@mui/material/styles';
import Alert, { AlertProps } from '@mui/material/Alert';
import AlertTitle, { AlertTitleProps } from '@mui/material/AlertTitle';
import { TickInCircleIcon, AlertIcon, 
  CrossInCircleIcon, CrossIcon, FilledInfoIcon } from '@/components/icons/Icons';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { MontserratFont } from '@/theme/theme';

type TSamAccordionProps = {
  id?: string,
  severity: 'info' | 'success' | 'warning' | 'error',
  title?: string,
  description: string,
  variant?: 'standard' | 'outlined',
}

const AlertStyled = styled((props: AlertProps) => (
  <Alert 
    iconMapping={{
      info: <FilledInfoIcon fontSize="inherit" />,
      success: <TickInCircleIcon fontSize="inherit" />,
      warning: <AlertIcon fontSize="inherit" />,
      error: <CrossInCircleIcon fontSize="inherit" />,
    }} 
    {...props} />
))(({ theme }) => ({
  borderRadius: '8px',
  padding: '24px 16px',
  '&.MuiAlert-standardInfo': {
    backgroundColor: theme.palette.tertiary.t100,
    '& .MuiSvgIcon-root': {
      color: theme.palette.tertiary.t50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.tertiary.t50,
      }
    },
    '& .SamAlert-description': {
      '& a': {
        textDecoration: 'underline',
        fontWeight: 700,
        textUnderlineOffset: '2px',
        color: theme.palette.tertiary.t50,
      }
    },
  },
  '&.MuiAlert-outlinedInfo': {
    backgroundColor: theme.palette.tertiary.t100,
    border: `2px solid ${theme.palette.tertiary.t50}`,
    '& .MuiSvgIcon-root': {
      color: theme.palette.tertiary.t50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.tertiary.t50,
      }
    },
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.tertiary.t50,
      }
    },
  },
  '&.MuiAlert-standardSuccess': {
    backgroundColor: theme.palette.correct.c100,
    '& .MuiSvgIcon-root': {
      color: theme.palette.correct.c50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.correct.c50,
      }
    },
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.correct.c20,
      }
    },
  },
  '&.MuiAlert-outlinedSuccess': {
    backgroundColor: theme.palette.correct.c100,
    border: `2px solid ${theme.palette.correct.c50}`,
    '& .MuiSvgIcon-root': {
      color: theme.palette.correct.c50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.correct.c50,
      }
    },
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.correct.c20,
      }
    },
  },
  '&.MuiAlert-standardWarning': {
    backgroundColor: theme.palette.warning.w100,
    '& .MuiSvgIcon-root': {
      color: theme.palette.warning.w50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.warning.w50,
      }
    },
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.warning.w20,
      }
    },
  },
  '&.MuiAlert-outlinedWarning': {
    backgroundColor: theme.palette.warning.w100,
    border: `2px solid ${theme.palette.warning.w50}`,
    '& .MuiSvgIcon-root': {
      color: theme.palette.warning.w50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.warning.w50,
      }
    },
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.warning.w20,
      }
    },
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
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.error.e20,
      }
    },
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
    '& .SamAlert-description': {
      '& a': {
        fontWeight: 700,
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        color: theme.palette.error.e20,
      }
    },
  },
}));

const SamAlertTitle = styled((props: AlertTitleProps) => (
  <AlertTitle {...props} />
))(({ theme }) => ({
  color: theme.palette.neutral.n0,
  fontWeight: '700',
  fontSize: '18px',
  fontFamily: MontserratFont.style.fontFamily,
}));

export const SamAlert = ({id, severity, variant, title, description}: TSamAccordionProps) => {
  const [alertDisplay, setAlertDisplay] = useState(true);

  const handleCloseAlert = () => {
    setAlertDisplay(!alertDisplay);
  }

  return (
    <AlertStyled id={id} severity={severity} variant={variant} 
      sx={{
        display: alertDisplay ? 'flex' : 'none',
      }}
    >
      <IconButton onClick={handleCloseAlert}
        sx={{ 
          display: {xs: 'inline-block', md: 'none'},
          float: 'right',
          marginTop: '-20px',
        }} 
      >
        <CrossIcon sx={{ color: '#201E38!important' }} />
      </IconButton>
      {title ? 
        <SamAlertTitle>
          {title} 
        </SamAlertTitle>
        : ''}
      <Typography variant='body2' fontWeight={(variant == 'standard' || title) ? 400 : 700}
        className='SamAlert-description'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </AlertStyled>
  )
}
