import React from 'react'
import Typography from '@mui/material/Typography';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {  rows,columns } from './Contactdata';


function Contacttext() {
  


 



















  return (
    <>
    <Typography sx={{color:"rgb(3, 169, 244)",textTransform:"uppercase",fontSize:"1.5rem",fontWeight:"800"}} >contact</Typography>
    
    <Typography sx={{fontWeight:"500",mb:"40px"}} >List of Contacts for Future Reference</Typography>
    
     <div sx={{ height: 600, width: '98%',mx:"auto" }}>
      <DataGrid 
      
       slots={{
        toolbar: GridToolbar,
      }}
      
      rows={rows} columns={columns} />
    </div>  
    </>
  )
}

export default Contacttext