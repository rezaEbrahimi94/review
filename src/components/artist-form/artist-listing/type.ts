export type TArtistsProps = {
  id?: string,
  items?: TArtistItemProps[],
  onChange?: (key: string, value: string | boolean | number | undefined) => void,
}

type ArtistImage = {
  ImageS3Key: string,
}

export type TArtistItemProps = {
  Id?: number,
  images?: ArtistImage[] | null,
  Firstname?: string,
  Surname: string,
  Bushname?: string | null,
  ArtistSubSectionSkin: {
    SubSectionSkinId: number,
    SubSectionSkin: {
        Description: string
    }
  } | null,
  OtherName?: string | null,
  ArtistCommunity: {
    CommunityId: number,
    Community: {
        Description: string
    }
  } | null,
  Deceased?: boolean,
}

export type TFilterProps = {
  Name?: string,
  NameLabel?: string,
  Page?: number,
  PageSize?: number,
  SortBy?: string,
  SortOrder?: string,
  Language?: number,
  LanguageLabel?: string,
  Community?: number,
  CommunityLabel?: string,
  Clan?: number,
  ClanLabel?: string,
  Country?: number,
  CountryLabel?: string,
  Gender?: string,
  PricingLevel?: string,
  Deceased?: boolean,
}
