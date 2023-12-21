import { MediaUploadStyled } from '@/components/media-upload/style';
import Box from '@mui/material/Box';
import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography'
import { UploadIcon } from '@/components/icons/Icons';
import {useDropzone} from 'react-dropzone';
import { TImageUploader } from '@/components/media-upload/type';
import UploadItem from './UploadItem';
import { Stack } from '@mui/material';

/* Image Upload component */
const MediaUploader = ({multiple, onChange, onMultipleChange, uploadProgress}: TImageUploader) => {

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = new FileReader;

    file.onload = () => {
      // setPrevew(file.result);
      // setFileName(acceptedFiles)
      if(onChange) {
        onChange(acceptedFiles[0])
      }
      if(multiple) {
        if(onMultipleChange) {
          onMultipleChange(acceptedFiles)
        }
      }
    }

    file.readAsDataURL(acceptedFiles[0]);
  }, [multiple, onChange, onMultipleChange])

  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = 
    useDropzone({onDrop, accept: {
      'application/pdf': [],
      'application/docx': [],
      'application/doc': [],
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
    },
    multiple: multiple
  })

  return (
    <Box className='mediaUpload-root'>
      {/* Drag and drop image uploader */}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <MediaUploadStyled direction='column' 
              spacing='3px'
              alignItems='center'
            >
              <UploadIcon className='mediaUpload-icon'/>
              <Box>
                <Typography variant='body1' 
                  color='neutral.n0' 
                  component='span'
                >
                  Drop the file here or&nbsp;
                </Typography>
                <Typography variant='body1' 
                  color='primary.pr50' 
                  component='span'
                  className='mediaUpload-browse'
                >
                  browse
                </Typography>
              </Box>
              {/* Info on supported file type */}
              <Typography variant='body2' 
                  color='neutral.n40' 
              >
                Supports PDF, doc, docx, JPG, PNG
              </Typography>
            </MediaUploadStyled>
            :
            <MediaUploadStyled direction='column' 
              spacing='3px'
              alignItems='center'
            >
              <UploadIcon className='mediaUpload-icon'/>
              <Box>
                <Typography variant='body1' 
                  color='neutral.n0' 
                  component='span'
                >
                  Drag and drop images or&nbsp;
                </Typography>
                <Typography variant='body1' 
                  color='primary.pr50' 
                  component='span'
                  className='mediaUpload-browse'
                >
                  browse
                </Typography>
              </Box>
              {/* Info on supported file type */}
              <Typography variant='body2' 
                  color='neutral.n40' 
              >
                Supports PDF, doc, docx, JPG, PNG
              </Typography>
            </MediaUploadStyled>
        }
      </div>
      {/* Upload item and progress go here */}
      <Stack direction='column'
        spacing='16px'
        mt='32px'
        className='mediaUpload-itemsContainer'
      >
        {acceptedFiles.map((file: File, index: number) => {
          return (
            <Box key={index}>
              {(!uploadProgress || uploadProgress != 100) ? 
                <UploadItem name={file.name} 
                  size={file.size} 
                  status='uploading'
                  progress={uploadProgress} 
                />
                :
                <UploadItem name={file.name} 
                  size={file.size} 
                  status='completed'
                />
              }
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export default MediaUploader;
