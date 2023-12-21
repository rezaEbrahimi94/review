export type TSwitchProps = {
  id: string,
  name: string,
  value: string,
  label?: string,
  checked?: boolean,
  description?: string,
  disabled?: boolean,
  onChange?: () => void,
}
