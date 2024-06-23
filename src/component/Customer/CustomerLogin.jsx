import React, { useState } from 'react';
import axios from 'axios';
import { Grid,Container, Box , Typography, TextField,Button,Link, Paper} from '@mui/material';

function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/customers/login', { email, password })
      .then(response => {
        alert('Login successful');
        window.location.href = '/order';
      })
      .catch(error => {
        alert('Login failed');
        console.error(error);
      });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', width: '100%' , height: 'fit-content'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h2" variant='h5'  >
          Login
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/customer/register" variant='string'  sx={{
                '&:hover': {
                  color: 'lightgray',
                },
                padding: '5px',
                borderRadius: '4px',
              }}>
              {'Sign Up'}
            </Link>
          </Box>
        </Box>
      </Box>
      </Paper>
    </Container>
  );
}

export default CustomerLogin;

