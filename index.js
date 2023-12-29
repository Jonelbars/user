const express = require('express');
const cors = require('cors');

const app = express();


// Enable CORS for all routes
app.use(cors());

// Your API route handling
app.get('/api/User', (req, res) => {
  // Your API logic here
  res.json({ message: 'Hello from the API!' });
});

// Enable CORS for the Swagger endpoint
app.get('/swagger/v1/swagger.json', cors(), (req, res) => {
  // Your Swagger JSON logic here
  // Replace the following line with your actual logic to serve the Swagger JSON
  res.json({ swagger: 'json' });
});

const PORT = 7237;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
