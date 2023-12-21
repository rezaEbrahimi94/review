'use client';

import Box from '@mui/material/Box';

export const DefaultSpinner = () => {
  return(
    <Box className="DefaultSpinner"
      sx={{
        margin: 'auto',
        width: {
          xs: '50px',
          md: '70px',
          lg: '100px',
        },
        height: {
          xs: '50px',
          md: '70px',
          lg: '100px',
        },
        border: '15px solid #1F1F1F1A',
        borderWidth: {
          xs: '10px',
          md: '12px',
          lg: '15px',
        },
        borderBottomColor: 'primary.pr50',
        borderRadius: '50%',
        boxSizing: 'border-box',
        animation: 'rotation 3s linear infinite',
        '@keyframes rotation': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        }
      }}
    ></Box>
  )
}

export const DotSpinner = () => {
  return(
    <Box className="DotSpinner" 
      sx={{
        height: {
          xs: '50px',
          md: '70px',
          lg: '100px',
        },
        width: {
          xs: '50px',
          md: '70px',
          lg: '100px',
        },
        paddingTop: {
          xs: '21px',
          md: '30px',
          lg: '43px',
        },
        margin: 'auto',
      }}>
      <Box
        sx={{
          margin: 'auto',
          fontSize: {
            xs: '7.5px',
            md: '10px',
            lg: '15px',
          },
          width: {
            xs: '8.75px',
            md: '12.25px',
            lg: '17.5px',
          },
          height: {
            xs: '8.75px',
            md: '12.25px',
            lg: '17.5px',
          },
          borderRadius: '50%',
          animation: 'mulShdSpin 1.1s infinite ease',
          '@keyframes mulShdSpin': {
            '0%': {
              boxShadow: `0em -2.6em 0em 0em #2D0A75, 1.8em -1.8em 0 0em #4D11CA, 2.5em 0em 0 0em #4D11CA, 1.75em 1.75em 0 0em #4D11CA, 0em 2.5em 0 0em #4D11CA, -1.8em 1.8em 0 0em #4D11CA, -2.6em 0em 0 0em #7034EE, -1.8em -1.8em 0 0em #C3AAF8`,
            },
            '12.5%': {
              boxShadow: `0em -2.6em 0em 0em #C3AAF8, 1.8em -1.8em 0 0em #2D0A75, 2.5em 0em 0 0em #4D11CA, 1.75em 1.75em 0 0em #4D11CA, 0em 2.5em 0 0em #4D11CA, -1.8em 1.8em 0 0em #4D11CA, -2.6em 0em 0 0em #4D11CA, -1.8em -1.8em 0 0em #7034EE`,
            },
            '25%': {
              boxShadow: `0em -2.6em 0em 0em #7034EE, 1.8em -1.8em 0 0em #C3AAF8, 2.5em 0em 0 0em #2D0A75, 1.75em 1.75em 0 0em #4D11CA, 0em 2.5em 0 0em #4D11CA, -1.8em 1.8em 0 0em #4D11CA, -2.6em 0em 0 0em #4D11CA, -1.8em -1.8em 0 0em #4D11CA`,
            },
            '37.5%': {
              boxShadow: `0em -2.6em 0em 0em #4D11CA, 1.8em -1.8em 0 0em #7034EE, 2.5em 0em 0 0em #C3AAF8, 1.75em 1.75em 0 0em #2D0A75, 0em 2.5em 0 0em #4D11CA, -1.8em 1.8em 0 0em #4D11CA, -2.6em 0em 0 0em #4D11CA, -1.8em -1.8em 0 0em #4D11CA`,
            },
            '50%': {
              boxShadow: `0em -2.6em 0em 0em #4D11CA, 1.8em -1.8em 0 0em #4D11CA, 2.5em 0em 0 0em #7034EE, 1.75em 1.75em 0 0em #C3AAF8, 0em 2.5em 0 0em #2D0A75, -1.8em 1.8em 0 0em #4D11CA, -2.6em 0em 0 0em #4D11CA, -1.8em -1.8em 0 0em #4D11CA`,
            },
            '62.5%': {
              boxShadow: `0em -2.6em 0em 0em #4D11CA, 1.8em -1.8em 0 0em #4D11CA, 2.5em 0em 0 0em #4D11CA, 1.75em 1.75em 0 0em #7034EE, 0em 2.5em 0 0em #C3AAF8, -1.8em 1.8em 0 0em #2D0A75, -2.6em 0em 0 0em #4D11CA, -1.8em -1.8em 0 0em #4D11CA`,
            },
            '75%': {
              boxShadow: `0em -2.6em 0em 0em #4D11CA, 1.8em -1.8em 0 0em #4D11CA, 2.5em 0em 0 0em #4D11CA, 1.75em 1.75em 0 0em #4D11CA, 0em 2.5em 0 0em #7034EE, -1.8em 1.8em 0 0em #C3AAF8, -2.6em 0em 0 0em #2D0A75, -1.8em -1.8em 0 0em #4D11CA`,
            },
            '87.5%': {
              boxShadow: `0em -2.6em 0em 0em #4D11CA, 1.8em -1.8em 0 0em #4D11CA, 2.5em 0em 0 0em #4D11CA, 1.75em 1.75em 0 0em #4D11CA, 0em 2.5em 0 0em #4D11CA, -1.8em 1.8em 0 0em #7034EE, -2.6em 0em 0 0em #C3AAF8, -1.8em -1.8em 0 0em #2D0A75`,
            },
            '100%': {
              boxShadow: `0em -2.6em 0em 0em #2D0A75, 1.8em -1.8em 0 0em #4D11CA, 2.5em 0em 0 0em #4D11CA, 1.75em 1.75em 0 0em #4D11CA, 0em 2.5em 0 0em #4D11CA, -1.8em 1.8em 0 0em #4D11CA, -2.6em 0em 0 0em #7034EE, -1.8em -1.8em 0 0em #C3AAF8`,
            },
          }
        }}
      ></Box>
    </Box>
  )
}