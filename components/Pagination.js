import React from 'react';

const Pagination = ({ banksPerPage, totalBanks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBanks / banksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        {pageNumbers.map((number) => (
            <button onClick={() => paginate(number)}>{number}</button>
        ))}
    </nav>
  );
};

export default Pagination;