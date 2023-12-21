export type TBiography = {
  IsBiographyPublic?: boolean,
  IsVideoPublic?: boolean,
  Biography?: string,
  VideoTitle?: string,
  VideoUrl?: string,
}

export type TForm = {
  onChange: (key: string, value: boolean | string | null) => void,
}

export type TFormErrors = {
  Biography?: string,
  VideoTitle?: string,
  VideoUrl?: string,
}
