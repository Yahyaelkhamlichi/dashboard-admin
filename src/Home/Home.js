import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


import Row1 from "../Rowsdashbord/Row1"
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import Button from '@mui/material/Button'
import Row2 from '../Rowsdashbord/Row2';
import Row3 from '../Rowsdashbord/Row3';






const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function MiniDrawer({setMode}) {
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
     
      
      <Navbar open={open} x={setMode} handleDrawerOpen={handleDrawerOpen}/>
      
      
      <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{color:"rgb(3, 169, 244) ",textTransform:"uppercase",fontSize:"1.5rem",fontWeight:"700",letterSpacing:0}} >DASHBOARD</Typography>
    
    <Typography sx={{fontWeight:"500", mb:0}} >Welcome to your dashboard

</Typography>
     <Box sx={{textAlign:"right",mb:"13px"}}>
       <Button sx={{textTransform:"capitalize"}} variant="contained"    color="primary">
      <GetAppOutlinedIcon/>
       Dowloand Reports
        </Button>
        </Box>
{/* <br/> */}
       <Row1/>
       <Row2/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       {/* <br/>
       <br/> */}
     
      
       <Row3/>
      </Box>
    </Box>
  );
}

