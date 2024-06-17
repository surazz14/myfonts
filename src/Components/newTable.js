"use client";

import * as React from 'react';
import Table from '@mui/material/Table';
import Link from 'next/link';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({details}) {

    
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            {details?.headings?.map((item) => {
              return <TableCell>{item.key}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>

          {details?.items?.map((row) => {
            console.log("this is row",row)
            return(
            <TableRow
              key={row.url}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{row.url}</TableCell>
              <TableCell >{row.totalBytes}</TableCell>
              <TableCell >{row.wastedBytes}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}