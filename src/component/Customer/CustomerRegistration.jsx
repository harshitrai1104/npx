import React, { useState } from 'react';
import { TextField, Button, Link, Container, Typography, Box, Grid, Paper } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';

function CustomerRegistration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!captchaValue) {
      setError('Please complete the CAPTCHA');
      return;
    }
    setError('');
    alert('Form submitted successfully!');
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setError('');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('/api/customers/register', formData)
  //     .then(response => {
  //       alert('Registration successful');
  //       window.location.href = '/customer/login';
  //     })
  //     .catch(error => {
  //       alert('Registration failed');
  //       console.error(error);
  //     });
  // };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5" sx={{backgroundColor: 'white'}}>
          Register
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                size='small'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                fullWidth
                size='small'
              >
                Upload Photograph
                <input
                  type="file"
                  hidden
                  onChange={handleChange}
                />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required  
                fullWidth
                id="email"
                label="E-Mail Id"
                name="email"
                autoComplete="email"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="mobile"
                label="Mobile No."
                name="mobile"
                autoComplete="tel"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
            <Box my={2}>
            <ReCAPTCHA
              sitekey={SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </Box>
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onsubmit}
          >
            Register
          </Button>
        </Box>
      </Box>
      </Paper>
    </Container>
  );
};



export default CustomerRegistration;