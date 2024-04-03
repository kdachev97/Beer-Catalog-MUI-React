import axios from 'axios';
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import defaultPokemon from '../../../public/defaultPokemon.png';

export const getServerSideProps = async ({ params }) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

    return {
      props: {
        pokemon: res.data
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        pokemon: null
      },
    };
  }
}

const SinglePokemon = ({ pokemon }) => {
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
          src={pokemon?.sprites?.front_shiny || defaultPokemon}
          alt={'image of a pokemon'}
          height={300}
          width={200}
          objectFit='contain'
          loading='lazy'
        />
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
              data-cy={`single-pokemon-xp-${pokemon.id}`}
            >
              {pokemon.base_experience} XP
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
              Weight: {pokemon?.weight}g
            </Typography>
          </Box>
        </Box>
        <Typography
          variant='h4'
          sx={{ marginBottom: '10px' }}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
        </Typography>
        <Typography
          data-cy={`single-pokemon-stats-${pokemon.id}`}
          variant='h5'
          sx={{ marginBottom: '20px' }}
        >
          {pokemon.stats.map((stat, index) => (
            <Typography
              key={index}
            >
              <b>{stat.stat.name}:</b> {stat.base_stat}
            </Typography>
          ))}
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
        </Box>
      </Box>
    </Container>
  )
}

export default SinglePokemon;
