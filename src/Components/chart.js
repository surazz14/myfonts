"use client"

import { LineChart } from '@mui/x-charts/LineChart';
import Tooltip from '@mui/material/Tooltip';

export default function SimpleLineChart({currentCWV,value}) {
  const uData = value.map((item) => parseFloat(item.displayValue))
  const xLabels = value.map((item,i) => {

    return i
  
  })

  console.log("these are data",{uData,xLabels})
  return (
    <LineChart
      width={1500}
      height={300}
      series={[
        { data: uData, label: currentCWV },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
