import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
  Hidden
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import TableViewIcon from '@mui/icons-material/TableView';
import CustomPagination from "../../components/Pagination";
import PokemonGrid from '../../components/Pokemons/PokemonGrid';
import PokemonTable from '../../components/Pokemons/PokemonTable';
import isEmpty from 'lodash/isEmpty';
import Search from '../../components/Search/Search';

const Pokemon = () => {
  const [currentView, setCurrentView] = useState('grid');
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  const fetchPokemon = useCallback(async (page, query) => {
    try {
      setLoading(true);
      let url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`;
      if (query) {
        url = `https://pokeapi.co/api/v2/pokemon/${query}`;
      }
      const res = await axios.get(url);
      if (query) {
        setPokemonList([res.data]);
        setTotalPages(1);
      } else {
        const pokemonData = await Promise.all(res.data.results.map(async pokemon => {
          const response = await axios.get(pokemon.url);
          return response.data;
        }));
        setPokemonList(pokemonData);
        setTotalPages(Math.ceil(res.data.count / 10));
      }
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (searchInput.trim() === '') {
      fetchPokemon(currentPage, '');
    }
  }, [searchInput, fetchPokemon, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    fetchPokemon(1, searchInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleGridView = () => {
    setCurrentView('grid');
  };

  const handleTableView = () => {
    setCurrentView('table');
  };

  return (
    <Box sx={{ margin: '20px' }}>
      {loading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
              marginTop: '30px'
            }}
          >
            <Search
              label="Search Pokémon"
              variant="outlined"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDownCapture={handleKeyPress}
              onClick={handleSearch}
            />
            <Hidden smDown>
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button
                  onClick={handleGridView}
                >
                  <GridViewIcon />
                </Button>
                <Button
                  onClick={handleTableView}
                  data-cy="table_view_button"
                >
                  <TableViewIcon />
                </Button>
              </ButtonGroup>
            </Hidden>
          </Box>
          {currentView === 'grid' && (
            <Box sx={{ marginBottom: '30px' }}>
              <PokemonGrid pokemons={pokemonList} />
            </Box>
          )}
          {currentView === 'table' && (
            <Hidden smDown>
              <PokemonTable
                pokemons={pokemonList}
                page={currentPage}
                onPageChange={setCurrentPage}
                hideFooter
              />
            </Hidden>
          )}
          <CustomPagination
            setPage={handlePageChange}
            pagesNumber={totalPages}
            page={currentPage}
          />
          {isEmpty(pokemonList) && (
            <Typography sx={{ marginTop: '30px' }}>
              No Pokémon were found!
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Pokemon;
