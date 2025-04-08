const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const promptRoutes = require('./routes/prompt.routes');
app.use('/api/prompt', promptRoutes);

// Root
app.get('/', (req, res) => res.send('DailyTake API is live'));

module.exports = app;