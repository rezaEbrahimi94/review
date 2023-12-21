import Box from '@mui/material/Box'
import React from 'react'
import { TSamCard } from './type'
import Typography from '@mui/material/Typography'
import { SamCardStyled } from './style'
import { SamTooltip } from '../tooltips/Tooltips'
import Stack from '@mui/material/Stack'

const SamCard = (props: TSamCard) => {
  return (
    <SamCardStyled id={props.id}
      className={props.className}
    >
      <Stack direction='row'
        spacing='8px'
        mb='32px'
        alignItems='center'
      >
        <Typography color='neutral.n0'
          variant='h3'
        >
          {props.title}
        </Typography>
        {props.tooltip ? 
          <SamTooltip id={`${props.id}-tooltip`}
            content={props.tooltip}          
          />
          : ''
        }
      </Stack>
      <Box className='SamCard-Children'>
        {props.children}
      </Box>
    </SamCardStyled>
  )
}

export default SamCard