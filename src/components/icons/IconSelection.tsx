'use client';

import React from 'react';
import { SamLogo, PlaceholderIcon, AsteriskIcon,
  TickIcon, AlertIcon, IncompleteIcon, InfoIcon, CrossIcon, SlashIcon,
  HomeIcon, ChevronIcon, HelpIcon, DashboardIcon, InventoryIcon,
  BrushIcon, SendIcon, SalesIcon, PiggyIcon, GraphIcon, ACIcon,
  TuneIcon, PeopleIcon, PaletteIcon, PriceChangeIcon, ReceiptIcon,
  SettingsIcon, ArrowIcon, SearchIcon, NotificationIcon, HamburgerMenuIcon,
  SortIcon, PlusIcon, TickInCircleIcon, VisibilityIcon, CrossInCircleIcon,
  UserIcon, UploadIcon, MailIcon, PlusInCircleIcon, DeleteIcon, FilledInfoIcon,
  SmallSortIcon, PercentIcon } from './Icons';
import { SxProps } from '@mui/system';

interface IconSelectionProps {
  iconName?: string,
  sx?: SxProps,
}

export default function IconSelection({ iconName, sx }: IconSelectionProps) {
  const icon = () => {
    if (iconName) {
      switch (iconName) {
        case 'SamLogo': {
          return (
            <SamLogo sx={sx} />
          );
        }

        case 'PlaceholderIcon': {
          return (
            <PlaceholderIcon sx={sx} />
          );
        }

        case 'AsteriskIcon': {
          return (
            <AsteriskIcon sx={sx} />
          );
        }

        case 'TickIcon': {
          return (
            <TickIcon sx={sx} />
          );
        }

        case 'AlertIcon': {
          return (
            <AlertIcon sx={sx} />
          );
        }

        case 'IncompleteIcon': {
          return (
            <IncompleteIcon sx={sx} />
          );
        }

        case 'InfoIcon': {
          return (
            <InfoIcon sx={sx} />
          );
        }

        case 'CrossIcon': {
          return (
            <CrossIcon sx={sx} />
          );
        }

        case 'SlashIcon': {
          return (
            <SlashIcon sx={sx} />
          );
        }

        case 'HomeIcon': {
          return (
            <HomeIcon sx={sx} />
          );
        }
        
        case 'ChevronIcon': {
          return (
            <ChevronIcon sx={sx} />
          );
        }
        
        case 'HelpIcon': {
          return (
            <HelpIcon sx={sx} />
          );
        }

        case 'DashboardIcon': {
          return (
            <DashboardIcon sx={sx} />
          );
        }
        
        case 'InventoryIcon': {
          return (
            <InventoryIcon sx={sx} />
          );
        }
        
        case 'BrushIcon': {
          return (
            <BrushIcon sx={sx} />
          );
        }
        
        case 'SendIcon': {
          return (
            <SendIcon sx={sx} />
          );
        }
        
        case 'SalesIcon': {
          return (
            <SalesIcon sx={sx} />
          );
        }
        
        case 'PiggyIcon': {
          return (
            <PiggyIcon sx={sx} />
          );
        }
        
        case 'GraphIcon': {
          return (
            <GraphIcon sx={sx} />
          );
        }
        
        case 'ACIcon': {
          return (
            <ACIcon sx={sx} />
          );
        }
        
        case 'TuneIcon': {
          return (
            <TuneIcon sx={sx} />
          );
        }
        
        case 'PeopleIcon': {
          return (
            <PeopleIcon sx={sx} />
          );
        }
        
        case 'PaletteIcon': {
          return (
            <PaletteIcon sx={sx} />
          );
        }
        
        case 'PriceChangeIcon': {
          return (
            <PriceChangeIcon sx={sx} />
          );
        }
        
        case 'ReceiptIcon': {
          return (
            <ReceiptIcon sx={sx} />
          );
        }
        
        case 'SettingsIcon': {
          return (
            <SettingsIcon sx={sx} />
          );
        }
        
        case 'ArrowIcon': {
          return (
            <ArrowIcon sx={sx} />
          );
        }
        
        case 'SearchIcon': {
          return (
            <SearchIcon sx={sx} />
          );
        }
        
        case 'NotificationIcon': {
          return (
            <NotificationIcon sx={sx} />
          );
        }
        
        case 'HamburgerMenuIcon': {
          return (
            <HamburgerMenuIcon sx={sx} />
          );
        }
        
        case 'SortIcon': {
          return (
            <SortIcon sx={sx} />
          );
        }
        
        case 'PlusIcon': {
          return (
            <PlusIcon sx={sx} />
          );
        }
        
        case 'TickInCircleIcon': {
          return (
            <TickInCircleIcon sx={sx} />
          );
        }
        
        case 'VisibilityIcon': {
          return (
            <VisibilityIcon sx={sx} />
          );
        }
        
        case 'CrossInCircleIcon': {
          return (
            <CrossInCircleIcon sx={sx} />
          );
        }
        
        case 'UserIcon': {
          return (
            <UserIcon sx={sx} />
          );
        }
        
        case 'UploadIcon': {
          return (
            <UploadIcon sx={sx} />
          );
        }
        
        case 'MailIcon': {
          return (
            <MailIcon sx={sx} />
          );
        }
        
        case 'PlusInCircleIcon': {
          return (
            <PlusInCircleIcon sx={sx} />
          );
        }
        
        case 'DeleteIcon': {
          return (
            <DeleteIcon sx={sx} />
          );
        }

        case 'FilledInfoIcon': {
          return (
            <FilledInfoIcon sx={sx} />
          );
        }
        
        case 'SmallSortIcon': {
          return (
            <SmallSortIcon sx={sx} />
          );
        }
        
        case 'PercentIcon': {
          return (
            <PercentIcon sx={sx} />
          );
        }

        default:
          return null;
      }
    }
  };
  return icon() === undefined ? null : icon();
}
