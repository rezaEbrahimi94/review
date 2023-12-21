import { TDropdownItemProps } from '@/components/dropdown/type'

export type TCulturalInfo = {
  LanguageIds?: number[],
  CommunityIds?: string,
  CountryIds?: string,
  FatherCountryIds?: string,
  MotherCountryIds?: string,
  ArtistBirthPlace?: string,
  ArtistOutstation?: string,
  DreamingIds?: string,
  DanceIds?: string,
  Clan?: string,
  WindsIds?: string,
  MoietyIds?: string,
  IsLanguagePublic?: boolean,
  IsLocationPublic?: boolean,
  IsOtherPublic?: boolean,

  // Property for label
  ArtistBirthPlaceLabel?: string,
  ArtistOutstationLabel?: string,
  ClanLabel?: string,
  MoietyLabel?: string,
  LanguageArr?: TDropdownItemProps[],
  CommunityLabel?: string,
  CountryLabel?: string,
  FatherCountryLabel?: string,
  MotherCountryLabel?: string,
  DreamingLabel?: string,
  DanceLabel?: string,
  WindsLabel?: string,
}

export type TForm = {
  onChange: (key: string, value: number[] | boolean | string[] | string | number | null | TDropdownItemProps[]) => void,
}
