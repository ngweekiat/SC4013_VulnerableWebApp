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
const chatbotRoutes = require('./routes/chatbot'); // Correct path to chatbot.js
const fileUploadRoutes = require('./routes/file-upload');

// Mount routes
app.use('/api', loginRoutes);
app.use('/api', transactionRoutes);
app.use('/api', chatbotRoutes); // Mount chatbot routes here
app.use('/api', fileUploadRoutes);


app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
