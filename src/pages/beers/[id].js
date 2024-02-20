import axios from 'axios';
import {
  Box,
  Container,
  Typography
} from "@mui/material";
import Image from "next/image";
import randomBeer from '../../../public/randomBeer.png';

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get(`https://api.punkapi.com/v2/beers/${params.id}`);

    return {
      props: {
        beer: res.data[0]
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        beer: null
      },
    };
  }
}

const SingleBeer = ({ beer }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row'
        },
        width: '100%',
        marginTop: '40px',
        marginLeft: '20px'
      }}
    >
      <Box
        sx={{
          marginBottom: {
            xs: '15px'
          },
          flex: {
            lg: 1
          }
        }}
      >
        <Image
          src={beer?.image_url || randomBeer}
          alt={'image of a beer'}
          height={400}
          width={150}
          objectFit='contain' />
      </Box>
      <Box
        sx={{
          flex: {
            lg: 4,
            xl: 5
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginBottom: '20px',
            width: {
              xs: 'max-content'
            }
          }}
        >
          <Box
            sx={{
              border: 1,
              borderColor: '#d8121e',
              borderRadius: '20px',
              padding: '4px 8px 4px 8px',
              marginRight: '15px',
            }}
          >
            <Typography
              data-cy={`single-beer-abv-${beer.id}`}
            >
              ABV: {beer?.abv}%
            </Typography>
          </Box>
          <Box
            sx={{
              border: 1,
              borderColor: '#d8121e',
              borderRadius: '20px',
              padding: '4px 8px 4px 8px',
            }}
          >
            <Typography>
              First brewed: {beer?.first_brewed}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant='h4'
          sx={{ marginBottom: '10px' }}
        >
          {beer?.name}
        </Typography>
        <Typography
            data-cy={`single-beer-tagline-${beer.id}`}
          variant='h5'
          sx={{ marginBottom: '20px' }}
        >
          Tagline: {beer?.tagline}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: '100%',
              lg: '50%'
            }
          }}
        >
          <Typography
            sx={{ marginBottom: '20px' }}
          >
            <b>Description:</b> {beer?.description}
          </Typography>
          <Typography
            sx={{
              marginBottom: {
                xs: '20px'
              }
            }}
          >
            <b>Best paired with:</b> {beer?.food_pairing}
          </Typography>
        </Box>
      </Box >
    </Container >
  )
}

export default SingleBeer;