import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const BankTable = ({ banks, currentPage, banksPerPage }) => {
  const indexOfLastBank = currentPage * banksPerPage;
  const indexOfFirstBank = indexOfLastBank - banksPerPage;
  const currentBanks = banks.slice(indexOfFirstBank, indexOfLastBank);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '20%' }}>Bank</TableCell>
            <TableCell style={{ width: '10%' }}>Closing</TableCell>
            <TableCell style={{ width: '70%' }}>Transaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentBanks.map((bank) => (
            <TableRow key={bank['CERT']}>
              <TableCell>{bank['Bank Name, City, State']}</TableCell>
              <TableCell>{bank['Closing Date']}</TableCell>
              <TableCell>{bank['Acquirer & Transaction']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BankTable;