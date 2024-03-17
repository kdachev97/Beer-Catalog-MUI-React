import { Pagination as MaterialPagination } from "@mui/material";

const CustomPagination = ({ setPage, pagesNumber, page }) => {
  const handlePageChange = (_, value) => {
    setPage(value);
  };

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
      onChange={handlePageChange}
      page={page}
      data-cy="pagination"
    />
  );
};

export default CustomPagination;
