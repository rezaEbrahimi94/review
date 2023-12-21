export type TAddressAutocomplete = {
  id: string,
  label: string,
  value?: string,
  fullWidth?: boolean,
  onChange?: (a: string) => void,
}

export type TAddressSuggestionList = {
  getInputProps: (options: { placeholder: string; className: string }) => JSX.IntrinsicElements['input'],
  suggestions: TAddressSuggestion[],
  getSuggestionItemProps: (suggestion: TAddressSuggestion, options: { className: string }) => JSX.IntrinsicElements['div'],
  loading: boolean,
}

export type TAddressSuggestion = {
  description: string,
  active: boolean,
  placeId: string,
}
