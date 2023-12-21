import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon, PlusIcon } from '@/components/icons/Icons';
import { FilledButton, GhostButton, SamIconButton } from '@/components/buttons/SamButtons';
import { TAddFieldDialog, TCommission } from '../type';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogTextField, HistoryDialogStyled } from '../style';

const AddCommissions = (props: TAddFieldDialog) => {
  const [length, setLength] = useState<number>(1);
  const [addedCommissions, setAddedCommissions] = useState<TCommission[]>([
    {
      Artwork: '',
      CommissionedBy: '',
      Place: '',
      MonthYear: '',
    }
  ]);

  // Render textfield row for added collection
  const CommissionsRow = () => {
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
                    defaultValue={addedCommissions[i].Artwork}
                    onChange={(e) => handleRowChange(i, 'Artwork', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='CommissionedBy' 
                    defaultValue={addedCommissions[i].CommissionedBy}
                    onChange={(e) => handleRowChange(i, 'CommissionedBy', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Place' 
                    defaultValue={addedCommissions[i].Place}
                    onChange={(e) => handleRowChange(i, 'Place', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='MonthYear' 
                    defaultValue={addedCommissions[i].MonthYear}
                    onChange={(e) => handleRowChange(i, 'MonthYear', e.target.value)}
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
    const newArray = addedCommissions;
    switch(changedField) {
      case 'Artwork':
        newArray[rowIndex].Artwork = newValue;
        break;
      case 'CommissionedBy':
        newArray[rowIndex].CommissionedBy = newValue;
        break;
      case 'Place':
        newArray[rowIndex].Place = newValue;
        break;
      case 'MonthYear':
        newArray[rowIndex].MonthYear = newValue;
        break;
    }
    setAddedCommissions(newArray);
  }

  // Function to add new row
  const handleAddRow = () => {
    const newArray = [...addedCommissions, {
      MonthYear: '',
      ExhibitionName: '',
      Venue: '',
      Location: '',
      Type: '',
    }]
    setLength(length + 1);
    setAddedCommissions(newArray)
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
                    Artwork
                  </TableCell>
                  <TableCell>
                    Commissioned By
                  </TableCell>
                  <TableCell>
                    Place
                  </TableCell>
                  <TableCell>
                    Month, Year
                  </TableCell>
                </TableRow>
              </TableHead>
            {/* Adding session */}
            <TableBody>
              <CommissionsRow />
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

export default AddCommissions;