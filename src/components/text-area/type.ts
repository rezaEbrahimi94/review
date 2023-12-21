export type TSamTextAreaProps = {
  id: string,
  charLimit?: number,
  label?: string,
  value?: string,
  helpText?: string,
  error?: boolean,
  success?: boolean,
  disabled?: boolean,
  required?: boolean,
  fullWidth?: boolean,
  rows?: number,
  onChange?: (a: string) => void,
}