'use client';

import { DefaultTabs } from '@/components/tabs/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import React, { RefObject, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumbs';
import Link from 'next/link';
import { ArrowIcon, ChevronIcon, CrossIcon, InfoIcon, TickIcon, TickInCircleIcon } from '@/components/icons/Icons';
import Typography from '@mui/material/Typography';
import PersonalInfo from '@/components/artist-form/personal-info/PersonalInfo';
import ArtistContext from '@/components/context/ArtistContext';
import { TFormErrors, TPersonalInfoData } from '@/components/artist-form/personal-info/type';
import CulturalInfo from '@/components/artist-form/cultural-info/CulturalInfo';
import Biography from '@/components/artist-form/biography/Biography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { mockNewArtistTabData } from '@/constants/mockData';
import Dropdown from '@/components/dropdown/Dropdown';
import MoneyStory from '@/components/artist-form/money-story/MoneyStory';
import { AddArtistBox, AddArtistDialog } from './style';
import { TCulturalInfo } from '../cultural-info/type';
import { TBiography } from '../biography/type';
import { TMoneyStory } from '../money-story/type';
import { NewArtistChildRef } from './type';
import { FilledButton, GhostButton, OutlinedButton } from '@/components/buttons/SamButtons';
import axios, { AxiosRequestConfig } from 'axios';
import { getCookieValue } from '@/utils/getCookie';
import { environment } from '@/constants/environment';
import { toggleScrollbar } from '@/utils/navigation';
import { DefaultSpinner } from '@/components/spinner/Spinners';
import { THistory } from '../history/type';
import History from '../history/History';
import SystemDocuments from '../system-documents/SystemDocuments';

