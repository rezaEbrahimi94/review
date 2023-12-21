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
import { TBibliography } from '../type';
import Box from '@mui/material/Box';
import AddBibliography from './AddBibliography';

const Bibliography = () => {
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [Bibliography, setBibliography] = useState<TBibliography[]>([]);

  // Handle public switcher
  const handlePublicSwitcher = () => {
    const newValue = !isPublic;
    setIsPublic(newValue);
    // onChange('IsProfileImagePublic', newValue);
  }

  const handleDialogToggle = () => {
    setOpenDialog(!openDialog)
    // remove this line when integration
    console.log(setBibliography)
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
              Bibliography
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
                    Author
                  </TableCell>
                  <TableCell>
                    Title
                  </TableCell>
                  <TableCell>
                    Publisher
                  </TableCell>
                  <TableCell>
                    Location
                  </TableCell>
                  <TableCell>
                    Year
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* Table data */}
              <TableBody>
                {Bibliography.map((bibliography: TBibliography, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        {bibliography.Author}
                      </TableCell>
                      <TableCell>
                        {bibliography.Title}
                      </TableCell>
                      <TableCell>
                        {bibliography.Publisher}
                      </TableCell>
                      <TableCell>
                        {bibliography.Location}
                      </TableCell>
                      <TableCell>
                        {bibliography.Year}
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
        <AddBibliography onCloseEvt={handleDialogToggle} />
      </Box>
    </StylesStyled>
  )
}

export default Bibliography;
