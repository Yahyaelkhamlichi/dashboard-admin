import React from 'react'
import Stack from '@mui/material/Stack';
import { Box, Paper, Typography, useTheme, IconButton } from '@mui/material';
import Linechart from '../Textof/Linechart';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Transactions } from './DATA';
function Row2() {
  const theme = useTheme()
  return (
  <Stack direction="rox" gap={2} mt={2} height="200px" flexWrap='wrap'>



<Paper sx={{ maxWidth:900,flexGrow:1}}>


<Stack direction="row" justifyContent="space-between" alignItems="center">
<Stack direction="column" pt={1.3} pl={3.2}>
<Typography variant="h6" fontWeight="bold"  color={theme.palette.secondary.main}>Revenue Generated</Typography>
<Typography variant="h6" color={theme.palette.text}sx={{fontSize:"14px"}}>$59,342.32

</Typography>
</Stack>


<IconButton  sx={{mr:3}}>
  <DownloadOutlinedIcon />
</IconButton>

</Stack>


<Linechart ch={true}/>

</Paper>
<Box  sx={{minWidth:"250px",maxHeight:350,overflowY:"scroll",overflowX:"hidden"}} flexGrow={1}>

<Typography variant="body1" p={1.2} fontWeight="bold" color={theme.palette.secondary.main}>Recent Transactions</Typography>
 
{Transactions.map((e)=>(

<Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
               
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{e.txId}</Typography>
                <Typography variant="body2">{e.user} </Typography>
              </Box>
              <Typography variant="body1">{e.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                
                {e.cost}
              </Typography>
            </Paper>

))}



</Box>
  </Stack>
  )
}

export default Row2