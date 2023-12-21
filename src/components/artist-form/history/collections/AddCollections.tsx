import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon, PlusIcon } from '@/components/icons/Icons';
import { FilledButton, GhostButton, SamIconButton } from '@/components/buttons/SamButtons';
import { TAddFieldDialog, TCollection } from '../type';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogTextField, HistoryDialogStyled } from '../style';

const AddCollections = (props: TAddFieldDialog) => {
  const [length, setLength] = useState<number>(1);
  const [addedCollections, setAddedCollections] = useState<TCollection[]>([
    {
      Artwork: '',
      Institution: '',
      Location: '',
      YearAcquired: '',
    }
  ]);

  // Render textfield row for added collection
  const CollectionRow = () => {
    // const arr = [];
    return (
      <>
        {(() => {
          const arr = [];
          for (let i = 0; i < length; i++) {
            arr.push(
              <TableRow key={i}>
                <TableCell>
                  <DialogTextField className='Artwork' 
                    defaultValue={addedCollections[i].Artwork}
                    onChange={(e) => handleRowChange(i, 'Artwork', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Institution' 
                    defaultValue={addedCollections[i].Institution}
                    onChange={(e) => handleRowChange(i, 'Institution', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Location' 
                    defaultValue={addedCollections[i].Location}
                    onChange={(e) => handleRowChange(i, 'Location', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='YearAcquired' 
                    defaultValue={addedCollections[i].YearAcquired}
                    onChange={(e) => handleRowChange(i, 'YearAcquired', e.target.value)}
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
    const newArray = addedCollections;
    switch(changedField) {
      case 'Artwork':
        newArray[rowIndex].Artwork = newValue;
        break;
      case 'Institution':
        newArray[rowIndex].Institution = newValue;
        break;
      case 'Location':
        newArray[rowIndex].Location = newValue;
        break;
      case 'YearAcquired':
        newArray[rowIndex].YearAcquired = newValue;
        break;
    }
    setAddedCollections(newArray);
  }

  // Function to add new row
  const handleAddRow = () => {
    const newArray = [...addedCollections, {
      Artwork: '',
      Institution: '',
      Location: '',
      YearAcquired: '',
    }]
    setLength(length + 1);
    setAddedCollections(newArray)
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
            Add collections
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
                    Artwork
                  </TableCell>
                  <TableCell>
                    Institution/Collector
                  </TableCell>
                  <TableCell>
                    Location
                  </TableCell>
                  <TableCell>
                    Year acquired
                  </TableCell>
                </TableRow>
              </TableHead>
            {/* Adding session */}
            <TableBody>
              <CollectionRow />
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

export default AddCollections;