import React from 'react'
import {Grid,IconButton,TextField,InputAdornment,} from '@mui/material'
import {PhotoIcon,EmojiEmotionsIcon} from '@mui/icons-material'
import { FaMicrophone } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";

function InputMeassageDiv() {
  return (
	<Grid container alignItems="center" spacing={1} sx={{ padding: '10px', borderTop: '1px solid #ccc' }}>
	{/* Left side controls */}
	<Grid item xs={6} container alignItems="center">
	  <Grid item>
		<IconButton>
		  <EmojiEmotionsIcon />
		</IconButton>
	  </Grid>
	  <Grid item>
		<TextField
		  placeholder="Type a message..."
		  variant="outlined"
		  size="small"
		  fullWidth
		/>
	  </Grid>
	</Grid>

	{/* Right side controls */}
	<Grid item xs={6} container justifyContent="flex-end">
	  <Grid item>
		<IconButton>
		  <PhotoIcon />
		</IconButton>
	  </Grid>
	  <Grid item>
		<IconButton>
		  <IoIosAttach /> 
		</IconButton>
	  </Grid>
	  <Grid item>
		<IconButton>
		  <FaMicrophone /> 
		</IconButton>
	  </Grid>
	</Grid>
  </Grid>
  )
}
export default InputMeassageDiv