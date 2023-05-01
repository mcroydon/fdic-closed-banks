import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { fetchData } from '../lib/utils';
import BankTable from '../components/BankTable';
import Pagination from '../components/Pagination';
// import '@/styles/Home.module.css'

export async function getStaticProps() {
  const banks = await fetchData();
  return {
    props: {
      banks,
    },
  };
}

const App = ({ banks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [banksPerPage, setBanksPerPage] = useState(10);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const mostRecentClosing = DateTime.fromFormat(banks[0]['Closing Date'], 'dd-LLL-yy').toJSDate();
  const daysSinceClosing = Math.floor((new Date() - mostRecentClosing) / (1000 * 60 * 60 * 24));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (rowsPerPage) => {
    setBanksPerPage(rowsPerPage);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1 style={{ fontSize: '72px', textAlign: 'center' }}>It has been {daysSinceClosing} days since the FDIC closed a bank.</h1>
      <BankTable banks={banks} currentPage={currentPage} banksPerPage={banksPerPage} />
      <Pagination
        banksPerPage={banksPerPage}
        totalBanks={banks.length}
        handlePageChange={{ page: currentPage, handlePageChange }}
        handleRowsPerPageChange={handleRowsPerPageChange}
      />
      <text><a href="https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/banklist.csv">Data</a> provided by the <a href="https://www.fdic.gov">FDIC</a>. <a href="https://github.com/mcroydon/fdic-closed-banks">Open Source code</a> is MIT-licensed. Hosted by <a href="https://vercel.com">Vercel</a>.</text>
    </div>
  );
};

export default App;