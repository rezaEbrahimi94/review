export type TSamTooltipProps = {
  id: string,
  content: string | TrustedHTML,
  placement?: 'bottom' | 'top' | 'left' | 'right',
  dark?: boolean,
  notShowAgain?: boolean,
  open?: boolean,
  children?: React.ReactNode,
  closeConfig?: () => void
}
