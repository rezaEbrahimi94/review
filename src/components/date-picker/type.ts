export type TDropdownDatePickerProps = {
  id: string,
  label: string,
  required?: boolean,
  error?: boolean,
  success?: boolean,
  disabled?: boolean,
}

export type TDateRangeProps = {
  startDate: Date | number,
  endDate: Date | number,
  key: 'selection',
}

/* Type of date picker */
export type TInputDatePicker = {
  id: string,
  label: string, 
  value?: string,
  defaultTime?: string, 
  required?: boolean, 
  error?: boolean, 
  errorMessage?: string,
  success?: boolean, 
  disabled?: boolean,
  onChange?: (value: string) => void,
  setFormError?: (e: string) => void,
}
