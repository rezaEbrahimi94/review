import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const TagContainer = styled(Stack)(({ theme }) => ({
  '&.SamTag': {
    padding: '4px 12px',
    borderRadius: '37px',
    width: 'fit-content',
    backgroundColor: theme.palette.neutral.n80,
    color: theme.palette.neutral.n0,
    cursor: 'pointer',
    '& svg': {
      fontSize: '20px',
      margin: 'auto auto auto 4px',
      '& path': {
        fill: theme.palette.primary.pr20,
      }
    },
    '&.SamTag-default-removable': {
      backgroundColor: theme.palette.primary.pr100,
      '& svg path': {
        fill: theme.palette.primary.pr20,
      },
    }
  },
  '&.SamTag-link': {
    backgroundColor: theme.palette.secondary.s100,
    '& svg path': {
      fill: theme.palette.secondary.s50,
    },
  },
  '&.SamTag-complete': {
    backgroundColor: theme.palette.correct.c100,
    color: theme.palette.secondary.s10,
    '& svg path': {
      fill: theme.palette.correct.c20,
    },
  },
  '&.SamTag-pending': {
    backgroundColor: theme.palette.warning.w100,
    '& svg path': {
      fill: theme.palette.warning.w20,
    },
  },
  '&.SamTag-error': {
    backgroundColor: theme.palette.error.e100,
    '& svg path': {
      fill: theme.palette.error.e20,
    },
  },
  '&.SamTag-selected': {
    '& svg path': {
      fill: theme.palette.neutral.n0,
    },
  },
  '&.SamTag-inactive': {
    cursor: 'default',
    backgroundColor: theme.palette.neutral.n90,
    color: theme.palette.neutral.n60,
    '& svg path': {
      fill: theme.palette.neutral.n60,
    },
  },
}));