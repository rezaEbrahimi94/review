'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox, {CheckboxProps} from '@mui/material/Checkbox';
import theme from '@/theme/theme';
import { styled } from '@mui/material/styles';
import { TCheckboxProps } from '@/components/checkbox/type';

/* SamCheckbox component
  Checkbox with wrapper outside
  Include label and description of checkbox
*/
export const SamCheckbox = ({id, name, value, checked, label, description, disabled, hasError}: TCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <Box 
      sx={{ 
        padding: isChecked ? '15px' : '16px',
        border: isChecked ? (disabled ? `2px solid ${theme.palette.neutral.n60}` : `2px solid ${theme.palette.primary.pr70}`) 
            : (disabled ? `1px solid ${theme.palette.neutral.n70}` : `1px solid ${theme.palette.neutral.n0}`),
        borderColor: hasError ? `${theme.palette.error.e50}!important` : null,
        borderRadius: '8px',
        '&:hover': {
          padding: disabled ? (isChecked ? '15px' : '16px') : '15px',
          border: disabled ? (isChecked ? `2px solid ${theme.palette.neutral.n60}` : `1px solid ${theme.palette.neutral.n70}`) 
            : (isChecked ? `2px solid ${theme.palette.primary.pr70}` : `2px solid ${theme.palette.neutral.n0}`),
          '& .SamCheckbox': {
            border: isChecked ? (disabled ? `1px solid ${theme.palette.neutral.n60}` : `1px solid ${theme.palette.primary.pr70}`) 
              : (disabled ? `1px solid ${theme.palette.neutral.n70}` : `2px solid ${theme.palette.neutral.n0}`),
          }
        },
        '&:focus-within': {
          padding: '15px',
          border: `2px solid ${theme.palette.primary.pr70}`,
          outline: 'none',
          boxShadow: isChecked ? `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.primary.pr70}` : '',
          '& .SamCheckbox': {
            boxShadow: isChecked ? `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.primary.pr70}` : '',
            border: `1px solid ${theme.palette.primary.pr70}`,
          }
        }
      }}
    >
      <Box component='label'
        sx={{
          display: 'block',
          width: '100%',
          color: 'neutral.n0',
          '& input[type="checkbox"]': {
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            position: 'absolute',
            whiteSpace: 'nowrap',
            border: `1px solid ${theme.palette.neutral.n0}`,
          },
          '& .SamCheckbox': {
            display: 'inline-block',
            width: '24px',
            height: '24px',
            background: `${theme.palette.neutral.nw}`,
            border: disabled ? `1px solid ${theme.palette.neutral.n70}` : `1px solid ${theme.palette.neutral.n0}`,
            borderRadius: '4px',
            borderColor: hasError ? `${theme.palette.error.e50}!important` : null,
            marginRight: '12px',
            marginBottom: '5px',
          },
          '& .SamCheckbox-checked': {
            borderColor: disabled ? theme.palette.neutral.n60 : theme.palette.primary.pr50,
            backgroundColor: disabled ? theme.palette.neutral.n60 : theme.palette.primary.pr50,
          }
        }}
      >
        <input id={id} type='checkbox' name={name} value={value} disabled={disabled} checked={isChecked}
         onChange={() => {setIsChecked(!isChecked);}} 
        />
        <Box component='svg' className={`SamCheckbox ${isChecked ? 'SamCheckbox-checked' : ''}`} 
          viewBox='0 0 24 24'
          fill='none'
          aria-hidden='true'>
            <path 
              d="M18 8.66656L9.99998 16.6666L6.33331 12.9999L7.27331 12.0599L9.99998 14.7799L17.06 7.72656L18 8.66656Z" fill="white"
              stroke={isChecked ? '#fff' : 'none'}
            />
        </Box>
        <Box display='inline-block'>
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
      </Box>

    </Box>
  )
}

/* Default checkbox component
checkbox without wrapper outside */
export const DefaultCheckbox = styled((props: CheckboxProps) => (
  <Checkbox
    {...props} 
  />
))({
  '& .MuiSvgIcon-root': {
    fill: theme.palette.neutral.n0,
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    fill: `${theme.palette.primary.pr50}!important`,
  }
});
