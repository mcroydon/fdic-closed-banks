import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { fetchData } from '../lib/utils';
import BankTable from '../components/BankTable';
import Paginate from '../components/Pagination';

export async function getStaticProps() {
  const banks = await fetchData();
  return {
    props: {
      banks,
    },
  };
}

export default function Home({ banks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const banksPerPage = 10;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const mostRecentClosing = DateTime.fromFormat(banks[0]['Closing Date'], 'dd-LLL-yy').toJSDate();
  const daysSinceClosing = Math.floor((new Date() - mostRecentClosing) / (1000 * 60 * 60 * 24));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 style={{ fontSize: '72px', textAlign: 'center' }}>It has been {daysSinceClosing} days since the FDIC closed a bank.</h1>
      <BankTable banks={banks} currentPage={currentPage} banksPerPage={banksPerPage} />
      <Paginate banksPerPage={banksPerPage} totalBanks={banks.length} handlePageChange={handlePageChange} />
    </div>
  );
};
