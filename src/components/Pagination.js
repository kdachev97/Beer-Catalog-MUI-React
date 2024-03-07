import {
  Pagination as MaterialPagination
} from "@mui/material";

const Pagination = ({
  setPage,
  pagesNumber,
  page
}) => {
  return (
    <MaterialPagination
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
          xs: 'max-content',
          sm: '100%'
        },
      }}
      variant="outlined"
      count={pagesNumber}
      onChange={(e, value) => setPage(value)}
      page={page}
      data-cy="pagination"
    />
  )
}

export default Pagination;
