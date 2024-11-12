const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Import routes
const feedbackRoute = require('./routes/feedbackRoute'); // Import the route
app.use('/feedback', feedbackRoute); // Use the route at '/feedback'

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
