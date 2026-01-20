import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {getUser} from '../RequestOptions/user-requests'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    let navigate = useNavigate();
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      // do get request here
      try {
          const data = new FormData(event.currentTarget);
          console.log({
            username: data.get('username'),
            password: data.get('password'),
          });

          if (data.get('username') == '') setUserErr(true);
          if (data.get('password') == '') setPassErr(true);

        const result = await getUser({username: data.get('username'), password: data.get('password')});
        console.log("result: " , result);
        if (result[0]){
          const account_id = result[0].get[0].account_id;
          localStorage.setItem("account_id", account_id);
          navigate("/home");
          
        } else {
          setUserErr(true);
          setPassErr(true);
        }
        //navigate 
      } catch (e) {
        console.log("error", e);
      }
    }
   
      
      return (
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
    
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                >
              
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    inputProps={{
                      "data-testid": "username",
                    }}
                    autoFocus
                    error={userErr}
                    
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    inputProps={{
                      "data-testid": "password",
                    }}
                    autoComplete="current-password"
                    error={passErr}
                    
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
              
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                 
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
    
      );
};


export default LoginPage;