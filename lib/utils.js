import axios from 'axios';
import Papa from 'papaparse';

export async function fetchData() {
  const url = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/banklist.csv';
  const response = await axios.get(url);
  const data = Papa.parse(response.data, { header: true, skipEmptyLines: true });
  return data.data;
}