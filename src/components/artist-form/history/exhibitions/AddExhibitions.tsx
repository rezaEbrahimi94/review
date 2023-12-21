import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon, PlusIcon } from '@/components/icons/Icons';
import { FilledButton, GhostButton, SamIconButton } from '@/components/buttons/SamButtons';
import { TAddFieldDialog, TExhibition } from '../type';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogTextField, HistoryDialogStyled } from '../style';
import Dropdown from '@/components/dropdown/Dropdown';

const AddExhibitions = (props: TAddFieldDialog) => {
  const [length, setLength] = useState<number>(1);
  const [addedExhibitions, setAddedExhibitions] = useState<TExhibition[]>([
    {
      MonthYear: '',
      ExhibitionName: '',
      Venue: '',
      Location: '',
      Type: '',
    }
  ]);

  // Render textfield row for added collection
  const ExhibitionsRow = () => {
    // const arr = [];
    return (
      <>
        {(() => {
          const arr = [];
          for (let i = 0; i < length; i++) {
            arr.push(
              <TableRow key={i}>
                <TableCell>
                  <DialogTextField className='MonthYear' 
                    defaultValue={addedExhibitions[i].MonthYear}
                    onChange={(e) => handleRowChange(i, 'MonthYear', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='ExhibitionName' 
                    defaultValue={addedExhibitions[i].ExhibitionName}
                    onChange={(e) => handleRowChange(i, 'ExhibitionName', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Venue' 
                    defaultValue={addedExhibitions[i].Venue}
                    onChange={(e) => handleRowChange(i, 'Venue', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Location' 
                    defaultValue={addedExhibitions[i].Location}
                    onChange={(e) => handleRowChange(i, 'Location', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                <Dropdown id='Type' 
                  initialOptions={[]} 
                  fullWidth 
                  onChange={(e) => handleRowChange(i, 'Type', e.toString())}
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
    const newArray = addedExhibitions;
    switch(changedField) {
      case 'MonthYear':
        newArray[rowIndex].MonthYear = newValue;
        break;
      case 'ExhibitionName':
        newArray[rowIndex].ExhibitionName = newValue;
        break;
      case 'Venue':
        newArray[rowIndex].Venue = newValue;
        break;
      case 'Location':
        newArray[rowIndex].Location = newValue;
        break;
      case 'Type': 
        newArray[rowIndex].Type = newValue;
        break;
    }
    setAddedExhibitions(newArray);
  }

  // Function to add new row
  const handleAddRow = () => {
    const newArray = [...addedExhibitions, {
      MonthYear: '',
      ExhibitionName: '',
      Venue: '',
      Location: '',
      Type: '',
    }]
    setLength(length + 1);
    setAddedExhibitions(newArray)
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
            {/* Adding session */}
            <TableBody>
              <ExhibitionsRow />
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

export default AddExhibitions;