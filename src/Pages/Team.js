import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';



import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../Home/Navbar';
import Sidebar from '../Home/Sidebar';
import Temtext from '../Textof/Temtext';







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
        
 <Temtext/>
      </Box>
    </Box>
  );
}

