import {
  useCallback,
  useEffect,
  useState,
} from 'react';
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
import isEmpty from 'lodash/isEmpty';
import BeerGrid from '../../components/Beers/BeerGrid';
import BeerTable from '../../components/Beers/BeerTable';
import Pagination from '../../components/Pagination';
import Search from '../../components/Search/Search';

const Beer = () => {
  const [currentView, setCurrentView] = useState('grid');
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState(false);

  const beersPerPage = 10;
  const totalPages = 33;

  const fetchBeers = useCallback(async (isSearch) => {
    try {
      let params = {};
      if (isSearch) {
        params = {
          beer_name: query
        }
      } else {
        params = {
          page: page,
          per_page: beersPerPage,
        }
      };
      setLoading(true)
      const res = await axios.get(`https://api.punkapi.com/v2/beers`, {
        params: params,
      });
      setBeers(res.data);
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false);
    }
  }, [page, query]);

  useEffect(() => {
    if (query === '') {
      fetchBeers();
      setSearch(false);
    }
  }, [fetchBeers]);

  const handleClick = async () => {
    fetchBeers(query !== '');
    setSearch(true);
  };

  const handleGridView = () => {
    setCurrentView('grid');
  };

  const handleTableView = () => {
    setCurrentView('table');
  };

  return (
    <Box
      sx={{ margin: '20px' }}
    >
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
              onClick={handleClick}
              onChange={setQuery}
              query={query}
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
            <Box sx={{ marginBottom: "60px" }} >
              <BeerGrid beers={beers} />
            </Box>
          )}
          {currentView === 'table' && (
            <Hidden smDown>
              <BeerTable
                beers={beers}
                page={page}
                onPageChange={setPage}
                hideFooter
              />
            </Hidden>
          )}
          {!search && (
            <Pagination
              setPage={setPage}
              pagesNumber={totalPages}
              page={page}
            />
          )
          }
          {isEmpty(beers) && (
            <Typography
              sx={{ marginTop: '30px' }}
            >
              No beers were found!
            </Typography>
          )}
        </Box>
      )}
    </Box>
  )
}
export default Beer;
