import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

/* Style for Sidebar in desktop view */
export const SideBarDesktopStyled = styled(Box)(({ theme }) => ({
  '& .SamSidebar-container': {
    background: theme.palette.neutral.n100,
    boxShadow: '-15px 0px 34px 0px rgba(0, 0, 0, 0.05) inset',
    height: '100%',
    position: 'fixed',
    zIndex: 1,
    // transition: 'width .3s',
    // transitionProperty: 'width',
    width: '260px',
    '& .SamSidebar-closeBtn': {
      float: 'right',
      margin: '16px',
      cursor: 'pointer',
    },
    '& .SamSidebar-logoSection': {
      padding: '32px',
      '& svg': {
        fontSize: '21px',
      }
    },
    '& .SamSidebar-navSection': {
      padding: '0px 12px',
    },
    '& .SamSidebar-settings': {
      position: 'absolute',
      bottom: 0,
      marginLeft: '32px',
      marginBottom: '40px',
      cursor: 'pointer',
    },
    '& .SamSidebar-expandMenuIcon': {
      border: `1.5px solid ${theme.palette.neutral.n60}`,
      borderRadius: '50%',
      padding: '8px',
      backgroundColor: theme.palette.neutral.n100, 
      position: 'fixed',
      left: '241px',
      zIndex: 2,
      cursor: 'pointer',
      // transition: '.3s',
      // transitionProperty: 'left',
      '& svg': {
        fontSize: '20px',
        marginBottom: '-4px',
        marginRight: '-1px',
      },
      '&.SamSidebar-expandMenuIcon-open': {
        transform: 'rotate(180deg)',
      },
    },
  },
  '& .SamSidebar-container-minimised': {
    width: '88px',
    '& .SamSidebar-expandMenuIcon': {
      left: '69px',
    }
  },

  // CSS for active link
  '& .SamLink-active': {
    backgroundColor: theme.palette.primary.pr100,
    '& .SamSidebar-menuItem-logo path': {
      fill: theme.palette.primary.pr50,
    },
    '& .SamSidebar-menuItem-label': {
      color: theme.palette.primary.pr50,
      fontWeight: 700,
    },
    '& .SamSidebar-menuItem-focusLine': {
      visibility: 'visible',
    }
  },
  '& .SamLink-active-parent': {
    backgroundColor: theme.palette.primary.pr100,
    '& .SamSidebar-menuItem-logo path': {
      fill: theme.palette.primary.pr50,
    },
    '& .SamSidebar-menuItem-label': {
      color: theme.palette.primary.pr50,
      fontWeight: 700,
    },
  },
  '& .SamSidebar-subItem-link:focus-visible': {
    outline: 'none',
    '& .SamSidebar-subItem': {
      border: `3px solid ${theme.palette.primary.pr50}`,
      padding: '13px 0px',
    }
  },
  '& .SamSidebar-menuItem-link:focus-visible': {
    outline: 'none',
    '& .SamSidebar-menuItem': {
      border: `3px solid ${theme.palette.primary.pr50}`,
      padding: '13px 0px',
    }
  },
}));

/* Style for Sidebar item in desktop view */
export const SideBarItemDesktopStyled = styled(Stack)(({ theme }) => ({
  padding: '16px 0px',
  borderRadius: '10px',
  outline: 'none',
  transition: theme.transitions.create(['background'], {
    duration: theme.transitions.duration.short,
  }),
  '& .SamSidebar-menuItem-focusLine': {
    width: '5px',
    minHeight: '37px',
    backgroundColor: theme.palette.primary.pr50,
    display: 'inline-block',
    borderRadius: '10px',
    marginLeft: '8px',
    visibility: 'hidden',
  },
  '& .SamSidebar-menuItem-stack': {
    padding: '0px 32px 0px 10px', 
    margin: 'auto 0px',
    '& .SamSidebar-menuItem-label': {
      marginLeft: '16px',
      minWidth: '116px',
    },
    '&.SamSidebar-menuItem-stack-minimised': {
      padding: '0px 15px 0px 8px',
    },
    '&.SamSidebar-menuItem-stack-open': {
      '& .SamSidebar-menuItem-label': {
        color: theme.palette.primary.pr50,
        fontWeight: 700,
      },
      '& .SamSidebar-menuItem-logo path': {
        fill: theme.palette.primary.pr50,
      },
    },
  },
  '& .SamSidebar-menuItem-expandIcon': {
    position: 'absolute',
    right: '0',
    marginRight: '32px',
    '&.SamSidebar-menuItem-expandIcon-open': {
      transform: 'rotate(270deg)',
      '& path': {
        fill: theme.palette.primary.pr50,
      },
    },
    '&.SamSidebar-menuItem-expandIcon-closed': {
      transform: 'rotate(90deg)',
      '& svg': {
        marginTop: '9px',
      },
    }
  },
  '&:hover': {
    cursor: 'pointer',
    border: `1.5px solid ${theme.palette.primary.pr50}`,
    padding: '14.5px 0px',
  },
}));

