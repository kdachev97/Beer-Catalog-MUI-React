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
import defaultPokemon from '../../../public/defaultPokemon.png';

const PokemonGrid = ({ pokemons }) => {
  return (

    <Grid
      container
      spacing={3}
      direction="row"
      data-cy="pokemon_grid"
    >
      {pokemons.map(pokemon => (
        <Link
          key={pokemon.id}
          href={`/pokemons/${pokemon.id}`}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            xl={3}
            key={pokemon.id}
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
                data-cy={`grid-pokemon-button-${pokemon.id}`}
                sx={{
                  textAlign: 'center',
                  margin: '10px 0px 10px 0px',
                }}
              >
                <Image
                  src={pokemon?.sprites?.front_default || defaultPokemon}
                  height={200}
                  width={150}
                  alt={'image of a pokemon'}
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
                      {pokemon?.base_experience} XP
                    </Typography>
                  </Avatar>
                </Box>
                <Typography
                  data-cy={`grid-pokemon-${pokemon.id}`}
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px 10px 0px 10px'
                  }}
                >
                  <b>Name:</b> {pokemon.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
                </Typography>
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0px 10px 0px 10px'
                  }}>
                  <b>Main move:</b> {pokemon?.moves[0]?.move?.name}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Link>
      ))}
    </Grid>

  );
}

export default PokemonGrid;