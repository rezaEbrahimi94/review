import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon, PlusIcon } from '@/components/icons/Icons';
import { FilledButton, GhostButton, SamIconButton } from '@/components/buttons/SamButtons';
import { TAddFieldDialog, TBibliography } from '../type';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogTextField, HistoryDialogStyled } from '../style';

const AddBibliography = (props: TAddFieldDialog) => {
  const [length, setLength] = useState<number>(1);
  const [addedBibliography, setAddedBibliography] = useState<TBibliography[]>([
    {
      Author: '',
      Title: '',
      Publisher: '',
      Location: '',
      Year: '',
    }
  ]);

  // Render textfield row for added collection
  const BibliographysRow = () => {
    // const arr = [];
    return (
      <>
        {(() => {
          const arr = [];
          for (let i = 0; i < length; i++) {
            arr.push(
              <TableRow key={i}>
                <TableCell>
                  <DialogTextField className='Author' 
                    defaultValue={addedBibliography[i].Author}
                    onChange={(e) => handleRowChange(i, 'Author', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Title' 
                    defaultValue={addedBibliography[i].Title}
                    onChange={(e) => handleRowChange(i, 'Title', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Publisher' 
                    defaultValue={addedBibliography[i].Publisher}
                    onChange={(e) => handleRowChange(i, 'Publisher', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Location' 
                    defaultValue={addedBibliography[i].Location}
                    onChange={(e) => handleRowChange(i, 'Location', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Year' 
                    defaultValue={addedBibliography[i].Year}
                    onChange={(e) => handleRowChange(i, 'Year', e.target.value)}
                  />
                </TableCell>
              </TableRow>
            );
          }
          return arr;
        })()}
      </>
    )
  }

  // Function to handle field change
  const handleRowChange = (rowIndex: number, changedField: string, newValue: string) => {
    const newArray = addedBibliography;
    switch(changedField) {
      case 'Author':
        newArray[rowIndex].Author = newValue;
        break;
      case 'Title':
        newArray[rowIndex].Title = newValue;
        break;
      case 'Publisher':
        newArray[rowIndex].Publisher = newValue;
        break;
      case 'Location':
        newArray[rowIndex].Location = newValue;
        break;
      case 'Year': 
        newArray[rowIndex].Year = newValue;
        break;
    }
    setAddedBibliography(newArray);
  }

  // Function to add new row
  const handleAddRow = () => {
    const newArray = [...addedBibliography, {
      MonthYear: '',
      ExhibitionName: '',
      Publisher: '',
      Location: '',
      Type: '',
    }]
    setLength(length + 1);
    setAddedBibliography(newArray)
  }

  return (
    <HistoryDialogStyled>
      <Box className='historyDialog-bg' />
      <Stack direction='column'
        spacing='46px'
        padding='48px'
        className='historyDialog-container'
      >
        {/* Title and close button */}
        <Stack direction='row'
          justifyContent='space-between'
        >
          <Typography variant='h3'
            color='neutral.n0'
          >
            Add exhibitions
          </Typography>
          <CrossIcon onClick={props.onCloseEvt} />
        </Stack>
        <Stack direction='column'
          spacing='34px'
        >
          <SamTable className='artistHistory-dialog'>
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
            {/* Adding session */}
            <TableBody>
              <BibliographysRow />
            </TableBody>
          </SamTable>
          {/* Add row button */}
          <SamIconButton className='addFieldDialog-addRowBtn' 
            sx={{
              width: 'fit-content',
            }}
            onClick={handleAddRow}
          >
            <PlusIcon />
          </SamIconButton>
        </Stack>
        {/* Add button and close button */}
        <Stack direction='row'
          spacing='16px'
          justifyContent='flex-end'
        >
          <FilledButton className='addFieldDialog-addBtn' 
            label='Add' 
            sx={{ 
              width: 'fit-content',
            }} 
            // onClick={handleAddField}
          />
          <GhostButton className='addFieldDialog-cancelBtn' 
            label='Cancel' 
            sx={{ 
              width: 'fit-content',
            }} 
            onClick={props.onCloseEvt}
          />
        </Stack>
      </Stack>
    </HistoryDialogStyled>
  )
}

export default AddBibliography;