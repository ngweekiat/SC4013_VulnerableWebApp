// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const loginRoutes = require('./routes/login');
const transactionRoutes = require('./routes/transactions');

// Mount routes
app.use('/api', loginRoutes);
app.use('/api', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
