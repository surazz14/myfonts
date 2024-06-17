"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import Link from "next/link";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { clsColorMap, fcpColorMap, lcpColorMap } from "./dashboard-detail";
import { Box } from "@mui/material";

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Box sx={{ fontWeight: 600 }}>Branch Name</Box>
              </TableCell>
              <TableCell>
              <Box sx={{ fontWeight: 600 }}>Pull Request Url</Box>
              </TableCell>
            <TableCell align="right">
              <Box sx={{ fontWeight: 600 }}>LCP</Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ fontWeight: 600 }}>CLS</Box>
            </TableCell>
            <TableCell align="right">
              <Box sx={{ fontWeight: 600 }}>FCP</Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            console.log("this is row", row);
            return (
              <TableRow
                key={row.url}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ fontWeight: 500 }}>
                    <Link href={`/detail/${row._id}`}>
                      {row?.pull_request?.title || "test"}
                    </Link>
                  </Box>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Box sx={{ fontWeight: 500 }}>
                    <a href={row?.pull_request?.url} target="_blank">
                      {row?.pull_request?.url}
                    </a>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ color: lcpColorMap(row.lcp.displayValue) }}>
                    {row.lcp.displayValue}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ color: clsColorMap(row.cls.displayValue) }}>
                    {row.cls.displayValue}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ color: fcpColorMap(row.fcp.displayValue) }}>
                    {row.fcp.displayValue}
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
