import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField, {TextFieldProps} from '@mui/material/TextField';

export const SearchFieldStyled = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiFormLabel-root': {
    left: '44px',
  },
  '& .MuiOutlinedInput-root': {
    paddingRight: '16px',
    '& input': {
      paddingLeft: '50px!important',
      padding: '12px 12px 12px 16px',
      color: theme.palette.neutral.n0,
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    '& fieldset': {
      paddingLeft: '50px!important',
      border: `1px solid ${theme.palette.neutral.n0}`,
      borderRadius: '8px',
      padding: '12px 16px',
    },
    '&:hover fieldset': {
      border: `2px solid ${theme.palette.neutral.n0}`,
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.pr50}`,
    },
    '&.Mui-error': {
      '& fieldset': {
        border: `2px solid ${theme.palette.error.e50}`,
      },
    },
    '& .MuiInputAdornment-root': {
      marginRight: '0px',
      '& svg': {
        width: '20px', height: '20px',
        color: theme.palette.neutral.n0,   
      }
    },
    '&.Mui-disabled': {
      color: theme.palette.neutral.n60,
      '& fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '&:hover fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '& .MuiInputAdornment-root': {
        '& svg': {
          color: theme.palette.neutral.n60,
          '& path': {
            fill: theme.palette.neutral.n60,
          }
        },
      },
    },
  },
  '&.Mui-success': {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${theme.palette.correct.c50}`,
      },
    }
  },
}));

export const FilterStyled = styled(Box)(({theme}) => ({
  // borderTop: `1px solid ${theme.palette.neutral.n70}`,
  paddingTop: '24px',
  '& .Filter-desktop-container': {
    backgroundColor: theme.palette.neutral.n90,
    padding: '24px',
    borderRadius: '10px',
    '& .Filter-filterBtn': {
      backgroundColor: theme.palette.neutral.nw,
      borderRadius: '8px',
    },
    '& .Filter-filterBtn-filterAvailable': {
      borderRadius: '8px',
      backgroundColor: `${theme.palette.primary.pr50}!important`,
      color: theme.palette.neutral.nw,
      '& path': {
        fill: theme.palette.neutral.nw,
      }
    },
    '& .Filter-desktop-searchField': {
      background: theme.palette.neutral.nw,
      borderRadius: '10px',
      flexGrow: 1,
      '& .Filter-searchIcon': {
        marginTop: '-40px',
        float: 'left',
        marginLeft: '18px',
      },
      '& .Filter-noOfResults': {
        float: 'right',
        marginTop: '-40px',
        marginRight: '41px',
        zIndex: 1,
        pointerEvents: 'none',
      },
      '& .TextField-container': {
        maxWidth: '100%',
        '& fieldset': {
          border: `1px solid ${theme.palette.neutral.n60}`,
        },
      }
    },
    '& .MuiButton-root': {
      backgroundColor: theme.palette.neutral.nw,
      '&.Filter-ActionsBtn svg': {
        transform: 'rotate(90deg)',
      }
    },
  },
}))

export const MobileFilterStyled = styled(Box)(({theme}) => ({
  // borderTop: `1px solid ${theme.palette.neutral.n70}`,
  paddingTop: '16px',
  '& .Filter-mobile-searchField': {
    padding: '24px',
    backgroundColor: theme.palette.neutral.n90,
    width: '100%',
    '& .TextField-container': {
      maxWidth: '100%!important',
      background: theme.palette.neutral.nw,
      borderRadius: '10px',
      '& fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
    }
  },
  '& .Filter-searchIcon': {
    float: 'left',
    marginLeft: '18px',
    marginTop: '-35px',
    position: 'relative',
  },
  '& .Filter-mobile-btnContainer': {
    marginTop: '24px',
    marginBottom: '24px',
    '& .MuiButton-root': {
      backgroundColor: theme.palette.neutral.nw,
      '&.Filter-filterBtn': {
        height: '100%',
        borderRadius: '8px 0px 0px 8px',
      },
      '&.Filter-filterBtn-filterAvailable': {
        height: '100%',
        borderRadius: '8px 0px 0px 8px',
        backgroundColor: theme.palette.primary.pr50,
        color: theme.palette.neutral.nw,
        '& path': {
          fill: theme.palette.neutral.nw,
        }
      },
      '&.Filter-sortBtn': {
        height: '100%',
        borderRadius: '0px 8px 8px 0px',
        borderWidth: '1px 1px 1px 0px',
      }
    },
  }
}))

export const MobileSearchFieldStyled = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => ({
  '& .MuiFormLabel-root': {
    left: '42px',
    marginTop: '-3px',
  },
  '& .MuiOutlinedInput-root': {
    paddingRight: '16px',
    background: theme.palette.neutral.nw,
    '& input': {
      paddingLeft: '56px!important',
      padding: '12px 12px 12px 16px',
      color: theme.palette.neutral.n0,
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    '& fieldset': {
      paddingLeft: '56px!important',
      border: `1px solid ${theme.palette.neutral.n0}`,
      borderRadius: '8px',
      padding: '12px 16px',
    },
    '&:hover fieldset': {
      border: `2px solid ${theme.palette.neutral.n0}`,
    },
    '&.Mui-focused fieldset': {
      border: `2px solid ${theme.palette.primary.pr50}`,
    },
    '&.Mui-error': {
      '& fieldset': {
        border: `2px solid ${theme.palette.error.e50}`,
      },
    },
    '& .MuiInputAdornment-root': {
      marginRight: '0px',
      '& svg': {
        width: '20px', height: '20px',
        color: theme.palette.neutral.n0,   
      }
    },
    '&.Mui-disabled': {
      color: theme.palette.neutral.n60,
      '& fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '&:hover fieldset': {
        border: `1px solid ${theme.palette.neutral.n60}`,
      },
      '& .MuiInputAdornment-root': {
        '& svg': {
          color: theme.palette.neutral.n60,
          '& path': {
            fill: theme.palette.neutral.n60,
          }
        },
      },
    },
  },
  '&.Mui-success': {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `2px solid ${theme.palette.correct.c50}`,
      },
    }
  },
}));

export const SamBox = styled(Box)(() => ({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: 3,
  backgroundColor: '#000000',
  opacity: '70%',
  top: 0,
  left: 0,
}))

export const DialogStyled = styled(Stack)(({theme}) => ({
  borderRadius: '8px',
  padding: '48px',
  backgroundColor: theme.palette.neutral.nw,
  position: 'fixed',
  zIndex: 4,
  left: 'calc(50vw - 50%)',
  top: 'calc(50vh - 50%)',
  transform: 'translate(calc(50vw - 50%), calc(50vh - 50%))',
  overflowY: 'auto',
  [theme.breakpoints.up('xs')]: {
    height: '100%',
    width: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    height: '897px',
    width: '600px',
  },
  '& .FilterDialog-fields': {
    marginLeft: '50px',
    marginRight: '50px',
  },
  '& .RadioButton-root': {
    width: '100%',
    '& .SamRadio': {
      marginBottom: '-4px',
    }
  },
  '& .artistDeceased-no .RadioButton-root': {
    borderRadius: '0px 8px 8px 0px',
  },
  '& .artistDeceased-yes .RadioButton-root': {
    borderRadius: '8px 0px 0px 8px',
  }
}))
