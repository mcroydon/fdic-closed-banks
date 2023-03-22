import React, { useState } from 'react';
import { fetchData } from '../lib/utils';
import BankTable from '../components/BankTable';
import Pagination from '../components/Pagination';

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

  const mostRecentClosing = new Date(banks[0]['Closing Date']);
  const daysSinceClosing = Math.floor((new Date() - mostRecentClosing) / (1000 * 60 * 60 * 24));

  return (
    <div>
      <h1 style={{ fontSize: '72px', textAlign: 'center' }}>It has been {daysSinceClosing} days since the FDIC closed a bank.</h1>
      <BankTable banks={banks} currentPage={currentPage} banksPerPage={banksPerPage} />
      <Pagination banksPerPage={banksPerPage} totalBanks={banks.length} paginate={paginate} />
      <text><a href="https://www.fdic.gov/bank/historical/bank/bfb-data.csv">Data</a> provided by the <a href="https://www.fdic.gov">FDIC</a>.</text>
    </div>
  );
}