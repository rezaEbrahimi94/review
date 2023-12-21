import React, { useContext, useEffect } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { SamTextField } from '@/components/text-field/TextField';
import Grid from '@mui/material/Grid';
import { ArtistFinancialInfoStyled } from '@/components/artist-form/money-story/style';
import Dropdown from '@/components/dropdown/Dropdown';
import Box from '@mui/material/Box';
import { TForm } from './type';
import { mockPricingLevelData } from '@/constants/mockData';
import { ARTIST_PRICING_TOOLTIP } from '@/constants';
import ArtistContext from '@/components/context/ArtistContext';

const FinancialInfo = ({onChange}: TForm) => {
  // useContext
  const { moneyStory, errors, setErrors } = useContext(ArtistContext);

  useEffect(() => {
    if(moneyStory) {
      onChange('Level', moneyStory.Level ?? '');
      onChange('BankAccountName', moneyStory.BankAccountName ?? '');
      onChange('BankBSB', moneyStory.BankBSB ?? '');
      onChange('BankAccount', moneyStory.BankAccount ?? '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moneyStory]);

  return (
    <ArtistFinancialInfoStyled>
      <CardAccordion expanded={true}>
        <CardAccordionSummary>
          <Stack direction='column'
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4'
              color='neutral.n0'
            >
              Financial Information
            </Typography>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column'
            spacing='32px'
            maxWidth='284px'
          >
            {/* artist pricing level dropdown */}
            <Dropdown id='Level'
              initialOptions={mockPricingLevelData}
              label='Artist Pricing Level'
              fullWidth
              value={moneyStory?.Level}
              tooltip={ARTIST_PRICING_TOOLTIP}
              onChange={(e: string | number) => onChange('Level', e.toString())}
            />
            <Box>
              <Typography variant='h5' 
                color='neutral.n0'
                mb='16px'
              >
                Bank Information
              </Typography>
              {/* artist account name txtfield */}
              <SamTextField id='BankAccountName' 
                label='Account Name' 
                fullWidth 
                value={moneyStory?.BankAccountName}
                onChange={(e: string) => onChange('BankAccountName', e)}
                errorMessage={errors?.BankAccountName}
                setFormError={(e: string) => setErrors(prevState => ({
                  ...prevState,
                  BankAccountName: e
                }))}
                min={0} max={100}
              />
            </Box>
          </Stack>
          <Grid container
            spacing='32px'
            paddingTop='0px'
            mt='-16px'
            maxWidth='632px'
          >
            {/* artist bsb txtfield */}
            <Grid item xs={12} md={6} lg={6}>
              <SamTextField id='BankBSB' 
                label='BSB' 
                fullWidth 
                value={moneyStory?.BankBSB}
                onChange={(e: string) => onChange('BankBSB', e)}
                errorMessage={errors?.BankBSB}
                setFormError={(e: string) => setErrors(prevState => ({
                  ...prevState,
                  BankBSB: e
                }))}
                min={0} max={10}
                isDigit
              />
            </Grid>
            {/* artist bank account number txtfield */}
            <Grid item xs={12} md={6} lg={6}>
              <SamTextField id='BankAccount' 
                label='Bank Account Number' 
                fullWidth 
                value={moneyStory?.BankAccount}
                onChange={(e: string) => onChange('BankAccount', e)}
                errorMessage={errors?.BankAccount}
                setFormError={(e: string) => setErrors(prevState => ({
                  ...prevState,
                  BankAccount: e
                }))}
                min={0} max={25}
                isDigit
              />
            </Grid>
          </Grid>
        </CardAccordionDetails>
      </CardAccordion>
    </ArtistFinancialInfoStyled>
  )
}

export default FinancialInfo;