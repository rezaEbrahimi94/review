export type TSidebarProps = {
  id?: string,
  title?: string,
  items: TSidebarItemProps[],
  handleSidebarExpandControl?: () => void,
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

export type TSidebarMobileProps = {
  id?: string,
  title?: string,
  items: TSidebarItemProps[],
  handleSidebarControl?: () => void,
  openMobileMenu?: boolean,
  handleSideMenuMobileControl?: () => void,
}
