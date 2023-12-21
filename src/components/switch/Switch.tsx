'use client';

import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import theme from '@/theme/theme';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { TSwitchProps } from '@/components/switch/type';
import { LatoFont } from '@/theme/theme';

const SamTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.pr20,
    color: theme.palette.neutral.nw,
    padding: '8px',
    border: `1px solid ${theme.palette.neutral.n70}`,
    fontFamily: LatoFont.style.fontFamily,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
  }
}))

export const Switch = ({id, name, value, checked, label, description, disabled, onChange}: TSwitchProps) => {
  const [isChecked, setIsChecked] = useState(checked ? checked : false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    if(onChange) {
      onChange();
    }
  }

  return (
    <Box component='label' className='SamSwitch-root'
      sx={{
        position: 'relative',
        display: 'flex',
        cursor: disabled ? 'default' : 'pointer',
        maxWidth: {
          xs: '360px',
          lg: '600px',
        }, 
        '& input[type="checkbox"]': {
          opacity: 0,
          width: 0,
          height: 0,
        },
        '& .SamSwitch-container': {
          display: 'inline',
          m: 'auto 0px auto 24px',
        },
        '& .SamSwitch-content': {
          maxWidth: {
            xs: '276px',
            lg: '420px',
          },
        },
        '& .SamSwitch-slider': {
          backgroundColor: disabled ? theme.palette.neutral.n60 : theme.palette.neutral.n50,
          transition: '.4s',
          position: 'absolute',
          borderRadius: '16px',
          width: '60px',
          height: '32px',
        },
        '& .SamSwitch-slider:before': {
          position: 'absolute',
          content: '""',
          height: '24px', width: '24px',
          left: '4px', bottom: '4px',
          backgroundColor: disabled ? theme.palette.neutral.n50 : theme.palette.neutral.nw,
          transition: '.4s',
          borderRadius: '50%',
        },
        'input:checked + .SamSwitch-slider': {
          backgroundColor: disabled ? theme.palette.neutral.n50 : theme.palette.primary.pr50,
        },
        'input:focus + .SamSwitch-slider': {
          boxShadow: `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.primary.pr50}`,
        },
        'input:checked + .SamSwitch-slider:before': {
          transform: 'translateX(26px)',
          backgroundColor: disabled ? theme.palette.neutral.n60 : theme.palette.neutral.nw,
        }
      }}>
      {label ? 
        <Box display='inline-block' className='SamSwitch-content'>
          <Typography variant='body1' fontWeight={700}
            color={disabled ? (isChecked ? theme.palette.neutral.n60 : theme.palette.neutral.n70) : theme.palette.neutral.n0}
          >
            {label}
          </Typography>
          <Typography variant='body1' 
            color={disabled ? (isChecked ? theme.palette.neutral.n60 : theme.palette.neutral.n70) : theme.palette.neutral.n0}
          >
            {description}
          </Typography>
        </Box>
        : null
      }
      <Box className='SamSwitch-container'>
        <input id={id} type='checkbox' name={name} value={value || ''} disabled={disabled} checked={isChecked}
          onChange={handleSwitchChange} 
        />
        <SamTooltip title={isChecked ? 'On' : 'Off'} sx={{ display: disabled ? 'none' : 'block' }} >
          <Box component='span' className={`SamSwitch-slider ${isChecked ? 'SamSwitch-checked' : ''}`} />
      </SamTooltip>
      </Box>
    </Box>
  )
}
