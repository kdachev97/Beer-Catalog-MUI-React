import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
} from '@mui/material';
import Image from "next/image";
import Link from 'next/link';
import randomBeer from '../../../public/randomBeer.png';

const BeerGrid = ({ beers }) => {
  return (

    <Grid
      container
      spacing={3}
      direction="row"
      data-cy="beer_grid"
    >
      {beers.map(beer => (
        <Link
          key={beer.id}
          href={`/beers/${beer.id}`}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={3}
            key={beer.id}
          >
            <Card
              sx={{
                backgroundColor: 'inherit',
                justifyContent: 'center',
                border: 2,
                borderColor: '#2a1d24'
              }}
            >
              <CardActionArea
                data-cy={`grid-beer-button-${beer.id}`}
                sx={{
                  textAlign: 'center',
                  margin: '10px 0px 10px 0px',
                }}
              >
                <Image
                  src={beer.image_url || randomBeer}
                  height={200}
                  width={150}
                  alt={'image of a beer'}
                  objectFit='contain'
                />
                <Box
                  position='absolute'
                  right='15%'
                  bottom='60%'
                >
                  <Avatar
                    sx={{
                      width: 55,
                      height: 55,
                      backgroundColor: '#D8125C'
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#faf2f2',
                        fontSize: '0.85rem'
                      }}
                    >
                      {beer.abv}% ABV
                    </Typography>
                  </Avatar>
                </Box>
                <Typography
                  data-cy={`grid-beer-${beer.id}`}
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px 10px 0px 10px'
                  }}
                >
                  <b>Name:</b> {beer.name}
                </Typography>
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px 10px 0px 10px'
                  }}>
                  <b>Tagline:</b> {beer.tagline}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Link>
      ))}
    </Grid>

  );
}

export default BeerGrid;