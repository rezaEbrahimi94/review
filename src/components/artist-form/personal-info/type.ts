import { TBiography } from '../biography/type'
import { TCulturalInfo } from '../cultural-info/type'
import { TMoneyStory } from '../money-story/type'

export type TPersonalInfoData = {
  IsNamePublic?: boolean,
  Firstname?: string,
  Surname?: string,
  Bushname?: string,
  SubSectionSkinId?: number | null, 
  OtherName?: string,
  NameNote?: string, 
  TitleId?: number,
  Gender?: string,
  BirthDate?: string,
  Deceased?: boolean,
  DeceasedDate?: string,
  DeathNote?: string, 
  Circa?: boolean,
  IsProfileImagePublic?: boolean,
  ProfileImage?: File | null,
  Phone?: string,
  EmailAddress?: string,
  ContactNote?: string, 
  Address?: string,
  Address2?: string,
  HasWill?: boolean,
  DateOfWill?: string,
  Will?: string,
  LegalNote?: string 
  Disability?: boolean,

  // Property for dropdown label
  SubSectionSkin?: string,
  GenderLabel?: string,
}

export interface TArtist extends TPersonalInfoData, TCulturalInfo, TBiography, 
  TMoneyStory {
  Id?: number,
}

export type TForm = {
  onChange: (key: string, value: string | boolean | number | File | File[] | null | undefined) => void,
  errorsEndpoint?: TFormErrors,
  uploadProgress?: number,
}

export type TFormErrors = {
  Firstname?: string,
  Surname?: string,
  Bushname?: string,
  OtherName?: string,
  DeceasedDate?: string,
  Phone?: string,
  EmailAddress?: string,
  ContactNote?: string,
  Address?: string,
  Address2?: string,
  DateOfWill?: string,
  Will?: string,
  TitleId?: string,
  Gender?: string,
  BirthDate?: string,
  Deceased?: string,
  Circa?: string,
  ProfileImage?: string,
  HasWill?: string,
  Disability?: string,
  VideoTitle?: string,
  VideoUrl?: string,
  BankAccountName?: string,
  BankBSB?: string,
  BankAccount?: string,
  ABN?: string,
}
