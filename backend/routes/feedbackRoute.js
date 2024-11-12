// routes/feedbackRoute.js

const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback'); // Import the Feedback model

// POST request to save feedback
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new Feedback entry
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    
    // Send a success response
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Error saving feedback' });
  }
});

module.exports = router;
