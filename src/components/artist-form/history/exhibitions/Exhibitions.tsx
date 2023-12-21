import React, { useState } from 'react';
import { CardAccordion, CardAccordionDetails, CardAccordionSummary } from '@/components/accordion/SamAccordion';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { Switch } from '@/components/switch/Switch';
import { StylesStyled } from '@/components/artist-form/history/style';
import { OutlinedButton } from '@/components/buttons/SamButtons';
import { PlusIcon } from '@/components/icons/Icons';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TExhibition } from '../type';
import Box from '@mui/material/Box';
import AddExhibitions from './AddExhibitions';

const Exhibitions = () => {
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [Exhibitions, setExhibitions] = useState<TExhibition[]>([]);

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    // onChange('IsProfileImagePublic', newValue);
  }

  const handleDialogToggle = () => {
    setOpenDialog(!openDialog)
    // remove this line when integration
    console.log(setExhibitions)
  }

  return (
    <StylesStyled>
      <CardAccordion>
        <CardAccordionSummary>
          <Stack direction='column' 
            spacing='16px'
            maxWidth='600px'
          >
            <Typography variant='h4' 
              color='neutral.n0'
            >
              Exhibitions
            </Typography>
            <Stack direction='row' 
              alignItems='center'
              className='addArtist-document-public'
            >
              <Typography variant='body1' 
                color='neutral.n0'
              >
                Make this public
              </Typography>
              <Switch id='addArtist-document-switch' 
                name='addArtist-document-switch' 
                value='public'
                onChange={handlePublicSwitcher} />
            </Stack>
          </Stack>
        </CardAccordionSummary>
        {/* Details session */}
        <CardAccordionDetails>
          <Stack direction='column'
            spacing='32px'
          >
            {/* Collections table */}
            <SamTable>
              {/* Table Heading */}
              <TableHead>
                <TableRow>
                  <TableCell>
                    Month, Year
                  </TableCell>
                  <TableCell>
                    Exhibition Name
                  </TableCell>
                  <TableCell>
                    Venue
                  </TableCell>
                  <TableCell>
                    Location
                  </TableCell>
                  <TableCell>
                    Type
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* Table data */}
              <TableBody>
                {Exhibitions.map((exhibition: TExhibition, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {exhibition.MonthYear}
                      </TableCell>
                      <TableCell>
                        {exhibition.ExhibitionName}
                      </TableCell>
                      <TableCell>
                        {exhibition.Venue}
                      </TableCell>
                      <TableCell>
                        {exhibition.Location}
                      </TableCell>
                      <TableCell>
                        {exhibition.Type}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </SamTable>
            {/* Add button */}
            <OutlinedButton className='addArtist-addCollections' 
              label='Add New'
              startIcon={<PlusIcon />} 
              sx={{
                width: 'fit-content',
              }}
              onClick={handleDialogToggle}
            />
          </Stack>
        </CardAccordionDetails>
      </CardAccordion>
      {/* Add collection dialog */}
      <Box display={openDialog ? 'block' : 'none'}>
        <AddExhibitions onCloseEvt={handleDialogToggle} />
      </Box>
    </StylesStyled>
  )
}

export default Exhibitions;
