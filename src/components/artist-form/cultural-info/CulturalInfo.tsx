import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { CulturalInfoStyled } from '@/components/artist-form/cultural-info/style';
import LanguageCommunity from '@/components/artist-form/cultural-info/LanguageCommunity';
import Locations from '@/components/artist-form/cultural-info/Locations';
import Other from '@/components/artist-form/cultural-info/Other';
import { TCulturalInfo } from '@/components/artist-form/cultural-info/type';
import axios, { AxiosRequestConfig } from 'axios';
import ArtistContext from '@/components/context/ArtistContext';
import { getCookieValue } from '@/utils/getCookie';
import { TDropdownItemProps } from '@/components/dropdown/type';
import { NewArtistChildRef } from '../artist-new/type';
import { scrollToTopOfPage } from '@/utils/navigation';
import { environment } from '@/constants/environment';

const CulturalInfo = forwardRef<NewArtistChildRef, object>((props, ref) => {
  // use context to get artist Id
  const { Id, setId, culturalInfo, setCulturalInfo, setCulturalInfoFormData, setStep,
    personalInfoFormData, biography, moneyStoryFormData, historyFormData } = useContext(ArtistContext);

  // Assign the handleButtonClick function to the ref
  useImperativeHandle(ref, () => ({
    handleSaveData: () => {
      setCulturalInfo(data);
      setCulturalInfoFormData(formDataSetup());
      return formDataSetup();
    },
    handleSaveAndNextButton: () => {
      handleSubmitFormData();
    }
  })); 
  
  const [data, setData] = useState<TCulturalInfo>({
    LanguageIds: culturalInfo?.LanguageIds ?? [],
    CommunityIds: culturalInfo?.CommunityIds ??'',
    CountryIds: culturalInfo?.CountryIds ?? '',
    FatherCountryIds: culturalInfo?.FatherCountryIds ?? '',
    MotherCountryIds: culturalInfo?.MotherCountryIds ?? '',
    ArtistBirthPlace: culturalInfo?.ArtistBirthPlace ?? '',
    ArtistOutstation: culturalInfo?.ArtistOutstation ?? '',
    DreamingIds: culturalInfo?.DreamingIds ?? '',
    DanceIds: culturalInfo?.DanceIds ?? '',
    Clan: culturalInfo?.Clan ?? '',
    WindsIds: culturalInfo?.WindsIds ?? '',
    MoietyIds: culturalInfo?.MoietyIds ?? '',
    IsLanguagePublic: culturalInfo?.IsLanguagePublic !== undefined ? culturalInfo?.IsLanguagePublic : true,
    IsLocationPublic: culturalInfo?.IsLocationPublic !== undefined ? culturalInfo?.IsLocationPublic : true,
    IsOtherPublic: culturalInfo?.IsOtherPublic !== undefined ? culturalInfo?.IsOtherPublic : true,

    // property for label
    ArtistBirthPlaceLabel: culturalInfo?.ArtistBirthPlaceLabel ?? '',
    ArtistOutstationLabel: culturalInfo?.ArtistOutstationLabel ?? '',
    ClanLabel: culturalInfo?.ClanLabel ?? '',
    MoietyLabel: culturalInfo?.MoietyLabel ?? '',
    LanguageArr: culturalInfo?.LanguageArr ?? [],
    CommunityLabel: culturalInfo?.CommunityLabel ?? '',
    CountryLabel: culturalInfo?.CountryLabel ?? '',
    FatherCountryLabel: culturalInfo?.FatherCountryLabel ?? '',
    MotherCountryLabel: culturalInfo?.MotherCountryLabel ?? '',
    DreamingLabel: culturalInfo?.DreamingLabel ?? '',
    DanceLabel: culturalInfo?.DanceLabel ?? '',
    WindsLabel: culturalInfo?.WindsLabel ?? '',
  });

  // Ref to persist the value without causing a re-render
  const LanguageIdsRef = useRef([] as number[]);
  const CommunityIdsRef = useRef<string>('');
  const CountryIdsRef = useRef<string>('');
  const FatherCountryIdsRef = useRef<string>('');
  const MotherCountryIdsRef = useRef<string>('');
  const ArtistBirthPlaceRef = useRef<string>('');
  const ArtistOutstationRef = useRef<string>('');
  const DreamingIdsRef = useRef<string>('');
  const DanceIdsRef = useRef<string>('');
  const ClanRef = useRef<string>('');
  const WindsIdsRef = useRef<string>('');
  const MoietyIdsRef = useRef<string>('');

  // Handle data change function
  const handleDataChange = (key: string, value: string | number | boolean | string[] | number[] | null | TDropdownItemProps[] ) => {
    const newData = {
      ...data,
      [key]: value
    }
    setData(newData);
    switch(key){
      case 'LanguageIds':
        LanguageIdsRef.current = value as number[];
        break;
      case 'CommunityIds':
        CommunityIdsRef.current = value as string;
        break;
      case 'CountryIds':
        CountryIdsRef.current = value as string;
        break;
      case 'FatherCountryIds':
        FatherCountryIdsRef.current = value as string;
        break;
      case 'MotherCountryIds':
        MotherCountryIdsRef.current = value as string;
        break;
      case 'ArtistBirthPlace':
        ArtistBirthPlaceRef.current = value as string;
        break;
      case 'ArtistOutstation':
        ArtistOutstationRef.current = value as string;
        break;
      case 'DreamingIds':
        DreamingIdsRef.current = value as string;
        break;
      case 'DanceIds':
        DanceIdsRef.current = value as string;
        break;
      case 'Clan':
        ClanRef.current = value as string;
        break;
      case 'WindsIds':
        WindsIdsRef.current = value as string;
        break;
      case 'MoietyIds':
        MoietyIdsRef.current = value as string;
        break;
    }
  }

  // Get Access token
  const ACCESS_TOKEN = getCookieValue('accessToken');

  // Axios config
  // Count Progress of file uploading
  const config: AxiosRequestConfig<FormData> = {
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN,
    }
  }

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
  }

  // Setting up form data
  const formDataSetup = () => {
    const sendData = {
      LanguageIds: LanguageIdsRef.current,
      CommunityIds: CommunityIdsRef.current,
      CountryIds: CountryIdsRef.current,
      FatherCountryIds: FatherCountryIdsRef.current,
      MotherCountryIds: MotherCountryIdsRef.current,
      ArtistBirthPlace: ArtistBirthPlaceRef.current,
      ArtistOutstation: ArtistOutstationRef.current,
      DreamingIds: DreamingIdsRef.current,
      DanceIds: DanceIdsRef.current,
      Clan: ClanRef.current,
      WindsIds: WindsIdsRef.current,
      MoietyIds: MoietyIdsRef.current,
      IsLanguagePublic: data.IsLanguagePublic,
      IsLocationPublic: data.IsLocationPublic,
      IsOtherPublic: data.IsOtherPublic,
    }
    return sendData;
  }

  const handleSubmitOtherForms = async(artistId: number) => {
    const sendData = formDataSetup();
    if(sendData) {
      // Fetch cultural info API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/cultural-info/${artistId}`;
  
      await axios.post(
        DATA_SOURCE_URL,
        sendData,
        {
          headers: header
        }
      )
      .then(() => {  
        console.log("Cultural info saved.")
        setCulturalInfo(data);
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }

    if(biography) {
      // Fetch Bio API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/biography/${artistId}`;
  
      await axios.post(
        DATA_SOURCE_URL,
        biography,
        {
          headers: header
        }
      )
      .then(() => {  
        console.log("Biography saved.")
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }

    if(moneyStoryFormData) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/money-story/${artistId}`;
    
      // Fetch API
      await axios.post(
        DATA_SOURCE_URL,
        moneyStoryFormData,
        config
      )
      .then(() => {
        console.log("Money story saved.")
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }

    if(historyFormData) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/upload-document/${artistId}`;
      // Fetch API
      await axios.post(
        DATA_SOURCE_URL,
        historyFormData,
        config
      )
      .then(async (res) => {
        const fileS3Key = res.data.FileS3Key;
        console.log("History saved.")
        const FETCH_SYSTEMDOC_URL = `${environment.BASE_URL}/dev/artist/system-document/${artistId}`;
        const savedFile = {
          Documents: [
            {
              'FileS3Key': fileS3Key,
              'Type': 'artworks'
            }
          ]
        }
        await axios.post(
          FETCH_SYSTEMDOC_URL,
          savedFile,
          {
            headers: header
          }
        )
        .then(() => {
          console.log("History file uploaded.")
        })
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }
  }

  // Function to handle submit data
  const handleSubmitFormData = async () => {
    // Check if artist Id exists
    if(Id !== undefined && Id) {
      try {
        handleSubmitOtherForms(Id);
        setStep('biography');
        scrollToTopOfPage();
      } catch(err) {
        console.log(err)
      }
    } else if(personalInfoFormData) {
      // Fetch Personal info API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/personal-info`;

      await axios.post(
        DATA_SOURCE_URL,
        personalInfoFormData,
        config
      )
      .then(async(res) => {
        try {
          const artistId = Number(res.data.data.Id);
          setId(res.data.data.Id)
          console.log("Personal info saved.");
          handleSubmitOtherForms(artistId);
          setStep('biography');
          scrollToTopOfPage();
        } catch(err) {
          console.log(err)
        }
      }) // Personal info error
      .catch((err) => {
        console.log(err.response.data)
      })
    }
  }

  return (
    <CulturalInfoStyled>
      <LanguageCommunity onChange={handleDataChange} />
      <Locations onChange={handleDataChange} />
      <Other onChange={handleDataChange} /> 
    </CulturalInfoStyled>
  )
})

CulturalInfo.displayName = 'CulturalInfo'; 

export default CulturalInfo
