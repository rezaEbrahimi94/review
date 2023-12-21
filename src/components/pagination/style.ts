import theme from '@/theme/theme';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const PaginationStyled = {
  '&.MuiPagination-root': {
    '& .MuiPagination-ul': {
      flexWrap: 'nowrap',
      '& li': {
        '& button': {
          textDecoration: 'underline',
          padding: '8px 16px',
          borderRadius: '4px',
          color: theme.palette.neutral.n0,
          outline: 'none',
          '&:hover': {
            color: theme.palette.primary.pr50,
            backgroundColor: theme.palette.neutral.nw,
          },
          '&:focus-within': {
            backgroundColor: theme.palette.neutral.nw,
            border: `2px solid ${theme.palette.primary.pr70}`,
            padding: '8px 14px',
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.pr30,
            color: theme.palette.neutral.nw,
            '&:focus-within': {
              boxShadow: `0 0 0 1px ${theme.palette.neutral.nw}, 0 0 0 3px ${theme.palette.primary.pr70}`,
              border: `0px solid ${theme.palette.primary.pr70}`,
              padding: '8px 16px',
            }
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.neutral.nw,
            color: theme.palette.neutral.n60,
          },
        }
      },
      '& li:first-of-type': {
        flexBasix: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& button:after': {
          marginLeft: '10px',
          content: '"Previous"',
          textDecoration: 'underline',
        }
      },
      '& li:last-child': {
        flexBasix: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& button:before': {
          marginRight: '10px',
          content: '"Next"',
          textDecoration: 'underline',
        }
      },
    }
  }
};

export const SamStack = styled(Stack)(() => ({
  '& .SamPagination-count': {
    '& .MuiOutlinedInput-root': {
      '& input': {
        padding: '0px 0px',
      },
      '& fieldset': {
        padding: '0px 0px',
      },
    }
  },
  '& .DropdownContainer-WithoutIcon ': {
    '& .MuiInputBase-root': {
      [theme.breakpoints.up('xs')]: {
        width: '80px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '80px',
      },
      paddingLeft: '0px',
      '&:hover': {
        '& .MuiSelect-select': {
          padding: '11px 8px 11px 0px!important',
        },
      },
    }
  },
}));