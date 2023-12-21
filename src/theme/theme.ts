'use client';

import { createTheme } from '@mui/material/styles';
import { Montserrat, Lato } from 'next/font/google'

export const MontserratFont = Montserrat({
  weight: ['100', '200','300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export const LatoFont = Lato({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

declare module '@mui/material/styles' {

  interface BreakpointOverrides {
    xs: true; 
    sm: true;
    md: true;
    mdUp: true;
    lg: true;
    lgUp: true;
    xl: true;
    xlUp: true;
  }

  interface Palette {
    secondary: Palette['primary'];
    tertiary: Palette['primary'];
    error: Palette['primary'];
    warning: Palette['primary'];
    correct: Palette['primary'];
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    correct: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
  }
  interface PaletteColor {
    pr0?: string;
    pr10?: string;
    pr20?: string;
    pr30?: string;
    pr40?: string;
    pr50?: string;
    pr60?: string;
    pr70?: string;
    pr80?: string;
    pr90?: string;
    pr100?: string;
    s0?: string;
    s10?: string;
    s20?: string;
    s30?: string;
    s40?: string;
    s50?: string;
    s60?: string;
    s70?: string;
    s80?: string;
    s90?: string;
    s100?: string;
    t20?: string;
    t50?: string;
    t100?: string;
    e20?: string;
    e50?: string;
    e100?: string;
    w20?: string;
    w50?: string;
    w100?: string;
    c20?: string;
    c50?: string;
    c100?: string;
    n0?: string;
    n10?: string;
    n20?: string;
    n30?: string;
    n40?: string;
    n50?: string;
    n60?: string;
    n70?: string;
    n80?: string;
    n90?: string;
    n100?: string;
    nbl?: string;
    nw?: string;
  }
  interface SimplePaletteColorOptions {
    pr0?: string;
    pr10?: string;
    pr20?: string;
    pr30?: string;
    pr40?: string;
    pr50?: string;
    pr60?: string;
    pr70?: string;
    pr80?: string;
    pr90?: string;
    pr100?: string;
    s0?: string;
    s10?: string;
    s20?: string;
    s30?: string;
    s40?: string;
    s50?: string;
    s60?: string;
    s70?: string;
    s80?: string;
    s90?: string;
    s100?: string;
    t20?: string;
    t50?: string;
    t100?: string;
    e20?: string;
    e50?: string;
    e100?: string;
    w20?: string;
    w50?: string;
    w100?: string;
    c20?: string;
    c50?: string;
    c100?: string;
    n0?: string;
    n10?: string;
    n20?: string;
    n30?: string;
    n40?: string;
    n50?: string;
    n60?: string;
    n70?: string;
    n80?: string;
    n90?: string;
    n100?: string;
    nbl?: string;
    nw?: string;
  }

  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    h4: React.CSSProperties;
    h5: React.CSSProperties;
    subheading1: React.CSSProperties;
    subheading2: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    link1: React.CSSProperties;
    link2: React.CSSProperties;
    subtext1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    h4?: React.CSSProperties;
    h5?: React.CSSProperties;
    subheading1?: React.CSSProperties;
    subheading2?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    link1?: React.CSSProperties;
    link2?: React.CSSProperties;
    subtext1?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    subheading1: true;
    body3: true;
    link1: true;
    link2: true;
    label1: true;
    subtext1: true;
  }
}

// Create a theme instance for adding custom theme properties.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      mdUp: 601,
      lg: 1024,
      lgUp: 1025,
      xl: 1440,
      xlUp: 1441,
    },
  },
  palette: {
    primary: {
      main: 'rgba(239, 232, 253, 1)', // pr100
      pr0: 'rgba(12, 3, 33, 1)',
      pr10: 'rgba(29, 6, 75, 1)',
      pr20: 'rgba(45, 10, 117, 1)',
      pr30: 'rgba(61, 13, 160, 1)',
      pr40: 'rgba(77, 17, 202, 1)',
      pr50: 'rgba(96, 29, 236, 1)',
      pr60: 'rgba(112, 52, 238, 1)',
      pr70: 'rgba(128, 74, 240, 1)',
      pr80: 'rgba(175, 142, 245, 1)',
      pr90: 'rgba(195, 170, 248, 1)',
      pr100: 'rgba(239, 232, 253, 1)',
    },
    secondary: {
      main: 'rgba(255, 245, 243, 1)', // s100
      s0: 'rgba(127, 60, 46, 1)',
      s10: 'rgba(152, 71, 55, 1)',
      s20: 'rgba(178, 83, 64, 1)',
      s30: 'rgba(203, 95, 73, 1)',
      s40: 'rgba(229, 107, 82, 1)',
      s50: 'rgba(254, 119, 91, 1)',
      s60: 'rgba(254, 161, 142, 1)',
      s70: 'rgba(254, 182, 167, 1)',
      s80: 'rgba(255, 203, 192, 1)',
      s90: 'rgba(255, 224, 218, 1)',
      s100: 'rgba(255, 245, 243, 1)',
    },
    tertiary: {
      main: 'rgba(245, 248, 255, 1)',
      t20: 'rgba(36, 69, 151, 1)',
      t50: 'rgba(0, 72, 255, 1)',
      t100: 'rgba(245, 248, 255, 1)',
    },
    error: {
      main: 'rgba(251, 233, 233, 1)',
      e20: 'rgba(158, 5, 5, 1)',
      e50: 'rgba(217, 32, 32, 1)',
      e100: 'rgba(251, 233, 233, 1)',
    },
    warning: {
      main: 'rgba(255, 247, 234, 1)',
      w20: 'rgba(153, 102, 26, 1)',
      w50: 'rgba(255, 170, 43, 1)',
      w100: 'rgba(255, 247, 234, 1)',
    },
    correct: {
      main: 'rgba(231, 243, 236, 1)',
      c20: 'rgba(0, 97, 39, 1)',
      c50: 'rgba(15, 133, 62, 1)',
      c100: 'rgba(231, 243, 236, 1)',
    },
    neutral: {
      main: 'rgba(249, 249, 249, 1)',
      n0: 'rgba(32, 30, 56, 1)',
      n10: 'rgba(57, 55, 78, 1)',
      n20: 'rgba(81, 80, 100, 1)',
      n30: 'rgba(106, 105, 122, 1)',
      n40: 'rgba(131, 130, 144, 1)',
      n50: 'rgba(156, 155, 167, 1)',
      n60: 'rgba(181, 180, 189, 1)',
      n70: 'rgba(205, 205, 211, 1)',
      n80: 'rgba(230, 230, 233, 1)',
      n90: 'rgba(243, 242, 244, 1)',
      n100: 'rgba(249, 249, 249, 1)',
      nbl: 'rgba(7, 5, 34, 1)',
      nw: 'rgba(255, 255, 255, 1)',
    },
  },
  typography: {
    fontFamily: [
      'Lato',
      'Montserrat',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
});

