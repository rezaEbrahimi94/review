import { createContext } from 'react';
import { TArtistContext } from './type';

const iArtistContextState = {
  Id: null,
  setId: () => {},
  step: null,
  setStep: () => {},
  personalInfo: {},
  setPersonalInfo: () => {},
  culturalInfo: {},
  setCulturalInfo: () => {},
  biography: {},
  setBiography: () => {},
  moneyStory: {},
  setMoneyStory: () => {},
  history: {},
  setHistory: () => {},
  errors: null,
  setErrors: () => {},
  personalInfoFormData: null,
  setPersonalInfoFormData: () => {},
  culturalInfoFormData: null,
  setCulturalInfoFormData: () => {},
  moneyStoryFormData: null,
  setMoneyStoryFormData: () => {},
  historyFormData: null,
  setHistoryFormData: () => {},
}

const ArtistContext = createContext<TArtistContext>(iArtistContextState);

export default ArtistContext;