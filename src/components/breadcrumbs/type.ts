export type BreadcrumbProps = {
  id?: string,
  separator?: React.ReactNode,
  items: string[],
}

export type BreadcrumbItemProps = {
  id?: string,
  label?: string,
  link: string,
}
