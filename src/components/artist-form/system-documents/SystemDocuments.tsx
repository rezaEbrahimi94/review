import React, { useContext, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { FilledButton, GhostButton } from '@/components/buttons/SamButtons';
import { DialogStyled, SamBox, SystemDocumentsStyled } from './style';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ChevronIcon, CrossIcon, MailIcon } from '@/components/icons/Icons';
import ArtistContext from '@/components/context/ArtistContext';
import { getCookieValue } from '@/utils/getCookie';
import { TDocument, TSystemDocumentsData } from './type';
import axios from 'axios';
import { SamTextField } from '@/components/text-field/TextField';
import { SamTextArea } from '@/components/text-area/TextArea';
import { environment } from '@/constants/environment';

const SystemDocuments = () => {
  // get Context to set new Data of artist
  const { Id } = useContext(ArtistContext);
  // State for emailing
  const [receiver, setReceiver] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [emailBody, setEmailBody] = useState<string>('');
  const [displayEmailDialog, setDisplayEmailDialog] = useState<boolean>(false);

  // State for form data
  const [data, setData] = useState<TSystemDocumentsData>({
    Files: null,
  });

  // Get Access token
  const ACCESS_TOKEN = getCookieValue('accessToken');

  // Axios config
  // Count Progress of file uploading
  const header = {
    Authorization: 'Bearer ' + ACCESS_TOKEN,
    // 'Accept-Language': 'application/json'
  }

  // function to get documents links
  const systemDocumentRequest = async () => {
    console.log("Get files list.");
    const fetchUrl = `${environment.BASE_URL}/dev/artist/documents/${Id}`;
    await fetch(fetchUrl, {
      method: 'GET',
      headers: header,
    })
    .then(async (res) => {
        const data = await res.json();
        setData({
          Files: data,
        })
      })
      .catch(() => {
        console.log("No result.");
      })
  }

  // function to handle download document
  const handleDownloadDocument = async (fileId: number) => {
    const fetchUrl = `${environment.BASE_URL}/dev/artist/document/${fileId}`;
    await fetch(fetchUrl, {
      method: 'GET',
      headers: header,
    })
      .then(async (res) => {
        const data = await res.json();
        window.open(data.documentURL, "_blank");
      })
      .catch(() => {
        console.log("No result.");
      })
  }

  // function to emailing document
  const handleEmailDocument = async (fileId: number) => {
    const fetchUrl = `${environment.BASE_URL}/dev/artist/email-document`;
    const emailingData = {
      To: receiver,
      Subject: subject,
      Text: emailBody,
      DocumentId: fileId,
    }
    await axios.post(
      fetchUrl,
      emailingData,
      {
        headers: header
      }
    )
    .then(() => {  
      console.log("Email sent.")
      handleToggleDialog();
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }

  useEffect(() => {
    // Fetch API to get documents links
    systemDocumentRequest();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Id])

  const handleToggleDialog = () => {
    const newValue = !displayEmailDialog;
    setDisplayEmailDialog(newValue);
  }

  return (
    <SystemDocumentsStyled>
      <Box className='systemDocuments-container'>
        <Typography variant='h4' 
          color='neutral.n0'
          mb='36px'
        >
          Documents
        </Typography>
        <SamTable>
          {/* Table Heading */}
          <TableHead>
            <TableRow>
              <TableCell>
                Document
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          {/* Adding session */}
          <TableBody>
            {(data.Files?.length !== undefined && data.Files?.length > 0) ?
              data.Files.map((item: TDocument, index: number) => {
                return (
                  <TableRow key={index} className='systemDocument-type'>
                    <TableCell>
                      {item.type !== '' ? item.type : item.title}
                    </TableCell>
                    <TableCell className='systemDocument-actions'>
                      <Stack direction='row'
                        spacing='8px'
                      >
                        <GhostButton className='systemDocument-downloadBtn systemDocument-btn' 
                          label='Download'
                          onClick={() => handleDownloadDocument(item.id)}
                          endIcon={<ChevronIcon />}
                        />
                        <GhostButton className='systemDocument-emailBtn systemDocument-btn' 
                          label='Email'
                          onClick={handleToggleDialog}
                        />
                        <GhostButton className='systemDocument-previewBtn systemDocument-btn' 
                          label='Preview'
                          onClick={() => handleDownloadDocument(item.id)}
                        />
                      </Stack>
                      {displayEmailDialog ?
                        <>
                          <SamBox></SamBox>
                          <DialogStyled direction='column' spacing='32px'>
                            <Stack direction='row' justifyContent='space-between'>
                              <Typography variant='h3' color='neutral.n0'>
                                Email document {item.title}
                              </Typography>
                              <CrossIcon sx={{ cursor: 'pointer' }}
                                onClick={handleToggleDialog} />
                            </Stack>
                            <SamTextField id='receiver'
                              label='To:'
                              fullWidth
                              value={receiver}
                              onChange={(e: string) => {
                                setReceiver(e);
                              }}
                            />
                            <SamTextField id='subject'
                              label='Subject:'
                              fullWidth
                              value={subject}
                              onChange={(e: string) => {
                                setSubject(e);
                              }}
                            />
                            <SamTextArea id='emailBody'
                              label='Message:'
                              fullWidth
                              rows={3}
                              value={emailBody}
                              onChange={(e: string) => setEmailBody(e)}
                            />
                            <FilledButton label='Send email'
                              onClick={() => handleEmailDocument(item.id)}
                            />
                          </DialogStyled>
                        </> 
                        :
                        null
                      }
                    </TableCell>
                  </TableRow>
                )
              })
            : 
              null
            }
          </TableBody>
        </SamTable>
        <GhostButton className='systemDocument-contactBtn systemDocument-btn' 
          label='Contact Desart to configure a document'
          startIcon={<MailIcon />}
          sx={{
            marginTop: '32px',
          }}
        />
      </Box>
    </SystemDocumentsStyled>
  )
}

export default SystemDocuments