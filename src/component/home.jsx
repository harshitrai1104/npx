import React from 'react'
import './styles.css'
import Button from '@mui/material/Button';
import {useHistory, useNavigate} from 'react-router-dom'


export default function Home() {
  const history = useNavigate();
    
  return (
    <div id="container">
        <Button variant="contained" color="primary" onClick={()=>{ history("/customer/login")}}>
          Customer Dashboard
        </Button>
        <Button variant="contained" color="primary" onClick={()=>{ history("/admin/login")}}>
          Admin Dashboard
        </Button>
    </div>
  )
}
