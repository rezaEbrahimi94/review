import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import { BiographyStyled } from './style';
import BioCard from './BioCard';
import VideoCard from './VideoCard';
import ArtistContext from '@/components/context/ArtistContext';
import { TBiography } from './type';
import { getCookieValue } from '@/utils/getCookie';
import axios, { AxiosRequestConfig } from 'axios';
import { NewArtistChildRef } from '../artist-new/type';
import { scrollToElementById, scrollToTopOfPage } from '@/utils/navigation';
import { environment } from '@/constants/environment';

const Biography = forwardRef<NewArtistChildRef, object>((props, ref) => {
  // Get Access token
  const ACCESS_TOKEN = getCookieValue('accessToken');

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
  }

  // use context to get artist Id
  const { Id, setId, biography, setBiography, setStep, errors, personalInfoFormData,
    culturalInfoFormData, moneyStoryFormData, historyFormData } = useContext(ArtistContext);

  // Assign the handleButtonClick function to the ref
  useImperativeHandle(ref, () => ({
    handleSaveData: () => {
      setBiography(bioData);
      const hasError = validate();
      if(hasError) {
        handleScrollToError();
        return false;
      } else {
        return bioData;
      }
    },
    handleSaveAndNextButton: () => {
      handleSubmitFormData();
    }
  })); 

  // state for data
  const [bioData, setBioData] = useState<TBiography>({
    IsBiographyPublic: biography?.IsBiographyPublic !== undefined ? biography?.IsBiographyPublic : true,
    IsVideoPublic: biography?.IsVideoPublic !== undefined ? biography?.IsVideoPublic : true,
    Biography: biography?.Biography ?? '',
    VideoTitle: biography?.VideoTitle ?? '',
    VideoUrl: biography?.VideoUrl ?? '',
  });

  // validate data before POST
  const validate = () => {
    let errorFlag = false;
    if(errors?.VideoTitle || errors?.VideoUrl) {
      errorFlag = true
    }
    return errorFlag;
  }

  // function to scroll to exactly error
  const handleScrollToError = () => {
    if(errors?.VideoTitle) {
      scrollToElementById('VideoTitle-Container')
      return false;
    }
    if(errors?.VideoUrl) {
      scrollToElementById('VideoUrl-Container')
      return false;
    }
  }

  // Handle data change function
  const handleDataChange = (key: string, value: string | boolean | null) => {
    const newData = {
      ...bioData,
      [key]: value
    }
    setBioData(newData);
  }

  // Axios config
  // Count Progress of file uploading
  const config: AxiosRequestConfig<FormData> = {
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN,
    }
  }

  const handleSubmitOtherForms = async(artistId: number) => {
    if(culturalInfoFormData) {
      // Fetch cultural info API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/cultural-info/${artistId}`;
  
      await axios.post(
        DATA_SOURCE_URL,
        culturalInfoFormData,
        {
          headers: header
        }
      )
      .then(() => {  
        console.log("Cultural info saved.")
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }

    if(bioData) {
      // Fetch Bio API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/biography/${artistId}`;
  
      await axios.post(
        DATA_SOURCE_URL,
        bioData,
        {
          headers: header
        }
      )
      .then(() => {  
        console.log("Biography saved.")
        setBiography(bioData);
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
      // Check if has any errors
      const hasError = validate();
      if(!hasError) {
        try {
          handleSubmitOtherForms(Id);
          setStep('moneyStory');
          scrollToTopOfPage();
        } catch(err) {
          console.log(err)
        }
      } else {
        handleScrollToError();
      }
    } else if(personalInfoFormData) {
      // Fetch Personal info API
      const hasError = validate();
      if(!hasError) {
        const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/personal-info`;
  
        await axios.post(
          DATA_SOURCE_URL,
          personalInfoFormData,
          config
        )
        .then(async(res) => {
          try {
            const artistId = Number(res.data.data.Id);
            setId(artistId);
            console.log("Personal info saved.");
            handleSubmitOtherForms(artistId);
            setStep('moneyStory');
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
  }

  return (
    <BiographyStyled>
      <BioCard onChange={handleDataChange} />
      <VideoCard onChange={handleDataChange} />
    </BiographyStyled>
  )
})

Biography.displayName = 'Biography'; 

export default Biography