const ArtistNew = () => {
  const pathName = usePathname();
  const breadcrumb = pathName.split('/').slice(1);
  const { push } = useRouter();
  // initialise new artist context
  const [Id, setId] = useState<number | null>(null);
  const [step, setStep] = useState<string | null>('personalInfo');
  const [personalInfo, setPersonalInfo] = useState<TPersonalInfoData | null>(null);
  const [culturalInfo, setCulturalInfo] = useState<TCulturalInfo | null>(null);
  const [biography, setBiography] = useState<TBiography| null>(null);
  const [moneyStory, setMoneyStory] = useState<TMoneyStory| null>(null);
  const [history, setHistory] = useState<THistory| null>(null);
  const [errors, setErrors] = useState<TFormErrors | null>(null);
  const [personalInfoFormData, setPersonalInfoFormData] = useState<FormData | null>(null);
  const [culturalInfoFormData, setCulturalInfoFormData] = useState<TCulturalInfo | null>(null);
  const [moneyStoryFormData, setMoneyStoryFormData] = useState<FormData | null>(null);
  const [historyFormData, setHistoryFormData] = useState<FormData | null>(null);

  // State for loading and display dialog
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);

  // State for responsiveness
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Ref to handle save data
  const personalInfoRef: RefObject<NewArtistChildRef> = useRef(null);
  const culturalInfoRef: RefObject<NewArtistChildRef> = useRef(null);
  const biographyRef: RefObject<NewArtistChildRef> = useRef(null);
  const monetStoryRef: RefObject<NewArtistChildRef> = useRef(null);
  const historyRef: RefObject<NewArtistChildRef> = useRef(null);

  // Function to handle tab changing
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    const currentTab = step;
    switch(currentTab) {
      case 'personalInfo': {
        const canNavigate = personalInfoRef.current?.handleSaveData();
        if(canNavigate) {
          setStep(newValue);
        }
        break;
      }
      case 'culturalInfo': {
        culturalInfoRef.current?.handleSaveData();
        setStep(newValue);
        break;
      }
      case 'biography': {
        const canNavigate = biographyRef.current?.handleSaveData();
        if(canNavigate) {
          setStep(newValue);
        }
        break;
      }
      case 'moneyStory': {
        const canNavigate = monetStoryRef.current?.handleSaveData();
        if(canNavigate) {
          setStep(newValue);
        }
        break;
      }
      case 'artistHistory': {
        const canNavigate = historyRef.current?.handleSaveData();
        if(canNavigate) {
          setStep(newValue);
        }
        break;
      }
      default: {
        setStep(newValue);
        break;
      }
    }
  };

  // Function to handle save next seperately
  const handleStepSaveNext = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        if(step === 'personalInfo') {
          if(personalInfoRef.current?.handleSaveAndNextButton !== undefined) {
            personalInfoRef.current?.handleSaveAndNextButton();
          }
        }
        if(step === 'culturalInfo') {
          if(culturalInfoRef.current?.handleSaveAndNextButton !== undefined) {
            culturalInfoRef.current?.handleSaveAndNextButton();
          }
        }
        if(step === 'biography') {
          if(biographyRef.current?.handleSaveAndNextButton !== undefined) {
            biographyRef.current?.handleSaveAndNextButton();
          }
        }
        if(step === 'moneyStory') {
          if(monetStoryRef.current?.handleSaveAndNextButton !== undefined) {
            monetStoryRef.current?.handleSaveAndNextButton();
          }
        }
        if(step === 'artistHistory') {
          if(historyRef.current?.handleSaveAndNextButton !== undefined) {
            historyRef.current?.handleSaveAndNextButton();
          }
        }
        resolve(true);
      }, 1)
    })
  }

  // Function to handle save next button
  const handleSaveNext = async (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    handleStepSaveNext().then(() => {
      setIsLoading(false);
    })

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

  // Function to check if can proceed function
  const checkIfCanProceed = () => {
    const currentTab = step;
    if(currentTab === 'personalInfo') {
      const canNavigate = personalInfoRef.current?.handleSaveData();
      return canNavigate;
    }
    if(currentTab === 'culturalInfo') {
      return culturalInfoRef.current?.handleSaveData();
    }
    if(currentTab === 'biography') {
      const canNavigate = biographyRef.current?.handleSaveData();
      return canNavigate;
    }
    if(currentTab === 'moneyStory') {
      const canNavigate = monetStoryRef.current?.handleSaveData();
      return canNavigate;
    }
    if(currentTab === 'artistHistory') {
      const canNavigate = historyRef.current?.handleSaveData();
      return canNavigate;
    }
  }

  // Function to handle save next button
  const handleSaveExit = async (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    const canProceed = checkIfCanProceed();
    if(canProceed) {
      setIsLoading(true);
      // Check form data
      const PersonalForm = step == 'personalInfo' ? checkIfCanProceed() : personalInfoFormData;
      const CulturalForm = step == 'culturalInfo' ? checkIfCanProceed() : culturalInfoFormData;
      const BiographyForm = step == 'biography' ? checkIfCanProceed() : biography;
      const MoneyStoryForm = step == 'moneyStory' ? checkIfCanProceed() : moneyStoryFormData;
      const historyForm = step == 'artistHistory' ? checkIfCanProceed() : historyFormData;

      let Id: number | null = null; 
      // Fetch Personal info API
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/personal-info`;
      await axios.post(
        DATA_SOURCE_URL,
        PersonalForm,
        config
      )
      .then(async (res) => { 
        Id = Number(res.data.data.Id);
        setId(Id);
        console.log("Personal info saved.");
        if(CulturalForm) {
          // Fetch cultural info API
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/cultural-info/${Id}`;
      
          await axios.post(
            DATA_SOURCE_URL,
            CulturalForm,
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

        if(BiographyForm) {
          // Fetch Bio API
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/biography/${Id}`;
      
          await axios.post(
            DATA_SOURCE_URL,
            BiographyForm,
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

        if(MoneyStoryForm) {
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/money-story/${Id}`;
        
          // Fetch API
          await axios.post(
            DATA_SOURCE_URL,
            MoneyStoryForm,
            config
          )
          .then(() => {
            console.log("Money story saved.")
          })
          .catch(err => {
            console.log(err.response.data)
          })
        }

        if(historyForm) {
          const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/artist/upload-document/${Id}`;
          // Fetch API
          await axios.post(
            DATA_SOURCE_URL,
            historyForm,
            config
          )
          .then(async (res) => {
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
          })
          .catch(err => {
            console.log(err.response.data)
          })
        }

        handleToggleDialog();
      }) // Personal info error
      .catch((err) => {
        console.log(err.response)
      })

      setIsLoading(false);
    }
  }

  // Function to toggle Dialog
  const handleToggleDialog = () => {
    const newValue = !showDialog;
    setShowDialog(newValue);
    toggleScrollbar(!newValue);
  }

  return (
    <ArtistContext.Provider value={{ Id, setId, step, setStep, personalInfo, setPersonalInfo, culturalInfo,  
      setCulturalInfo, biography, setBiography, moneyStory, setMoneyStory, errors, setErrors,
      personalInfoFormData, setPersonalInfoFormData, culturalInfoFormData, setCulturalInfoFormData,
      moneyStoryFormData, setMoneyStoryFormData, history, setHistory, historyFormData, setHistoryFormData }}>
      <AddArtistBox>
        {/* Breadcrumb session */}
        <Breadcrumb id='addArtist-breadcrumb' separator={<ChevronIcon />} sx={{ margin: '21px 16px' }}>
          {breadcrumb.map((item: string, index: number) => {
            return (
              <Link key={index} href={pathName.substring(0, pathName.indexOf(item) + item.length)}>
                {item.charAt(0).toUpperCase() + item.slice(1).replaceAll('-', ' ')}
              </Link>
            )
          })}
        </Breadcrumb>

        {/* Page heading and saving status */}
        <Stack direction='row' spacing='40px' mb='8px' ml='24px' alignItems='center'>
          <Typography variant='h3' color='neutral.n0'>
            Add an Artist
          </Typography>
          <Stack direction='row' spacing='8px' alignItems='center' >
            <TickIcon sx={{
              backgroundColor: 'correct.c100',
              borderRadius: '50%',
              '& path': {
                fill: theme.palette.correct.c20,
              }
            }}
            />
            <Typography variant='body1' color='neutral.n0'>
              Saved just now
            </Typography>
            <InfoIcon sx={{
              '& path': {
                fill: theme.palette.neutral.n60,
              }
            }}
            />
          </Stack>
        </Stack>

        {/* Tabs session */}
        {isDesktop ? 
          <DefaultTabs value={step} onChange={handleTabChange} variant='fullWidth'>
            <Tab tabIndex={1}
              label='Personal Information'
              value='personalInfo'
              />
            <Tab tabIndex={2}
              label='Cultural Information'
              value='culturalInfo'
              // Comment out this line in case we can browse other tabs after finishing the personal info
            />
            <Tab tabIndex={3}
              label='Biography'
              value='biography'
            />
            <Tab tabIndex={3}
              label='Money Story'
              value='moneyStory'
            />
            <Tab tabIndex={3}
              label='Artist History'
              value='artistHistory'
            />
            <Tab tabIndex={3}
              label='Documents'
              value='documents'
            />
          </DefaultTabs>
          : 
          <Box className='newArtist-stepDropdown-container'>
            <Dropdown id='newArtist-stepDropdown' 
              initialOptions={mockNewArtistTabData}
              value={step != null ? step : 'personalInfo'}
              fullWidth
              onChange={(e: string | number) => setStep(e.toString())}
            />
          </Box>
        }

        {/* Content session */}
        <Box className='addArtist-contentSession'>
          {step == 'personalInfo' ?
            <PersonalInfo ref={personalInfoRef} />
            : null
          }
          {step == 'culturalInfo' ?
            <CulturalInfo ref={culturalInfoRef} />
            : null
          }
          {step == 'biography' ?
            <Biography ref={biographyRef} />
            : null
          }
          {step == 'moneyStory' ?
            <MoneyStory ref={monetStoryRef} />
            : null
          }
          {step == 'artistHistory' ?
            <History ref={historyRef} />
            : null
          }
          {step == 'documents' ?
            <SystemDocuments />
            : null
          }
          {/* Save action session */}
          {isLoading ? 
            <DefaultSpinner /> 
            :
            <Stack className='addArtist-actionBtns' 
              direction={isMobile ? 'column' : 'row'}
              spacing='8px'
              justifyContent='space-between'
            >
              <Stack direction={isMobile ? 'column' : 'row'}
                spacing={isMobile ? '8px ': '16px'}
              >
                <OutlinedButton className='addArtist-saveAndExitBtn' 
                  label='Save and exit' 
                  onClick={handleSaveExit}
                />
                <FilledButton className='addArtist-saveAndNextBtn' 
                  label='Save and next'
                  endIcon={<ArrowIcon />} 
                  onClick={handleSaveNext}
                />
              </Stack>
              <GhostButton className='addArtist-cancelBtn' 
                label='Cancel'
                onClick={() => push('/dashboard/artists')}
              />
            </Stack>
          }
        </Box>
      </AddArtistBox>


      {/* Artist dialog */}
      {showDialog ? 
        <AddArtistDialog>
          <Box className='Dialog-BG'></Box>
          <Stack className='Dialog-Container'
            direction='column' 
            spacing='32px'
            >
            <Stack direction='row'
              justifyContent='space-between'
            >
              <Stack direction='row'
                spacing='16px'
                alignItems='center'
              >
                <TickInCircleIcon className='Dialog-HeaderIcon' />
                <Typography variant='h3' color='neutral.n0'>
                  Artist Information Saved
                </Typography>
              </Stack>
              <CrossIcon sx={{ cursor: 'pointer' }}
                onClick={handleToggleDialog} 
              />
            </Stack>
            <Typography variant='body1' 
              color='neutral.n0'>
                We have saved&nbsp;
                <span className='Dialog-ArtistName'>{personalInfo?.Firstname} {personalInfo?.Surname}</span>
                &#39;s information in SAM
            </Typography>
            <Stack className='Dialog-buttonsContainer'
              direction='row'
              justifyContent='end'
              spacing='16px'
            >
              <OutlinedButton className='Dialog-ViewAllBtn' 
                label='View all artists' 
                onClick={() => push('/dashboard/artists')}
              />
              <GhostButton className='Dialog-cancelBtn' 
                label='View artist’s information'
                onClick={handleToggleDialog}
              />
            </Stack>
          </Stack>
        </AddArtistDialog>
        : ''
      }
    </ArtistContext.Provider>
  )
}

export default ArtistNew;
