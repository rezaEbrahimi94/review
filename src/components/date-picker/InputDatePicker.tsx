'use client';

import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Alert, { AlertProps } from '@mui/material/Alert';
import { AsteriskIcon, CrossInCircleIcon, TickInCircleIcon } from '@/components/icons/Icons';
import { TextFieldStyled } from '@/components/date-picker/style';
import { TInputDatePicker } from '@/components/date-picker/type';

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
  maxWidth: '360px',
  '& .MuiAlert-icon': {
    marginRight: '8px',
  },
  '&.MuiAlert-standardSucces': {
    backgroundColor: theme.palette.correct.c100,
    '& .MuiSvgIcon-root': {
      color: theme.palette.correct.c50,
      fontSize: '20px',
      '& path': {
        fill: theme.palette.correct.c50,
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
  },
}));

type TTextFieldAlert = {
  severity: 'info' | 'success' | 'warning' | 'error',
  description: string,
}

const TextFieldAlert = ({severity, description}: TTextFieldAlert) => {
  return (
    <AlertStyled severity={severity}>
      <Typography variant='body2' fontWeight={700} mt='-1px'>{description}</Typography>
    </AlertStyled>
  )
}

/* Input date picker component
  Field to input day, month, year are separated
*/
export const InputDatePicker = ({id, label, required, errorMessage, value,
    success, disabled, onChange, setFormError}: TInputDatePicker) => {
  const [day, setDay] = useState(value ? value.split('/')[0] : '');
  const [month, setMonth] = useState(value ? value.split('/')[1] :'');
  const [year, setYear] = useState(value ? value.split('/')[2] :'');
  const [time, setTime] = useState(value ? value : '');
  const [fieldError, setFieldError] = useState(errorMessage ? errorMessage : '');

  // Check if input string is number
  const isNumber = (number: string) => {
    return !isNaN(parseInt(number));
  } 
  
  // const to handle when day field changes
  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let errorMess = '';
    if(event.currentTarget.value) {
      const newValue = event.currentTarget.value;
      if(isNumber(newValue)) {
        const changedTime = month + '-' + newValue + '-' + year;
        const newDate = new Date(changedTime).toLocaleDateString('en-US');
        if(newDate.toString() == 'Invalid Date') {
          errorMess = 'Invalid date format.' ;
        } else {
          setDay(newValue);
          setTime(newDate);
          errorMess = '';
          if(onChange) {
            onChange(newDate);
          }
        }
      } else {
        errorMess = 'Invalid date format.' ;
      }
    } else {
      if(month == '' && year == '') {
        if(required) {
          errorMess = 'The field is required.'
        } else {
          setTime('');
        }
      } else {
        setTime('');
      }
    }
    setFieldError(errorMess);
    if(setFormError) {
      setFormError(errorMess);
    }
  }

  // const to handle when month field changes
  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let errorMess = '';
    if(event.currentTarget.value) {
      const newValue = event.currentTarget.value;
      if(isNumber(newValue)) {
        const changedTime = newValue + '-' + day + '-' + year;
        const newDate = new Date(changedTime).toLocaleDateString('en-US');
        if(newDate.toString() == 'Invalid Date') {
          errorMess = 'Invalid date format.' ;
        } else {
          setMonth(newValue);
          setTime(newDate);
          errorMess = '';
          if(onChange) {
            onChange(newDate);
          }
        }
      } else {
        errorMess = 'Invalid date format.' ;
      }
    } else {
      if(day == '' && year == '') {
        if(required) {
          errorMess = 'The field is required.'
        } else {
          setTime('');
        }
      } else {
        setTime('');
      }
    }
    setFieldError(errorMess);
    if(setFormError) {
      setFormError(errorMess);
    }
  }

  // const to handle when year field changes
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let errorMess = '';
    if(event.currentTarget.value) {
      const newValue = event.currentTarget.value;
      if(isNumber(newValue)) {
        const changedTime = month + '-' + day + '-' + newValue;
        const newDate = new Date(changedTime).toLocaleDateString('en-US');
        if(newDate.toString() == 'Invalid Date') {
          errorMess = 'Invalid date format.' ;
        } else {
          setYear(newValue);
          setTime(newDate);
          errorMess = '';
          if(onChange) {
            onChange(newDate);
          }
        }
      } else {
        errorMess = 'Invalid date format.' ;
      }
    } else {
      if(month == '' && day == '') {
        if(required) {
          errorMess = 'The field is required.'
        } else {
          setTime('');
        }
      } else {
        setTime('');
      }
    }
    setFieldError(errorMess);
    if(setFormError) {
      setFormError(errorMess);
    }
  }

  useEffect(() => {
    if(setFormError && errorMessage) {
      setFormError(errorMessage);
      setFieldError(errorMessage);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  return (
    <Box id={id + '-Container'}
      sx={{
        '& input[type="date"]': {
          display: 'none',
        }
      }}
    > 
      <Box mb='8px'>
        <AsteriskIcon 
          sx={{
            mr: '4px', 
            fontSize: '14px',
            display: required ? 'inline-block' : 'none',
          }} 
        />
        <Typography variant='body1' fontWeight={700} display='inline-block'
          color={disabled ? 'neutral.n60' : 'neutral.n0'}
        >
          {label}
        </Typography>
      </Box>
      <Grid container maxWidth='360px' spacing='4px'>
        <Grid item xs={4}>
          <Typography variant='subtext1' color={disabled ? 'neutral.n60' : 'neutral.n40'}>
            Day
          </Typography>
          <TextFieldStyled id={id + '-dd'} fullWidth label={day ? '' : 'dd'}
            value={day}
            error={fieldError ? true : false} 
            disabled={disabled}
            className={success ? 'Mui-success' : ''}
            InputProps={{ inputProps: { min: 1, max: 31 } }}
            InputLabelProps={{ shrink: false }}
            onBlur={handleDayChange}
            onChange={(e) => setDay(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant='subtext1' color={disabled ? 'neutral.n60' : 'neutral.n40'}>
            Month
          </Typography>
          <TextFieldStyled id={id + '-mm'} fullWidth label={month ? '' : 'mm'}
            value={month}
            error={fieldError ? true : false}  
            disabled={disabled}
            className={success ? 'Mui-success' : ''}
            InputProps={{ inputProps: { min: 1, max: 12 } }}
            InputLabelProps={{ shrink: false, style: { top: '-4px' } }}
            onBlur={handleMonthChange}
            onChange={(e) => setMonth(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant='subtext1' color={disabled ? 'neutral.n60' : 'neutral.n40'}>
            Year
          </Typography>
          <TextFieldStyled id={id + '-yyyy'} fullWidth label={year ? '' : 'yyyy'}
            value={year}
            error={fieldError ? true : false} 
            disabled={disabled}
            className={success ? 'Mui-success' : ''}
            InputProps={{ inputProps: { min: 1900, max: 2999 } }}
            InputLabelProps={{ shrink: false, style: { top: '-4px' } }}
            onBlur={handleYearChange}
            onChange={(e) => setYear(e.target.value)}
          />
        </Grid>
      </Grid>
      {/* </Box> */}
      {fieldError ? <TextFieldAlert severity='error' description={fieldError}/>  : ''}
      {success ? <TextFieldAlert severity='success' description='Success'  /> : ''}
      <input type='date' value={time} readOnly id={id} />
    </Box>
  )
}
