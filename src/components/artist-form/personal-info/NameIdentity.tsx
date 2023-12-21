import React, { useContext, useState, useEffect } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Switch } from '@/components/switch/Switch';
import { SamTextField } from '@/components/text-field/TextField';
import Grid from '@mui/material/Grid';
import Dropdown from '@/components/dropdown/Dropdown';
import { GhostButton, OutlinedButton } from '@/components/buttons/SamButtons';
import { DeleteIcon, PlusIcon } from '@/components/icons/Icons';
import { InputDatePicker } from '@/components/date-picker/InputDatePicker';
import { DefaultCheckbox } from '@/components/checkbox/Checkbox';
import { NameIdentityStyled } from '@/components/artist-form/personal-info/style';
import { RadioButton } from '@/components/radio-button/RadioButton';
import { SamAlert } from '@/components/alert-box/AlertBox';
import AddFieldDialog from '@/components/dialog/AddFieldDialog';
import { TForm } from '@/components/artist-form/personal-info/type';
import DropdownWithSearch from '@/components/dropdown/DropdownWithSearch';
import { TDropdownItemProps } from '@/components/dropdown/type';
import { mockGenderData, mockTitleData } from '@/constants/mockData';
import axios from 'axios';
import { NAME_IDENTITY_NOTE_DESCRIPTION, NAME_IDENTITY_NOTE_TITLE, SWITCH_LABEL, SWITCH_TOOLTIP } from '@/constants';
import ArtistContext from '@/components/context/ArtistContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DefaultTooltip } from '@/components/tooltips/Tooltips';
import { setCookie, parseCookies } from 'nookies';
import { generateNewToken } from '@/utils/generateNewToken';
import { environment } from '@/constants/environment';

