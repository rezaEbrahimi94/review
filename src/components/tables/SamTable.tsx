import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';

const SamTable = styled(Table)(({ theme }) => ({
  '& .MuiTableHead-root': {
    borderBottom: `2px solid ${theme.palette.neutral.n0}`, 
    '& .MuiTableCell-head': {
      color: theme.palette.neutral.n0,
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontWeight: '700',
      fontSize: '16px',
      lineHeight: '24px',
      padding: '24px 8px',
      '& .MuiCheckbox-root.Mui-checked': {
        color: theme.palette.primary.pr50,
      },
      '& span': {
        cursor: 'pointer',
      },
      '& svg': {
        cursor: 'pointer',
        marginLeft: '8px',
      },
      '& .SortIcon-ASC': {
        transform: 'rotate(180deg)',
      },
    }
  },
  '& .MuiTableBody-root': {
    '& .MuiTableCell-body': {
      borderBottom: `1px solid ${theme.palette.neutral.nw}`, 
      color: theme.palette.neutral.n0,
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '16px',
      lineHeight: '24px',
      padding: '16px 8px',
      '& .MuiCheckbox-root.Mui-checked': {
        color: theme.palette.primary.pr50,
      }
    },
    '& .MuiTableRow-root': {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.palette.neutral.n90,
      },
      '& td:first-of-type': {
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
      },
      '& td:last-of-child': {
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
      }
    },
    '& tr:last-child': {
      '& .MuiTableCell-body': {
        borderBottom: `1px solid ${theme.palette.neutral.n60}`, 
      },
    }
  },
  '&.artistHistory-dialog': {
    '& .MuiTableBody-root': {
      '& .MuiTableCell-body': {
        padding: '16px 8px',
      }
    },
  }
}));

export default SamTable;