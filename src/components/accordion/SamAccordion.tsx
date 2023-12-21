'use client';

import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography'
import { FilledButton } from '@/components/buttons/SamButtons';
import { ChevronIcon } from '@/components/icons/Icons';
import { TSamAccordionProps } from '@/components/accordion/type';
import { MontserratFont } from '@/theme/theme';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&.Mui-expanded': {
    border: `1px solid ${theme.palette.neutral.n60}`,
    borderRadius: '10px 10px 8px 8px',
  },
  '&:before': {
    display: 'none',
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.neutral.n90,
    borderRadius: '8px',
    border: `1px solid ${theme.palette.neutral.n90}`,
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronIcon sx={{ fontSize: '32px' }} />}
    {...props}
  />
))(({ theme }) => ({
  '&.Mui-disabled': {
    border: `1px solid ${theme.palette.neutral.n90}`,
  },
  border: `1px solid ${theme.palette.neutral.n0}`,
  borderRadius: '8px',
  padding: '24px 16px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    color: theme.palette.neutral.nw,
  },
  '&.Mui-expanded': {
    backgroundColor: theme.palette.primary.pr30,
    borderRadius: '8px 8px 0px 0px',
    '&:focus-visible': {
      border: `2px solid ${theme.palette.neutral.nw}`,
      boxShadow: `0 0 0 3px ${theme.palette.primary.pr70}`,
      outlineColor: 'transparent',
      padding: '23px 15px',
    }
  },
  '& .MuiAccordionSummary-content': {
    '& .MuiSvgIcon-root': {
      color: theme.palette.neutral.n0,
      marginRight: '18px',
      fontSize: '24px',
    },
    '& .MuiTypography-root': {
      fontFamily: MontserratFont.style.fontFamily,
      color: theme.palette.neutral.n0,
      fontWeight: '700',
    },
      fontSize: '22px',
      lineHeight: '28px',
    '&.Mui-expanded': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.neutral.nw,
      },
      '& .MuiTypography-root': {
        color: theme.palette.neutral.nw,
      },
    },
  },
  '&:hover': {
    border: `2px solid ${theme.palette.primary.pr70}`,
    padding: '23px 15px',
  },
  '&:focus-visible': {
    border: `3px solid ${theme.palette.primary.pr70}`,
    padding: '22px 14px',
    outlineColor: 'transparent',
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '56px',
  color: theme.palette.neutral.n0,
}));

export const SamAccordion = ({id, summary, expandIcon, detailHeading, detailContent, 
  detailButtonLabel, detailButtonIcon, detailHref, disabled}: TSamAccordionProps) => {
  return (
    <Accordion disabled={disabled}>
      <AccordionSummary id={id}>
        {expandIcon}
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='h5' color='neutral.n0' mb='16px'>
          {detailHeading}
        </Typography>
        <Typography 
          dangerouslySetInnerHTML={{ __html: detailContent }}
        >
          {/* {detailContent} */}
        </Typography>
        <FilledButton startIcon={detailButtonIcon} label={detailButtonLabel} href={detailHref} sx={{ mt: '40px' }} />
      </AccordionDetails>
    </Accordion>
  )
}

export const CardAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.neutral.nw,
  border: '0px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px 0px #0000001A',
  margin: 'auto',
  '&:before': {
    display: 'none',
  },
  [theme.breakpoints.up('xs')]: {
    width: '100%'
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px'
  },
  '&.Mui-expanded': {
    borderTop: `4px solid ${theme.palette.primary.pr70}`,
  },
}));

export const CardAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ChevronIcon sx={{ fontSize: '32px' }} />}
    {...props}
  />
))(({ theme }) => ({
  border: '0px',
  borderRadius: '8px',
  [theme.breakpoints.up('xs')]: {
    padding: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '40px',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(90deg)',
    color: theme.palette.neutral.nw,
    marginBottom: 'auto',
    marginTop: '6px'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(270deg)',
    color: theme.palette.neutral.nw,
    marginBottom: 'auto',
    marginTop: '6px'
  },
  '&.Mui-expanded': {
    [theme.breakpoints.up('xs')]: {
      padding: '20px 24px 0px 24px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '36px 40px 0px 40px',
    },
  },
  '& .MuiAccordionSummary-content': {
    '&.Mui-expanded': {
      borderBottom: `1px solid ${theme.palette.neutral.n80}`,
      [theme.breakpoints.up('xs')]: {
        paddingBottom: '24px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingBottom: '40px',
      },
    },
  },
}));

export const CardAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '32px 48px 32px 32px',
  marginTop: '-12px',
  color: theme.palette.neutral.n0,
}));
