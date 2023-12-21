export type TagProps = {
  id?: string,
  type?: 'active' | 'link' | 'complete' | 'pending' | 'error' | 'inactive' | 'selected',
  label?: string,
  removable?: boolean,
  onRemove?: () => void,
}