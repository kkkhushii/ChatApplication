import React from 'react'
import {MoreVertIcon,SearchIcon,IconButton,ExpandMoreIcon} from '@mui/material';
import data from '../../Data/Data.json';
import {Avatar,Typography,TextField,InputAdornment} from '@mui/material';
import '../../App.css'

function AdminView() {
  return (
	<div className="container">
	{/* First Sub-container */}
	<div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      {/* Admin Avatar */}
      <Avatar  alt="John Avatar" src="/admin_avatar.jpg" />
      {/* Admin Info */}
      <div style={{ marginLeft: '10px' }}>
        <Typography variant="h6" style={{fontSize:"15px"}}>John</Typography>
        <Typography variant="body1" style={{color:"#7C8FAC",fontSize:"11px"}}>Marketing Manager</Typography>
      </div>

      {/* More Options Icon */}
      <IconButton style={{ marginLeft: 'auto' }}>
        <MoreVertIcon />
      </IconButton>
    </div>
	 {/* Second Sub-container */}
	 <div className="sub-container">
        <TextField fullWidth variant="outlined"  placeholder="Search Contacts"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">  <IconButton> <SearchIcon /></IconButton> </InputAdornment>
        ),
      }}
    />
   </div>

      {/* Third Sub-container */}
      <div className="sub-container">
        <Typography variant="h6" style={{fontSize:"18px"}}>Recent Chats
		    <ExpandMoreIcon style={{fontSize:"19px"}} />
		   </Typography>
        {data.recentChats.map(chat => (
          <div key={chat.id} className="chat-item" style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt={chat.name} src={chat.avatar} />
            <div className="chat-info" >
              <Typography variant="subtitle1">{chat.name}</Typography>
		        	<Typography variant="body2">{chat.lastMessage}</Typography>
			      </div>
            <div className="chat-actions">
			          <Typography variant="body2">{chat.lastMessageTime}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AdminView;