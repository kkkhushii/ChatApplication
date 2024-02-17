import React from 'react'
import '../App.css'
import AdminView from './MainDivParts/AdminView';
import AdminChatsShows from './MainDivParts/AdminChatsShows'
import Chatsmedia from './MainDivParts/Chatsmedia'
import {AppBar} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputMeassageDiv from './MainDivParts/InputMeassageDiv';



function MainDiv() {
  return (
	<>
	<div className='mainDiv'>
    <div className='Adminclass'> <AdminView /> </div>
	  <div>
		<div style={{height:"50px" , display:"flex" , alignItems:"center"}}>
      <Avatar src='/admin_avatar.jpg' alt='Admin Avatar' />
      <div style={{ marginLeft: '10px' }}>
        <Typography variant="subtitle1">Alice</Typography>
        <Typography variant="body2" color="textSecondary">Away</Typography>
	  </div>
	  <div style={{ marginLeft: 'auto' }}>
        <IconButton aria-label="Call">
          <CallIcon />
        </IconButton>
        <IconButton aria-label="Video Call">
          <VideoCallIcon />
        </IconButton>
        <IconButton aria-label="More Options">
          <MoreVertIcon />
        </IconButton>
      </div>

	  </div>
	  <div  style={{display:"grid", gridTemplateColumns:"auto auto" }} >
	  <div><AdminChatsShows/></div>
	  <div> <Chatsmedia/></div>
	  </div>
    <div  style={{ width:"100%"}} className='lastDiv'>
        <InputMeassageDiv/>
       </div>
	   </div>
	
	


	  </div>

	</>
		

	
	
  )
}

export default MainDiv