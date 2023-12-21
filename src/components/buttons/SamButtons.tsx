'use client';

import { styled } from '@mui/material/styles';
import Button, {ButtonProps} from '@mui/material/Button';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { LatoFont, MontserratFont } from '@/theme/theme';
interface ISamButtonProps extends ButtonProps {
  label?: string,
}

interface ISamIconButtonProps extends IconButtonProps {
  helpText?: string,
}

const SamTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip placement='bottom' {...props} classes={{ popper: className }} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.secondary.s20,
    color: theme.palette.neutral.nw,
    padding: '8px',
    border: `1px solid ${theme.palette.neutral.n70}`,
    fontFamily: LatoFont.style.fontFamily,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '8px!important',
  }
}))

export const FilledButton = styled(({label, ...props }: ISamButtonProps) => (
  <Button {...props}>{label}</Button>
))(({ theme }) => ({
  minWidth: '140px',
  backgroundColor: theme.palette.secondary.s50,
  color: theme.palette.neutral.n0,
  border: 'none', 
  borderRadius: '8px',
  padding: '13px 24px 13px 24px',
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: '700',
  fontSize: '14px',
  textTransform: 'inherit',
  transition: theme.transitions.create(['background'], {
    duration: theme.transitions.duration.shortest,
  }),
  '& .MuiSvgIcon-root': {
    fontSize: '16px!important',
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.s40,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.s30,
  },
  '&:focus-visible': {
    border: 'none',
    backgroundColor: theme.palette.secondary.s50,
    boxShadow: `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.secondary.s30}`,
    outlineColor: 'transparent',
    transition: '.1s',
  },
  '&:disabled' : {
    border: 'none',
    backgroundColor: theme.palette.neutral.n90,
    color: theme.palette.neutral.n60,
    '& path': {
      fill: theme.palette.neutral.n60,
    }
  }
}));

export const OutlinedButton = styled(({label, ...props }: ISamButtonProps) => (
  <Button {...props}>{label}</Button>
))(({ theme }) => ({
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: '700',
  color: theme.palette.neutral.n0,
  borderRadius: '8px',
  border: `1px solid ${theme.palette.neutral.n60}`,
  padding: '13px 24px 13px 24px',
  fontSize: '14px',
  textTransform: 'inherit',
  transition: theme.transitions.create(['background'], {
    duration: theme.transitions.duration.shortest,
  }),
  '& .MuiSvgIcon-root': {
    fontSize: '16px!important',
  },
  '&:hover': {
    border: `1px solid ${theme.palette.secondary.s30}`,
  },
  '&:active': {
    border: `1px solid ${theme.palette.neutral.n50}`,
  },
  '&:focus-visible': {
    border: `1px solid ${theme.palette.neutral.n60}`,
    boxShadow: `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.secondary.s30}`,
    outlineColor: 'transparent',
    transition: '.1s',
  },
  '&:disabled' : {
    border: `1px solid ${theme.palette.neutral.n70}`,
    color: theme.palette.neutral.n70,
    '& path': {
      fill: theme.palette.neutral.n70,
    }
  }
}));

export const GhostButton = styled(({label, ...props }: ISamButtonProps) => (
  <Button {...props}>{label}</Button>
))(({ theme }) => ({
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: '700',
  color: theme.palette.neutral.n0,
  borderRadius: '8px',
  border: 'none',
  padding: '13px 24px 13px 24px',
  fontSize: '14px',
  textTransform: 'inherit',
  transition: theme.transitions.create(['background'], {
    duration: theme.transitions.duration.shortest,
  }),
  '& .MuiSvgIcon-root': {
    fontSize: '16px!important',
  },
  '&:hover': {
    color: theme.palette.secondary.s30,
    border: 'none',
  },
  '&:active': {
    color: theme.palette.secondary.s20,
    border: 'none',
  },
  '&:focus-visible': {
    border: `1px solid ${theme.palette.secondary.s30}`,
    outlineColor: 'transparent',
    transition: '.1s',
  },
  '&:disabled' : {
    color: theme.palette.neutral.n70,
    border: 'none',
    '& path': {
      fill: theme.palette.neutral.n70,
    }
  }
}));

export const SamIconButton = styled(({helpText, ...props }: ISamIconButtonProps) => (
  <SamTooltip title={helpText}>
    <IconButton {...props} />
  </SamTooltip>
))(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: '16px!important',
  },
  '& .MuiIconButton-root': {
    fontFamily: MontserratFont.style.fontFamily,
    color: theme.palette.neutral.n0,
    borderRadius: '50%',
    border: 'none',
    padding: '4px',
    fontSize: '14px',
    textTransform: 'inherit',
    transition: theme.transitions.create(['background'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.s50,
    border: 'none',
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.s40,
    border: 'none',
  },
  '&:focus-visible': {
    border: `1px solid ${theme.palette.secondary.s40}`,
    backgroundColor: theme.palette.secondary.s100,
    outlineColor: 'transparent',
    transition: '.1s',
  },
  '&:disabled' : {
    color: theme.palette.neutral.n70,
    backgroundColor: 'none',
    border: 'none',
    '& path': {
      fill: theme.palette.neutral.n70,
    }
  }
}));

export const FilledIconButton = styled(({helpText, ...props }: ISamIconButtonProps) => (
  <SamTooltip title={helpText}>
    <IconButton {...props} />
  </SamTooltip>
))(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: '24px!important',
    '& svg': {
      fontSize: '24px!important',
      '& path': {
        fill: theme.palette.neutral.n0,
      }
    }
  },
  '&.MuiIconButton-root': {
    backgroundColor: theme.palette.secondary.s50,
    color: theme.palette.neutral.n0,
    borderRadius: '50%',
    border: 'none',
    padding: '24px',
    fontSize: '14px',
    textTransform: 'inherit',
    transition: theme.transitions.create(['background'], {
      duration: theme.transitions.duration.shortest,
    }),
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.s40,
    border: 'none',
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.s30,
    border: 'none',
  },
  '&:focus-visible': {
    border: 'none',
    backgroundColor: theme.palette.secondary.s50,
    boxShadow: `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.secondary.s30}`,
    outlineColor: 'transparent',
    transition: '.1s',
  },
  '&:disabled' : {
    color: theme.palette.neutral.n70,
    backgroundColor: 'none',
    border: 'none',
    '& path': {
      fill: theme.palette.neutral.n70,
    }
  }
}));
