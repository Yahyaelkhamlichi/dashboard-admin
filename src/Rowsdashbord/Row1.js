import React from 'react'
import Stack from '@mui/material/Stack';
import {  useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Cardrow from './Cardrow';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { data1 } from './DATA';
import { data2 } from './DATA';
import { data3 } from './DATA';
import { data4 } from './DATA';
import TrafficIcon from '@mui/icons-material/Traffic';
function Row1() {
  const theme = useTheme()
  return (
   <>
  <Stack direction="row" flexWrap="wrap" gap={1} >

<Cardrow icons={<EmailIcon   sx={{fontSize:"23px",color:theme.palette.secondary.main}}  />} 
title="12,361" descrip="Emails Sent" textchart="+14%"  data={data1}  color="nivo"/>
<Cardrow icons={<PointOfSaleIcon  sx={{fontSize:"23px",color:theme.palette.secondary.main}}  />} title="431,225" descrip="Sales obtained" textchart="+21%"  data={data2} color="category10"/>
<Cardrow  icons={<PersonAddIcon  sx={{fontSize:"23px",color:theme.palette.secondary.main}}  />} title="32,441" descrip="New Clients" textchart="+5%"    data={data3} color="accent"/>
<Cardrow  icons={<TrafficIcon  sx={{fontSize:"23px",color:theme.palette.secondary.main}}  />} title="1,325,134" descrip="Traffic Received" textchart="+43%"  data={data4} color="paired"  />
  </Stack>

   
   </>
  )
}

export default Row1