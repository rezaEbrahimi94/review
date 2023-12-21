import React, { useContext, useEffect, useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { DefaultCheckbox } from '@/components/checkbox/Checkbox';
import { ArtistAddressStyled } from '@/components/artist-form/personal-info/style';
import AddressAutocomplete from '@/components/address-autocomplete/AddressAutocomplete';
import { TForm } from '@/components/artist-form/personal-info/type';
import ArtistContext from '@/components/context/ArtistContext';

/* Component of address */
const Address = ({onChange}: TForm) => {
  // useContext
  const { personalInfo } = useContext(ArtistContext);

  // state for form controlling
  const [displayPostal, setDisplayPostal] = useState<boolean>(personalInfo == null ? false : ((personalInfo.Address == personalInfo.Address2) ? false : true));
  const [residentalAddress, setResidentalAddress] = useState<string>('');
  const [postalAddress, setPostalAddress] = useState<string>('');

  const handleAddressChkBox = () => {
    const newValue = !displayPostal;
    setDisplayPostal(newValue);
    if(!newValue) {
      onChange('Address2', residentalAddress)
    } else {
      onChange('Address2', postalAddress)
    }
  }

  // Initialise fields when artist is available
  useEffect(() => {
    if(personalInfo) {
      onChange('Address', personalInfo.Address ?? '');
      onChange('Address2', personalInfo.Address2 ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalInfo]);

  return (
    <ArtistAddressStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Typography variant='h4' 
            color='neutral.n0'
          >
            Address
          </Typography>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column' 
            rowGap='32px'
            maxWidth='600px'
          >
            {/* Residential Address field */}
            <AddressAutocomplete id='Address' 
              label='Shipping Address' 
              value={personalInfo?.Address}
              onChange={(e: string) => {
                onChange('Address', e);
                if(!displayPostal) {
                  onChange('Address2', e);
                }
                setResidentalAddress(e);
              }}
            />
            {/* Checkbox to display postal address field */}
            <Stack direction='row'
              alignItems='center'
            >
              <DefaultCheckbox checked={displayPostal} 
                onChange={handleAddressChkBox}
              />
              <Typography variant='body1' 
                color='neutral.n0'
              >
                Residential address is different to the shipping address
              </Typography>
            </Stack>
            {/* Postal Address field */}
            {displayPostal ? 
              <AddressAutocomplete id='Address2' 
                label='Residential Address' 
                value={personalInfo?.Address2}
                onChange={(e: string) => {
                  onChange('Address2', e);
                  setPostalAddress(e);
                }}
              />
              : null
            }
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
    </ArtistAddressStyled>
  )
}

export default Address;
