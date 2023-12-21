'use client';

import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { AddressAutocompleteStyled } from '@/components/address-autocomplete/style';
import { SearchIcon } from '@/components/icons/Icons';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { SamTextField } from '@/components/text-field/TextField';
import Box from '@mui/material/Box';
import { TAddressAutocomplete, TAddressSuggestion, TAddressSuggestionList } from '@/components/address-autocomplete/type';

const AddressAutocomplete = ({ id, label, onChange, value }: TAddressAutocomplete) => {
  const [address, setAddress] = useState<string>('');
  const [isManual, setIsManual] = useState<boolean>(false);
  
  // State to control 
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [suburd, setSuburd] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');
  const [manualAddress, setManualAddress] = useState<string>('');

  const addressOnChange = (address: string) => {
    setAddress(address);
    if(onChange) {
      onChange(address);
    }
  }

  const addressOnSelect = (address: string) => {
    setAddress(address);
    if(onChange) {
      onChange(address);
    }
  }

  const handleToggleManualInput = (newValue: boolean) => {
    setIsManual(newValue);
    if(newValue) {
      if(onChange) {
        onChange(manualAddress);
      }
    } else {
      if(onChange) {
        onChange(address);
      }
    }
  }

  const manualAddressOnChange = (newValue: string, 
    addressField: 'address' | 'suburd' | 'state' | 'postcode') => {
      let newAddress = '';
      if(addressField == 'address') {
        newAddress = newValue + 
          (suburd ? (', ' + suburd) : '') +
          (state ? (', ' + state) : '') +
          (postcode ? (', ' + postcode) : '');
        setStreetAddress(newValue);
      } else if(addressField == 'suburd') {
        newAddress = (streetAddress ? (streetAddress + ', ') : '') + 
          (newValue ? (newValue + ', ') : '') +
          (state ? (state + ', ') : '') +
          postcode;
        setSuburd(newValue);
      } else if(addressField == 'state') {
        newAddress = (streetAddress ? (streetAddress + ', ') : '') + 
          (suburd ? (suburd + ', ') : '') +
          (newValue ? (newValue + ', ') : '') +
          postcode;
        setState(newValue);
      } else {
        newAddress = (streetAddress ? (streetAddress + ', ') : '') + 
          (suburd ? (suburd + ', ') : '') +
          (state ? (state + ', ') : '') +
          newValue;
        setPostcode(newValue);
      }
      if(newAddress.charAt(0) == ',') {
        newAddress = newAddress.substring(2);
      }
      if(newAddress.charAt(newAddress.length - 2) == ',') {
        newAddress = newAddress.substring(0, newAddress.length - 2);
      }
      setManualAddress(newAddress);
      if(onChange) {
        onChange(newAddress);
      }
  }

  return (
    <AddressAutocompleteStyled className='SamAutocomplete-container'>

      {/* Address input using Google map api */}
      <Box display={!isManual ? 'block' : 'none'}>
        <Typography variant='body1' 
          color='neutral.n0'
          fontWeight={700}
          mb='8px'
        >
          {label}
        </Typography>
          <PlacesAutocomplete value={address}
            onChange={addressOnChange}
            onSelect={addressOnSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }: TAddressSuggestionList) => {
              return (
                <>
                  <div className='SamAutocomplete-iconContainer'>
                    <SearchIcon className='SamAutocomplete-searchIcon' />
                  </div>
                  <input id={id}
                    {...getInputProps({
                      placeholder: `${value ? value : 'Search Places ...'}`,
                      className: `SamAutocomplete-input 
                        ${suggestions.length > 0 ? 'SamAutocomplete-input-dropdownActive' : null}`,
                    })}
                  />
                  <div className='SamAutocomplete-suggestionContainer'>
                    {loading ?
                      <Typography variant='body1' 
                        color='neutral.n0'
                        padding='12px 16px'
                        className='SamAutocomplete-loading'
                      >
                        ...Loading
                      </Typography>
                      : null
                    } 

                    {suggestions.map((suggestion: TAddressSuggestion) => {
                      const className = `suggestion-item ${suggestion.active ? 'suggestion-item--active' : null}`;

                      return (
                        <div {...getSuggestionItemProps(suggestion, { className })}
                          key={suggestion.placeId}
                        >
                          {suggestion.description}
                        </div>
                      )
                    })}
                  </div>
                </>
              )
            }
            }
          </PlacesAutocomplete>
          <Box className='SamAutocomplete-manualTrigger-container'>
            <Typography variant='body1' 
              component='span'
              color='neutral.n30'
            >
              Can’t find your address?&nbsp;
            </Typography>
            <Typography variant='link1' 
              component='span'
              color='primary.pr50'
              className='SamAutocomplete-manualTrigger'
              onClick={() => handleToggleManualInput(true)}
            >
              Enter it manually
            </Typography>
          </Box>
      </Box>

      {/* Address input when input manually */}
      <Stack direction='column'
        spacing='32px'
        display={isManual ? 'block' : 'none'}
      >
        <SamTextField id='residentalAddress' 
          label='Residential Address' 
          fullWidth 
          onChange={(e: string) => manualAddressOnChange(e, 'address')}
        />
        <Stack
          direction='row'
          spacing='32px'
        >
          <SamTextField id='suburb' 
            label='Suburb' 
            fullWidth 
            onChange={(e: string) => manualAddressOnChange(e, 'suburd')}
          />
          <SamTextField id='state' 
            label='State' 
            fullWidth 
            onChange={(e: string) => manualAddressOnChange(e, 'state')}
          />
          <SamTextField id='Postcode' 
            label='postcode' 
            fullWidth 
            onChange={(e: string) => manualAddressOnChange(e, 'postcode')}
          />
        </Stack>
        <Typography variant='body1' 
          color='primary.pr50'
          className='SamAutocomplete-autocompleteTrigger'
          onClick={() => handleToggleManualInput(false)}
        >
          Lookup Address
        </Typography>
      </Stack>

    </AddressAutocompleteStyled>
  )
}

export default AddressAutocomplete;
