const express = require('express');
const Learner = require('../models/Learner');
const router = express.Router();

// Register a new learner
router.post('/register', async (req, res) => {
    const { name, email, password, subject } = req.body;
    try {
        const learner = new Learner({ name, email, password, subject });
        await learner.save();
        res.status(201).json({ message: 'Learner registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the learner with matching email and password
      const learner = await Learner.findOne({ email, password });
      if (!learner) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      res.json({ id: learner._id, name: learner.name, email: learner.email });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Get all learners
router.get('/', async (req, res) => {
    try {
        const learners = await Learner.find();
        res.json(learners);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
