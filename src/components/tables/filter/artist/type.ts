export type TTableFilterProps = {
  id?: string,
  bulkActions?: boolean,
  handleSearchFieldChange?: (value: string) => void,
  type?: string,
  noOfResults?: number,
  handleToggleDialog?: () => void,
  onChange: (key: string, value: string | boolean | number | undefined) => void,
}

export type TFilterArtistDialog = {
  handleToggleDialog: () => void,
  onChange: (key: string, value: string | boolean | number | undefined) => void,
}
