// backend/routes/transactions.js
const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/transactions', (req, res) => {
  const accountNumber = req.query.account_number;

  // Secure SQL query using parameterized statements
  let query = `SELECT * FROM transactions`;
  const params = [];

  // If account_number is provided, add a WHERE clause
  if (accountNumber) {
    query += ` WHERE receiving_account = ?`;
    params.push(accountNumber);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Database error" });
    }

    // Send back the rows
    res.json({ transactions: rows });
  });
});

module.exports = router;
