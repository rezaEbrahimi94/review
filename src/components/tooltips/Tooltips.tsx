import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { CrossIcon, FilledInfoIcon, HelpIcon } from '../icons/Icons';
import Typography from '@mui/material/Typography';
import theme from '@/theme/theme';
import Stack from '@mui/material/Stack';
import { TSamTooltipProps } from './type';
import { StyledTooltip } from './style';

export const SamTooltip = ({id, content, placement, dark}: TSamTooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)} >
      <Box>
        <StyledTooltip open={open} id={id} 
          placement={placement}
          className={`SamTooltip ${content.toString().length < 50 ? 'SamTooltip-small' : 
            (content.toString().length < 256 ? 'SamTooltip-large' : 'SamTooltip-xlarge')} 
            ${dark ? 'SamTooltip-dark' : 'SamTooltip-light'}`}
          title={
            <Box className='SamTooltip-content-container '>
              <Box className='SamTooltip-closeIcon SamTooltip-helpIcon' onClick={() => setOpen(false)}>
                <CrossIcon />
              </Box>
              <Typography variant='body1' className='SamTooltip-content'
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </Box>
          }>
          <Box component='span' onClick={() => setOpen(!open)}>
            <HelpIcon sx={{
                '& path': {
                  fill: theme.palette.primary.pr30,
                }
              }}
            />
          </Box>
        </StyledTooltip>
      </Box>
    </ClickAwayListener>
  )
}

export const DefaultTooltip = ({id, content, placement, dark, notShowAgain, open, children, closeConfig}: TSamTooltipProps) => {
  const [isOpen, setIsOpen] = useState(open ? open : false);

  const handleNotShowAgain = () => {
    setIsOpen(false);
    if(closeConfig) {
      closeConfig();
    }
  }

  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)} >
      <Box>
        <StyledTooltip open={isOpen} id={id} 
          placement={placement}
          className={`SamTooltip ${content.toString().length < 50 ? 'SamTooltip-small' : 
            (content.toString().length < 256 ? 'SamTooltip-large' : 'SamTooltip-xlarge')} 
            ${dark ? 'SamTooltip-dark' : 'SamTooltip-light'}`}
          title={
            <Stack className='SamTooltip-content-container'
              direction='row'
              spacing='8px'
            >
              <Box className='SamTooltip-closeIcon' onClick={() => setIsOpen(false)}>
                <CrossIcon />
              </Box>
              <Stack direction='column'
                spacing='8px'
              >
                <FilledInfoIcon sx={{
                  '& path': {
                    fill: theme.palette.tertiary.t50,
                  }
                  }} 
                />
                <Typography variant='body2' className='SamTooltip-content'
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                {notShowAgain ? 
                  <Typography variant='link2' 
                    color='tertiary.t50'
                    sx={{
                      cursor: 'pointer'
                    }}
                    onClick={() => handleNotShowAgain()}
                  >
                    Don&lsquo;t show me this again
                  </Typography>
                  : null
                }
              </Stack>
            </Stack>
          }>
            <Box component='span' onClick={() => setIsOpen(!isOpen)}>
              {children}
            </Box>
          </StyledTooltip>
      </Box>
    </ClickAwayListener>
  )
}
