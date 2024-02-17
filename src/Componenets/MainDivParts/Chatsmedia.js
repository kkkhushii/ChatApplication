import React from 'react';
import {Typography,Paper,Grid} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import {ExpandMoreIcon,PictureAsPdfIcon,JavascriptIcon} from '@mui/icons-material'
import { FaFigma } from "react-icons/fa";
import { SiGooglechrome } from "react-icons/si";
import mediafile from '../../Data/Media.json'

function Chatsmedia() {
 
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
    {/* Media */}
    <Paper elevation={3} style={{ padding: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h6" component="div">Media({mediafile.media.length})</Typography>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
    </Paper>
    {/* Photo Grid */}
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      {mediafile.media.map(item => (
        <Grid item xs={6} key={item.id}>
          <img src={item.url} alt={`Media ${item.id}`} style={{ width: '100%', height: 'auto' }} />
         </Grid>
     ))}

    </Grid>
    {/* Files */}
    <Paper elevation={3} style={{ padding: '10px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
       <Typography variant="h6" component="div">Files ({mediafile.files.length})</Typography>
         <IconButton>
            <ExpandMoreIcon />
         </IconButton>
    </Paper>
    {/* File entry */}
    {mediafile.files.map(file => (
      <Paper elevation={3} key={file.name} style={{ padding: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          {file.type === 'js' && (<JavascriptIcon />)}
          {file.type === 'pdf' && <PictureAsPdfIcon />}
          {file.type === 'figma' && <FaFigma />}
          {file.type === 'crome' &&<SiGooglechrome />}
          <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>{file.name}</Typography>
          <Typography variant="caption" color="textSecondary">{file.size} - {file.date}</Typography>
        </div>
      </Paper>
    ))}
  </div>
  )
}

export default Chatsmedia