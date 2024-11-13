const sqlite3 = require('sqlite3').verbose();

// In-memory SQLite database
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the in-memory SQLite database.");

    // Create the users table (storing sender's details including account info)
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_account TEXT,
        sender_login TEXT,
        password_hash TEXT,
        birthday TEXT
      )
    `, (createErr) => {
      if (createErr) {
        console.error("Error creating users table:", createErr.message);
      } else {
        console.log("Users table created successfully.");

        // Insert sample users with "hashed" passwords
        const sampleUsers = [
          { sender_account: '12345', sender_login: 'user1', password_hash: 'JMPWFTD4013', birthday: '1990-01-01' },
          { sender_account: '67890', sender_login: 'user2', password_hash: 'TD4013SPDLT', birthday: '1985-12-12' },
          { sender_account: '11111', sender_login: 'admin', password_hash: 'WJDUPSCFTUMFDUVSFS', birthday: '1980-03-15' }
        ];

        const insertUser = db.prepare('INSERT INTO users (sender_account, sender_login, password_hash, birthday) VALUES (?, ?, ?, ?)');
        sampleUsers.forEach((user) => {
          insertUser.run(user.sender_account, user.sender_login, user.password_hash, user.birthday);
        });
        insertUser.finalize();
      }
    });

    // Create the transactions table with separate date and time columns
    db.run(`
      CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        receiving_account TEXT,
        sender_account TEXT,
        amount REAL,
        transaction_date TEXT,
        transaction_time TEXT
      )
    `, (createErr) => {
      if (createErr) {
        console.error("Error creating transactions table:", createErr.message);
      } else {
        console.log("Transactions table created successfully.");

        // Insert sample transaction data with separate date and time
        const sampleTransactions = [
          { receiving_account: '67890', sender_account: '12345', amount: 500.0, transaction_date: '2023-01-01', transaction_time: '10:00:00' },
          { receiving_account: '12345', sender_account: '67890', amount: 200.0, transaction_date: '2023-01-02', transaction_time: '14:30:00' },
          { receiving_account: '11111', sender_account: '12345', amount: 1000.0, transaction_date: '2023-01-03', transaction_time: '09:15:00' }
        ];

        const insertTransaction = db.prepare('INSERT INTO transactions (receiving_account, sender_account, amount, transaction_date, transaction_time) VALUES (?, ?, ?, ?, ?)');
        sampleTransactions.forEach((txn) => {
          insertTransaction.run(txn.receiving_account, txn.sender_account, txn.amount, txn.transaction_date, txn.transaction_time);
        });
        insertTransaction.finalize();
      }
    });
  }
});

module.exports = db;
