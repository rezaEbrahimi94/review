import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { LatoFont } from '@/theme/theme';

// Style of Biography component
export const DropdownStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.nw,
  '& .MuiInputBase-input.Mui-disabled': {
    textFillColor: theme.palette.neutral.n0,
  },
  '& .MuiInputBase-root': {
    border: `1px solid ${theme.palette.neutral.n0}`,
    borderRadius: '8px',
    outline: 'none',
    padding: '0px',
    '&:hover': {
      border: `2px solid ${theme.palette.neutral.n0}`,
      '& .MuiSelect-select': {
        padding: '11px 15px 11px 7px',
      },
    },
    '& .MuiSvgIcon-root:not(.MuiSelect-icon)': {
      marginLeft: '18px',
    },
    '&.Mui-focused': {
      border: `2px solid ${theme.palette.primary.pr50}`,
      '& .MuiSelect-select': {
        padding: '11px 15px 11px 7px',
      },
    },
    '& .MuiSelect-select': {
      padding: '12px 16px 12px 8px',
    },
    '& fieldset': {
      border: 'none',
    },
    '& .MuiSelect-icon': {
      transform: 'rotate(90deg)',
    }
  },
  '& .DropdownContainer-WithoutIcon ': {
    '& .MuiInputAdornment-positionStart': {
      margin: '0px',
      paddingRight: '0px',
    },
    '& .MuiInputBase-root': {
      paddingLeft: '10px',
      '&:hover': {
        '& .MuiSelect-select': {
          padding: '11px 8px 11px 8px',
        },
      },
    }
  },
  '& .addValue-btn': {
    float: 'right',
    marginRight: '-45px',
  }
}));

// Style of address auto complete field
export const DropdownWithSearchStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .DropdownWithSearch-iconContainer': {
    width: '0px',
    height: '0px',
    '& .DropdownWithSearch-searchIcon': {
      position: 'relative',
      marginLeft: '8px',
      marginTop: '10px',
    },
  },
  '& .DropdownWithSearch-iconChevronContainer': {
    width: '0px',
    height: '0px',
    '& .DropdownWithSearch-chevronIcon': {
      position: 'absolute',
      top: '10px',
      transform: 'rotate(90deg)',
      '&.DropdownWithSearch-active': {
        transform: 'rotate(270deg)',
      },
      [theme.breakpoints.up('xs')]: {
        right: '50px',
      },
      [theme.breakpoints.up('md')]: {
        right: '12px',
      },
      [theme.breakpoints.up('lg')]: {
        right: '12px',
      },
    },
    '&.DropdownWithSearch-iconChevronContainer-withLabel': {
      '& .DropdownWithSearch-chevronIcon': {
        top: '42px',
      },
      '&.DropdownWithSearch-iconChevronContainer-withHelpText': {
        '& .DropdownWithSearch-chevronIcon': {
          top: '70px',
          right: '10px',
        },
      },
    },
  },
  '& .DropdownWithSearch-input': {
    width: '100%',
    padding: '12px 16px 12px 36px',
    border: `1px solid ${theme.palette.neutral.n0}`,
    borderRadius: '8px',
    fontFamily: LatoFont.style.fontFamily,
    fontWeight: 400,
    fontSize: '16px',
    backgroundColor: theme.palette.neutral.nw,
    color: theme.palette.neutral.n0,
    '&:focus-visible': {
      border: `2px solid ${theme.palette.primary.pr50}`,
      outline: 'none',
      padding: '11px 15px 11px 35px',
    },
    '&.DropdownWithSearch-input-dropdownActive:focus-visible': {
      borderRadius: '8px 8px 0px 0px',
    }
  },
  '& input:-webkit-autofill': {
    WebkitBoxShadow: `0 0 0 100px ${theme.palette.neutral.nw} inset`,
    WebkitTextFillColor: theme.palette.neutral.n0,
  },
  '& .DropdownWithSearch-itemContainer': {
    position: 'absolute',
    zIndex: 3,
    width: '100%',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    boder: `0.5px solid ${theme.palette.neutral.n60}`,
    borderRadius: '0px 0px 8px 8px',
    '& .DropdownWithSearch-loading': {
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      fontFamily: LatoFont.style.fontFamily,
      fontWeight: 400,
      fontSize: '16px',
    },
    '& .DropdownWithSearch-item-Root': {
      maxHeight: '240px',
      overflowY: 'auto',
      '& .DropdownWithSearch-item': {
        cursor: 'pointer',
        padding: '12px 16px',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        fontFamily: LatoFont.style.fontFamily,
        fontWeight: 400,
        fontSize: '16px',
        '&:hover': {
          backgroundColor: 'rgba(239, 232, 253, 1)',
        }
      },
    },
    '& .DropdownWithSearch-AddNew': {
      padding: '12px 16px',
      backgroundColor: theme.palette.neutral.n100,
      '& .DropdownWithSearch-addNewTrigger': {
        cursor: 'pointer',
      }
    },
  },
  '& .DropdownWithSearch-manualTrigger-container': {
    marginTop: '24px',
    '& .DropdownWithSearch-manualTrigger': {
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
    }
  },
  '& .DropdownWithSearch-autocompleteTrigger': {
    cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
  },
  '& .addValue-btn': {
    float: 'right',
    marginRight: '-45px',
    marginTop: '-40px',
  },
}));
