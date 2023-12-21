import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const GeneralSettingStyled = styled(Box)(({ theme }) => ({
  '& .GeneralSetting-Forms-Root': {
    padding: '40px',
    backgroundColor: theme.palette.neutral.n100,
  },
  '& .DefaultSpinner': {
    width: '36px',
    height: '36px',
    borderWidth: '6px',
    marginTop: '24px',
  },
  '& .GeneralSetting-Form': {
    margin: 'auto',
    '& #CommissionRate-Container': {
      '& .MuiTextField-root': {
        maxWidth: '150px',
      },
    },
    '& .GeneralSetting-ArtworkSizes-mm .RadioButton-root': {
      backgroundColor: theme.palette.neutral.nw,
      borderRadius: '8px 0px 0px 8px',
      '& .RadioButton-LabelContainer': {
        position: 'absolute',
      },
    },
    '& .GeneralSetting-ArtworkSizes-cm .RadioButton-root': {
      backgroundColor: theme.palette.neutral.nw,
      borderRadius: '0px 8px 8px 0px',
      '& .RadioButton-LabelContainer': {
        position: 'absolute',
      },
    },
    '& .GeneralSetting-Locations, & .GeneralSetting-Culture': {
      marginTop: '0px',
      '& .SamSwitch-container': {
        margin: '0px 10px 0px 0px',
      },
      '& .MuiTableBody-root .MuiTableCell-root': {
        paddingTop: '38px', 
        paddingBottom: '38px', 
      }
    },
    '& .GeneralSetting-QRWebsiteBox': {
      padding: '24px',
      backgroundColor: theme.palette.neutral.n100,
      borderLeft: `2px solid ${theme.palette.primary.pr80}`,
      '& input': {
        backgroundColor: theme.palette.neutral.nw,
      },
    },
  },
  '& .GeneralSetting-BtnContainer': {
    margin: '0px auto 0px auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '800px'
    },
  }
}));
