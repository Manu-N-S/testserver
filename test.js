const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Route to display server name
app.get('/serverName', (req, res) => {
  const serverName = 'Your Server Name'; // Replace 'Your Server Name' with the actual server name
  res.send(`Server Name: ${serverName}`);
});

// Handle POST requests from the ESP8266
app.post('/updateData', (req, res) => {
  const { status, name } = req.body;
  
  // Do something with the received data
  console.log(`Received status ${status} from ${name}`);

  // Send a response back to the ESP8266
  res.status(200).json({ message: 'Data received successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
