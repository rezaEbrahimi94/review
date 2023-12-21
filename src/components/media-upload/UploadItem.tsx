import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { TUploadItem } from '@/components/media-upload/type';
import { UploadItemStyled } from '@/components/media-upload/style';
import { TickInCircleIcon } from '../icons/Icons';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const UploadItem = ({name, size, status, progress}: TUploadItem) => {
  const [display, setDisplay] = useState<boolean>(true);

  return (
    <>
      {display ? 
        <UploadItemStyled direction='column' spacing='4px'>
          <Stack direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='body2'
                color='neutral.n0'
                fontWeight={700}
                mb='16px'
              >
                {`${status.charAt(0).toUpperCase()}${status.slice(1)}`}
              </Typography>
              <Stack direction='row'
                spacing='8px'
              >
                <Typography variant='body2'
                  color='neutral.n40'
                >
                  {name}
                </Typography>
                <Typography variant='body2'
                  color='neutral.n0'
                >
                  | 
                </Typography>
                <Typography variant='body2'
                  color='neutral.n40'
                >
                  {status == 'uploading' ? `${progress}%` : `${size}KB`}
                </Typography>
              </Stack>
            </Box>
            {status == 'uploading' ? 
              <Typography variant='link2'
                className='uploadItem-cancelBtn'
                onClick={() => setDisplay(false)}
              >
                Cancel
              </Typography>
              :
              <TickInCircleIcon className='uploadItem-completeIcon' />
            }
          </Stack>
          {status == 'uploading' ? 
            <LinearProgress value={progress} 
              variant='determinate'
              className='uploadItem-progressBar' 
            />
            :
            null
          }
          
        </UploadItemStyled>
        : null
      }
    </>
  )
}

export default UploadItem;
