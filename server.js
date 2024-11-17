const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const learnerRoutes = require('./routes/learnerRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use('/api/learners', learnerRoutes);
app.use('/api/tutors', tutorRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
