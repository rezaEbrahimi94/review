import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { LatoFont } from '@/theme/theme';

// Style of address auto complete field
export const AddressAutocompleteStyled = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .SamAutocomplete-iconContainer': {
    width: '0px',
    height: '0px',
    '& .SamAutocomplete-searchIcon': {
      position: 'relative',
      marginLeft: '8px',
      marginTop: '10px',
    },
  },
  '& .SamAutocomplete-input': {
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
    '&.SamAutocomplete-input-dropdownActive': {
      borderRadius: '8px 8px 0px 0px',
    }
  },
  '& .SamAutocomplete-suggestionContainer': {
    position: 'absolute',
    zIndex: 3,
    width: '100%',
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    boder: `0.5px solid ${theme.palette.neutral.n60}`,
    borderRadius: '0px 0px 8px 8px',
    '& .SamAutocomplete-loading': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    '& .suggestion-item': {
      cursor: 'pointer',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      fontFamily: LatoFont.style.fontFamily,
      fontWeight: 400,
      fontSize: '16px',
      '&.suggestion-item--active': {
        backgroundColor: 'rgba(239, 232, 253, 1)',
      }
    }
  },
  '& .SamAutocomplete-manualTrigger-container': {
    marginTop: '24px',
    '& .SamAutocomplete-manualTrigger': {
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '1px',
    }
  },
  '& .SamAutocomplete-autocompleteTrigger': {
    cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: '2px',
  }
}));
