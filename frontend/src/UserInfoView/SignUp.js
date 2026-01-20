import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createUser } from '../RequestOptions/user-requests';

const theme = createTheme();
const SignUp = () => {
    let account_id = 1;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [account, setAccount] = useState({
      account_id,
      username,
      password
    });

    useEffect(() => {
      console.log("account: ", account)
    }, [account]);
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (username == '') setUserErr(true);
      if (password == '') setPassErr(true);
      if (username && password){
        try {
          
          let result = await createUser({"username": username, "password": password}); 
          console.log(result);
          
          if (result[0]){
            account_id = result[0].id;
            console.log("account_id: ", account_id);
            localStorage.setItem("account_id", account_id);
           
            setAccount({
              account_id: account_id,
              username: username,
              password: password
            });
          }
          
        } catch(e){
          console.log("error", e);
        }

      }

    };

      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
              }}
            />
            <Typography component="h1" variant="h5">
                  Sign Up
            </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <Grid container spacing ={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                            name ="username"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoFocus
                            inputProps={{
                              "data-testid": "username",
                            }}
                            value={username}
                            onChange={(event)=> setUsername(event.target.value)}
                            error={userErr}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        
                      </Grid>
                      <Grid item xs={12} >
                        <TextField
                            name ="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            inputProps={{
                              "data-testid": "password"
                            }}
                            value={password}
                            onChange={(event)=> setPassword(event.target.value)}
                            error= {passErr}
                        />
                      </Grid>    
                  </Grid>
   
                
                    <Button
                      // onClick={handleSubmit}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      
                    >
                      Sign Up
                    </Button>
                  
                  <Grid container>
                    <Grid item>
                      <Link href="/" variant="body2">
                        {"Already have an account?"}
                        <Link to ="/LogIn"> Login </Link>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
          </Container>
        </ThemeProvider>
      );
};

export default SignUp;
