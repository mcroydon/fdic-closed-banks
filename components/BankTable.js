import React from 'react';

const BankTable = ({ banks, currentPage, banksPerPage }) => {
  const indexOfLastBank = currentPage * banksPerPage;
  const indexOfFirstBank = indexOfLastBank - banksPerPage;
  const currentBanks = banks.slice(indexOfFirstBank, indexOfLastBank);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '1px solid', padding: '8px' }}>Bank</th>
          <th style={{ borderBottom: '1px solid', padding: '8px' }}>Closing</th>
          <th style={{ borderBottom: '1px solid', padding: '8px' }}>Transaction</th>
        </tr>
      </thead>
      <tbody>
        {currentBanks.map((bank) => (
          <tr key={bank['CERT']} style={{ borderBottom: '1px solid' }}>
            <td style={{ padding: '8px' }}>{bank['Bank Name, City, State']}</td>
            <td style={{ padding: '8px' }}>{bank['Closing Date']}</td>
            <td style={{ padding: '8px' }}>{bank['Acquirer & Transaction']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BankTable;