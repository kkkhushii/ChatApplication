import React from 'react'
import {Typography,Paper,Grid,Avatar} from '@mui/material';
const messages = [
  { id: 1, sender: 'Alice', receiver: 'John', text: 'Hi John!', time: '10:00 AM' },
  { id: 2, sender: 'Alice', receiver: 'John', text: 'How are you?', time: '10:05 AM' },
  { id: 3, sender: 'John', receiver: 'Alice', text: 'Hey Alice! I\'m good, thanks.', time: '10:10 AM' },
  { id: 4, sender: 'John', receiver: 'Alice', text: 'What about you?', time: '10:15 AM' },
  { id: 5, sender: 'Alice', receiver: 'John', text: 'I\'m doing well too.', time: '10:20 AM' },
];

function AdminChatsShows() {
  return (

    <div style={{ maxWidth: '400px'}}>
    {messages.map(message => (
      <div key={message.id} style={{ marginBottom: '10px' }}>
        <Grid container spacing={2} justifyContent={message.sender === 'Alice' ? 'flex-start' : 'flex-end'}>
          {message.sender === 'Alice' && (
            <Grid item>
              <Avatar alt="Admin Avatar" src="/admin_avatar.jpg"/>
            </Grid>
          )}
          <Grid item xs={8}>
            <Paper elevation={3} style={{ padding: '10px', wordWrap: 'break-word' }}>
              <Typography variant="caption" color="textSecondary">{message.time}</Typography>
              <Typography variant="body1">{message.text}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    ))}
  </div> 
  )
}

export default AdminChatsShows;