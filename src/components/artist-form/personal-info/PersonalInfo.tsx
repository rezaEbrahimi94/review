import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import NameIdentity from '@/components/artist-form/personal-info/NameIdentity';
import ProfileImage from '@/components/artist-form/personal-info/ProfileImage';
import Contact from '@/components/artist-form/personal-info/Contact';
import Address from '@/components/artist-form/personal-info/Address';
import Legal from '@/components/artist-form/personal-info/Legal';
import { PersonalInfoStyled } from '@/components/artist-form/personal-info/style';
import { TPersonalInfoData } from '@/components/artist-form/personal-info/type';
import axios, { AxiosProgressEvent, AxiosRequestConfig } from 'axios';
import ArtistContext from '@/components/context/ArtistContext';
import { getCookieValue } from '@/utils/getCookie';
import { NewArtistChildRef } from '../artist-new/type';
import { scrollToElementById, scrollToTopOfPage } from '@/utils/navigation';
import { environment } from '@/constants/environment';

/* Component of Personal info in add an artist page */
const PersonalInfo = forwardRef<NewArtistChildRef, object>((props, ref) => {

  // useContext
  const { personalInfo, setPersonalInfo, setPersonalInfoFormData, setId, setStep, 
    errors, culturalInfoFormData, biography, moneyStoryFormData,
    historyFormData } = useContext(ArtistContext);

  // State to get upload progress
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  // function to scroll to exactly error
  const handleScrollToError = () => {
    if(endpointErrorsRef.current.Firstname) {
      scrollToElementById('Firstname-Container')
      return false;
    }
    if(endpointErrorsRef.current.Surname) {
      scrollToElementById('Surname-Container')
      return false;
    }
    if(endpointErrorsRef.current.Gender) {
      scrollToElementById('Gender-Container')
      return false;
    }
    if(endpointErrorsRef.current.BirthDate) {
      scrollToElementById('BirthDate-Container')
      return false;
    }
    if(errors?.EmailAddress) {
      scrollToElementById('EmailAddress-Container')
      return false;
    }
    if(errors?.Phone) {
      scrollToElementById('Phone-Container')
      return false;
    }
  }

  // Assign the handleButtonClick function to the ref
  useImperativeHandle(ref, () => ({
    handleSaveData: () => {
      setPersonalInfo(data);
      const hasError = validate();
      setPersonalInfoFormData(formDataSetup());
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

  // State for storing data
  const [data, setData] = useState<TPersonalInfoData>({
    IsNamePublic: true,
    Firstname: personalInfo?.Firstname ?? '',
    Surname: personalInfo?.Surname ??'',
    Bushname: personalInfo?.Bushname ?? '',
    SubSectionSkinId: personalInfo?.SubSectionSkinId ?? null,
    OtherName: personalInfo?.OtherName ?? '',
    NameNote: personalInfo?.NameNote ?? '',
    TitleId: personalInfo?.TitleId ?? 1,
    Gender: personalInfo?.Gender ?? '',
    BirthDate: personalInfo?.BirthDate ?? '',
    Deceased: personalInfo?.Deceased !== undefined ? personalInfo.Deceased : false,
    DeceasedDate: personalInfo?.DeceasedDate ?? '',
    DeathNote: personalInfo?.DeathNote ?? '',
    Circa: personalInfo?.Circa !== undefined ? personalInfo.Circa : false,
    IsProfileImagePublic: personalInfo?.IsProfileImagePublic !== undefined ? personalInfo.IsProfileImagePublic : true,
    ProfileImage: personalInfo?.ProfileImage ?? null,
    Phone: personalInfo?.Phone ?? '',
    EmailAddress: personalInfo?.EmailAddress ?? '',
    ContactNote: personalInfo?.ContactNote ?? '',
    Address: personalInfo?.Address ?? '',
    Address2: personalInfo?.Address2 ?? '',
    HasWill: personalInfo?.HasWill !== undefined ? personalInfo.HasWill : false,
    DateOfWill: personalInfo?.DateOfWill ?? '',
    Will: personalInfo?.Will ?? '',
    LegalNote: personalInfo?.LegalNote ?? '',
    Disability: personalInfo?.Disability !== undefined ? personalInfo.Disability : false,

    // data for label
    SubSectionSkin: personalInfo?.SubSectionSkin ?? '',
    GenderLabel: personalInfo?.GenderLabel ?? '',
  });

  const [endpointErrors, setEndpointErrors] = useState({
    Firstname: '',
    Surname: '',
    Gender: '',
    BirthDate: '',
  })
  // Ref to persist the value without causing a re-render
  const endpointErrorsRef = useRef(endpointErrors);
  const SubSectionSkinIdRef = useRef<string | boolean | number | File | File[] | null | undefined>(undefined);

  // Handle data change function
  const handleDataChange = (key: string, value: string | boolean | number | File | File[] | null | undefined) => {
    const newData = {
      ...data,
      [key]: value
    }
    setData(newData);
    if(key == 'SubSectionSkinId') {
      SubSectionSkinIdRef.current = value;
    }
  }
  
  // validate data before POST
  const validate = () => {
    let errorFlag = false;
    // First name validate
    let currentErrors = endpointErrors;
    if(data.Firstname == undefined || data.Firstname.length < 1) {
      currentErrors = {
        ...currentErrors,
        Firstname: 'The field is required.'
      }
      errorFlag = true;
    } else {
      currentErrors = {
        ...currentErrors,
        Firstname: ''
      }
    }
    // Last name validate
    if(data.Surname == undefined || data.Surname.length < 1) {
      currentErrors = {
        ...currentErrors,
        Surname: 'The field is required.'
      }
      errorFlag = true;
    } else {
      currentErrors = {
        ...currentErrors,
        Surname: ''
      }
    }
    // Gender validate
    if(data.Gender == '') {
      currentErrors = {
        ...currentErrors,
        Gender: 'The field is required.'
      } 
      errorFlag = true;
    } else {
      currentErrors = {
        ...currentErrors,
        Gender: ''
      }
    }
    // Birthdate validate
    if(data.BirthDate == '') {
      currentErrors = {
        ...currentErrors,
        BirthDate: 'The field is required.'
      } 
      errorFlag = true;
    } else {
      currentErrors = {
        ...currentErrors,
        BirthDate: ''
      }
    }
    // Other Personal info validate
    if(errors?.EmailAddress || errors?.Phone) {
      errorFlag = true;
    }
    setEndpointErrors(currentErrors);
    endpointErrorsRef.current = currentErrors;
    if(errors?.Firstname || errors?.Surname || errors?.OtherName || errors?.Bushname ||
      errors?.Phone || errors?.EmailAddress ) {
      errorFlag = true;
    }
    return errorFlag;
  }

  // Setting up form data
  const formDataSetup = () => {
    const formData = new FormData();
    formData.append('IsNamePublic', String(data.IsNamePublic));
    formData.append('Firstname', data.Firstname ?? '');
    formData.append('Surname', data.Surname ?? '');
    formData.append('Bushname', data.Bushname ?? '');
    if(SubSectionSkinIdRef.current) {
      formData.append('SubSectionSkinId', String(SubSectionSkinIdRef.current));
    }
    formData.append('OtherName', data.OtherName ?? '');
    formData.append('NameNote', data.NameNote ?? '');
    formData.append('TitleId', data.TitleId ? data.TitleId.toString() : '');
    formData.append('Gender', data.Gender ?? '');
    formData.append('BirthDate', data.BirthDate ? data.BirthDate.toString() : '');
    formData.append('Deceased', String(data.Deceased));
    formData.append('DeceasedDate', data.DeceasedDate ?? '');
    formData.append('DeathNote', data.DeathNote ?? '');
    formData.append('Circa', String(data.Circa));
    formData.append('IsProfileImagePublic', String(data.IsProfileImagePublic));
    if(data.ProfileImage) {
      formData.append('ProfileImage', data.ProfileImage);
    }
    formData.append('Phone', data.Phone ?? '');
    formData.append('EmailAddress', data.EmailAddress ?? '');
    formData.append('ContactNote', data.ContactNote ?? '');
    formData.append('Address', data.Address ?? '');
    formData.append('Address2', data.Address2 ?? '');
    formData.append('HasWill', String(data.HasWill));
    formData.append('DateOfWill', data.DateOfWill ?? '');
    formData.append('Will', data.Will ?? '');
    formData.append('LegalNote', data.LegalNote ?? '');
    formData.append('Disability', String(data.Disability));
    return formData;
  }
  
  // Get Access token
  const ACCESS_TOKEN = getCookieValue('accessToken');

  // Axios config
  // Count Progress of file uploading
  const config: AxiosRequestConfig<FormData> = {
    onUploadProgress: (progressEvent: AxiosProgressEvent) => {
      if(progressEvent.total !== null && progressEvent.total !== undefined) {
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
  const header = {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
  }

  // Function to handle submit data
  const handleSubmitFormData = async () => {
    const hasError = validate();
    if(!hasError) {
      const formData = formDataSetup();

      // Fetch API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/personal-info`;
      await axios.post(
        DATA_SOURCE_URL,
        formData,
        config
      )
      .then(async (res) => { 
        const Id = Number(res.data.data.Id);
        setId(Id)
        setPersonalInfo(data);

        if(culturalInfoFormData) {
          // Fetch cultural info API
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/cultural-info/${Id}`;
      
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
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/biography/${Id}`;
      
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
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/money-story/${Id}`;
        
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
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/money-story/${Id}`;
          // Fetch API
          await axios.post(
            DATA_SOURCE_URL,
            historyFormData,
            config
          )
          .then(async () => {
            const fileS3Key = res.data.FileS3Key;
            console.log("History saved.")
            const FETCH_SYSTEMDOC_URL = `${environment.BASE_URL}/dev/artist/system-document/${Id}`;
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
            .catch(err => {
              console.log(err.response.data)
            })
          })
          .catch(err => {
            console.log(err.response.data)
          })
        }

        setStep('culturalInfo');
        scrollToTopOfPage();
      })
      .catch((err) => {
        console.log(err.response.data)
        scrollToTopOfPage();
      })
    } else {
      handleScrollToError();
    }
  }

  return (
    <PersonalInfoStyled>
      <NameIdentity onChange={handleDataChange} errorsEndpoint={endpointErrors} />
      <ProfileImage onChange={handleDataChange} 
        uploadProgress={uploadProgress} 
      />
      <Contact onChange={handleDataChange} />
      <Address onChange={handleDataChange} />
      <Legal onChange={handleDataChange} />
    </PersonalInfoStyled>
  )
})

PersonalInfo.displayName = 'PersonalInfo'; 

export default PersonalInfo;
