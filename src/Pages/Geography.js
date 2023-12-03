import * as React from 'react';
import { styled, } from '@mui/material/styles';
import Box from '@mui/material/Box';



import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';



import Navbar from '../Home/Navbar';
import Sidebar from '../Home/Sidebar';
import Geochart from '../Textof/Geochart';







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
        <Typography sx={{color:"rgb(3, 169, 244)",textTransform:"capitalize",fontSize:"1.5rem",fontWeight:"700",letterSpacing:"0.3px"}} >


Geography</Typography>
    
    <Typography sx={{fontWeight:"500",mb:"20px"}} >Simple Geography Chart</Typography>
        <Geochart/>
      </Box>
    </Box>
  );
}

