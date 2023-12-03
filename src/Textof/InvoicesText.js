import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {  rows,columns } from './Invoicesdata';
import { Typography } from '@mui/material';

function InvoicesText() {
  return (
    <>
    <Typography sx={{color:"rgb(3, 169, 244)",textTransform:"uppercase",fontSize:"1.5rem",fontWeight:"800"}} >invoices</Typography>
    
    <Typography sx={{fontWeight:"500",mb:"20px"}} >List of Invoice Balances</Typography>
    <div sx={{ height: 650, width: '98%',mx:"auto" }}>
    <DataGrid 
     
     checkboxSelection
    rows={rows} columns={columns} />
  </div>
    </>
    
  )
}

export default InvoicesText