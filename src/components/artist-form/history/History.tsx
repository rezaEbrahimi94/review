import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import { HistoryStyled } from './style'
import Documents from './Documents'
import Styles from './Styles'
import { THistory } from './type'
import Collections from './collections/Collections'
import Exhibitions from './exhibitions/Exhibitions'
import Awards from './awards/Awards'
import Commissions from './commissions/Commissions'
import Bibliography from './bibliography/Bibliography'
import Waitlist from './waitlist/Waitlist'
import { getCookieValue } from '@/utils/getCookie'
import axios, { AxiosProgressEvent, AxiosRequestConfig } from 'axios'
import ArtistContext from '@/components/context/ArtistContext'
import { NewArtistChildRef } from '../artist-new/type'
import { environment } from '@/constants/environment'
import { scrollToTopOfPage } from '@/utils/navigation'

const History = forwardRef<NewArtistChildRef, object>((props, ref) => {
  // use context to get artist Id
  const { Id, setId, setHistory, setHistoryFormData, setStep,
    personalInfoFormData, culturalInfoFormData, biography, moneyStoryFormData } = useContext(ArtistContext);

  const [data, setData] = useState<THistory>({
    Mediums: [],
    Themes: '',
    File: null,
  });

  // Assign the handleButtonClick function to the ref
  useImperativeHandle(ref, () => ({
    handleSaveData: () => {
      setHistory(data);
      setHistoryFormData(formDataSetup());
      return formDataSetup();
    },
    handleSaveAndNextButton: () => {
      handleSubmitFormData();
    }
  })); 

  // State to get upload progress
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  // Handle data change function
  const handleDataChange = (key: string, value: string | boolean | string[] | File | null ) => {
    const newData = {
      ...data,
      [key]: value
    }
    setData(newData);
  }

  // Get Access token
  const ACCESS_TOKEN = getCookieValue('accessToken');

  // Axios config
  // Count Progress of file uploading
  const config: AxiosRequestConfig<FormData> = {
    onUploadProgress: (progressEvent: AxiosProgressEvent) => {
      if (progressEvent.total !== null && progressEvent.total !== undefined) {
        const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        setUploadProgress(percentCompleted);
      } else {
        console.log('Total size is unknown');
      }
    },
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN,
    }
  }

  // Axios config for personal info and money story
  const otherConfig: AxiosRequestConfig<FormData> = {
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN,
    }
  }

  // Axios config
  const header = {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
  }

  // Setting up form data
  const formDataSetup = () => {
    const formData = new FormData();
    if (data.File) {
      formData.append('File', data.File); 
    }
    return formData;
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
        otherConfig
      )
      .then(() => {
        console.log("Money story saved.")
      })
      .catch(err => {
        console.log(err.response.data)
      })
    }

    const formData = formDataSetup();
    if(formData) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/upload-document/${artistId}`;
      // Fetch API
      await axios.post(
        DATA_SOURCE_URL,
        formData,
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
          setHistory(data);
          setStep('documents');
        })
        .catch(err => {
          console.log(err.response.data)
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
    if (Id !== undefined && Id) {
      // Fetch API
      try {
        handleSubmitOtherForms(Id);
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
          otherConfig
        )
        .then(async(res) => {
          try {
            const artistId = Number(res.data.data.Id);
            setId(artistId);
            console.log("Personal info saved.");
            handleSubmitOtherForms(artistId);
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
    <HistoryStyled>
      <Collections />
      <Exhibitions />
      <Awards />
      <Styles onChange={handleDataChange} />
      <Commissions />
      <Bibliography />
      <Waitlist />
      <Documents onChange={handleDataChange} uploadProgress={uploadProgress} />
    </HistoryStyled>
  )
})

History.displayName = 'History'; 

export default History;
