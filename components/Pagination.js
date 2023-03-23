import React from 'react';
import Pagination from '@mui/material/Pagination';

const Paginate = ({ banksPerPage, totalBanks, handlePageChange }) => {
  const pageCount = Math.ceil(totalBanks / banksPerPage);

  return (
    <Pagination
      count={pageCount}
      onChange={(event, page) => handlePageChange(page)}
      variant="outlined"
      shape="rounded"
    />
  );
};

export default Paginate;