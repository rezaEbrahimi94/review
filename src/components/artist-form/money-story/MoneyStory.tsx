import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import { MoneyStoryStyled } from '@/components/artist-form/money-story/style'
import FinancialInfo from '@/components/artist-form/money-story/FinancialInfo'
import TaxInfo from '@/components/artist-form/money-story/TaxInfo'
import ContractAgreement from '@/components/artist-form/money-story/ContractAgreement'
import ArtistContext from '@/components/context/ArtistContext'
import { TMoneyStory } from './type'
import axios, { AxiosProgressEvent, AxiosRequestConfig } from 'axios'
import { getCookieValue } from '@/utils/getCookie'
import { NewArtistChildRef } from '../artist-new/type'
import { scrollToElementById, scrollToTopOfPage } from '@/utils/navigation'
import { environment } from '@/constants/environment'

const MoneyStory = forwardRef<NewArtistChildRef, object>((props, ref) => {
  // use context to get artist Id
  const { Id, setId, moneyStory, setMoneyStory, setMoneyStoryFormData, setStep, errors,
    personalInfoFormData, culturalInfoFormData, biography, historyFormData } = useContext(ArtistContext);

  // State to get upload progress
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  // Assign the handleButtonClick function to the ref
  useImperativeHandle(ref, () => ({
    handleSaveData: () => {
      setMoneyStory(data);
      setMoneyStoryFormData(formDataSetup());
      const hasError = validate();
      if(hasError) {
        handleScrollToError();
        return false;
      } else {
        return formDataSetup();
      }
    },
    handleSaveAndNextButton: () => {
      handleSubmitFormData();
    }
  })); 

  // State for form data
  const [data, setData] = useState<TMoneyStory>({
    Level: moneyStory?.Level ?? '',
    BankAccountName: moneyStory?.BankAccountName ?? '',
    BankBSB: moneyStory?.BankBSB ?? '',
    BankAccount: moneyStory?.BankAccount ?? '',
    HasABN: moneyStory?.HasABN !== undefined ? moneyStory?.HasABN : false,
    ABN: moneyStory?.ABN ?? '',
    RegisteredForGST: moneyStory?.RegisteredForGST !== undefined ? moneyStory?.RegisteredForGST :false,
    ContractDocuments: moneyStory?.ContractDocuments ?? null,
  });

  const [endpointErrors, setEndpointErrors] = useState({
    ABN: '',
  })

  // validate data before POST
  const validate = () => {
    let errorFlag = false;
    if (errors?.BankAccountName || errors?.BankBSB || errors?.BankAccount ||
      errors?.ABN) {
      errorFlag = true;
    }
    return errorFlag;
  }

  // function to scroll to exactly error
  const handleScrollToError = () => {
    if(errors?.BankAccountName) {
      scrollToElementById('BankAccountName-Container')
      return false;
    }
    if(errors?.BankBSB) {
      scrollToElementById('BankBSB-Container')
      return false;
    }
    if(errors?.BankAccount) {
      scrollToElementById('BankAccount-Container')
      return false;
    }
    if(errors?.ABN) {
      scrollToElementById('ABN-Container')
      return false;
    }
  }

  // Handle data change function
  const handleDataChange = (key: string, value: string | boolean | File | null) => {
    const newData = {
      ...data,
      [key]: value
    }
    setData(newData);
  }

  // Get Access token
  const ACCESS_TOKEN = getCookieValue('accessToken');

  // Setting up form data
  const formDataSetup = () => {
    const formData = new FormData();
    formData.append('Level', data.Level ?? '');
    formData.append('BankAccountName', data.BankAccountName ?? '');
    formData.append('BankBSB', data.BankBSB ?? '');
    formData.append('BankAccount', data.BankAccount ?? '');
    formData.append('HasABN', String(data.HasABN));
    formData.append('ABN', data.ABN ?? '');
    formData.append('RegisteredForGST', String(data.RegisteredForGST));
    if (data.ContractDocuments !== null && data.ContractDocuments !== undefined) {
      formData.append('ContractDocuments', data.ContractDocuments);
    }
    return formData;
  }

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

  // Axios config
  // Count Progress of file uploading
  const personalInfoConfig: AxiosRequestConfig<FormData> = {
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN,
    }
  }

  // Axios config
  const header = {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
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

    const formData = formDataSetup();
    if(formData) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/money-story/${artistId}`;
      setMoneyStory(data);
      // Fetch API
      await axios.post(
        DATA_SOURCE_URL,
        formData,
        config
      )
      .then(() => {
        console.log("Money story saved.")
      })
      .catch(err => {
        console.log(err.response.data)
        if (err.response.data.errors?.ABN !== undefined) {
          setEndpointErrors(prevState => ({
            ...prevState,
            ABN: err.response.data.errors.ABN
          }))
        }
        scrollToElementById('ABN-Container');
      })
    }

    if(historyFormData) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/upload-document/${artistId}`;
      // Fetch API
      await axios.post(
        DATA_SOURCE_URL,
        historyFormData,
        personalInfoConfig
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
    if (Id !== undefined && Id) {
      // Fetch API
      const hasError = validate();
      if (!hasError) {
        try {
          handleSubmitOtherForms(Id);
          setStep('artistHistory');
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
          personalInfoConfig
        )
        .then(async(res) => {
          try {
            const artistId = Number(res.data.data.Id);
            setId(artistId);
            console.log("Personal info saved.");
            handleSubmitOtherForms(artistId);
            setStep('artistHistory');
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
    <MoneyStoryStyled>
      <FinancialInfo onChange={handleDataChange} />
      <TaxInfo onChange={handleDataChange} errorsEndpoint={endpointErrors} />
      <ContractAgreement onChange={handleDataChange} uploadProgress={uploadProgress} />
    </MoneyStoryStyled>
  )
})

MoneyStory.displayName = 'MoneyStory'; 

export default MoneyStory