/* Component of name and identity */
const NameIdentity = ({onChange, errorsEndpoint}: TForm) => {
  const [accessToken, setAccessToken] = useState(parseCookies().accessToken);

  // useContext
  const { personalInfo, setErrors, errors } = useContext(ArtistContext);
  // State for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State for searching loading
  const [skinNameIsLoading, setSkinNameIsLoading] = useState<boolean>(false);

  // State for display fields
  const [isPublic, setIsPublic] = useState<boolean>(personalInfo?.IsNamePublic ?? true);
  const [Deceased, setDeceased] = useState<boolean>(personalInfo?.Deceased ? personalInfo.Deceased :false);
  const [Circa, setCirca] = useState<boolean>(false);
  const [hasNameNote, setHasNameNote] = useState<boolean>((personalInfo != null && personalInfo.NameNote != '') ? true : false);
  const [nameNote, setNameNote] = useState<string>('');
  const [deathNote, setDeathNote] = useState<string>('');
  const [hasDeceasedNote, setHasDeceasedNote] = useState<boolean>((personalInfo != null && personalInfo.DeathNote != '') ? true :false);
  const [showSkinNameDialog, setShowSkinNameDialog] = useState<boolean>(false);
  const [skinNameList, setSkinNameList] = useState<TDropdownItemProps[]>((personalInfo != null && personalInfo.SubSectionSkinId && personalInfo.SubSectionSkin) ? 
    [{
      Id: personalInfo.SubSectionSkinId,
      Description: personalInfo.SubSectionSkin,
    }] 
    : []
  );
  
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + accessToken,
  }

  // Handle radio change for decease
  const onChangeIsDeceasedValue = () => {
    const newValue = (document.querySelector('input[name=Deceased]:checked') as HTMLInputElement).value;
    setDeceased(newValue == 'yes' ? true : false);
    onChange('Deceased', newValue == 'yes' ? true : false);
  }

  // Handle add new skin name
  // New skin name is added to the dropdown
  const handleAddSkinName = async (newValue: string) => {
    // Fetch API
    if(newValue.length > 0) {
      const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/add-record`;
      await axios.post(
        DATA_SOURCE_URL,
        {
          'Model': 'SubSectionSkin',
          'Description': newValue
        }, 
        {
          headers: header
        }
      )
      .then((res) => { 
        const newData = res.data;
        setSkinNameList([...skinNameList, {Id: newData.Id, Description: newData.Description}])
      })
      .catch(err => {
        const error = err.response.data.message
        if(error) {
          console.log(error);
          if(error == 'Could not validate token.' ||
            error == 'Your session has expired. Please log in again.') {
            generateNewToken();
            console.log(parseCookies().accessToken);
            setAccessToken(parseCookies().accessToken);
          }
        } else {
          console.log(err)
        }
      })
    }
  }

  // Handle search field for skin name change
  const searchSkinName = async (newValue: string) => {
    // Fetch API
    const DATA_SOURCE_URL = `${environment.BASE_URL}/dev/generic/search-record`;
    setSkinNameIsLoading(true);
    await axios.post(
      DATA_SOURCE_URL,
      {
        'Model': 'SubSectionSkin',
        'Description': newValue
      }, 
      {
        headers: header
      }
    )
    .then((res) => {  // res
      setSkinNameList(res.data)
      if(res.data.length < 1) {
        onChange('SubSectionSkinId', null)
      }
    })
    .catch(err => {
      const error = err.response.data.message
      if(error) {
        console.log(error);
        if(error == 'Could not validate token.' ||
          error == 'Your session has expired. Please log in again.'
        ) {
          generateNewToken();
          console.log(parseCookies().accessToken);
          setAccessToken(parseCookies().accessToken);
        }
      } else {
        console.log(err)
      }
    })
    setSkinNameIsLoading(false);
  }

  // Handle Circa checkbox
  const handleCircaChkbox = () => {
    const newValue = !Circa
    setCirca(newValue);
    onChange('Circa', newValue)
  }

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    onChange('IsNamePublic', newValue)
  }

  // const tooltipOpen = localStorage.getItem('addUserSwitcherTooltip');
  const tooltipOpen = parseCookies().addUserSwitcherTooltip;

  // Handle event when user click don't show tooltip again
  const handleCloseSwitcherTooltip = () => {
    // localStorage.setItem('addUserSwitcherTooltip', 'false')
    // Set cookies for display tooltip
    setCookie(null, 'addUserSwitcherTooltip', 'false', {
      maxAge: 90 * 24 * 60 * 60, // 90 days
      path: '/',
    })
  }

  useEffect(() => {
    if(personalInfo) {
      onChange('IsNamePublic', personalInfo.IsNamePublic ?? true);
      onChange('Firstname', personalInfo.Firstname ?? '');
      onChange('Surname', personalInfo.Surname ?? '');
      onChange('Bushname', personalInfo.Bushname ?? '');
      if (personalInfo.SubSectionSkinId !== undefined) {
        onChange('SubSectionSkinId', personalInfo.SubSectionSkinId);
      }
      // onChange('SubSectionSkinId', personalInfo.SubSectionSkinId ?? null);
      onChange('OtherName', personalInfo.OtherName ?? '');
      onChange('NameNote', personalInfo.NameNote ?? '');
      onChange('Gender', personalInfo.Gender ?? '');
      onChange('BirthDate', personalInfo.BirthDate ?? '');
      onChange('Deceased', personalInfo.Deceased ?? false);
      onChange('DeceasedDate', personalInfo.DeceasedDate ?? '');
      onChange('DeathNote', personalInfo.DeathNote ?? '');
      onChange('Circa', personalInfo.Circa ?? false);
      onChange('SubSectionSkin', personalInfo.SubSectionSkin ?? '');
      onChange('GenderLabel', personalInfo.GenderLabel ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <NameIdentityStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Names & Identity
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-nameIdentity-public'
            >
              <DefaultTooltip id='addArtist-switchTooltip' 
                content={SWITCH_TOOLTIP}
                open={tooltipOpen == 'false' ? false : true} 
                placement={isMobile ? 'bottom' : 'left'}
                notShowAgain
                closeConfig={handleCloseSwitcherTooltip}
              >
                <Typography variant='body1' 
                  color='neutral.n0'
                >
                  {SWITCH_LABEL}
                </Typography>
              </DefaultTooltip>
              <Switch id='addArtist-nameIdentity-switch' 
                name='addArtist-nameIdentity-switch' 
                value='public'
                onChange={handlePublicSwitcher} 
                checked={isPublic}
              />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column' 
            rowGap='32px'
            maxWidth='600px'
          >
            <Grid container spacing='32px' 
              alignItems='stretch'
            >
              {/* First name field */}
              <Grid item xs={12} md={6} lg={6}>
                <SamTextField id='Firstname' 
                  label='First Name' 
                  value={personalInfo?.Firstname}
                  onChange={(e: string) => onChange('Firstname', e)}
                  setFormError={(e: string) => setErrors(prevState => ({
                    ...prevState,
                    Firstname: e
                  }))}
                  required={true} fullWidth 
                  errorMessage={errorsEndpoint?.Firstname}
                  min={1} max={30}
                />
              </Grid>
              {/* Last name field */}
              <Grid item xs={12} md={6} lg={6}>
                <SamTextField id='Surname' 
                  label='Last Name' 
                  value={personalInfo?.Surname}
                  required={true} fullWidth 
                  onChange={(e: string) => onChange('Surname', e)}
                  errorMessage={errorsEndpoint?.Surname}
                  setFormError={(e: string) => setErrors(prevState => ({
                    ...prevState,
                    Surname: e
                  }))}
                  min={1} max={30}
                />
              </Grid>
            </Grid>
            <SamTextField id='Bushname' 
              value={personalInfo?.Bushname}
              label='Traditional Name' fullWidth 
              onChange={(e: string) => onChange('Bushname', e)}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                Bushname: e
              }))}
              errorMessage={errors?.Bushname}
              min={0} max={30}
            />
            <DropdownWithSearch id='SubSectionSkinId'
              label='Skin Name'
              value={personalInfo?.SubSectionSkin}
              initialOptions={skinNameList} 
              isLoading={skinNameIsLoading}
              editable fullWidth 
              handleAddBtn={() => {setShowSkinNameDialog(true)}}
              onChange={(e: string | number) => {
                onChange('SubSectionSkinId', e == '' ? null : e)
              }}
              onLabelChange={(e: string | number) => {
                onChange('SubSectionSkin', e)
              }}
              onSearch={(e) => {
                onChange('SubSectionSkinId', null);
                searchSkinName(e);
              }}
            />

            <Box display={showSkinNameDialog ? 'block' : 'none'}>
              <AddFieldDialog id='newSkinName'
                title='Add a skin name'
                label='Your skin name'
                onAddField={handleAddSkinName}
                onCloseEvt={() => {setShowSkinNameDialog(false)}}
              />
            </Box>
            {/* Preferred name / Other name field */}
            <SamTextField id='OtherName' 
              label='Preferred Name/ Other Name' 
              value={personalInfo?.OtherName}
              fullWidth 
              onChange={(e: string) => onChange('OtherName', e)}
              errorMessage={errors?.OtherName}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                OtherName: e
              }))}
              min={0} max={30}
            />
            {/* Add note button */}
            <OutlinedButton className='addArtist-addNotebtn' 
              label='Add Note' 
              startIcon={<PlusIcon />} 
              sx={{ 
                width: isMobile ? '100%' : 'fit-content',
                display: !hasNameNote ? 'flex' : 'none', 
              }} 
              onClick={() => {
                setHasNameNote(true)
                onChange('NameNote', nameNote)
              }}
            />
            {/* Name note text field if it's available */}
            <Stack direction='column'
              spacing='8px'
              display={(hasNameNote) ? 'block' : 'none'}
              className='addArtist-name-note'
            >
              <SamTextField id='NameNote'
                label='Note'
                fullWidth
                onChange={(e: string) => {
                  onChange('NameNote', e)
                  setNameNote(e)
                }}
                value={personalInfo?.NameNote}
              />
              <GhostButton className='addArtist-name-removeNotebtn' 
                label='Delete Note' 
                startIcon={<DeleteIcon />} 
                sx={{ 
                  width: 'fit-content',
                }} 
                onClick={() => {
                  setHasNameNote(false)
                  onChange('NameNote', '')
                }}
              />
            </Stack>
            {/* Separator */}
            <hr />
            {/* Artist Title */}
            <Dropdown id='TitleId' 
              label='Title'
              value={personalInfo?.TitleId?.toString()}
              initialOptions={mockTitleData}
              width='284px'
              onChange={(e: string | number) => onChange('TitleId', e)}
              errorMessage={errors?.TitleId}
            />
            {/* Artist gender */}
            <Dropdown id='Gender' 
              label='Gender'
              value={personalInfo?.Gender}
              initialOptions={mockGenderData}
              required
              width='284px'
              onChange={(e: string | number) => onChange('Gender', e)}
              errorMessage={errorsEndpoint?.Gender}
              setFormError={(e: string) => setErrors(prevState => ({
                ...prevState,
                Gender: e
              }))}
            />
            {/* Date of birth */}
            <Stack direction={isMobile ? 'column' : 'row'}
              justifyContent='space-between' 
              alignItems={isMobile ? 'flex-start' : 'flex-end'}
              spacing={isMobile ? '24px' : '0px'}
            >
              <InputDatePicker id='BirthDate'
                label='Date of Birth'
                value={personalInfo?.BirthDate}
                required
                onChange={(e: string) => onChange('BirthDate', e)}
                errorMessage={errorsEndpoint?.BirthDate}
                setFormError={(e: string) => setErrors(prevState => ({
                  ...prevState,
                  BirthDate: e
                }))}
              />
              <Stack direction='row'
                alignItems='center'
              >
                <DefaultCheckbox
                  value={Circa} 
                  onChange={handleCircaChkbox}
                  defaultChecked={personalInfo?.Circa}
                />
                <Typography variant='body1' 
                  color='neutral.n0'
                >
                  Circa/ Approximate date
                </Typography>
              </Stack>
            </Stack>
            {/* Deceased session */}
            <Stack direction='column'>
              <Typography variant='body1' mb='8px'
                fontWeight={700}
                color='neutral.n0'
              >
                Is the artist deceased?
              </Typography>
              <Grid container maxWidth='384px' onChange={onChangeIsDeceasedValue}>
                <Grid item xs={6} className='addArtist-deceasedRd-yes'>
                  <RadioButton id='artistDeceased-yes' 
                    name='Deceased' 
                    value='yes' 
                    label='Yes' 
                    checked={Deceased ? true : false}
                  />
                </Grid>
                <Grid item xs={6} className='addArtist-deceasedRd-no'>
                  <RadioButton id='artistDeceased-no' 
                    name='Deceased' 
                    value='no' 
                    label='No'
                    checked={!Deceased ? true : false} 
                  />
                </Grid>
              </Grid>
            </Stack>
          </Stack>
          {/* Artist deceased box when user choose yes radio */}
          {Deceased ? 
            <Box className='addArtist-deceasedBox'>
              <InputDatePicker id='DeceasedDate'
                label='Date of Death'
                value={personalInfo?.DeceasedDate}
                onChange={(e: string) => onChange('DeceasedDate', e)}
              />
              <OutlinedButton className='addArtist-deceased-addNotebtn' 
                label='Add Note' 
                startIcon={<PlusIcon />} 
                sx={{ 
                  width: isMobile ? '100%' : 'fit-content',
                  display: hasDeceasedNote ? 'none' : 'flex',
                }} 
                onClick={() => {
                  setHasDeceasedNote(true)
                  onChange('DeathNote', deathNote)
                }}
              />
              {/* Deceased note text field if it's available */}
              <Stack direction='column'
                marginTop='24px'
                spacing='8px'
                display={hasDeceasedNote ? 'block' : 'none'}
                className='addArtist-deceased-note'
              >
                <SamTextField id='DeathNote'
                  label='Note'
                  fullWidth
                  value={personalInfo?.DeathNote}
                  onChange={(e: string) => {
                    setDeathNote(e);
                    onChange('DeathNote', e)
                  }}
                />
                <GhostButton className='addArtist-deceased-removeNotebtn' 
                  label='Delete Note' 
                  startIcon={<DeleteIcon />} 
                  sx={{ 
                    width: 'fit-content',
                  }} 
                  onClick={() => {
                    setHasDeceasedNote(false)
                    onChange('DeathNote', '')
                  }}
                />
              </Stack>
            </Box>
            : null
          }
          {/* Name & Identity note */}
          {Deceased ? 
            <SamAlert 
              severity='info' 
              variant='outlined' 
              title={NAME_IDENTITY_NOTE_TITLE}
              description={NAME_IDENTITY_NOTE_DESCRIPTION}
            />
            : null
          }
        </CardAccordionDetails>
      </CardAccordion>
    </NameIdentityStyled>
  )
}

export default NameIdentity;
