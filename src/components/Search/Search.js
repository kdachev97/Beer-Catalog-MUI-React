import {
  Box,
  Button,
  Input,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({
  onChange,
  query,
  onClick
}) => {
  return (
    <Box>
      <Input
        data-cy="search-input"
        type='text'
        onChange={e => onChange(e.target.value)}
        value={query}
      />
      <Button
        data-cy="search-button"
        onClick={onClick}
      >
        <SearchIcon />
      </Button>
    </Box>
  )
}

export default Search;
