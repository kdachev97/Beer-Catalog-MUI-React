import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'id',
    headerName: 'Id',
    flex: 0.5,
    minWidth: 100,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 0.5,
    minWidth: 250,
    renderCell: (params) => {
      const name = params.formattedValue.charAt(0).toUpperCase() + params.formattedValue.slice(1);
      return name;
    }
  },
  {
    field: 'abilities',
    headerName: 'Abilities',
    flex: 1,
    minWidth: 150,
    renderCell: (params) => {
      const abilities = params.row.abilities.map(ability => ability.ability.name).join(', ');
      return <Typography>{abilities}</Typography>;
    }
  },
  {
    field: 'Learn More',
    headerName: 'Learn More',
    flex: 0.5,
    minWidth: 200,
    sortable: false,
    renderCell: (pokemon) =>
      <a
        href={`/pokemons/${pokemon.id}`}
      >
        <Typography sx={{ color: '#0645AD' }}> Learn More </Typography>
      </a>,
  }
];

const PokemonTable = ({
  pokemons,
  page,
  onPageChange,
  hideFooter,
}) => {
  console.log(pokemons)
  return (
    <Box
      data-cy="table-view"
      sx={{
        display: 'flex',
        width: '100%',
        border: 2,
        marginBottom: '20px'
      }}
    >
      <DataGrid
        sx={{
          paddingLeft: '15px',
          border: 0,
          '.MuiDataGrid-columnHeaders': {
            borderBottomColor: 'inherit'
          },
          '.MuiDataGrid-cell': {
            borderBottomColor: 'inherit'
          },
          '.MuiDataGrid-columnSeparator': {
            visibility: 'hidden',
          },
        }}
        autoHeight
        density={'comfortable'}
        rows={pokemons}
        columns={columns}
        rowCount={1311}
        rowsPerPageOptions={[10]}
        pageSize={10}
        page={page}
        onPageChange={(page) => onPageChange(page)}
        paginationMode='server'
        hideFooter={hideFooter}
      />
    </Box>
  );
}

export default PokemonTable;