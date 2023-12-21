import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

// Style of Biography component
export const MoneyStoryStyled = styled(Box)(({ theme }) => ({
  margin: 'auto',
  '& .addArtist-moneyStory-actionBtns': {
    marginTop: '24px',
    '& .addArtist-saveAndExitBtn': {
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .addArtist-saveAndNextBtn': {
      '& svg': {
        transform: 'rotate(180deg)',
      }
    },
    '& .addArtist-cancelBtn': {
      color: theme.palette.primary.pr50,
    }
  },
  [theme.breakpoints.up('xs')]: {
    maxWidth: '100%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    display: 'none',
  },
}));

// Style of Artist Financial Info component
export const ArtistFinancialInfoStyled = styled(Box)(() => ({
  // marginTop: '24px',
}));

// Style of Tax Info component
export const TaxInfoStyled = styled(Box)(({ theme }) => ({
  marginTop: '24px',
  '& .addArtist-hasABN-yes .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '8px 0px 0px 8px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-hasABN-no .RadioButton-root': {
    backgroundColor: theme.palette.neutral.nw,
    borderRadius: '0px 8px 8px 0px',
    '& .RadioButton-LabelContainer': {
      position: 'absolute',
    },
  },
  '& .addArtist-hasABNBox': {
    marginTop: '16px',
    padding: '24px',
    backgroundColor: theme.palette.neutral.n100,
    borderLeft: `2px solid ${theme.palette.primary.pr80}`,
    '& .addArtist-abnContainter .MuiTypography-body1': {
      fontWeight: 400,
    },
    '& input': {
      backgroundColor: theme.palette.neutral.nw,
    },
    '& .addArtist-registeredABN-yes .RadioButton-root': {
      backgroundColor: theme.palette.neutral.nw,
      borderRadius: '8px 0px 0px 8px',
      '& .RadioButton-LabelContainer': {
        position: 'absolute',
      },
    },
    '& .addArtist-registeredABN-no .RadioButton-root': {
      backgroundColor: theme.palette.neutral.nw,
      borderRadius: '0px 8px 8px 0px',
      '& .RadioButton-LabelContainer': {
        position: 'absolute',
      },
    },
  },
}));

// Style of Tax Info component
export const ContractAgreementStyled = styled(Box)(() => ({
  marginTop: '24px',
}));
