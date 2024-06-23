

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CustomerRegistration from './component/Customer/CustomerRegistration';
import CustomerLogin from './component/Customer/CustomerLogin';
import OrderForm from './component/Customer/OrderForm';
import OrderStatus from './component/Customer/OrderStatus';
import AdminRegistration from './component/Admin/AdminRegistration';
import AdminLogin from './component/Admin/AdminLogin';
import AdminDashboard from './component/Admin/AdminDashboard';

import Home from './component/home';



function App() {
  return (
   
    <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/customer/register" element={<CustomerRegistration/>} />
        <Route path="/customer/login" element={<CustomerLogin/>} />
        <Route path="/order" element={<OrderForm/>} />
        <Route path="/order-status" element={<OrderStatus/>} />
        <Route path="/admin/register" element={<AdminRegistration/>} />
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        
      
    </Routes>
  );
}

export default App;
