import React from 'react'
import Typography from '@mui/material/Typography';

import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import {  rows } from './Data';
import { Box, useTheme } from '@mui/material';

function Temtext() {
  const theme =useTheme()


  const columns  = [
    { field: 'id', headerName: 'id', width:33,align:"center" ,headerAlign:"center"  },
    { field: 'name', headerName: 'name', align:"center" ,headerAlign:"center"  },
    { field: 'email', headerName: 'email', flex:1,align:"center" ,headerAlign:"center" },
    { field: 'age', headerName: 'age',  align:"center" ,headerAlign:"center" },
    { field: 'phone', headerName: 'phone', flex:1, align:"center" ,headerAlign:"center" },
    { field: 'access', headerName: 'access', flex:1 ,align:"center" ,headerAlign:"center",
    renderCell:({row:{access} })=>{
        return(
          
          <Box sx={{background:access ==="Admin" ?theme.palette.primary.dark:                   access === "Manager"
          ? theme.palette.secondary.dark
          : "#3da58a" ,

          
          
          
          width:"99px",p:"4px",textAlign:"center",borderRadius:"4px",display:"flex",justifyContent:"space-evenly", color:"white"}}>
            
            {access ==="Admin" ?<AdminPanelSettingsOutlined fontSize='small'/> :access ==="Manager"?<SecurityOutlined  fontSize='small'/> :
             < LockOpenOutlined  fontSize='small'/>}
            
            {/* <AdminPanelSettingsOutlined fontSize='small'/> */}
            
            <Typography  fontSize="14px"   color="inherit">

            {access} 
            </Typography>
           </Box> 
        )
    } },
   
    
  
  ];



















  return (
    <>
    <Typography sx={{color:"rgb(3, 169, 244)",fontSize:"1.5rem",fontWeight:"700"}} >TEAM</Typography>
    <Typography sx={{fontWeight:"500",mb:"40px"}} >Managing the Team Members</Typography>
     <div sx={{ height: 600, width: '100%',mx:"auto" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>  
    </>
  )
}

export default Temtext