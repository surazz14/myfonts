"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Chart from "../../Components/chart";
import Table from "../../Components/table";
import Text from "../../Components/text";
import Select from "../../Components/select";
import { data } from "../../Components/data";

export default function Dashboard() {
  const [currentCWV, setCurrentCWV] = React.useState("lcp");
  const [cwvData, setCwvData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/peformance/");
      setCwvData(response.data);
    };
    fetchData();
  }, [currentCWV]);
  console.log("this is value", cwvData);

  const getValue = (cwv: any) => {
    const lcpData = cwvData?.map((entry) => entry[cwv]);
    console.log("this is lcpData", lcpData);
    return lcpData;
  };
  return (
    <Box sx={{ marginRight: 20, marginLeft: 20 }}>
      <Text>CWV Dashboard</Text>
      <br />
      <br />
      <Select currentCWV={currentCWV} setCurrentCWV={setCurrentCWV} />
      <br />
      <Chart currentCWV={currentCWV} value={getValue(currentCWV)} />
      <br />
      <br />
      <Table data={cwvData} />
    </Box>
  );
}