/* Style for Sidebar sub-item in desktop view */
export const SidebarSubItemDesktopStyled = styled(Stack)(({ theme }) => ({
  padding: '16px 0px',
  borderRadius: '10px',
  '& .SamSidebar-subItem-focusLine': {
    width: '5px',
    minHeight: '37px',
    backgroundColor: theme.palette.primary.pr50,
    display: 'inline-block',
    borderRadius: '10px',
    marginLeft: '8px',
    visibility: 'hidden',
  },
  '& .SamSidebar-subItem-label': {
    marginLeft: '60px',
  },
  '&:hover': {
    cursor: 'pointer',
    border: `1.5px solid ${theme.palette.primary.pr50}`,
    padding: '14.5px 0px',
  },
}));

/* Style for Sidebar in mobile view */
export const SideBarMobileStyled = styled(Box)(({ theme }) => ({
  '& .SamSidebar-blurredBackground': {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    zIndex: 1,
    backgroundColor: '#000000',
    opacity: '70%',
  },
  '& .SamSidebar-container': {
    background: theme.palette.neutral.n100,
    height: '100%',
    position: 'fixed',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      right: 0,
      width: '300px',
    },
    '& .SamSidebar-closeBtn': {
      cursor: 'pointer',
    },
    '& .SamSidebar-menuHeading': {
      padding: '32px',
    },
    '& .SamSidebar-mobile-profile': {
      borderTop: `1px solid ${theme.palette.neutral.n60}`,
      borderBottom: `1px solid ${theme.palette.neutral.n60}`,
      padding: '24px 32px',
    },
    '& .SamSidebar-navSection': {
      padding: '0px 12px',
    },
    '& .SamSidebar-mobile-others': {
      paddingTop: '28px',
      borderTop: `1px solid ${theme.palette.neutral.n70}`,
      '& .SamSidebar-mobile-notifications, & .SamSidebar-mobile-help, & .SamSidebar-mobile-settings': {
        cursor: 'pointer',
        padding: '16px 36px',
      },
    },
  },

  // CSS for active link
  '& .SamLink-active': {
    backgroundColor: theme.palette.primary.pr100,
    '& .SamSidebar-menuItem-logo path': {
      fill: theme.palette.primary.pr50,
    },
    '& .SamSidebar-menuItem-label': {
      color: theme.palette.primary.pr50,
      fontWeight: 700,
    },
    '& .SamSidebar-menuItem-focusLine': {
      visibility: 'visible',
    }
  },
  '& .SamLink-active-parent': {
    backgroundColor: theme.palette.primary.pr100,
    '& .SamSidebar-menuItem-logo path': {
      fill: theme.palette.primary.pr50,
    },
    '& .SamSidebar-menuItem-label': {
      color: theme.palette.primary.pr50,
      fontWeight: 700,
    },
  },

  // CSS for focused link
  '& .SamSidebar-subItem-link:focus-visible': {
    outline: 'none',
    '& .SamSidebar-subItem': {
      border: `3px solid ${theme.palette.primary.pr50}`,
      padding: '13px 0px',
    }
  },
  '& .SamSidebar-menuItem-link:focus-visible': {
    outline: 'none',
    '& .SamSidebar-menuItem': {
      border: `3px solid ${theme.palette.primary.pr50}`,
      padding: '13px 0px',
    }
  },
}));

/* Style for Sidebar's item in mobile view */
export const SideBarItemMobileStyled = styled(Stack)(({ theme }) => ({
  padding: '16px 0px',
  borderRadius: '10px',
  outline: 'none',
  transition: theme.transitions.create(['background'], {
    duration: theme.transitions.duration.short,
  }),
  '& .SamSidebar-menuItem-focusLine': {
    width: '5px',
    minHeight: '37px',
    backgroundColor: theme.palette.primary.pr50,
    display: 'inline-block',
    borderRadius: '10px',
    marginLeft: '8px',
    visibility: 'hidden',
  },
  '& .SamSidebar-menuItem-stack': {
    padding: '0px 32px 0px 10px', 
    margin: 'auto 0px',
    '& .SamSidebar-menuItem-label': {
      marginLeft: '16px',
      minWidth: '116px',
    },
  },
  '& .SamSidebar-menuItem-expandIcon': {
    position: 'absolute',
    right: '0',
    marginRight: '32px',
    '&.SamSidebar-menuItem-expandIcon-open': {
      transform: 'rotate(270deg)',
    },
    '&.SamSidebar-menuItem-expandIcon-closed': {
      transform: 'rotate(90deg)',
      '& svg': {
        marginTop: '9px',
      },
    }
  },
  '&:hover': {
    cursor: 'pointer',
    border: `1.5px solid ${theme.palette.primary.pr50}`,
    padding: '14.5px 0px',
  },
}));

/* Style for Sidebar's sub-item in mobile view */
export const SidebarSubItemMobileStyled = styled(Stack)(({ theme }) => ({
  padding: '16px 0px',
  borderRadius: '10px',
  '& .SamSidebar-subItem-focusLine': {
    width: '5px',
    minHeight: '37px',
    backgroundColor: theme.palette.primary.pr50,
    display: 'inline-block',
    borderRadius: '10px',
    marginLeft: '8px',
    visibility: 'hidden',
  },
  '& .SamSidebar-subItem-label': {
    marginLeft: '60px',
  },
  '&:hover': {
    cursor: 'pointer',
    border: `1.5px solid ${theme.palette.primary.pr50}`,
    padding: '14.5px 0px',
  },
}));
