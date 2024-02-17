import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

function Header() {
  return (
	<AppBar position="static" sx={{ backgroundColor: '#ECF2FF', color: 'black' }}>
	<Toolbar>
	  <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
		Chat Application
		<div style={{fontSize:"13px",color:" #7C8FAC"}}>Dashboard <FiberManualRecordIcon  style={{fontSize:"6px"}} /> Chats</div>
	  </Typography>
	  
	  <IconButton edge="end" color="inherit" aria-label="logo">
		<img src='https://modernize-react.adminmart.com/assets/ChatBc-d3c45db6.png' style={{width:"80px", height:"80px"}}/>
	  </IconButton>
	</Toolbar>
  </AppBar>
 
  )
}

export default Header;