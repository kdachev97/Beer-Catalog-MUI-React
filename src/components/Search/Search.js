import {
  Box,
  TextField,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({
  onChange,
  onKeyDownCapture,
  label,
  value,
  onClick
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <TextField
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        onKeyDownCapture={onKeyDownCapture}
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
