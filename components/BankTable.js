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
            <TableCell style={{ width: '40%' }}>Bank</TableCell>
            <TableCell style={{ width: '40%' }}>Closing</TableCell>
            <TableCell style={{ width: '60%' }}>Acquiring Institution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentBanks.map((bank) => (
            <TableRow key={bank['CERT']}>
              <TableCell>{bank['Bank Name�']} {bank['City�']}, {bank['State�']}</TableCell>
              <TableCell>{bank['Closing Date�']}</TableCell>
              <TableCell>{bank['Acquiring Institution�'].replace('�', ' ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BankTable;