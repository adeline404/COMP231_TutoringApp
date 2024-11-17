const express = require('express');
const Tutor = require('../models/Tutor');
const router = express.Router();

// Register a new tutor
router.post('/register', async (req, res) => {
    const { name, email, password, expertise } = req.body;
    try {
        const tutor = new Tutor({ name, email, password, expertise });
        await tutor.save();
        res.status(201).json({ message: 'Tutor registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the tutor with matching email and password
      const tutor = await Tutor.findOne({ email, password });
      if (!tutor) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      res.json({ id: tutor._id, name: tutor.name, email: tutor.email });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Get all tutors
router.get('/', async (req, res) => {
    try {
        const tutors = await Tutor.find();
        res.json(tutors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
