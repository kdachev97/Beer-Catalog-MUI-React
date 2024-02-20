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
    minWidth: 250
  },
  {
    field: 'abv',
    headerName: 'ABV',
    flex: 0.5,
    minWidth: 150
  },
  {
    field: 'first_brewed',
    headerName: 'First Brewed',
    flex: 0.5,
    minWidth: 150
  },
  {
    field: 'contributed_by',
    headerName: 'Contributed By',
    flex: 0.5,
    minWidth: 260
  },
  {
    field: 'Learn More',
    headerName: 'Learn More',
    flex: 0.5,
    minWidth: 200,
    sortable: false,
    renderCell: (beer) =>
      <a
        href={`/beers/${beer.id}`}
      >
        <Typography sx={{ color: '#0645AD' }}> Learn More </Typography>
      </a>,
  }
];

const BeerTable = ({
  beers,
  page,
  onPageChange,
  hideFooter,
}) => {
  return (
    <Box
      data-cy="table-view"
      sx={{
        display: 'flex',
        width: '100%',
        border: 2,
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
        rows={beers}
        columns={columns}
        rowCount={325}
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

export default BeerTable;