import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SamTable from '@/components/tables/SamTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Tag from '@/components/tags/Tag';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { FilledButton, FilledIconButton } from '@/components/buttons/SamButtons';
import { PlusIcon, SmallSortIcon } from '@/components/icons/Icons';
import Link from 'next/link';
import { TArtistItemProps, TArtistsProps } from '@/components/artist-form/artist-listing/type';
import { useContext } from 'react';
import SearchArtistContext from '@/components/context/SearchArtistContext';

const TableArtistDesktop = ({id, items, onChange}: TArtistsProps) => {
  // useContext
  const { filter } = useContext(SearchArtistContext);
  
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleSortIconClick = (sortBy: string) => {
    if(onChange) {
      onChange('SortOrder', filter.SortOrder == 'ASC' ? 'DESC' : 'ASC')
      onChange('SortBy', sortBy)
    }
  }

  const handleHeaderClick = (sortBy: string) => {
    if(onChange) {
      onChange('SortBy', sortBy)
    }
  }

  return (
    <SamTable id={id}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Stack direction='row'
                alignItems='center'
              >
                <span onClick={() => handleHeaderClick('Firstname')}>
                  First Name 
                </span>
                <SmallSortIcon className={filter.SortOrder == 'ASC' ? 'SortIcon-ASC' : 'SortIcon-DESC'}
                  onClick={() => handleSortIconClick('Firstname')}
                />
              </Stack>
            </TableCell>
            <TableCell>
              <Stack direction='row'
                alignItems='center'
              >
                <span onClick={() => handleHeaderClick('Surname')}> 
                  Last Name 
                </span>
                <SmallSortIcon className={filter.SortOrder == 'ASC' ? 'SortIcon-ASC' : 'SortIcon-DESC'}
                  onClick={() => handleSortIconClick('Surname')}
                />
              </Stack>
            </TableCell>
            {isDesktop ? 
              <>
                <TableCell>
                  <Stack direction='row'
                alignItems='center'
              >
                <span onClick={() => handleHeaderClick('Bushname')}>
                  Traditional Name
                </span>
                <SmallSortIcon className={filter.SortOrder == 'ASC' ? 'SortIcon-ASC' : 'SortIcon-DESC'}
                  onClick={() => handleSortIconClick('Bushname')}
                />
              </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction='row'
                    alignItems='center'
                  >
                    <span onClick={() => handleHeaderClick('OtherName')}>
                      Skin Name
                    </span>
                    <SmallSortIcon className={filter.SortOrder == 'ASC' ? 'SortIcon-ASC' : 'SortIcon-DESC'}
                      onClick={() => handleSortIconClick('OtherName')}
                    />
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction='row'
                    alignItems='center'
                  >
                    <span onClick={() => handleHeaderClick('OtherName')}>
                      Preferrered Name
                    </span>
                    <SmallSortIcon className={filter.SortOrder == 'ASC' ? 'SortIcon-ASC' : 'SortIcon-DESC'}
                      onClick={() => handleSortIconClick('OtherName')}
                    />
                  </Stack>
                </TableCell>
              </>
              : null
            }
            <TableCell>
              <Stack direction='row'
                alignItems='center'
              >
                <span onClick={() => handleHeaderClick('OtherName')}>
                  Community
                </span>
                <SmallSortIcon className={filter.SortOrder == 'ASC' ? 'SortIcon-ASC' : 'SortIcon-DESC'}
                  onClick={() => handleSortIconClick('OtherName')}
                />
              </Stack>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((item: TArtistItemProps) => {
            const artistImage = (item.images?.length !== undefined && item.images?.length > 0) ? item.images[0].ImageS3Key : '';

            return (
              <TableRow key={item.Id}>
                <TableCell>
                  <Box width='49px'
                    height='49px'
                    component='img'
                    src={artistImage}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',}}
                  />
                </TableCell>
                <TableCell>
                  {item.Firstname}
                </TableCell>
                <TableCell>
                  {item.Surname}
                </TableCell>
                {isDesktop ? 
                  <>
                    <TableCell>
                      {item.Bushname ? item.Bushname : '-'}
                    </TableCell>
                    <TableCell>
                      {item.ArtistSubSectionSkin?.SubSectionSkin.Description ? 
                        item.ArtistSubSectionSkin?.SubSectionSkin.Description : '-'}
                    </TableCell>
                    <TableCell>
                      {item.OtherName ? item.OtherName : '-'}
                    </TableCell>
                  </>
                  : null
                }
                <TableCell>
                  {item.ArtistCommunity?.Community.Description}
                </TableCell>
                <TableCell>
                  {item.Deceased ? 
                    <Tag type='active' label='Deseased' />
                    : ''
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </SamTable>
  )
}

const TableItemMobile = ({images, Firstname, Surname, ArtistCommunity}: TArtistItemProps) => {
  const artistImage = (images?.length !== undefined && images?.length > 0) ? images[0].ImageS3Key : '';

  return (
    <Grid item xs={6}>
      <Box width='155px'
        height='155px'
        component='img'
        borderRadius='8px'
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',}}
        src={artistImage}
      />
      <Typography variant='body2' color='neutral.n0'>
        {Firstname} {Surname}
      </Typography>
      <Typography variant='body2' color='neutral.n0'>
        {ArtistCommunity?.Community.Description}
      </Typography>
    </Grid>
  )
}

const TableArtistMobile = ({id, items}: TArtistsProps) => {
  return (
    <Grid container id={id} className='Table-mobile-items' 
      rowSpacing='16px' columnSpacing='24px' marginTop='24px'
    >
      {items?
        items.map((item: TArtistItemProps, index: number) => {
          return (
            <TableItemMobile key={index} Id={item.Id} images={item.images} Firstname={item.Firstname}
              Surname={item.Surname} Bushname={item.Bushname}
              ArtistCommunity={item.ArtistCommunity} OtherName={item.OtherName}
              Deceased={item.Deceased}
              ArtistSubSectionSkin={item.ArtistSubSectionSkin} />
          )
        })
        :
        'No items...'
      }
    </Grid>
  )
}

const TableArtist = ({id, items, onChange}: TArtistsProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    isMobile ?
      <>
        <Link href='/dashboard/artists/add-an-artist'>
          <FilledIconButton className='Table-mobile-addArkworkbtn' 
            helpText='Add an Artist'
            sx={{
              position: 'fixed',
              right: 0,
              bottom: 0,
              margin: '32px',
            }}
          >
            <PlusIcon />
          </FilledIconButton>
        </Link>
        <TableArtistMobile id={id} items={items} />
      </> 
      : 
      <>
        <Link href='/dashboard/artists/add-an-artist'>
          <FilledButton className='Table-desktop-addArkworkbtn' 
            label='Add an Artist' startIcon={<PlusIcon />} 
            sx={{
              float: 'right',
              display: 'inline-flex',
              marginTop: '-176px',
            }}  
          />
        </Link>
        <TableArtistDesktop id={id} items={items} onChange={onChange} />
      </>
  )
}

export default TableArtist;
