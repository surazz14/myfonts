"use client"
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({currentCWV, setCurrentCWV}) {

  const handleChange = (event) => {
    setCurrentCWV(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, textAlign:"center" }}>
      <FormControl sx={{ m: 1, width: 300, textAlign:"left" }}>
        <InputLabel id="demo-simple-select-label">CWV</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentCWV}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'lcp'}>LCP</MenuItem>
          <MenuItem value={'cls'}>CLS</MenuItem>
          <MenuItem value={'fcp'}>FCP</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}