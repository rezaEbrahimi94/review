export type TSidebarProps = {
  id?: string,
  title?: string,
  items: TSidebarItemProps[],
  handleSidebarExpandControl?: () => void,
  openMobileMenu?: boolean,
  handleSideMenuMobileControl?: () => void,
}

export type TSidebarItemProps = {
  id?: string,
  label: string,
  url?: string,
  icon?: string,
  items?: TSidebarItemProps[],
  defaultOpen?: boolean,
  defaultExpand?: boolean,
}

export type THeaderProps = {
  id?: string,
  handleSideMenuMobileControl?: () => void,
}

export type THeaderMobileProps = {
  handleSideMenuMobileControl?: () => void,
}
