const express = require('express');
const app = express();

//create a user
var user = {
    email: 'user@domain.com',
    type: 1
};

// Endpoint to join Zoom meeting
app.post('/join-meeting', (req, res) => {
  // Retrieve the meeting link from the request body
  const { meetingLink } = req.body;

  // Logic to join the Zoom meeting using the provided link
  // ...

  // Return a response indicating successful joining of the meeting
  res.json({ message: 'Joined the Zoom meeting successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
