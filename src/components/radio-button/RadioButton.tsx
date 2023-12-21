'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import theme from '@/theme/theme';
import { TRadioButtonProps } from '@/components/radio-button/type';

export const RadioButton = ({id, name, value, checked, label, description, 
    disabled, hasError}: TRadioButtonProps) => {
  // const [isChecked, setIsChecked] = useState(checked);

  return (
    <Box className='RadioButton-root'
      sx={{ 
        padding: checked ? '15px' : '16px',
        border: checked ? (disabled ? `2px solid ${theme.palette.neutral.n60}` : `2px solid ${theme.palette.primary.pr70}`) 
            : (disabled ? `1px solid ${theme.palette.neutral.n70}` : `1px solid ${theme.palette.neutral.n0}`),
        borderColor: hasError ? `${theme.palette.error.e50}!important` : null,
        borderRadius: '8px',
        '&:hover': {
          padding: disabled ? (checked ? '15px' : '16px') : '15px',
          border: disabled ? (checked ? `2px solid ${theme.palette.neutral.n60}` : `1px solid ${theme.palette.neutral.n70}`) 
            : (checked ? `2px solid ${theme.palette.primary.pr70}` : `2px solid ${theme.palette.neutral.n0}`),
          '& .SamRadio': {
            border: checked ? (disabled ? `1px solid ${theme.palette.neutral.n60}` : `1px solid ${theme.palette.primary.pr70}`) 
              : (disabled ? `1px solid ${theme.palette.neutral.n70}` : `2px solid ${theme.palette.neutral.n0}`),
          }
        },
        '&:focus-within': {
          padding: '15px',
          border: `2px solid ${theme.palette.primary.pr70}`,
          boxShadow: checked ? `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.primary.pr70}` : '',
          '& .SamRadio': {
            boxShadow: checked ? `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.primary.pr70}` : '',
            border: `2px solid ${theme.palette.primary.pr70}`,
          }
        },
      }}
    >
      <Stack direction='row' 
        component='label'
        alignItems='center' 
        sx={{
          width: '100%',
          color: 'neutral.n0',
          '& input[type="radio"]': {
            clipPath: 'circle(24px)',
            width: '0.1px',
            height: '0.1px',
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            whiteSpace: 'nowrap',
            border: `1px solid ${theme.palette.neutral.n0}`,
          },
          '& .SamRadio': {
            display: 'inline-block',
            width: '24px',
            height: '24px',
            background: `${theme.palette.neutral.nw}`,
            border: disabled ? `1px solid ${theme.palette.neutral.n70}` : `1px solid ${theme.palette.neutral.n0}`,
            borderRadius: '50%',
            borderColor: hasError ? `${theme.palette.error.e50}!important` : null,
            marginRight: '12px',
            // marginBottom: '5px',
          },
          '& .SamRadio-checked': {
            borderColor: disabled ? theme.palette.neutral.n60 : theme.palette.primary.pr50,
          },
          '& .RadioButton-LabelContainer': {
            position: 'static!important',
          }
        }}
      >
        <Box>
          <input id={id} type='radio' name={name} disabled={disabled}  value={value}
            checked={checked} readOnly
          />
          <Box component='svg' className={`SamRadio ${checked ? 'SamRadio-checked' : ''}`} 
            viewBox='0 0 24 24'
            fill='none'
            aria-hidden='true'>
              <circle cx="12" cy="12" r="8" fill="#601DEC" display={checked ? 'block' : 'none'} />
          </Box>
        </Box>
        <Stack className='RadioButton-LabelContainer' 
          direction='column'
        >
          <Typography variant='body1' fontWeight={700}
            color={disabled ? (checked ? theme.palette.neutral.n60 : theme.palette.neutral.n70) : theme.palette.neutral.n0}
          >
            {label}
          </Typography>
          {description ? 
            <Typography variant='body1' 
              color={disabled ? (checked ? theme.palette.neutral.n60 : theme.palette.neutral.n70) : theme.palette.neutral.n0}
            >
              {description}
            </Typography>
            : null
          }
        </Stack>
      </Stack>

    </Box>
  )
}
