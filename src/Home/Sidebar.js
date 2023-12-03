
import React from 'react'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import TimelineIcon from '@mui/icons-material/Timeline';
import ListItemButton from '@mui/material/ListItemButton';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import   {useNavigate} from  "react-router-dom"        

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import List from '@mui/material/List';
import {Avatar, Typography, styled} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });



  const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon/>, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlineOutlinedIcon/>, path: "/team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlinedIcon/>,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/invoices",
    },
  ];
  
  const Array2 = [
    { text: "Profile Form", icon: <PersonOutlineOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlinedIcon />,
      path: "/faq",
    },
  ];
  
  const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
  ];
  




function Sidebar({open,handleDrawerClose}) {
    const theme = useTheme();
    const navigate = useNavigate()
  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </DrawerHeader>
<Divider/>

        <Avatar sx={{mx:"auto",height:open? 88:46 ,border:"2px solid grey",width:open? 88:46,mt:"20px",mb:"13px",transition:"0.26s"}} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM92Xf9Lil7Jy2pNxu6RdAEVHOdyaFeHbnfueHDPDVwy7rRDnnR6ZFAYBEvAmvBJ8-t-k&usqp=CAU"  />
        <Typography align='center' sx={{fontSize:open? 18 :0, transition:"0.26s"}}   color="inherit" >Yahya</Typography>
        <Typography align='center' sx={{fontSize:open? 15 :0, transition:"0.26s"}}  color={theme.palette.info.main} >Admin</Typography>

        <Divider />

       <List>
          {Array1.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=>{
                  navigate(text.path)
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} sx={{ opacity: open ? 1 : 0 ,textTransform:"capitalize" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array2.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=>{
                  navigate(text.path)
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Array3.map((text) => (
            <ListItem key={text.path} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={()=>{
                  navigate(text.path)
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Sidebar