import { TArtistItemProps, TFilterProps } from '../artist-form/artist-listing/type'
import { TBiography } from '../artist-form/biography/type'
import { TCulturalInfo } from '../artist-form/cultural-info/type'
import { THistory } from '../artist-form/history/type'
import { TMoneyStory } from '../artist-form/money-story/type'
import { TFormErrors, TPersonalInfoData } from '../artist-form/personal-info/type'

export type TArtistContext = {
  Id: number | null,
  setId: React.Dispatch<React.SetStateAction<number | null>>,
  step: string | null,
  setStep: React.Dispatch<React.SetStateAction<string | null>>,
  personalInfo: TPersonalInfoData | null,
  setPersonalInfo: React.Dispatch<React.SetStateAction<TPersonalInfoData | null>>,
  culturalInfo: TCulturalInfo | null,
  setCulturalInfo: React.Dispatch<React.SetStateAction<TCulturalInfo | null>>,
  biography: TBiography | null,
  setBiography: React.Dispatch<React.SetStateAction<TBiography | null>>,
  moneyStory: TMoneyStory | null,
  setMoneyStory: React.Dispatch<React.SetStateAction<TMoneyStory | null>>,
  history: THistory | null,
  setHistory: React.Dispatch<React.SetStateAction<THistory | null>>,
  errors: TFormErrors | null,
  setErrors: React.Dispatch<React.SetStateAction<TFormErrors | null>>,
  // submit form Data
  personalInfoFormData: FormData | null,
  setPersonalInfoFormData: React.Dispatch<React.SetStateAction<FormData | null>>,
  culturalInfoFormData: TCulturalInfo | null,
  setCulturalInfoFormData: React.Dispatch<React.SetStateAction<TCulturalInfo | null>>,
  moneyStoryFormData: FormData | null,
  setMoneyStoryFormData: React.Dispatch<React.SetStateAction<FormData | null>>,
  historyFormData: FormData | null,
  setHistoryFormData: React.Dispatch<React.SetStateAction<FormData | null>>,
}

export type TSearchArtistContext = {
  filteredData: TArtistItemProps[],
  setFilteredData: React.Dispatch<React.SetStateAction<TArtistItemProps[]>>,
  resultsCount: number,
  setResultsCount: React.Dispatch<React.SetStateAction<number>>,
  filter: TFilterProps,
  setFilter: React.Dispatch<React.SetStateAction<TFilterProps>>,
}
