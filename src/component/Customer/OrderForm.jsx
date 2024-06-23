import React, { useState } from 'react';
import { TextField, RadioGroup, FormControlLabel, Radio, MenuItem, Select, FormControl, InputLabel, Button, Grid, Typography, Checkbox, FormGroup, Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const OrderForm = () => {
  const [category, setCategory] = useState('');
  const [vegOption, setVegOption] = useState('');
  const [nonVegOption, setNonVegOption] = useState('');
  const [extraCheese, setExtraCheese] = useState(false);
  const [serving, setServing] = useState('');
  const [count, setCount] = useState(1);
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [userDetails, setUserDetails] = useState({
    address: '123 Main St',
    contactNo: '123-456-7890',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOrder = {
      id: orders.length + 1,
      category,
      item: category === 'Veg' ? vegOption : nonVegOption,
      extraCheese,
      serving,
      count,
      address: userDetails.address,
      contactNo: userDetails.contactNo,
      status: 'Pending',
    };
    setOrders([...orders, newOrder]);
    alert('Order placed successfully!');
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'item', headerName: 'Item', width: 200 },
    { field: 'extraCheese', headerName: 'Extra Cheese', width: 150 },
    { field: 'serving', headerName: 'Serving', width: 150 },
    { field: 'count', headerName: 'Count', width: 100 },
    { field: 'address', headerName: 'Address', width: 250 },
    { field: 'contactNo', headerName: 'Contact No', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
              Place Your Order
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormControl component="fieldset" fullWidth margin="normal">
                <Typography component="legend">Category</Typography>
                <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
                  <FormControlLabel value="Veg" control={<Radio />} label="Veg" />
                  <FormControlLabel value="Non Veg" control={<Radio />} label="Non Veg" />
                </RadioGroup>
              </FormControl>
              {category === 'Veg' && (
                <FormControl fullWidth margin="normal">
                  <InputLabel>Veg Options</InputLabel>
                  <Select value={vegOption} onChange={(e) => setVegOption(e.target.value)}>
                    <MenuItem value="Veggie Supreme">Veggie Supreme</MenuItem>
                    <MenuItem value="Exotica">Exotica</MenuItem>
                    <MenuItem value="Paneer Vegorama">Paneer Vegorama</MenuItem>
                  </Select>
                </FormControl>
              )}
              {category === 'Non Veg' && (
                <FormControl fullWidth margin="normal">
                  <InputLabel>Non Veg Options</InputLabel>
                  <Select value={nonVegOption} onChange={(e) => setNonVegOption(e.target.value)}>
                    <MenuItem value="Chicken Supreme">Chicken Supreme</MenuItem>
                    <MenuItem value="Triple Chicken Feast">Triple Chicken Feast</MenuItem>
                    <MenuItem value="Chicken Italiano">Chicken Italiano</MenuItem>
                  </Select>
                </FormControl>
              )}
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={extraCheese} onChange={(e) => setExtraCheese(e.target.checked)} />}
                  label="Extra Cheese needed"
                />
              </FormGroup>
              <FormControl fullWidth margin="normal">
                <InputLabel>Serving</InputLabel>
                <Select value={serving} onChange={(e) => setServing(e.target.value)}>
                  <MenuItem value="Regular">Regular</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Large">Large</MenuItem>
                </Select>
              </FormControl>
              <TextField
                type="number"
                label="Count"
                fullWidth
                margin="normal"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                required
              />
              <TextField
                label="Delivery Address"
                fullWidth
                margin="normal"
                value={userDetails.address}
                disabled
              />
              <TextField
                label="Contact No"
                fullWidth
                margin="normal"
                value={userDetails.contactNo}
                disabled
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Place Order
              </Button>
            </form>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} md={10}>
          <Paper elevation={3} sx={{ height: 400, width: '100%' }}>
            <DataGrid rows={orders} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default OrderForm;
