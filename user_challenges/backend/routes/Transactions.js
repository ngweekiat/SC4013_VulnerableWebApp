const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/transactions', (req, res) => {
  const accountNumber = req.query.account_number;

  // Construct a potentially vulnerable SQL query
  let query = `SELECT sender_account, receiving_account, transaction_date, transaction_time, amount FROM transactions`;

  // Directly concatenate accountNumber into the query without sanitization
  if (accountNumber) {
    query += ` WHERE receiving_account = '${accountNumber}' OR sender_account = '${accountNumber}'`;
  }

  // Intentionally leave error handling open to expose database errors
  db.all(query, (err, rows) => {
    if (err) {
      // Directly send the error message as a response to give hints for CTF participants
      console.error("Database error:", err.message);
      return res.status(500).json({ error: err.message });
    }

    res.json({ transactions: rows });
  });
});

module.exports = router;
