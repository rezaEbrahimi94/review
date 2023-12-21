import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    fontFamily: ['Lato', 'sans-serif'].join(','),
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    borderRadius: '8px',
    '& .SamTooltip-content': {
      textAlign: 'left',
      '& a': {
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
      },
    },
    '& .SamTooltip-content-container': {
      display: 'flex',
      flexDirection: 'row-reverse',
      '& .SamTooltip-closeIcon': {
        float: 'right',
        marginLeft: '10px',
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .SamTooltip-closeIcon': {
        display: 'block'
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .SamTooltip-closeIcon.SamTooltip-helpIcon': {
        display: 'none'
      }
    },
  },
  '&.SamTooltip-light': {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.neutral.nw,
      color: theme.palette.neutral.n0,
      border: `1px solid ${theme.palette.neutral.n70}`,
      marginTop: '8px!important',
      marginBottom: '20px!important',
      '& .SamTooltip-closeIcon svg path': {
        fill: theme.palette.neutral.n0,
      }
    },
    [`& .${tooltipClasses.tooltip} .MuiTooltip-arrow`]: {
      color: theme.palette.neutral.nw,
      '&:before': {
        border: `1px solid ${theme.palette.neutral.n70}`,
      }
    },
    '& .SamTooltip-content': {
      '& a': {
        color: theme.palette.tertiary.t50,
      },
    },
  },
  '&.SamTooltip-dark': {
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.pr20,
      color: theme.palette.neutral.nw,
      border: `1px solid ${theme.palette.neutral.n70}`,
      marginTop: '8px!important',
      marginBottom: '20px!important',
      '& .SamTooltip-closeIcon svg path': {
        fill: theme.palette.neutral.nw,
      }
    },
    [`& .${tooltipClasses.tooltip} .MuiTooltip-arrow`]: {
      color: theme.palette.primary.pr20,
      '&:before': {
        border: `1px solid ${theme.palette.neutral.n70}`,
      }
    },
    '& .SamTooltip-content': {
      '& a': {
        color: theme.palette.neutral.nw,
      },
    },
  },
  [theme.breakpoints.down('md')]: {
    '&.SamTooltip-small': {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: '8px'
      },
    },
    '&.SamTooltip-large': {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: '16px',
        maxWidth: '100vw',
      },
    },
    '&.SamTooltip-xlarge': {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: '16px',
        maxWidth: '100vw',
      },
    },
  },
  [theme.breakpoints.up('md')]: {
    '&.SamTooltip-small': {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: '8px'
      },
    },
    '&.SamTooltip-large': {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: '32px',
        maxWidth: '298px',
      },
    },
    '&.SamTooltip-xlarge': {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: '32px',
        maxWidth: '496px',
      },
    },
  },
}));
