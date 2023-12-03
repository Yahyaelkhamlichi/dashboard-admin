import { Box, MenuItem, TextField, Typography, Button, Snackbar } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"

import MuiAlert from '@mui/material/Alert';




const currencies = [
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manger',
    label: 'Manger',
  },

];



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Formtext() {


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const n = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {handleClick()
  console.log(data)
  }
  const regEmail=
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  return (
    <>
     <Typography sx={{color:"rgb(3, 169, 244)",textTransform:"uppercase",fontSize:"1.5rem",fontWeight:"600",letterSpacing:"0"}} >CREATE USER</Typography>
    
    <Typography sx={{fontWeight:"500",mb:"20px"}} >Create a New User Profile</Typography>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '100%' },
        display:"flex",flexDirection:"column",gap:"20px",mt:"30px"
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      
    >
     <Box sx={{
    display:"flex",flexDirection:"row"
     }}> <TextField id="filled-basic" label="First Name" variant="filled"  sx={{width:"50%"}}
     error={errors.firstName}
     helperText={errors.firstName?" This field is required & min 3 character":""}
     {...register("firstName", { required: true, minLength: 3 })}
     />



      <TextField id="filled-basic" label="Last Name" variant="filled" sx={{width:"50%", ml:"13px"}}
      error={errors.LastName}
     helperText={errors.LastName?" This field is required & min 3 character":""}
     {...register("LastName", { required: true, minLength: 3})} 
      
      
      /></Box>
     
      <TextField id="filled-basic" label="Email" variant="filled"
      
      error={errors.Email}
      helperText={errors.Email?"Please provide a valid email address":""}
      {...register("Email", { required: true, minLength: 3
      ,pattern:regEmail
      
      })}
      
      
      
      />
      <TextField id="filled-basic" label="Contact Number" variant="filled" 
      
      
      
      error={errors.ContactNumber}
      helperText={errors.ContactNumber?"Please provide a valid Phone number":""}
      {...register("ContactNumber", { required: true, minLength: 6
      ,pattern:n
      
      })}
      
      
      
      />
      <TextField id="filled-basic" label="Aderss 1" variant="filled" 
      />
      <TextField id="filled-basic" label="Aderss 2" variant="filled" />
      
      <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Admin"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

<Box sx={{textAlign:"right"}}> 
  <Button  type='submit'  sx={{textTransform:"capitalize"}}  variant="contained" >
    create new user
  </Button>
</Box>
<Snackbar    anchorOrigin={{ vertical:"top", horizontal:"right" }}  open={open} autoHideDuration={4000} onClose={handleClose}>
<Alert   severity="info"onClose={handleClose}>Account created successfully</Alert>
</Snackbar>

    </Box>
    </>
   
  )
}

export default Formtext