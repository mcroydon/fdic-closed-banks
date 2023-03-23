import React from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({ banksPerPage, totalBanks, handlePageChange, handleRowsPerPageChange }) => {

  return (
    <TablePagination
      component="div"
      count={totalBanks}
      rowsPerPage={banksPerPage}
      page={handlePageChange.page - 1}
      onPageChange={(event, newPage) => handlePageChange.handlePageChange(newPage + 1)}
      onRowsPerPageChange={(event) => handleRowsPerPageChange(parseInt(event.target.value, 10))}
      rowsPerPageOptions={[10, 50, 100]}
    />
  );
};

export default Pagination;