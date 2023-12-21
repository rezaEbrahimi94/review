import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon, PlusIcon } from '@/components/icons/Icons';
import { FilledButton, GhostButton, SamIconButton } from '@/components/buttons/SamButtons';
import { TAddFieldDialog, TAward } from '../type';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogTextField, HistoryDialogStyled } from '../style';

const AddAwards = (props: TAddFieldDialog) => {
  const [length, setLength] = useState<number>(1);
  const [addedAwards, setAddedAwards] = useState<TAward[]>([
    {
      Prize: '',
      AwardName: '',
      Venue: '',
      Location: '',
      Year: '',
    }
  ]);

  // Render textfield row for added collection
  const AwardsRow = () => {
    // const arr = [];
    return (
      <>
        {(() => {
          const arr = [];
          for (let i = 0; i < length; i++) {
            arr.push(
              <TableRow key={i}>
                <TableCell>
                  <DialogTextField className='Prize' 
                    defaultValue={addedAwards[i].Prize}
                    onChange={(e) => handleRowChange(i, 'Prize', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='AwardName' 
                    defaultValue={addedAwards[i].AwardName}
                    onChange={(e) => handleRowChange(i, 'AwardName', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Venue' 
                    defaultValue={addedAwards[i].Venue}
                    onChange={(e) => handleRowChange(i, 'Venue', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Location' 
                    defaultValue={addedAwards[i].Location}
                    onChange={(e) => handleRowChange(i, 'Location', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Year' 
                    defaultValue={addedAwards[i].Year}
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
    const newArray = addedAwards;
    switch(changedField) {
      case 'Prize':
        newArray[rowIndex].Prize = newValue;
        break;
      case 'AwardName':
        newArray[rowIndex].AwardName = newValue;
        break;
      case 'Venue':
        newArray[rowIndex].Venue = newValue;
        break;
      case 'Location':
        newArray[rowIndex].Location = newValue;
        break;
      case 'Year': 
        newArray[rowIndex].Year = newValue;
        break;
    }
    setAddedAwards(newArray);
  }

  // Function to add new row
  const handleAddRow = () => {
    const newArray = [...addedAwards, {
      MonthYear: '',
      ExhibitionName: '',
      Venue: '',
      Location: '',
      Type: '',
    }]
    setLength(length + 1);
    setAddedAwards(newArray)
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
                  Prize
                </TableCell>
                <TableCell>
                  Award Name
                </TableCell>
                <TableCell>
                  Venue
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
              <AwardsRow />
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

export default AddAwards;