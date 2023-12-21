import SamCard from '@/components/card/SamCard'
import Stack from '@mui/material/Stack'
import React from 'react'
import { SamAlert } from '@/components/alert-box/AlertBox';
import { SETTINGS_ARTISTS_CULTURE_ALERT, SETTINGS_ARTISTS_LOCATION_ALERT } from '@/constants';
import SamTable from '@/components/tables/SamTable';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Switch } from '@/components/switch/Switch';
import Dropdown from '@/components/dropdown/Dropdown';
import { ClanTribeData, OutstationHomelandData } from '@/constants/mockData';

const SettingArtists = () => {
  return (
    <SamCard id='GeneralSetting-Artists'
      className='GeneralSetting-Form'
      title='Artists'
    >
      <Stack direction='column'
        spacing='32px'
      >
        {/* Location info box */}
        <SamAlert severity='info'
          description={SETTINGS_ARTISTS_LOCATION_ALERT}       
        />
        {/* Location settings table */}
        <SamTable className='GeneralSetting-Locations'>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell>
                <Switch id='Country' 
                  name='Country' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mother country</TableCell>
              <TableCell>
                <Switch id='MotherCountry' 
                  name='MotherCountry' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Father country</TableCell>
              <TableCell>
                <Switch id='FatherCountry' 
                  name='FatherCountry' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birthplace</TableCell>
              <TableCell>
                <Switch id='Birthplace' 
                  name='Birthplace' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {/* Outstation/Homeland */}
                <Dropdown id='Outstation' 
                  initialOptions={OutstationHomelandData}
                  width='140px'
                  value='outstation'
                />
              </TableCell>
              <TableCell>
                <Switch id='OutstationSwitch' 
                  name='OutstationSwitch' 
                  value='on'
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </SamTable>
        {/* Location info box */}
        <SamAlert severity='info'
          description={SETTINGS_ARTISTS_CULTURE_ALERT}       
        />
        {/* Culture settings table */}
        <SamTable className='GeneralSetting-Culture'>
          <TableHead>
            <TableRow>
              <TableCell>Culture</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Dreaming</TableCell>
              <TableCell>
                <Switch id='Dreaming' 
                  name='Dreaming' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dance</TableCell>
              <TableCell>
                <Switch id='Dance' 
                  name='Dance' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {/* Tribe/Clan */}
                <Dropdown id='ClanTribe' 
                  initialOptions={ClanTribeData}
                  width='140px'
                  value='tribe'
                />
              </TableCell>
              <TableCell>
                <Switch id='ClanSwitch' 
                  name='ClanSwitch' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Totem</TableCell>
              <TableCell>
                <Switch id='Totem' 
                  name='Totem' 
                  value='on'
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Moiety</TableCell>
              <TableCell>
                <Switch id='Moiety' 
                  name='Moiety' 
                  value='on'
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </SamTable>
      </Stack>
    </SamCard>
  )
}

export default SettingArtists
