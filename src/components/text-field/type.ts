import { SxProps } from '@mui/system';

export type TTextFieldProps = {
  id?: string,
  icon?: React.ReactNode,
  label?: string,
  value?: string,
  type?: string,
  helpText?: string,
  error?: boolean,
  errorMessage?: string,
  success?: boolean,
  successMessage?: string,
  tooltip?: string,
  disabled?: boolean,
  required?: boolean,
  readOnly?: boolean,
  dataTestid?: string,
  fullWidth?: boolean,
  sx?: SxProps,
  onClick?: () => void,
  validate?: (a: string) => void,
  onChange?: (a: string) => void,
  isDigit?: boolean,
  isEmail?: boolean,
  isLink?: boolean,
  isPhone?: boolean,
  min?: number,
  max?: number,
  setFormError?: (e: string) => void
}
