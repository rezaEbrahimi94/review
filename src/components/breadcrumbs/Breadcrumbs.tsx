'use client';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import { LatoFont } from '@/theme/theme';

const Breadcrumb = styled(Breadcrumbs)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    '& .MuiBreadcrumbs-li': {
      marginRight: '0px',
    },
    '& .MuiBreadcrumbs-separator': {
      marginRight: '0px',
    },
  },
  [theme.breakpoints.up('md')]: {
    '& .MuiBreadcrumbs-li': {
      marginRight: '0px',
    },
    '& .MuiBreadcrumbs-separator': {
      marginRight: '0px',
    },
  },
  '& .MuiBreadcrumbs-li svg': {
    marginBottom: '-5px',
    '& path': {
      fill: theme.palette.primary.pr50,
    },
  },
  '& a': {
    color: theme.palette.neutral.n30,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
    textDecorationThickness: '1px',
    fontFamily: LatoFont.style.fontFamily,
    fontSize: '14px',
    lineHeight: '22px',
    outline: 'none',
    padding: '0px 0px 0px 8px',
    '&:hover': {
      fontWeight: 700,
    },
    '&:focus-visible': {
      border: `2px solid ${theme.palette.primary.pr70}`,
      borderRadius: '4px',
    }
  },
  '& li:last-child a': {
    color: theme.palette.neutral.n30,
    textDecoration: 'none',
    fontWeight: 700,
  },
  '& .MuiBreadcrumbs-separator': {
    '& path': {
      fill: theme.palette.neutral.n30,
    }
  }
}));

// const Breadcrumb = ({id, separator, items}: BreadcrumbProps) => {
//   return (
//     <BreadcrumbsStyled id={id} separator={separator}>
//       {/* <Link href='/'>
//         <HomeIcon />
//       </Link> */}
//       {items.map((item: string, index: number) => {
//         return (
//           <Link
//             href={item}
//           >
//             {item}
//           </Link>
//         )
//       })}
//     </BreadcrumbsStyled>
//   )
// }

export default Breadcrumb;
