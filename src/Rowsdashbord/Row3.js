import { Box, Paper,  Typography, useTheme } from '@mui/material'
import React from 'react'


import Pierow3 from './Pierow3'
import  Barrow3 from './Barrow3'
import Georow3 from './Georow3'

function Row3() {
  const theme = useTheme()
  return (
    <Box sx={{display:"flex",gap:1.4,mt:"30px",flexWrap:'wrap'}}>
<Paper sx={{
  width:"28%" ,height:"400px",flexGrow: 1,minWidth: "400px"}}>

<Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>

<Pierow3 />
<Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
</Paper>



<Paper sx={{
  width:"33%",flexGrow: 1,minWidth: "400px",height:"400px"}}>
   <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>



<Barrow3/>
</Paper>



<Paper sx={{
  width:"33%",flexGrow: 1,minWidth: "400px",height:"400px" }}>
<Georow3/>
</Paper>
    </Box>
  )
}

export default Row3