import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { CrossIcon, PlusIcon } from '@/components/icons/Icons';
import { FilledButton, GhostButton, SamIconButton } from '@/components/buttons/SamButtons';
import { TAddFieldDialog, TWaitlist } from '../type';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DialogTextField, HistoryDialogStyled } from '../style';

const AddWaitlist = (props: TAddFieldDialog) => {
  const [length, setLength] = useState<number>(1);
  const [addedWaitlist, setAddedWaitlist] = useState<TWaitlist[]>([
    {
      Customer: '',
      Phone: '',
      Email: '',
    }
  ]);

  // Render textfield row for added collection
  const WaitlistRow = () => {
    // const arr = [];
    return (
      <>
        {(() => {
          const arr = [];
          for (let i = 0; i < length; i++) {
            arr.push(
              <TableRow key={i}>
                <TableCell>
                  <DialogTextField className='Customer' 
                    defaultValue={addedWaitlist[i].Customer}
                    onChange={(e) => handleRowChange(i, 'Customer', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Phone' 
                    defaultValue={addedWaitlist[i].Phone}
                    onChange={(e) => handleRowChange(i, 'Phone', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <DialogTextField className='Email' 
                    defaultValue={addedWaitlist[i].Email}
                    onChange={(e) => handleRowChange(i, 'Email', e.target.value)}
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
    const newArray = addedWaitlist;
    switch(changedField) {
      case 'Customer':
        newArray[rowIndex].Customer = newValue;
        break;
      case 'Phone':
        newArray[rowIndex].Phone = newValue;
        break;
      case 'Email':
        newArray[rowIndex].Email = newValue;
        break;
    }
    setAddedWaitlist(newArray);
  }

  // Function to add new row
  const handleAddRow = () => {
    const newArray = [...addedWaitlist, {
      MonthYear: '',
      ExhibitionName: '',
      Email: '',
      Location: '',
      Type: '',
    }]
    setLength(length + 1);
    setAddedWaitlist(newArray)
  }

  return (
    <HistoryDialogStyled>
      <Box className='historyDialog-bg' />
      <Stack direction='column'
        spacing='46px'
        padding='48px'
        className='historyDialog-container'
      >
        {/* Phone and close button */}
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
                    Customer
                  </TableCell>
                  <TableCell>
                    Phone
                  </TableCell>
                  <TableCell>
                    Email
                  </TableCell>
                </TableRow>
              </TableHead>
            {/* Adding session */}
            <TableBody>
              <WaitlistRow />
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

export default AddWaitlist;