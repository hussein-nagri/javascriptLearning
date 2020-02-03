const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/hackathons', require('./routes/api/hackathons'));





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