theme.typography.display1 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 600,
  fontSize: '72px',
  lineHeight: '88px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '48px',
    lineHeight: '58px',
  },
};

theme.typography.display2 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 600,
  fontSize: '58px',
  lineHeight: '72px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '38px',
    lineHeight: '46px',
  },
};

theme.typography.h1 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 600,
  fontSize: '46px',
  lineHeight: '56px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '30px',
    lineHeight: '36px',
  },
};

theme.typography.h2 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 600,
  fontSize: '36px',
  lineHeight: '44px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
};

theme.typography.h3 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '34px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '20px',
    lineHeight: '24px',
  },
};

theme.typography.h4 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: '28px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '18px',
    lineHeight: '22px',
  },
};

theme.typography.h5 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '24px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0',
  },
};

theme.typography.subheading1 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 500,
  fontSize: '22px',
  lineHeight: '32px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '18px',
    lineHeight: '28px',
  },
};

theme.typography.subheading2 = {
  fontFamily: MontserratFont.style.fontFamily,
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '30px',
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('mdUp')]: {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0',
  },
};

theme.typography.body1 = {
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
};

theme.typography.body2 = {
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '22px',
};

theme.typography.link1 = {
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  color: theme.palette.primary.pr50,
};

theme.typography.link2 = {
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '22px',
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  color: theme.palette.primary.pr50,
};

theme.typography.subtext1 = {
  fontFamily: LatoFont.style.fontFamily,
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '20px',
};

export default theme;
