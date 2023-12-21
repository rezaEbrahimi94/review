export type THistory = {
  Mediums?: string[],
  Themes?: string,
  File?: File | null,
}

export type TForm = {
  onChange: (key: string, value: string | boolean | string[] | File | null) => void,
  uploadProgress?: number,
}

export type TAddFieldDialog = {
  onAddField?: (a: string) => void,
  onCloseEvt?: () => void,
}

export type TCollections = {
  Collections: TCollection[],
}

export type TCollection = {
  Id?: number,
  Artwork?: string,
  Institution?: string,
  Location?: string,
  YearAcquired?: string,
}

export type TExhibition = {
  Id?: number,
  MonthYear?: string,
  ExhibitionName?: string,
  Venue?: string,
  Location?: string,
  Type?: string,
}

export type TAward = {
  Id?: number,
  Prize?: string,
  AwardName?: string,
  Venue?: string,
  Location?: string,
  Year?: string,
}

export type TCommission = {
  Id?: number,
  Artwork?: string,
  CommissionedBy?: string,
  Place?: string,
  MonthYear?: string,
}

export type TBibliography = {
  Id?: number,
  Author?: string,
  Title?: string,
  Publisher?: string,
  Location?: string,
  Year?: string,
}

export type TWaitlist = {
  Id?: number,
  Customer?: string,
  Phone?: string,
  Email?: string,
}
