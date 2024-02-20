import {
  Box,
  Pagination as MaterialPagination
} from "@mui/material";

const Pagination = ({
  setPage,
  pagesNumber,
  page
}) => {
  return (

    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        zIndex: 200,
       paddingBottom: '10px',
        width: '100%',
      }}>
      <MaterialPagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        variant="outlined"
        count={pagesNumber}
        onChange={(e, value) => setPage(value)}
        page={page}
        data-cy="pagination"
      />
    </Box>
  )
}

export default Pagination;
