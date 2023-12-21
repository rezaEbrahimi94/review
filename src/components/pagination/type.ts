export type TSamPaginationProps = {
  id?: string,
  count: number,
  totalNum: number,
  boundaryCount?: number,
  siblingCount?: number,
  disabled?: boolean,
  defaultPageSize?: number,
  handlePaginationEvt?: (value: number) => void,
  handleItemNumChange?: (value: number) => void,
  onChange: (key: string, value: string | boolean | number | undefined) => void,
}
